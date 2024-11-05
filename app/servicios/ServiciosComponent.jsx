'use client';
import { useState } from 'react';
import NavigationBar from 'components/NavigationBar';

import serviciosIconoA from 'public/images/serviciosIconoA.png';
import serviciosIconoB from 'public/images/serviciosIconoB.png';
import serviciosIconoC from 'public/images/serviciosIconoC.png';
import serviciosIconoD from 'public/images/serviciosIconoD.png';
import serviciosIconoE from 'public/images/serviciosIconoE.png';
import serviciosIconoF from 'public/images/serviciosIconoF.png';

import imagenServicios01 from 'public/images/imagenservicios01.jpg';

import serviciosbgB from 'public/images/serviciosbgB.jpg';
import serviciosbgC from 'public/images/serviciosbg.jpg';

import ServicioCard from './ServicioCard';


const ServiciosComponent = () => {

    const lChevron = '<';
    const rChevron = '>';

    const [currentServ, setCurrentServ] = useState(0);

    const ServicioItem = ({ id, index, color, titulo, texto, icono }) => {
        return (
            <div
                data-aos-once="true" data-aos='fade'
                key={index}
                className={` mb-4 md:mx-4 md:mb-0 ${(currentServ === index || currentServ + 1 === index) ? ' flex flex-col' : ' md:hidden'} transition-all ease-in-out duration-300 w-80 lg:w-96 `}>
                <div className={` ${color === 'y' ? 'bg-[rgba(255,255,0,0.8)] text-black' : 'bg-[rgba(97,61,210,0.8)] text-white'} rounded-t-xl px-6 pt-6 w-full text-center `}>
                    <img className={` max-h-48 h-full w-auto mx-auto`} src={icono} alt='' />
                    <h3 className={` font-RobotoCondensed font-bold text-xl text-center py-3 `}>{titulo}</h3>
                </div>
                <p className={` ${color === 'y' ? 'bg-[rgba(255,255,0,0.8)] text-black' : 'bg-[rgba(97,61,210,0.8)] text-white'} px-6 pb-6 w-full flex-grow font-normal text-base leading-snug indent-4 text-justify hyphens-auto font-Raleway flex items-center `}>{texto}</p>
                <a className={` block rounded-b-xl text-center py-3 font-bold text-opacity-30 hover:text-opacity-100 text-sm cursor-pointer ${color === 'y' ? 'bg-[rgba(203,203,77,0.8)] text-black' : 'bg-[rgba(18,13,36,0.8)] text-white'} transform-all ease-in-out duration-300 uppercase `} href={'#' + id} alt=''>Ver más</a>
            </div>
        );
    };

    const ServiciosData = [
        {
            id: 'ecommerce',
            icono: serviciosIconoC,
            color: 'y',
            titulo: 'E-Commerce',
            texto: 'Un e-commerce maximiza ventas, brinda acceso global las 24/7, mejora la experiencia del cliente y optimiza la gestión empresarial.'
        },
        {
            id: 'intranet',
            icono: serviciosIconoA,
            color: 'p',
            titulo: 'Proovedores para agencias de marketing',
            texto: 'Encuentra los mejores servicios de desarrollo web y aplicaciones móviles para impulsar las estrategias digitales de tu agencia de marketing. Ofrecemos soluciones tecnológicas a medida para satisfacer las necesidades de tus clientes, con equipos especializados que garantizan resultados eficientes y de alta calidad.'
        },
        {
            id: 'disegno',
            icono: serviciosIconoD,
            color: 'y',
            titulo: 'Diseño de páginas web',
            texto: 'Una página web amplía la visibilidad, establece credibilidad y facilita la interacción, impulsando la presencia y el éxito comercial.'
        },
        {
            id: 'appmoviles',
            icono: serviciosIconoB,
            color: 'p',
            titulo: 'Applicaciones móviles',
            texto: 'Una aplicación móvil potencia la conveniencia, personaliza la interacción, optimiza la movilidad y fortalece la conexión constante, mejorando la satisfacción del usuario.'
        },
        {
            id: 'ventasubscripcionsoftware',
            icono: serviciosIconoE,
            color: 'y',
            titulo: 'Venta y suscripción de software',
            texto: 'Puedes comprar o suscribir un software como tambien puedes vender o suscribir tu software si lo prefieres.'
        },
        {
            id: 'basededatos',
            icono: serviciosIconoF,
            color: 'p',
            titulo: 'Base de datos',
            texto: 'Potencia tu negocio con bases de datos precisas y actualizadas de Impulso de Ventas. Accede a información confiable y relevante para alcanzar tus objetivos comerciales. Amplía tu red de clientes y segmenta tus campañas de marketing con precisión y eficacia.'
        }
    ];


    const ServiciosCards = [
        {
            id: 'disegno',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#FFFFFF]',
            titulo: 'Diseño web',
            precio: '$ 220.000 IVA incluido',
            cuotas: '(Hasta 3 cuotas)',
            descripcion: 'Prediseño y maquetado web en figma, puede ser landingpage u página web. Vinculación a dominio, hosting, correo corporativo y base de datos propia en Firebase. Prueba de ciberseguridad y lanzamiento web. Prueba de velocidad de la página. Web responsiva (adaptada a cualquier dispositivo). Fivecon de la empresa. Web diseñada hasta 4 pestañas. Carpeta del proyecto con repositorio web. Copia de seguridad de la web final. Sello SSL (Candado verde de ciberseguridad). Soporte web 24/7 x1 año gratis. Hosting gratis x1 año. Chatbot web u botón de whatsApp al costado. Posicionamiento SEO en la web con RankingCoach.',
            imagen: imagenServicios01
        },
        {
            id: 'ecommerce',
            fondoCart: serviciosbgC,
            fondocolor: 'bg-[#FFFF00]',
            titulo: 'Tienda online',
            precio: '$ 220.000 IVA incluido',
            cuotas: '(Hasta 3 cuotas)',
            descripcion: 'Análisis del requerimiento del cliente. Definición de la estructura y funcionalidad requerida. Prediseño y Maquetado en Figma (adaptado a la imagen de marca). Ecommerce responsivo. Integración de elementos visuales y gráficos Carga inicial hasta 30 productos (imágenes, descripciones, precios). Creación de categorías de productos. Configuración de variaciones de producto (tamaño, color, etc). Integración de carrito de compras. Configuración de métodos de pagos (PayPal, webpay, transferencia bancaria, mercado pago, otros). Configuración de métodos de envíos (nacionales e internacionales). Integración de seguimiento de pedidos u notificaciones al cliente. Registro de usuarios y clientes con base de datos propia. Creación de cuentas de usuario (opcional). Gestión de perfiles de clientes y pedidos. Configuración SEO para cada página y producto. Integración de Google Analytics para seguimiento web. Certificado SSL (candado verde al lado del dominio web). Pruebas de funcionalidad (carrito, pagos, envíos, etc). Conexión con redes sociales (Facebook e instagram shop). Capacitación básica de uso de la tienda (gestión de productos, pedidos y clientes). Soporte técnico durante el 1 mes después del lanzamiento',
            imagen: imagenServicios01
        },
        {
            id: 'intranet',
            fondoCart: serviciosbgC,
            fondocolor: 'bg-[#00FFFF]',
            titulo: 'Proovedores para agencias de marketing',
            descripcion: 'En Latasoft, somos el socio ideal para agencias de marketing que buscan externalizar servicios de diseño web y creación de tiendas online. Nuestro equipo de expertos ofrece soluciones a medida para que tu agencia pueda enfocarse en lo que mejor hace: estrategia, branding y publicidad, mientras nosotros nos encargamos detodo lo técnico. Diseño Web Personalizado. Desarrollo de Tiendas Online. Entrega Puntual. Soporte Técnico.Colaboración Transparente. ¿Por qué Elegirnos como Tu Proveedor?. Experiencia y Calidad Garantizada: Más de X años en el mercado con una amplia experiencia en distintos sectores. Flexibilidad: Nos adaptamos a las necesidades y tiempos de tu agencia, ofreciendo soluciones personalizadas a la medida de cada cliente. Precios Competitivos: Ofrecemos precios preferenciales para agencias, permitiéndote obtener un margen de beneficio sin sacrificar la calidad. Si estás buscando un aliado confiable para el desarrollo web y ecommerce, contáctanos y juntos llevaremos a tusclientes al siguiente nivel digital. Enfócate en lo tuyo, nosotros nos encargamos del resto.',
            imagen: imagenServicios01
        },
        {
            id: 'appmoviles',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#613DD2]',
            titulo: 'Desarrollo de Apps',
            precio: '$3.500.000 IVA incluido',
            descripcion: 'Evaluación de requisitos y funcionalidades de la app. Definir alcance, características clave y flujo de trabajo de la app. Prediseño y Maquetado en Figma con interfaces intuitivas para la experiencia de usuario. Creación de prototipo y wireframes para visualizar app antes del desarrollo. App responsiva. Programación de la app en Swift para IOS y kotlin/java para Android Desarrollo de funciones personalizadas según cliente. Integración con Apis y servicios externos. Gestión de base de datos local o en la nube para almacenamiento de datos. Integración de sistemas de autenticacion (correos, etc). Medidas de seguridad avanzadas (cifrado de datos, HTTPS, políticas de privacidad). Gestión de roles y permisos para diferentes tipos de usuario (administradores, usuarios, etc). Integración de pasarelas de pagos (PayPal, webpay, Google Pay/Apple Pay u otros). Configuración para compras dentro de la app u suscripciones. Notificaciones Push. Geolocalizacion (si aplica) Cámara y multimedia (si aplica). Chat en tiempo real. Pruebas de optimizacion y rendimiento. Detección y corrección de bugs antes del lanzamiento. Validación de la app en situaciones reales de uso. Publicación en tiendas de Apps. Capacitación y documentación al cliente del uso de la app. Soporte post lanzamiento x3 meses después del lanzamiento (con posibles nuevas actualizaciones)',
            cuotas: '(Hasta 5 cuotas $700.000 (IVA incluido)',
            imagen: imagenServicios01
        },
        {
            id: 'ventasubscripcionsoftware',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#FFFFFF]',
            titulo: 'Venta y suscripción de software',
            descripcion: 'Puedes comprar o suscribir un software como tambien puedes vender o suscribir tu software si lo prefieres.',
            imagen: imagenServicios01
        },
        {
            id: 'basededatos',
            fondoCart: serviciosbgB,
            fondocolor: 'bg-[#000000]',
            titulo: 'Venta de base de datos',
            descripcion: 'Potencia tu negocio con bases de datos precisas y actualizadas de Impulso de Ventas. Accede a información confiable y relevante para alcanzar tus objetivos comerciales. Amplía tu red de clientes y segmenta tus campañas de marketing con precisión y eficacia.',
            imagen: imagenServicios01
        }
    ];


    // Handle left chevron click
    const handleLeftClick = () => {
        setCurrentServ((prev) => (prev === 0 ? ServiciosData.length - 2 : prev - 2));
    };

    // Handle right chevron click
    const handleRightClick = () => {
        setCurrentServ((prev) => (prev === ServiciosData.length - 2 ? 0 : prev + 2));
    };

    return (
        <>
        <NavigationBar />
        <main className={` relative flex-grow bg-white `}>

            <section className={` relative pt-40 pb-32 transition-all ease-in-out duration-300 bg-black`} >

                <div className={` absolute top-0 left-0 w-full h-full bg-white opacity-50 `} />
                <div className={` absolute top-0 left-0 w-full h-full bg-[rgb(97,61,210)] opacity-30 `} />
                <div className={` absolute top-0 left-0 w-full h-full bg-[url('/images/proyecto-fondo-b.jpg')] bg-center bg-cover opacity-30 `} />

                <h2 className={` relative mb-4 max-w-5xl mx-auto text-3xl lg:text-4xl font-bold font-RobotoCondensed text-center `}>
                    Nuestros Servicios</h2>

                <div className={` relative py-12 `} >
                    <div className={` relative flex max-w-5xl mx-auto overflow-hidden items-center justify-center transition-all ease-in-out duration-300 `}>
                        {!!ServiciosData?.length && (
                            <div className={` flex flex-col md:flex-row md:h-[37rem] lg:h-[32rem] transition-all ease-in-out duration-300 `}>
                                {ServiciosData.map((item, index) => (
                                    <ServicioItem
                                        id={item.id}
                                        key={index}
                                        index={index}
                                        icono={item.icono.src}
                                        color={item.color}
                                        titulo={item.titulo}
                                        texto={item.texto} />
                                ))}
                            </div>
                        )}
                        <p onClick={handleLeftClick} className={` hidden md:block text-white text-[16rem] font-extrabold font-Economica absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer `}>{lChevron}</p>
                        <p onClick={handleRightClick} className={` hidden md:block text-white text-[16rem] font-extrabold font-Economica absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer `}>{rChevron}</p>
                    </div>
                </div>
            </section>

            {!!ServiciosCards?.length && (
                <>
                    {ServiciosCards.map((item, index) => (
                        <ServicioCard
                            id={item.id}
                            key={index}
                            fondoCart={item.fondoCart}
                            fondocolor={item.fondocolor}
                            titulo={item.titulo}
                            precio={item.precio}
                            cuotas={item.cuotas}
                            descripcion={item.descripcion}
                            imagen={item.imagen} />
                    ))}
                </>
            )}


        </main>
        </>
    )

}

export default ServiciosComponent;