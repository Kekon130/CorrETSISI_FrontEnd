const API_route = 'http://localhost:5000/'

export async function CorrectExam({ exam }) {
  try {
    const respuesta = await fetch(API_route, { body: exam })
    const resultado = await respuesta.json()

    return {
      numAciertos: resultado.NumAciertos,
      numFallos: resultado.NumFallos,
      numBlanco: resultado.NumBlanco,
      calificacion: resultado.Calificacion
    }
    
  } catch(e) {
    throw new Error('Ha ocurrido un error mientras se corregía el examen.')
  }
}