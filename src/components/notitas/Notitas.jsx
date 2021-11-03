import React from 'react';
import '../../components/notitas/notitas.css'

const Notitas = () => {
  return (
    <section className='content'>
      <section className='contentNote'>
        <input type='title' className='notasTitle' name="title" placeholder='Título'/>
        <textarea name="notas" className='notasTextArea' placeholder='Añadir Nota'></textarea>
      </section>
  </section> 
  );
};
export default Notitas;