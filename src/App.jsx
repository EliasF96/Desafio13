import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Formulario } from './Componentes/form';
import { Message } from './Componentes/message';


function App() {
    const [message,setMessage]=useState('')

    function validate (data1, data2){
        data2 <18 
        ? setMessage( <p><strong className="red">Hola {data1}, eres muy joven para usar esta aplicación: </strong></p>)
        : setMessage(<p><strong className="green">Bienvenido {data1}, gracias por usar nuestra aplicación</strong></p>)

   
 }
    return(
    <>
        <div className="App">
            <Formulario validate={validate} ></Formulario>
            <Message message={message}/>
        </div>
    </>
    )
}
export default App;