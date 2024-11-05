"use client";
import { useEffect, useState } from 'react';

import clientesA from 'public/images/clientesA.png';
import clientesB from 'public/images/clientesB.png';
import clientesC from 'public/images/clientesC.webp';
import clientesD from 'public/images/clientesD.webp';
import clientesE from 'public/images/clientesE.webp';
import clientesF from 'public/images/clientesF.webp';

const clientesImagenes = [
    { imagen: clientesA },
    { imagen: clientesB },
    { imagen: clientesC },
    { imagen: clientesD },
    { imagen: clientesE },
    { imagen: clientesF }
]

const Clientesimagenes = () => {

    const [currentClientesImagenesIndex, setCurrentClientesImagenesIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentClientesImagenesIndex((prevIndex) => (prevIndex + 1) % clientesImagenes.length);
                setFade(true);
            }, 618);
        }, 2382);

        return () => clearInterval(interval);
    }, []);

    const { imagen } = clientesImagenes[currentClientesImagenesIndex];

    return (
        <img className={` border-[16px] border-solid border-white border-opacity-30 inline-block transition-opacity duration-[618ms] ease-in-out ${fade ? 'opacity-100' : 'opacity-0'} `} src={imagen.src} alt='' />
    );
};

export default Clientesimagenes;
