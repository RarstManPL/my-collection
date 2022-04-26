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
  },
}
