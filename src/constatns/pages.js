import { regularExpressions } from "./"
import * as Yup from "yup"

const pages = {
  books: {
    addButton: { text: "Dodaj nową książkę" },

    sortMethods: [
      { id: "all", text: "Wszystkie", default: true, value: null },
      { id: "current", text: "Bieżące", default: false, value: "current" },
      { id: "pending", text: "W kolejce", default: false, value: "pending" },
      { id: "ended", text: "Przeczytane", default: false, value: "ended" },
    ],

    formInit: {
      initialValues: {
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
          .matches(regularExpressions.url, "Podany tekst to nie URL")
      }),
    },
  },

  games: {
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
    },
  },

  movies: {
    addButton: { text: "Dodaj nowy film" },

    sortMethods: [
      { id: "all", text: "Wszystkie", default: true, value: null },
      { id: "pending", text: "W kolejce", default: false, value: "pending" },
      { id: "ended", text: "Obejrzane", default: false, value: "ended" },
    ],

    formInit: {
      initialValues: {
        title: "",
        author: "",
        cover: "",
      },
    },
  },
}

export { pages }
