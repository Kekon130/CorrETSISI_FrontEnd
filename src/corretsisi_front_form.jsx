import { useEffect, useState } from 'react';
import { Examen } from './Components/Examen';
import { useExams } from './Hooks/useExam';
import './corretsisi_front_form.css'

export function App () {
  const [form, setForm] = useState(new FormData())
  const [examen, getExamen, loading] = useExams(form)

  function processForm(event) {
    event.preventDefault();
    const form = event.target;
    const formData = Object.fromEntries(new FormData(form));
    setForm(formData)
    getExamen({ form })
  }  

  return (
    <>
      <form encType="multipart/form-data" onSubmit={ processForm }>
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
        {
          loading ? <p>Corrigiendo...</p> : <Examen examen={ examen } />
        }
      </main>
    </>
  )
}