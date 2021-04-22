import React, { useState } from "react";

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();

    let errList = [];

    if (name === "" || mail === "" || mensaje === "") {
      errList.push("Algun campo vacio");
    }

    if (!mail.includes("@")) {
      errList.push("Mail no valido");
    }

    if (errList.length === 0) {
      alert("Mensaje enviado correctamente");
    } else {
      alert(errList[0]);
    }
  };

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [mensaje, setMensaje] = useState("");

  return (
    <div className="bg-green-700 text-white text-center py-8 mt-16">
      <h2 className="text-4xl font-semibold">Contacto:</h2>
      <form onSubmit={handleSubmit}>
        <label className="text-2xl">Nombre y apellidos:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(x) => setName(x.target.value)}
          className="h-8 w-60 text-black "
        />
        <br />

        <label className="text-2xl">E-mail:</label>
        <br />
        <input
          type="email"
          value={mail}
          onChange={(x) => setMail(x.target.value)}
          className="h-8 w-60 text-black"
        />
        <br />

        <label className="text-2xl">Mensaje:</label>
        <br />
        <textarea
          className="h-64 w-60 text-black"
          value={mensaje}
          onChange={(x) => setMensaje(x.target.value)}
        ></textarea>
        <br />

        <input
          type="submit"
          className="bg-green-500 hover:bg-green-600 h-8 w-60 "
        />
      </form>
    </div>
  );
}

export default Form;
