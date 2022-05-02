const path = require("path");
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, "src/components/"),
      '@assets': path.resolve(__dirname, "src/assets/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
      "@modules": path.resolve(__dirname, "src/modules/"),
      "@contexts": path.resolve(__dirname, "src/context/"),
      "@hooks": path.resolve(__dirname, "src/hooks/"),
      "@fbase": path.resolve(__dirname, "src/firebase/"),
      "@pages": path.resolve(__dirname, "src/pages/")
    }
  }
}