import { useState, useEffect } from "react"

export const useResource = (url) => {
  const [resource, setResource] = useState(null)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

      (async () => {
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
      })()

    return controller.abort
  }, [url])

  return { resource, ready, error }
}
