import { useEffect } from "react"
import { useResource } from "./useResource"

export const useServiceFiller = (url, condition, success) => {
  const { resource } = useResource(url, condition)

  useEffect(() => {
    if (!resource || Object.keys(resource).length === 0)
      return () => { }

    success(resource)
  }, [resource, success])
}
