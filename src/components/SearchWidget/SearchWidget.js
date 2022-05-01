import { Form, Formik } from "formik"
import { SearchField } from "./SearchField"

const formInit = {
  initialValues: {
    search: "",
  },
  onSubmit: () => { },
}

export const SearchWidget = (props) => {
  const { setQuery } = props

  return (
    <Formik {...formInit}>
      <Form>
        <SearchField setQuery={setQuery} />
      </Form>
    </Formik>
  )
}
