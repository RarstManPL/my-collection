import * as Yup from "yup"
import { regularExpressions } from ".."

export const movieConstants = {
  addButton: { text: "Dodaj nowy film" },

  sortMethods: [
    { id: "all", text: "Wszystkie", default: true, value: null },
    { id: "pending", text: "W kolejce", default: false, value: "pending" },
    { id: "ended", text: "Obejrzane", default: false, value: "ended" },
  ],

  formInit: {
    initialValues: {
      title: "",
      year: "",
      cover: "",
      movieid: "",
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .required("Tytuł jest wymagany"),
      year: Yup.number()
        .typeError("Podana wartość musi być liczbą")
        .min(1895, "Aż tak starego filmu nie ma...")
        .max(new Date().getFullYear(), "Nie wybiegaj w przyszłość")
        .required("Rok produkcji jest wymagany"),
      cover: Yup.string()
        .matches(regularExpressions.url, "Podany tekst to nie URL"),
      movieid: Yup.number()
        .typeError("Podana wartość musi być liczbą"),
    }),
  },
}
