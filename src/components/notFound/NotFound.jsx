import React from "react";
import error from "../../img/error404-03.png";
import '../notFound/notFound.css'
const NotFound = () => {
  return (
    <section className='contentError'>
    <section className='sectionError'>
        <figure className='contentImgError' >
      <img src={error} alt="" />
        </figure>
        <section className='sectionButton'>
          <button className='buttonError'>Inicio</button>
        </section>
      </section>
    </section>
  );
};

export default NotFound;