//import { useRouter } from 'next/router';

const Producto = ({ guitarra }) => {

  console.log(guitarra[0].attributes.nombre);
  //const router = useRouter();
  //console.log(router);

  return (
    <div>[url]</div>
  )
}

export const getServerSideProps = async( { query: { url } } ) => {
  
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
  const { data: guitarra } = await respuesta.json();  

  return {
    props: {
      guitarra
    }
  }

}

export default Producto