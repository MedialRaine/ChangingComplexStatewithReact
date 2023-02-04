import React, { useState } from "react";

function App() {
  //Aquí estamos inicializando el hook para poder acceder al estado del sitio web
  //Creamos fullName para hacer una constante que guarde el primer nombre(fName) y el apellido(lName)
  //Inicializamos todo en un string vacío para su posterior uso.
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  //Esta es la función que nos va a permitir de guardar y manejar los cambion dentro de nuestros inputs.
  function handleChange(event) {
    //Gracias a la desestructuracion del código podemos crear dos variable(const) a partir del event.target
    //ya que de otra manera deberíamos de utilizar la siguiente manera: const newValue = event.target.value, y eso solo para acceder a un solo atributo.
    const { value, name } = event.target;

    //Aqui es donde vamos a declarar qué es lo que nuestra funcion arriba declarada, va a hacer una vez se invoque.
    setFullName((prevValue) => {
      //prevValue es una propiedad de React que nos permite acceder al valor previo de nuestra página.
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
        //Aqui declaramos que en caso de que el nombre del campo donde ocurre el cambio sea igual que el string "fName",
        //entonces actualizamos el campo fName al valor de entrada del input, pero al mismo tiempo actualizamos el valor
        //del string "lName" a su valor anterior.
        // y es lo mismo para el caso de que el input con el nombre "lName", se actualiza "lName"pero se recupera el fName.
      }
    });
  }

  //Finalmente dentro del return enviamos junto con el hello nuestros atributos del nombre completo
  //utilizamos onChange porque es la propiedad que nos permite ver si hay un cambio, esto, para que en caso de que sí haya un cambio
  //se llame a la function handleChange. Y por ultimo siempre debemos hacer que el value de nuestro input
  //sea igual a su nombre para que sea más coherente.
  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
