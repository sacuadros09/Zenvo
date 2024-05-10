import './UploadProject.css' 

import { Button3,InputAdmin,InputUpload,FooterMobile} from '../../components/index'


 export function UploadPage () {
   return (
    <>
      <section>
        <Button3 text='Back' img = '' />

        <section className='container-upload'>
            <img className='banner-upload' src="../../src/assets/Logo1-zenvo.png" />
            <h1 className='title-upload'> Upload new project </h1>
              <form className='form-upload'>
                <div className='first-input-upload'>
                <label className='label1'> Title </label>
                <InputAdmin type='text'/>
                <label> Project link </label>
                <InputAdmin type='text'/>
                </div>
                <div className='second-input-upload'>
                <label> Description </label>
                <InputAdmin  type='text'/>
                <label> Image </label>
                <InputAdmin type='img' img3='../../src/assets/icon-upload.png'/>
                </div>
              </form>
              <section className='sec-checklist'>
              <h4 className='subtitle-upload'> Project members </h4>
              <ul className='list-check1'>
                <InputUpload text='Katherine Reyes' />
                <InputUpload text='Sebastian Gonzalez' />
                <InputUpload text='Juan David Avila' />
                <InputUpload text='Santiago Cuadros' />
              </ul>
              <h4 className='secsubtitle-upload'> Type of project </h4>
              <ul className='list-check2'>
                <InputUpload text='Ux design' />
                <InputUpload text='Ui design' />
                <InputUpload text='Frontend development' />
                <InputUpload text='Branding & marketing' />
                <InputUpload text='Consulting & advisory' />
              </ul>
              </section>
              
        </section>
       
        <FooterMobile />
       </section>
       
 
    </>
  )
} 