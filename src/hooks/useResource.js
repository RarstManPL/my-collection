import { useState, useEffect } from "react"

export const useResource = (url, condition = true) => {
  const [resource, setResource] = useState(null)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    if (!condition)
      return () => { }

    const controller = new AbortController()

    const fetchData = async () => {
      setReady(false)

      try {
        const response = await fetch(url, { signal: controller.signal })

        if (!response.ok)
          throw new Error(response.statusText)

        const data = await response.json()
        setResource(data)
        setError(null)
      }
      catch (error) {
        if (error.name !== "AbortError")
          setError(error.message)
      }

      setReady(true)
    }

    fetchData()

    return () => controller.abort()
  }, [url, condition])

  return { resource, ready, error }
}
