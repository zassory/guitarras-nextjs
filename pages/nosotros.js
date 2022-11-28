import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/nosotros.module.css';

const Nosotros = () => {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, guitarLA, tienda de musica"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        
        <div className={ styles.contenido }>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />

          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis
            parturient montes, nascetur ridiculus mus. Curabitur sollicitudin purus ut
            tellus molestie, in euismod nibh auctor. Quisque non venenatis ipsum.
            Vestibulum facilisis odio metus, eu mollis nibh porta a. Ut ut orci lobortis
            nunc pellentesque aliquam et et libero. Nam velit ipsum, efficitur nec lacin            
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis
            risus non lectus dignissim, finibus accumsan ligula iaculis. Aliquam et turp
            is sit amet quam porta rutrum. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Curabitur sollicitudin purus ut            
            </p>

          </div>
        </div>

      </main>
    </Layout>            
  )
}

export default Nosotros;
