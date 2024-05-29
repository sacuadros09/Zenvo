import{createContext,useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';


const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const cancelSuscription = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoading(false)
        });
        
       return cancelSuscription;
    }, [])

    return (
        <AuthContext.Provider value={{user}}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};