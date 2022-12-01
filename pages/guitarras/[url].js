import { useState } from 'react';
import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../styles/guitarras.module.css";


const Producto = ({ guitarra }) => {


  const [cantidad, setCantidad] = useState(0);  
  const { nombre , descripcion , imagen , precio } = guitarra[0].attributes;

  const handleSubmit = e => {
    e.preventDefault();

    if(cantidad < 1){
      alert('Cantidad no válida');
      return;
    }

    //Construir un objeto
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }

    // Pasando la información al context
  }

  console.log(cantidad);
      
  return (
    <Layout
      title={`Guitarra ${nombre}`}
    >
      <div className={styles.guitarra}>
        <Image 
          src={imagen.data.attributes.url}
          width={600}
          height={400}
          alt={`Imagen de guitarra ${ nombre }`}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form 
            className={styles.formulario}
            onSubmit={ handleSubmit }
            >
            <label htmlFor="cantidad">Cantidad:</label>

            <select 
              id="cantidad"
              onChange={ e => setCantidad(+e.target.value) }
              >
              <option value="0">-- Seleccione --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input 
              type="submit"
              value="Agregar al carrito"
            />
          </form>

          {/* <Link 
            href="/tienda"
            className={styles.enlace}
          >Volver
          </Link> */}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths = async() => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
  const { data } = await respuesta.json();    
    
  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }));  

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async({params: { url }}) => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
  const {data: guitarra} = await respuesta.json();

  console.log('En getSaticProps');

  return {
    props: {
      guitarra
    }
  }
}

export default Producto;