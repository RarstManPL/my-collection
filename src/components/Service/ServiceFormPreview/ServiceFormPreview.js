import { useField } from "formik";
import { ServiceItem } from "../"

export const ServiceFormPreview = () => {
  const [title] = useField("title")
  const [author] = useField("author")
  const [cover] = useField("cover")

  return (
    <ServiceItem serviceItem={{
      title: title.value,
      author: author.value,
      cover: cover.value,
    }} />
  )
}
