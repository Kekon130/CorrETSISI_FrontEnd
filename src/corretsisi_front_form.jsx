import { useEffect, useState } from 'react';
import { Examen } from './Components/Examen';

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    
  })
}

export function App () {

  const aux = {
    "Nota": -7.5,
    "NumAciertos": 19,
    "NumFallos": 53
  }

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
      <main>
        <Examen examen={ aux } />
      </main>
    </>
  )
}

function printForm(event) {
  event.preventDefault();
  const form = event.target;
  const formData = Object.fromEntries(new FormData(form));
  console.log(formData);
  /*const formDataJSON = Object.fromEntries(formData.entries())
  const response = axios.post('http://localhost:5000/', formDataJSON)
  console.log(response)*/
}