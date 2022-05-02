import * as Yup from "yup"
import { regularExpressions } from "../"

export const gameConstants = {
  addButton: { text: "Dodaj nową grę" },

  sortMethods: [
    { id: "all", text: "Wszystkie", default: true, value: null },
    { id: "current", text: "Bieżące", default: false, value: "current" },
    { id: "pending", text: "W kolejce", default: false, value: "pending" },
    { id: "ended", text: "Ograne", default: false, value: "ended" },
  ],

  platforms: [
    { id: "gog", text: "GOG Galaxy", default: true, value: "GOG Galaxy" },
    { id: "steam", text: "Steam", default: false, value: "Steam" },
  ],

  formInit: {
    initialValues: {
      title: "",
      author: "",
      cover: "",
      username: "",
      platform: "GOG Galaxy",
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .required("Tytuł jest wymagany"),
      author: Yup.string()
        .required("Autor jest wymagany"),
      cover: Yup.string()
        .matches(regularExpressions.url, "Podany tekst to nie URL")
    }),
  },
}
