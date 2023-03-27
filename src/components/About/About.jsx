export default function About() {
  return (
    <div className=' text-indigo-700'>
      <h1>About this application</h1>
      <div>
        <section className=' m-8 mb-20'>
          <h2 className='text-orange-600'>Why was it created?</h2>
          <p className='pl-5'>
            La creación de un proyecto que abarque todos los conocimientos
            adquiridos es requisito indispensable para culminar el Bootcamp de
            ReactJS; su construcción permite afianzar los conocimientos al
            enfrentar retos reales así como promover la búsqueda de soluciones.
          </p>
          <br />
          <p className='pl-5'>
            Parte de la motivación adicional fue diseñar una aplicación sencilla
            que permitiera a mi hija conocer un poco sobre los distintos países,
            esto como apoyo a sus estudios escolares.
          </p>
        </section>

        <section className=' m-8 mb-20'>
          <h2 className='text-orange-600'>Technical Goals</h2>
          <ul>
            <li className='pl-5'>
              <h4>Uso de Bundler</h4>
              <p className='pl-3'>
                Como Bundler se utilizó Vite, esta decisión se tomó a la luz de
                aspectos tales como la velocidad produto en parte de no utilizar
                Webpack y por lo tanto evitar la constante renderización de todo
                el proyecto.
              </p>
              <br />
              <p className='pl-3'>
                Adicional a este, en la documentación de React se habla
                claramente de un cambio de línea hacia Vite por lo que
                Create-React-App no es una opción de cara al futuro.
              </p>
              <br />
              <p className='pl-3'>
                En lo que respecta a las generalizades lo más importante radica
                en facilita y dar algo de estructura al proyecto, además de
                facilitar el despliegue en producción.
              </p>
              <br />
            </li>
            <li className='pl-5'>
              <h4>State Management</h4>
              <p className='pl-3'>
                En lo referente a Manejadores de Estado la decisión se decantó
                por Context API. Las razones para lo anterior son básicamente el
                tamaño del proyecto, las relativamente pocas necesidades futuras
                de crecimiento de este y el hecho de ser, a criterio personal,
                la herramienta básica por lo que es importante conocerla antes
                de adentrarse en otras como Redux.
              </p>
              <br />
            </li>
            <li className='pl-5'>
              <h4>Router</h4>
              <p className='pl-3'>
                Según lo indicado como requisito y recomendación del equipo
                director del Bootcamp se implementó el routing por medio de
                React Router v6.
              </p>
              <br />
              <p className='pl-3'>
                Como parte del proyecto y del aprendizaje, se crearon rutas con
                parámetros y rutas anidadas.
              </p>
              <br />
              <p className='pl-3'>
                En lo concerniente a inicio de sesión se trabajó en el
                componente para esta sin embargo no se ha implmentado de momento
                debido principalmente a limitaciones de tiempo para la entraga.
              </p>
              <br />
            </li>
            <li className='pl-5'>
              <h4>API Calling</h4>
              <p className='pl-3'>
                Se decidió utilizar Axios, dada su robustes y soporte debido a
                la gran utilización que tiene en la actualidad.
              </p>
              <br />
            </li>
            <li className='pl-5'>
              <h4>Reusables Hooks</h4>
              <p className='pl-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                magnam quam, ipsam iste quidem doloremque provident sed nesciunt
                hic, vitae laboriosam cupiditate eius corrupti nam blanditiis!
                Quam impedit officiis sit!
              </p>
              <br />
            </li>
            <li className='pl-5'>
              <h4>Form Library</h4>
              <p className='pl-3'>
                Se utilizó Formik ya que es claramente la herramienta favorita
                en el entorno de React, además es destacable su versatilidad y
                agilidad.
              </p>
              <br />
              <p className='pl-3'>
                De acuerdo a lo solicitado, se realizaron las validaciones de
                los campos y el formulario por medio de Formik.
              </p>
              <br />
            </li>
          </ul>
        </section>

        <section className=' m-8 pb-20'>
          <h2 className='text-orange-600'>Challenges</h2>
          <p className='pl-5'>
            Los cambios de fechas y horas al inicio del Bootcamp representaron
            una clara limitación ya que me fue imposible seguir el ritmo una vez
            que iba 3 clases atrasado.
          </p>
          <br />
          <p className='pl-5'>
            El tema de estilizado no es algo a lo que haya dedicado suficiente
            tiempo anteriormente por lo que el reto de entregar un proyecto
            presentable implicó un mayor esfuerzo.
          </p>
          <br />
        </section>
      </div>
    </div>
  )
}
