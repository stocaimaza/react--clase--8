import './App.css';
//import Articulos from './components/Articulos/Articulos';
import Hooks from './components/Hooks/Hooks';

//Importamos la función y el componente Mensaje: 

import Mensaje from './components/Patrones/Mensaje';
import { mensajeConTitulo, conAumento  } from './components/Patrones/Hoc';
import Producto from './components/Patrones/Producto';

//Importamos el ejemplo de Render Props: 

import Loguear from './components/Patrones/Loguear';

function App() {

  const NuevoComponente = mensajeConTitulo(Mensaje)
  const NuevoProducto = conAumento(Producto);

  return (
    <>
      {
        /*
        <h1>Blog sobre Gatitos</h1>
      <h2>Noticias</h2>
      <Articulos titulo="Alimentos nuevos" img="https://placekitten.com/200/287">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, consequatur voluptas vitae quas aut dicta minima eveniet, inventore asperiores et laborum, animi fugit repudiandae atque quibusdam. Commodi harum iusto rerum!</p>
        <strong>Tiempo de lectura 2 minutos </strong>
      </Articulos>

      <h2>Recetas</h2>

      <Articulos titulo="Recetas con cereal" img="https://placekitten.com/200/139">
        <p>RECETAS PARA GATOS</p>
      </Articulos>
        */
      }

      {
        //<Hooks/>
      }

      <NuevoComponente/>
      <hr />
      <NuevoProducto nombre="Tomates" precio={100} />

      <hr />

      <Loguear/>

    </>
  );
}

export default App;
