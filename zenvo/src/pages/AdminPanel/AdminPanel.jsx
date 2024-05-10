import './AdminPanel.css' 

import { Button3,InputAdmin,Button,FooterMobile } from '../../components/index'

 export function AdminPanelPage () {
   return (
    <>
      <section>
        <Button3 text='Back' img = '' />

        <section className='container-adminpanel'>
            <img className='banner-admin' src="../../src/assets/Logo1-zenvo.png" />
            <h1 className='title-admin'> Administrador panel </h1>
            <div className='inputs-admin'>
            <InputAdmin img1 ='../../src/assets/user-icon.png' type= 'email'  text='Admin username' />
            <InputAdmin img1='../../src/assets/lock-icon.png' type='password' text='Password' img2='../../src/assets/eye-icon.png' />
            <Button text = 'Login' url="/UploadPage"/>
            </div>
        </section>
        
       </section>
       <FooterMobile />
     
      
    </>
  )
} 