import '../styles/globals.css'
import {useState} from 'react';


function MyApp({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = guitarra => {
    //Vamos a comprobar si la guitarra esta en el carrito
    if(carrito.some( (guitarraState) => guitarraState.id === guitarra.id )){
      //Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map( guitarraState => {
        if(guitarraState.id === guitarra.id){
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      // Se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem('carrito', JSON.stringify( carrito ));
    }else {
      //En caso que el producto no existe, es nuevo y se guarda
      setCarrito([...carrito,guitarra]);
      localStorage.setItem('carrito',JSON.stringify(carrito));
    }
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter( producto => producto.id !== id );
    setCarrito(carritoActualizado);
    window.localStorage.setItem('carrito',JSON.stringify(carrito));
  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map( guitarraState => {
      if(guitarraState.id === guitarra.id){
        guitarraState.cantidad = parseInt(guitarra.cantidad)
      }
      return guitarraState;
    });
    setCarrito(carritoActualizado);
    window.localStorage.setItem('carrito',JSON.stringify(carrito));
  }

  return <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}  
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}
  />
}

export default MyApp
