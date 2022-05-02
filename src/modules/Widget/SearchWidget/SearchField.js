import { useEffect, useState } from "react"
import { useField } from "formik"

import { Input } from "@modules/Form"

export const SearchField = (props) => {
  const { setQuery } = props
  const [field] = useField("search")
  const [lastCount, setLastCount] = useState(0)

  useEffect(() => {
    if (field.value.length > 2 || lastCount > field.value.length)
      setQuery(field.value)
    setLastCount(field.value.length)
  }, [field, lastCount, setQuery])

  return (
    <Input
      name="search"
      type="text"
      placeholder="Wyszukaj"
      required={false}
    />
  )
}
