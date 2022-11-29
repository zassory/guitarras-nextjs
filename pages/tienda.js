import Layout from '../components/layout';
import Guitarra from '../components/guitarra';
import styles from '../styles/grid.module.css';

const Tienda = ({ guitarras }) => {
    
  return (
    <Layout
      title={'Tienda Virtual'}
      description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>

        <div className={styles.grid}>
          { guitarras?.map( guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>            
  )
}

//Si hay que eliminar o cambiar algo se hace y no hay que hacer otro build
export const getServerSideProps = async() => {

  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const { data : guitarras } = await respuesta.json();  

  return {
    props: {
      guitarras
    }
  }
}

//Significa que será una generacion estatica
//esta informacion no se va a estar regenerando con cada visita del usuario
//Si no que va a ser en el buid
//hacer oitro build si quieres actualizar
// export const getStaticProps = async() => {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//   const { data: guitarras } = await respuesta.json();
  

//   return {
//     props: {
//       guitarras
//     }
//   }
// }

export default Tienda;
