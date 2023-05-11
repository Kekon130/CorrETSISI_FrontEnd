function ShowExamen({ examen }) {
  console.log(examen)
  return(
    <div className="examen">
      <p className="NumRespuestas">Número de respuestas acertadas: { examen.NumAciertos }</p>
      <p className="NumRespuestas">Número de respuestas erroneas: { examen.NumFallos }</p>
      <p className="Nota">Nota: { examen.Nota }</p>
    </div>
  )
}

function NoExamen() {
  return(
    <p>Aún no se ha enviado un examen para calificar.</p>
  )
}

export function Examen({ examen }) {
  const hasExam = examen != null

  return(
    hasExam ? <ShowExamen examen={examen} /> : <NoExamen />
  )
}