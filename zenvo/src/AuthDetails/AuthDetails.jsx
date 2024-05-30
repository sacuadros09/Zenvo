import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './AuthDetails.css'

export const AuthDetails = () => {
    const [authuser,setAuthUser] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        const listen = onAuthStateChanged(auth,(user) => {
            if (user) {
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })

        return() =>{
            listen()    
        }
    },[])
    
    const userSignOut = () => {
        signOut(auth).then (()=> {
            console.log("sign out succesful")
            navigate('/');
        }).catch(error => console.log(error))
    }

    return (
        <div>
            {authuser ? (
                <>
                    <div className="container-auth">
                    <button className="btn-logout-auth" onClick={userSignOut}>Sign Out</button>
                    <p className="text-auth">{`Signed In as ${authuser.email}`}</p>
                    </div>
                </>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    );
}
