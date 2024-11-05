
import portadaFondoB from 'public/images/portadaFondoB.jpg';
import portadaFondoC from 'public/images/portadaFondoC.jpg';
import portadaFondoD from 'public/images/portadaFondoD.jpg';
import portadaFondoE from 'public/images/portadaFondoE.jpg';
import portadaFondoF from 'public/images/portadaFondoF.jpg';
import portadaFondoG from 'public/images/portadaFondoG.jpg';

const ServiciosBlock = () => {

    const serviciosBlocks = [
        { fondoImagen: portadaFondoB, titulo: 'Estrategias digitales', descripcion: 'Transformamos tus metas comerciales en estrategias digitales efectivas. Desde la identificación del público objetivo hasta análisis competitivo, creamos planes personalizados para tu éxito.' },
        { fondoImagen: portadaFondoC, titulo: 'SEO (Optimización de Motores de Búsqueda)', descripcion: 'Mejoramos tu visibilidad online con investigación de palabras clave, optimización de contenido y construcción de enlaces estratégicos. Aumenta tu posición en los motores de búsqueda y atrae a tu audiencia objetivo.' },
        { fondoImagen: portadaFondoD, titulo: 'SEM (Marketing en Motores de Búsqueda)', descripcion: 'Gestionamos campañas publicitarias en Google, optimizando presupuestos y enfocándonos en estrategias de palabras clave. Aumenta la visibilidad y atrae clientes potenciales de manera efectiva.' },
        { fondoImagen: portadaFondoE, titulo: 'Redes Sociales', descripcion: 'Gestionamos tus perfiles en redes sociales, desarrollamos estrategias de contenido social y ejecutamos campañas publicitarias. Conéctate con tu audiencia, y ahora, también optimizamos tus campañas de pago para maximizar el alcance y la conversión.' },
        { fondoImagen: portadaFondoF, titulo: 'Email Marketing', descripcion: 'Diseñamos y ejecutamos campañas de email marketing impactantes. Mantén a tus clientes informados, comprometidos y listos para convertirse.' },
        { fondoImagen: portadaFondoG, titulo: 'Diseño y Desarrollo Web', descripcion: 'Creamos sitios web responsivos y optimizados para brindar una experiencia excepcional al usuario. Desde la velocidad hasta la integración de tecnologías, garantizamos una presencia online efectiva.' }
    ]
    
return (<>
{!!serviciosBlocks?.length && (
    <div className={` mx-auto grid grid-cols-1 md:grid-cols-2 `}>
        {serviciosBlocks.map((item, index) => (
                <div key={index} data-aos-once="true" data-aos='fade' className={` relative transition-all ease-in-out duration-700 flex flex-col items-center ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} py-28 px-2 md:px-3 lg:px-6 xl:px-12 `}>
                    <div className={` opacity-80 absolute top-0 left-0 h-full w-full bg-cover bg-center`} style={{ backgroundImage: `url('${item.fondoImagen.src}')`, }} />
                    <div data-aos-once="true" data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} className={` transition-all ease-in-out py-8 bg-black bg-opacity-70 text-center max-w-md `} >
                        <h3 className={`transition-all ease-in-out text-3xl lg:text-4xl font-semibold mx-4 mb-8 font-RobotoCondensed opacity-80`}>{item.titulo}</h3>
                        <p className={`transition-all ease-in-out text-base lg:text-lg mx-4 text-justify indent-4 hyphens-auto opacity-80 leading-relaxed`}>{item.descripcion}</p>
                        {/* <p className={`  text-lg mx-4 my-8 `}><Link className={` transition-all ease-in-out duration-200 rounded-full py-3 px-6 bg-white hover:bg-[#b10c72] text-black hover:text-white no-underline font-medium`} href='' >Cotiza aquí</Link></p> */}
                    </div>
                </div>
        ))}
    </div>
)}
</>)
}

export default ServiciosBlock;