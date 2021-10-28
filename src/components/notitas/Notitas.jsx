import React from 'react';
import '../../components/notitas/notitas.css'


const Notitas = () => {
  return (
    <section className='content'>
      <section className='contenteInputTitle'>
        <input type='title' className='notasTitle' name="title" placeholder='Título'/>
      </section>
      <section className='ContentTextArea'>
        <textarea name="notas" className='notasTextArea' placeholder='Añadir Nota'></textarea>
      </section>
  </section> 
  );
};
export default Notitas;