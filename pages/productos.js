import Layout from "../components/Layout"
import Listado from "../components/Listado";
import getProducts from "../services/productService";

const Productos = ({ producto }) => {
  return (
    <Layout pagina='Productos'>
        <main className='contenedor'>
          <h2 className='heading'>Nuestros Productos</h2>
          
          <Listado productos={producto}/>
          
        </main>
    </Layout>
    
  )
}

export async function getStaticProps(){

  const producto = await getProducts()
  return{
    props:{
      producto
    }
  }
}

export default Productos