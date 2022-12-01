import Layout from "../components/layout";
import styles from "../styles/carrito.module.css";


const carrito = () => {
  return (
    <Layout
        title={'Carrito de compras'}
    >
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>

            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>
                </div>
                
                <aside className={styles.resumen}>
                    <h3>Resumen del Pedido</h3>
                    <p>Total a pagar: </p>
                </aside>
            </div>
        </main>
    </Layout>
  )
}

export default carrito