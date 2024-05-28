import './UploadProject.css' 
import { useState,useEffect} from 'react'
import { storage,db } from '../../firebase/firebase'
import { collection,addDoc } from 'firebase/firestore'
import { ref,uploadBytes, getDownloadURL} from 'firebase/storage'
import { v4 as uuidv4  } from 'uuid'
import { Button3,InputAdmin,InputUpload} from '../../components/index'

export function UploadPage() {
  const [infoData, setInfoData] = useState({
    id: crypto.randomUUID(),
    title: '',
    behance: '',
    description: '',
    images: '',
    project: [],
    members: []
  });

  const [imageUpload, setImageUpload] = useState(null);

  // Post storage
  const uploadImage = async () => {
    if (!imageUpload) return;
    const imageRef = ref(storage, `images/${imageUpload.name + uuidv4()}`);
    await uploadBytes(imageRef, imageUpload);
    const imagesUpd = await getDownloadURL(imageRef);

    const storageSaveData = {
      ...infoData,
      images: imagesUpd
    };

    try {
      await addDoc(collection(db, 'projects'), storageSaveData); // Usa addDoc y collection
    } catch (error) {
      console.error('Error adding project: ', error);
    }
  };

  return (
    <>
      <section>
        <Button3 text='Back' img='' />

        <section className='container-upload'>
          <img className='banner-upload' src='../../src/assets/Logo1-zenvo.png' alt='Banner' />
          <h1 className='title-upload'>Upload new project</h1>

          <form className='form-upload'>
            <div className='divs-inputs-upload'>
              <label className='label1'>Title</label>
              <InputAdmin
                type='text'
                placeholder="Title"
                onChange={(e) => setInfoData({ ...infoData, title: e.target.value })}
              />
              <label>Project link</label>
              <InputAdmin
                type='text'
                placeholder="Url Behance"
                onChange={(e) => setInfoData({ ...infoData, behance: e.target.value })}
              />
              <label>Description</label>
              <InputAdmin
                type='text'
                placeholder="Description of the project"
                onChange={(e) => setInfoData({ ...infoData, description: e.target.value })}
              />
              <div className='custom-input-file'>
                <label>Image</label>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
              </div>
            </div>
          </form>

          <section className='sec-checklist'>
            <div>
              <h4 className='subtitle-upload'>Project members</h4>
              <ul className='list-check1'>
                <InputUpload
                  text='Katherine Reyes'
                  onChange={() => setInfoData({ ...infoData, members: [...infoData.members, 'Katherine Reyes'] })}
                />
                <InputUpload
                  text='Sebastián Gonzalez'
                  onChange={() => setInfoData({ ...infoData, members: [...infoData.members, 'Sebastián Gonzalez'] })}
                />
                <InputUpload
                  text='Juan David Avila'
                  onChange={() => setInfoData({ ...infoData, members: [...infoData.members, 'Juan David Avila'] })}
                />
                <InputUpload
                  text='Santiago Cuadros'
                  onChange={() => setInfoData({ ...infoData, members: [...infoData.members, 'Santiago Cuadros'] })}
                />
              </ul>
            </div>
            <h4 className='secsubtitle-upload'>Type of project</h4>
            <ul className='list-check2'>
              <InputUpload
                text='Ux design'
                onChange={() => setInfoData({ ...infoData, project: [...infoData.project, 'Ux design'] })}
              />
              <InputUpload
                text='Ui design'
                onChange={() => setInfoData({ ...infoData, project: [...infoData.project, 'Ui design'] })}
              />
              <InputUpload
                text='Frontend dev'
                onChange={() => setInfoData({ ...infoData, project: [...infoData.project, 'Frontend dev'] })}
              />
              <InputUpload
                text='Branding & marketing'
                onChange={() => setInfoData({ ...infoData, project: [...infoData.project, 'Branding & marketing'] })}
              />
              <InputUpload
                text='Consulting & advisory'
                onChange={() => setInfoData({ ...infoData, project: [...infoData.project, 'Consulting & advisory'] })}
              />
            </ul>
          </section>
          <div className='buttons-upload'>
            <button className='btn-upload' onClick={uploadImage}>Upload Project</button>
            <button className='btn-logout'>Sign out</button>
          </div>
        </section>
      </section>
    </>
  );
}