import estilos from './Principal.module.css';
import Vinculo from './Vinculo.js'; 
import {ReactComponent as ListaSVG} from '../../img/lista.svg';
import {ReactComponent as NuevaSVG} from '../../img/nueva.svg';

function Principal({children}) {
    return (
      <>
        <div className={estilos.principal}>
          <aside className={estilos.aside}>
            <Vinculo 
              href="/lista" 
              texto="Lista de metas"
              Icono={ListaSVG}
            />
            <Vinculo 
              href="/crear" 
              texto="Nueva meta"
              Icono={NuevaSVG}
            />
          </aside>
          <main className={estilos.main}>
              {children}
          </main>
        </div>
      </>
    );
  }
  
  export default Principal;