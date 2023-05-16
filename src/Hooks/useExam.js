import { useCallback, useState } from "react";
import { CorrectExam } from "../Services/Examns";

export function useExams ({ form }) {
  const [loading, setLoading] = useState(false)
  const [examen, setExamen] = useState({
    
  })

  const getExamen = useCallback(async ({ form }) => {
    try {
      console.log("useExam: " + form)
      setLoading(true)
      const newExam = CorrectExam(form)
      setExamen(newExam)

    } catch (e) {
      console.log(e.message)
    } finally {
      setLoading(false)
    }
  }, [])
  return [ examen, getExamen, loading ]
}