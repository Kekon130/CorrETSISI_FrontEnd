import { useState } from 'react';

export function Form () {
  return (
    <>
      <form encType="multipart/form-data" onSubmit={ printForm }>
        <fieldset>
          <label id="examen-label" htmlFor="examen">
            Examen: <input id="examen" name="examen" type="file"  accept=".jpg" required/>
          </label>
          <label id="puntuacionAcertada-label" htmlFor="puntuacionAcertada">
            Puntuación por acierto: <input id="puntuacionAcertada" name="puntuacionAcertada" 
            type="text" required />
          </label>
          <label id="puntuacionFallo-label" htmlFor="puntuacionFallo">
            Puntuación por fallo: <input id="puntuacionFallo" name="puntuacionFallo" type="text"
            required />
          </label>
          <label id="numPreguntas-label"  htmlFor="numPreguntas">
            Número de preguntas: <input id="numPreguntas" name="numPreguntas" type="text" 
            required />
          </label> 
        </fieldset>
          <input type="submit" value="Corregir" />
      </form>
    </>
  )
}

function printForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form)
  const formDataJSON = Object.fromEntries(formData.entries())
  console.log(formDataJSON)
}