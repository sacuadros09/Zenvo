import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
                    <p>{`Signed In as ${authuser.email}`}</p>
                    <button onClick={userSignOut}>Sign Out</button>
                </>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    );
}
