import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../styles/guitarras.module.css";


const Producto = ({ guitarra }) => {
  
  const { nombre , descripcion , imagen , precio } = guitarra[0].attributes;
      
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
          <Link 
            href="/tienda"
            className={styles.enlace}
          >Volver
          </Link>
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