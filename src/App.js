import Testimonio from './components/Testimonio';
import './App.css';
import React from 'react';

class App extends React.Component {
  render (){
    return (
      <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          <Testimonio 
            nombre='Marcela González'
            pais='Colombia'
            imagen='marcela'
            cargo='Ingeniera de Software'
            empresa='Google'
            testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mi conocimiento de codificación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble'/>
          
          <Testimonio 
            nombre='Carlos Reyes'
            pais='Colombia'
            imagen='carlos'
            cargo='Ingeniero de Software'
            empresa='Microsoft'
            testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida'/>
        
          <Testimonio 
            nombre='Pareja'
            pais='Colombia'
            imagen='pareja'
            cargo='Comprometidos'
            empresa='Familia'
            testimonio='Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como un ingeniero de software en Spotify'/>   
        </div>
      </div>
    );
  };
};

export default App;