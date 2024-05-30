import './UploadProject.css' 
import { useState} from 'react'
import { storage,db } from '../../firebase/firebase'
import { collection,addDoc } from 'firebase/firestore'
import { ref,uploadBytes, getDownloadURL} from 'firebase/storage'
import { v4 as uuidv4  } from 'uuid'
import { Button3} from '../../components/index'
import { useNavigate} from 'react-router-dom'
import { AuthDetails } from '../../AuthDetails/AuthDetails'

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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (name, value) => {
    setInfoData(prevData => ({
      ...prevData,
      [name]: prevData[name].includes(value) ? prevData[name].filter(item => item !== value) : [...prevData[name], value]
    }));
  };

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
      await addDoc(collection(db, 'projects'), storageSaveData);
      console.log('Project added successfully');
      navigate("/PortfolioPage")
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
              <input className='input-proyects-upload'
                type='text'
                placeholder="Title"
                name="title"
                onChange={handleChange}
              />
              <label className='label1'>Project link</label>
              <input className='input-proyects-upload'
                type='text'
                placeholder="Url Behance"
                name="behance"
                onChange={handleChange}
              />
              <label className='label1'>Description</label>
              <input className='input-proyects-upload'
                type='text'
                placeholder="Description of the project"
                name="description"
                onChange={handleChange}
              />
              <div className='custom-input-file'>
              <label className="custom-file-label">Image</label>
              <input className='input-proyects-upload' type="file" onChange={(event) => { setImageUpload(event.target.files[0]); }} />
              </div>


              
            </div>
          </form>

          <section className='sec-checklist'>
            <div>
              <h4 className='subtitle-upload'>Project members</h4>
              <ul className='list-check1'>
                <li>
                  <label className='label-checkbox'>
                    <input type="checkbox" onChange={() => handleCheckboxChange('members', 'Katherine Reyes')} />
                    Katherine Reyes
                  </label>
                </li>
                <li>
                  <label className='label-checkbox'>
                    <input type="checkbox" onChange={() => handleCheckboxChange('members', 'Sebastián Gonzalez')} />
                    Sebastián Gonzalez
                  </label>
                </li>
                <li>
                  <label className='label-checkbox'>
                    <input type="checkbox" onChange={() => handleCheckboxChange('members', 'Juan David Avila')} />
                    Juan David Avila
                  </label>
                </li>
                <li>
                  <label className='label-checkbox'>
                    <input type="checkbox" onChange={() => handleCheckboxChange('members', 'Santiago Cuadros')} />
                    Santiago Cuadros
                  </label>
                </li>
              </ul>
            </div>
            <h4 className='secsubtitle-upload'>Type of project</h4>
            <ul className='list-check2'>
              <li>
                <label className='label-checkbox'>
                  <input type="checkbox" onChange={() => handleCheckboxChange('project', 'Ux design')} />
                  Ux design
                </label>
              </li>
              <li>
                <label className='label-checkbox'>
                  <input type="checkbox" onChange={() => handleCheckboxChange('project', 'Ui design')} />
                  Ui design
                </label>
              </li>
              <li>
                <label className='label-checkbox'>
                  <input type="checkbox" onChange={() => handleCheckboxChange('project', 'Frontend dev')} />
                  Frontend dev
                </label>
              </li>
              <li>
                <label className='label-checkbox'>
                  <input type="checkbox" onChange={() => handleCheckboxChange('project', 'Branding & marketing')} />
                  Branding & marketing
                </label>
              </li>
              <li>
                <label className='label-checkbox'>
                  <input type="checkbox" onChange={() => handleCheckboxChange('project', 'Consulting & advisory')} />
                  Consulting & advisory
                </label>
              </li>
            </ul>
          </section>
          <div className='buttons-upload'>
            <button className='btn-upload' onClick={uploadImage}>Upload Project</button>
          </div>
          <AuthDetails /> {/* Usa el componente AuthDetails */}
        </section>
        <img className="decoration-upload1" src="../../../src/assets/circle-line-service.png"/>
        <img className="decoration-upload2" src="../../../src/assets/circle-line-service2.png"/>
      </section>
    </>
  );
}