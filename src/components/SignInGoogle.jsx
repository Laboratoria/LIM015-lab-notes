import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

// Importar firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Importar imagenes
import google from '../images/google.png';

const theme = createTheme();

const useStyles = makeStyles({
    images: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    google: {
        width: '30px',
        cursor: 'pointer',
        marginBlock: theme.spacing(2),
        marginInline: theme.spacing(1)
    }
});

const hangleAuthGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(`Welcome ${user.email}`);
    }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(`Error ${error.code} `);
    });
}

const SingInGoogle = () => {
    const style = useStyles();

    return (
        <div className={style.images}>
            <img className={style.google} src={google} alt="Google" onClick={hangleAuthGoogle} />
        </div>
    );
}

export default SingInGoogle;