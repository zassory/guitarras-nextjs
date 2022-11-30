import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import { formatearFecha } from "../../utils/helpers";
import styles from "../../styles/blog.module.css";

const Post = ({post}) => {

  const { titulo , contenido , imagen , publishedAt } = post[0].attributes

  return (
    <Layout
        title={titulo}
    >
        <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image 
            src={imagen.data.attributes.url}
            width={1000}
            height={600}
            alt={`imagen post ${titulo}`}
        />
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.texto}>{contenido}</p>
            <Link 
                href={'/blog'}
                className={styles.enlace}
            >
                Volver
            </Link>
        </div>
    </article>
    </Layout>
  )
}

export default Post

export const getServerSideProps = async({query: {url}}) => {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
    const { data: post } = await respuesta.json();    

    return {
        props: {
            post
        }
    }
}