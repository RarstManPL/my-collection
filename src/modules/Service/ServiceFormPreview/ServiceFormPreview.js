import { useField } from "formik";
import { ServiceItem } from "../"

export const ServiceFormPreview = () => {
  const [title] = useField("title")
  const [author] = useField("author")
  const [year] = useField("year")
  const [cover] = useField("cover")

  return (
    <ServiceItem serviceItem={{
      title: title.value,
      author: author.value ? author.value : year.value,
      cover: cover.value,
    }} />
  )
}
