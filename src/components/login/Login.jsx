import React, { useState } from "react";
import '../login/login.css'
import { useForm } from "react-hook-form";
import logoDos from "../../img/logo2.png";



const Header = () => {
  return (
  <h1>Hola bebés</h1>
  );
};

const Login = () => {
  const [user] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data.email);
    console.log(data.password);
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
