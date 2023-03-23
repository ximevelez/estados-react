import React from 'react'
import './assets/stylesheets/Formulario.css';
/* import Formulario from './Formulario' */
import { useState } from 'react';

function Curso(props){

   

    const [curso, setCurso] = useState('Curso de React');
    const [software, setSoftware] = useState('Visual Studio Code');
    const [description, setDescription] = useState('Curso de React con Hooks');
    const [image, setImage] = useState('./images/3d.jpg');

    const changeCourse = (e) => {

      
      e.preventDefault();
      const valueInput = e.target.previousSibling.value;
      setCurso(valueInput)

      e.target.previousSibling.value = '';
    }

    const changeCourse2 = (e) => {

      
      e.preventDefault();
      const valueInput = e.target.previousSibling.value;
      setSoftware(valueInput)

      e.target.previousSibling.value = '';
    }

    const changeCourse3 = (e) => {

      
      e.preventDefault();
      const valueInput = e.target.previousSibling.value;
      setDescription(valueInput)

      e.target.previousSibling.value = '';
    }

    const changeImg = (e) => {

      
      e.preventDefault();
      const valueInput = e.target.src;
      setImage(valueInput)

      
    }




  return(
    <main>
  

      <div className='row'>
    <div className=' curso col-12 col-lg-6 flex-colum ps-5' style={{background: `url(${image}) center/cover`}}>
        <h1 className='text-white text-lg-start'>{curso}</h1>
        <p className='text-white mt-4 fw-bold'>{software}</p>
        <p className='text-white'>{description}</p>
        <button className='inscribete'>¡Inscribete!</button>
    </div>

    <div className="contenido col-12 col-lg-6 flex-colum">
    <div className='pb-3'>
    <input className='controles ' type="text" name="Nombres" id="nombres" placeholder="Nombre del curso"/>
        <button onClick={changeCourse}>Actualizar</button>
        </div>
        
        <div className='pb-3'>
        <input className='controles' type="text" name="Apellidos" id="apellidos" placeholder="Software"/>
        <button onClick={changeCourse2}>Actualizar</button>
        </div>
        <div className='pb-3'>
        <input className='controles' type="email" name="Correo" id="correo" placeholder="Descripción"/>
        <button onClick={changeCourse3}>Actualizar</button>
        </div>

        <div>
          <p className='fw-bold'>Nueva imagen:</p>

          <div onClick={changeImg} className='imagenes'>
          <a href=""><img className='carro' src="../images/car.jpg" alt="" /></a>
          <a href=""><img className='carro' src="../images/K6Rz.gif" alt="" /></a>
          <a href=""><img className='carro' src="../images/film.jpg" alt="" /></a>
          <a href=""><img className='carro' src="../images/3d.jpg" alt="" /></a>
          </div>
        </div>
    </div>
</div>

    </main> 
  );
}
export default Curso
