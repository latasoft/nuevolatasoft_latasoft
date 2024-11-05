"use client"; // Marcar el componente como Client Component
import { useEffect, useState } from 'react';
import NavigationBar from 'components/NavigationBar';

import icono1 from 'public/images/icono1.png';
import icono2 from 'public/images/icono2.png';
import icono3 from 'public/images/icono3.png';
import icono4 from 'public/images/icono4.png';
import icono5 from 'public/images/icono5.png';
import icono6 from 'public/images/icono6.png';
import icono7 from 'public/images/icono7.png';
import icono8 from 'public/images/icono8.png';
import icono9 from 'public/images/icono9.png';
import icono10 from 'public/images/icono10.png';
import icono11 from 'public/images/icono11.png';


const porquenosotros = [
    {
        icono: icono1,
        titulo: 'Mayor escalabilidad y flexibilidad',
        descripcion: 'Para tu negocio' },
    {
        icono: icono2,
        titulo: 'Equipo de desarrollo especializado',
        descripcion: 'Siempre a tu servicio' },
    {
        icono: icono3,
        titulo: 'Mayor tranquilidad en ciberseguridad',
        descripcion: 'Protegiendo tus datos' },
    {
        icono: icono4,
        titulo: 'Servicios de calidad y control',
        descripcion: 'De calidad garantizada' },
    {
        icono: icono5,
        titulo: 'Una mejor gestión de proyectos',
        descripcion: 'Adaptándonos a tus necesidades' },
    {
        icono: icono6,
        titulo: 'Soporte y mantenimiento',
        descripcion: 'Postventa garantizada' },
    {
        icono: icono7,
        titulo: 'Mayor eficiencia y productividad',
        descripcion: 'Para tu empresa' },
    {
        icono: icono8,
        titulo: 'Reducción de riesgos y costos' },
    {
        icono: icono9,
        titulo: 'Nos enfocamos en tu solución' },
    {
        icono: icono10,
        titulo: 'Enfócate en tu negocio principal' },
    {
        icono: icono11,
        titulo: 'Te ahorramos tiempo y dolores de cabeza' }
];

