import { useField } from "formik";
import { ServiceItem } from "../ServiceItem"

const ServiceFormPreview = () => {
  const [title] = useField("title")
  const [madeMarker] = useField("year")
  const [cover] = useField("cover")
  
  return (
    <ServiceItem serviceItem={{
      title: title.value,
      author: madeMarker.value,
      src: cover.value,
    }} />
  )
}

export { ServiceFormPreview }
