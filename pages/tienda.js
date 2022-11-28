import Layout from '../components/layout';
import ListadoGuitarras from '../components/listado-guitarras';

const Tienda = ({ guitarras }) => {

  console.log('---------', guitarras);

  return (
    <Layout
      title={'Tienda Virtual'}
      description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Colección</h1>

        <ListadoGuitarras 
        
        />
      </main>
    </Layout>            
  )
}

export const getStaticProps = async() => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const { data: guitarras } = await respuesta.json();  

  return {
    props: {
      guitarras
    }
  }
}

export default Tienda;
