import { useField } from "formik"
import { ServiceItem } from "../"

export const ServiceFormPreview = (props) => {
  const { id, collection, redirect } = props

  const [title] = useField("title")
  const [author] = useField("author")
  const [year] = useField("year")
  const [cover] = useField("cover")

  return (
    <ServiceItem controls={id ? true : false} redirect={redirect} serviceItem={{
      title: title.value,
      author: author.value ? author.value : year.value,
      cover: cover.value,
      id: id,
      collection: collection,
    }} />
  )
}
