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
      author: "",
      cover: "",
    },
  },
}
