import React from 'react'     //Importar React desde el 2020 ya no es obligatorio, ya que viene por defecto
import testimonio from '../estilos/testimonio.css'

class Testimonio extends React.Component {
  render(){
    return (
      <div className='contenedor-testimonio'>
        <img className='imagen-testimonio' src={require(`../imagenes/testimonio-${this.props.imagen}.jpg`)} alt={`Foto de ${this.props.nombre}`} />
        {console.log(this.props.nombre)};
        
        <div className='contenedor-texto-testimonio'>
           <p className='nombre-testimonio'>
              <strong>{this.props.nombre}</strong> en {this.props.pais}
              </p>
           <p className='cargo-testimonio'>
              {this.props.cargo} en <strong>{this.props.empresa}</strong>
              </p>
           <p className='texto-testimonio'>"{this.props.testimonio}".</p>
        </div>
      </div>
    )
  }
};

export default Testimonio