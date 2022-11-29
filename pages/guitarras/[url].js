import { useRouter } from 'next/router';

const Producto = ({ guitarra }) => {
  
  console.log(guitarra[0].attributes);  

  //const router = useRouter();
  //console.log("El router es: ",router);
  return (
    <div>[url]</div>
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
    fallback: false
  }
}

export const getStaticProps = async({params: { url }}) => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
  const {data: guitarras} = await respuesta.json();

  return {
    props: {
      guitarras
    }
  }
}

export default Producto