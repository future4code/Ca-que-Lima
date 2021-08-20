import { useState, useEffect } from "react"
import axios from "axios"

export const useRequestData = (url, headers) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(url, headers)
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setError(err);
        setIsLoading(false)
      })
  }, [url, headers])

  return [data, isLoading, error]
}
