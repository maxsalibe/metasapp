import Encabezado from './Encabezado.js';
import Principal from './Principal.js';
import Pie from './Pie.js';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <Encabezado></Encabezado>
            <Principal>
                <Outlet></Outlet>
                {/* <Lista></Lista>
                <Detalles></Detalles> */}
            </Principal>
            <Pie></Pie>
        </>
    );
}

export default Layout;

