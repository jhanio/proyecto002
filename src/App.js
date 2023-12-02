import logo from './logo.svg';
import './App.css';


function mostrarTitulo(titulo) {
  return (
    <h1>
      {titulo}
    </h1>
  );
}
function App() {
  const title = 'Fin'
  return (
    <div>
      {mostrarTitulo('Hola  capo de capos')}
      <hr></hr>
      <h1>El titulo del libro es :{title}</h1>

    </div>
  );
}
export default App;

// ******************************************************

// function retornarNumeroAleatorio() {
//   return Math.trunc(Math.random * 10);
// }
// function App() {
//   const buscadores = ['https://www.google.com', 'https://www.bing.com', 'https://www.yahoo.com']
//   return (
//     <div>
//       <h1>Ingresa al buscador seleccionandolo:
//         <hr></hr>
//       </h1>
//       <a href={buscadores[0]}>Google</a>,
//       <hr></hr>
//       <a href={buscadores[1]}>Bing</a>,
//       <hr></hr>
//       <a href={buscadores[2]}>Yahoo</a>
//     </div>
//   );
// }
// export default App;

// ******************************************************

// function App() {
//   const siglo = 21;
//   const persona = {
//     nombre: 'crishtian',
//     edad: '17'
//   }
//   return (
//     <div>
//       <h1>Titulo nivel 1</h1>
//       <hr></hr>
//       <p>Estamos en el siglo {siglo}</p>
//       <h3>Acceso aun objeto</h3>
//       <p>El alumno {persona.nombre} tiene {persona.edad} años</p>
//       <hr></hr>
//       <h3>Llamada a una funcion</h3>
//       <p>Un valor aleatorio llamando a un metodo</p>
//       {retornarNumeroAleatorio()}
//       <hr></hr>
//       <h3>Calculo inmediato de expresiones</h3>
//       3+3={3 + 3}
//     </div>
//   );
// }
// export default App;
