import './AdminPanel.css' 
import { auth } from '../../firebase/firebase'
import { Button3,FooterMobile } from '../../components/index'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'

 export function AdminPanelPage () {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [errorMessage,setErroMessage] = useState("")

  const signIn = (e) =>{
   e.preventDefault()
   signInWithEmailAndPassword(auth,email,password)
   .then((userCredential) => {
    console.log(userCredential)
   })

   .catch((error) => {
    console.error(error);
    setErroMessage('Failed to log in. Please check your email and password.');
  });

  }
  return (
    <>  
      <section>
        <Button3 text='Back' img='' />
        <section className='container-adminpanel'>
            <img className='banner-admin' src='../../src/assets/Logo1-zenvo.png' alt='Banner' />
            <h1 className='title-admin'>Administrador panel</h1>
            <div className='inputs-contain'>
                <form className='admin-form' onSubmit={signIn}>
                    <div>
                        
                        <input 
                            className='inputs-admin'
                            type='email'
                            placeholder='Admin username'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        
                        <input
                            className='inputs-admin'
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                    </div>
                    
                    <button className='btn-login' type='submit'>Log in</button>
                  
                </form>
                {errorMessage && <p>{errorMessage}</p>}
            </div>
        </section>
      </section>
      <FooterMobile />
    </>
  );
}