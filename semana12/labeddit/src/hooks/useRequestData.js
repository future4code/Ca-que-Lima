  
import { useState, useEffect } from "react"
import axios from "axios"

const useRequestData = (url, headers) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
//   const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(url, headers)
      .then((res) => {
        // if(mounted) {
          setData(res.data)
          setIsLoading(false)
        //   setMounted(false)
        // }
      }).catch((err) => {
        setError(err.response.data);
        // setIsLoading(false)
      })
  }, [])

  return [data, isLoading, error]
}

export default useRequestData