import Link from "next/link";
import Layout from "../components/layout";

const Pagina404 = () => {
  return (    
    <Layout
        title="Página No Encontrada"
    >
        <p className="error">Página No Encontrada</p>
        <Link href="/"
            className="error-enlace"
        >
            Ir al Inicio
        </Link>
    </Layout>
  )
}

export default Pagina404