import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Contexto } from "../../servicios/Memoria";
import { pedirMetas } from "../../servicios/Pedidos";
import Meta from "./Meta";

function Lista() {
    
    const [estado, enviar] = useContext(Contexto);

    useEffect(() => {
        
        (async () => {
            const metas = await pedirMetas();
            console.log('Soy \'metas\' y llego a Lista.js\nen el tipo ' + typeof metas + '. Aquí me presento:', metas);
            enviar({tipo: 'colocar', metas});
        })()
    }, []);

    return (
        <>
        {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}></Meta>)}
        <Outlet />
        </>
    );
}

export default Lista;