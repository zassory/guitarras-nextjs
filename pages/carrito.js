import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/carrito.module.css";


const carrito = ({carrito}) => {
  return (
    <Layout
        title={'Carrito de compras'}
    >
        <main className="contenedor">
            <h1 className="heading">Carrito</h1>

            <div className={styles.contenido}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>

                    {carrito.length === 0 ? 'Carrito Vacio' : (
                        carrito.map( producto => (
                            <div key={ producto.id } className={ styles.producto }>
                                <div>
                                    <Image width={250} height={480} src={producto.imagen} alt={producto.nombre} />
                                </div>
                                <div>
                                    <p className={styles.nombre}>{producto.nombre}</p>
                                    <p>Cantidad: {producto.cantidad}</p>
                                    <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                    <p className={styles.subtotal}>Subtotal: $<span>{producto.cantidad * producto.precio}</span></p>
                                </div>
                            </div>
                        ))
                    )}

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