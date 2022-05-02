import * as Yup from "yup"
import { regularExpressions } from "../"

export const bookConstants = {
  addButton: { text: "Dodaj nową książkę" },

  sortMethods: [
    { id: "all", text: "Wszystkie", default: true, value: null },
    { id: "current", text: "Bieżące", default: false, value: "current" },
    { id: "pending", text: "W kolejce", default: false, value: "pending" },
    { id: "ended", text: "Przeczytane", default: false, value: "ended" },
  ],

  formInit: {
    initialValues: {
      isbn: "",
      title: "",
      author: "",
      cover: "",
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .required("Tytuł jest wymagany"),
      author: Yup.string()
        .required("Autor jest wymagany"),
      cover: Yup.string()
        .matches(regularExpressions.url, "Podany tekst to nie URL"),
      isbn: Yup.string()
        .matches(regularExpressions.isbn, "Podany tekst to nie ISBN"),
    }),
  },
}
