import React from "react";
import '../login/login.css'
import { useForm } from "react-hook-form";
import logoDos from "../../img/logo2.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../../firebase/firebaseConfig";
import { useHistory } from "react-router-dom";
import { Icon } from '@iconify/react';

const useInformation = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  let name; let email; let photoUrl; let uid; let
    emailVerified;

  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  }
  return { user, name, email, photoUrl, uid, emailVerified }
};

// export default useInformation;


const Header = () => {
  return (
    <button className='buttonLogout' type='submit'><Icon className='iconLogout' icon="mdi:logout" color="#FFFFFF" /></button>
      
    
  );
};

const Login = () => {
  // const [user] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user } = useInformation();
  const history = useHistory();
  const onSubmit = data => {
    // console.log(data.email);
    // console.log(data.password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user + 'Ya estás logueado');
        history.push("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  } 

  return (
    <section className='sectionFormAndLogo'>
      <figure>
        <img className='LogoDos' src={logoDos} alt="" />
      </figure>
      { user ? <Header/> : <section className='sectionFormLogin'>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
        <label className='labelLogin'>Correo</label>
        <input className='inputFormLogin' type='email' defaultValue="" {...register("email")} />
      {/* include validation with required or other standard HTML validation rules */}
        <label className='labelLogin'>Contraseña</label>
        <input className='inputFormLogin' type='password' {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
          <button className='buttonLogin' type="submit">ENTRAR</button>
        </form>
      </section>}
    </section>
  );
};
      
export default Login;