const NosotrosComponent = () => {
      
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            text: "Cuando Nicolas se contactó con nosotros para ofrecernos servicios, la verdad vi su motivation y carisma por ayudarnos a mejorar como empresa, le dimos la oportunidad de mostrarnos que podía hacer él por Latasoft, hoy estoy a gusto con los servicios ofrecidos, sigan así y mejor chicos",
            author: "Mauricio",
            company: "Pampa Energía",
            location: "Argentina" },
        {
            text: "Latasoft ha sido un socio invaluable en nuestro crecimiento. Su dedicación y atención al detalle han hecho la diferencia en nuestros proyectos.",
            author: "Laura",
            company: "Tech Innovators",
            location: "Chile" },
        {
            text: "Gracias a Latasoft, hemos logrado implementar soluciones tecnológicas que nos han permitido optimizar nuestros procesos y mejorar la experiencia del cliente.",
            author: "Javier",
            company: "Soluciones Avanzadas",
            location: "Perú" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Cambia el slide cada 5 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, [slides.length]);

    return (
        <>
            <NavigationBar />
            <main className={`relative  `}>

                {/* Sección ¿Quiénes somos? */}
                <section className={`relative bg-gray-800 z-40 text-white pt-40 pb-12 px-6`}>
                    <h2 data-aos-once="true" data-aos='fade' className={`text-[rgb(255,255,0)] text-center text-3xl lg:text-4xl mb-6 transition-all ease-in-out duration-200 font-bold font-RobotoCondensed `}>¿Quiénes somos?</h2>
                    <p data-aos-once="true" data-aos='fade' className={`text-justify hyphens-auto indent-8 max-w-5xl mx-auto text-lg md:text-xl lg:text-2xl transition-all ease-in-out duration-200 opacity-80 `} style={{ lineHeight: `1.86` }}>
                        Somos una empresa de software factory y de aplicaciones centrada en y para los clientes,
                        fundada en el 2021 en la ciudad de Viña Del Mar. Latasoft se creó para facultar a las empresas
                        a que trabajen con mayor agilidad, mejor y con una tecnología más responsiva y cercana al usuario.
                    </p>
                </section>

                <section className={`relative z-30 -translate-y-20`} style={{ filter: 'drop-shadow(0 1rem 0.2rem rgb(0,0,0,0.2))' }}>
                    <div className={`transition-all ease-in-out duration-300 w-full h-48 bg-gray-800  [clip-path:_polygon(0_0,_100%_40%,_100%_100%,_0_60%)] `} />
                </section>

                {/* Sección ¿Por qué nosotros? */}
                <section className={`relative -mt-48 pt-36 pb-28 px-4 xl:px-0`}>

                    {/* Imagen de fondo */}
                    <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/equipodetrabajo.jpg')]`} />
                    {/* Capa de color con opacidad */}
                    <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50`} />
                    <div className={`absolute top-0 left-0 w-full h-full bg-white bg-opacity-40`} />

                    {/* Contenido superpuesto */}
                    <div className={`relative mx-auto max-w-6xl text-white bg-black bg-opacity-30 px-5 pt-14 pb-20 rounded-md `}>
                        <h2 data-aos-once="true" data-aos='fade' className={`text-white text-center text-3xl lg:text-4xl mb-24 transition-all ease-in-out duration-200 font-bold font-RobotoCondensed`}>¿Por qué nosotros?</h2>

                        {!!porquenosotros?.length && (
                            <div className={`grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 text-center font-Roboto  `}>
                                {porquenosotros.map((item, index) => (
                                    <div key={index} data-aos-once="true" data-aos='fade'>
                                        <img src={item.icono.src} alt={item.titulo} className={`mx-auto mb-6 w-24 h-auto opacity-70 `} />
                                        <h3 className={` font-normal text-2xl lg:text-3xl font-RobotoCondensed`}>{item.titulo}</h3>
                                        {item.descripcion && (<p className={` font-light font-Roboto text-lg lg:text-xl opacity-80 `}>{item.descripcion}</p>)}
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </section>

                <section className={`relative z-30 -translate-y-20`} >
                    <div className={`transition-all ease-in-out duration-300 w-full h-48 bg-gray-800  [clip-path:_polygon(0_0,_100%_40%,_100%_100%,_0_60%)] `} />
                </section>

                <section className={`relative bg-gray-800 z-40 text-white px-6 -mt-48 pt-12 pb-6`}>
                    <h2 data-aos-once="true" data-aos='fade' className={`text-[rgb(255,255,0)] text-center mb-6 text-3xl lg:text-4xl transition-all ease-in-out duration-200 font-bold font-RobotoCondensed `} style={{ lineHeight: `1.38` }}>Innovación y Expansión para <br className={` inline sm:hidden `} />un Futuro Conocido</h2>
                    <p data-aos-once="true" data-aos='fade' className={`text-justify hyphens-auto indent-8 max-w-5xl mx-auto text-lg md:text-xl lg:text-2xl transition-all ease-in-out duration-200 opacity-80 `} style={{ lineHeight: `1.86` }}>
                        La vision del equipo de Latasoft es creer que cuando la tecnología se centra en las personas, maximiza el impacto de la organización en su industria, y en la sociedad en general. Nuestras flechas apuntan a ser siempre un referente de nuestra industria y con mirada de expansion, por lo que siempre trabajamos para que nuestros clientes logren sus objetivos, ya que sus objetivos se vuelven nuestros objetivos tambien. Como dice nuestra frase <span className={` font-NotoSerif italic `}>&quot;Por el mundo que no conocemos, pero conoceremos, Latasoft&quot;</span>.
                    </p>
                </section>

                <section className={`relative z-30 -translate-y-20`}  style={{ filter: 'drop-shadow(0 1rem 0.2rem rgb(0,0,0,0.2))' }}>
                    <div className={`transition-all ease-in-out duration-300 w-full h-48 bg-gray-800  [clip-path:_polygon(0_0,_100%_40%,_100%_100%,_0_60%)] `} />
                </section>

                {/* Sección del Slider */}
                <section className={`relative h-[30rem] -mt-48 `}>

                    {/* Imagen de fondo del slider */}
                    <div className={`absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/images/apretondemanos.png')] `} />
                    {/* Capas de color con opacidad */}
                    <div className={`absolute top-0 left-0 w-full h-full bg-purple-500 bg-opacity-80`} />
                    <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50`} />

                    {/* Contenido del slider */}
                    {!!slides?.length && (
                        <div className={` relative max-w-4xl mx-auto block w-full h-full `}>
                            {slides.map((item, index) => (
                                <div key={index} className={` absolute top-1/2 left-1/2 -translate-y-[calc(50%-3rem)] -translate-x-1/2 w-full h-auto text-white text-center font-Roboto text-xl lg:text-2xl ${currentSlide===index ? 'opacity-80': 'opacity-0'} transition-all ease-in-out duration-700 `}>
                                    <p className={` mb-6 italic font-NotoSerif px-6 text-justify hyphens-auto indent-5 `} style={{ lineHeight: `1.62` }}>&quot;{item.text}&quot;</p>
                                    <h3 className={` font-bold px-6 `}>{item.author}</h3>
                                    <p className={` text-base lg:text-lg px-6 `} ><span className={` text-[rgb(255,255,0)] `} >{item.company}</span>, {item.location}.</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

            </main>
        </>
    );
};

export default NosotrosComponent;
