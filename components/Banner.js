import styles from '../styles/Curso.module.css'
const Banner = () => {
  return (
    <section>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className={styles.titulo}>Wayra</h2>
          <p className={styles.texto}>
            Nuestra misión es garantizar la calidad y durabilidad de nuestros
            productos.
          </p>
          <p className={styles.texto}>
            Para ello invertimos en el país, incorporando tecnología de
            avanzada, ofreciendo la máxima calidad, servicio, confiabilidad y
            mejor precio en toda su línea de productos. Hoy nos caracterizamos
            por ser una empresa que en más de 40 años se ha sabido afianzar en
            el mercado atendiendo a particulares y a grandes empresas, con una
            sola meta: dar a sus clientes el mejor servicio.
          </p>
        </div>
      </div>
      <style jsx>{`
          section{     
            padding:10rem 0;
            margin-top:10rem;
            background-image:linear-gradient(to right, rgb(0 0 0 /.65), rgb( 0 0 0 / .7)),url("/img/banner.jpg");
            background-size:cover;
            background-position: 50%;
          }

        `}</style>
    </section>
  );
};

export default Banner;
