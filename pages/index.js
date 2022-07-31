
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Image from 'next/image'
import styles from '../styles/Contacto.module.css'
export default function Home({producto}) {
  return (
    
      <Layout 
        pagina='inicio'
        >
        <main className='contenedor'>
          <h2 className='heading'>Nuestra Coleccion</h2>
          <Listado productos={producto}/>
        </main>
        <Banner/>
        <section className='contenedor'>
              <h2 className='heading'>Contacto</h2>
              <section className={styles.seccion}>
                <article>
                  <h4>Visitanos en nuestras agencias o contactanos hoy</h4>
                  <div className={styles.iconos}>
                    <div>
                      <Image width={40} height={40} src="/img/map-location-dot-solid.svg" alt="mapa" />
                      <p>Av. Avellaneda 3202</p>
                    </div>
                    <div>
                      <Image width={40} height={40} src="/img/phone-solid.svg" alt="phone" />
                      <p>4611-9927</p>
                    </div>
                    <div>
                      <Image width={40} height={40} src="/img/whatsapp-square-brands.svg" alt="whatsapp" />
                      <p>+54 154611-9927</p>
                    </div>
                    <div>
                      <Image width={40} height={40} src="/img/clock-solid.svg" alt="clock" />
                      <p>Lunes a viernes de 9 a 17hs</p>
                    </div>
                    
                    
                  </div>
                </article>
                <article>
                  <Image layout="responsive" width={320} height={250} src="/img/mapa-google.jpg" alt="google map wayra"/>
                </article>  

              </section>
            </section>
      </Layout>

    
  )

}
export async function getServerSideProps(){

  const url = `${process.env.API_URL}/api/product`
  const respuesta = await fetch(url)
  const {producto} = await respuesta.json()

  return {
      props:{
          producto
      }
  }
}
