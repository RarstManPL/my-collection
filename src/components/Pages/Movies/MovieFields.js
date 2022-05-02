import { useCallback } from "react"
import { useField, useFormikContext } from "formik"

import { Input } from "../../"
import { useServiceFiller } from "../../../hooks"

const apiKey = process.env.REACT_APP_THEMOVIEDB_KEY

export const MovieFields = () => {
  const { setFieldValue } = useFormikContext()
  const [field] = useField("movieid")

  const fillForm = useCallback((resource) => {
    setFieldValue("title", resource.title)
    setFieldValue("year", new Date(resource.release_date).getFullYear())
    setFieldValue("cover", `https://image.tmdb.org/t/p/original/${resource.poster_path}`)
  }, [setFieldValue])

  useServiceFiller(
    `https://api.themoviedb.org/3/movie/${field.value}?api_key=${apiKey}&language=pl-PL`,
    Number.isInteger(Number.parseInt(field.value)),
    fillForm
  )

  return (
    <>
      <Input
        label="ID filmu"
        name="movieid"
        type="text"
        placeholder="ID filmu"
        required={false}
      />

      <Input
        label="Tytuł"
        name="title"
        type="text"
        placeholder="Straszny film 5"
        required={true}
      />

      <Input
        label="Rok"
        name="year"
        type="text"
        placeholder="2005"
        required={true}
      />

      <Input
        label="Okładka"
        name="cover"
        type="text"
        placeholder="https://imgur.com/"
        required={false}
      />
    </>
  )
}
