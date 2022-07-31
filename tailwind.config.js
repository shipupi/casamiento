module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "crema": '#fcfbf9',
        "hoja": '#6b877b',
        "rosa": '#f7bcbb'
      },
      backgroundImage: {
        "couples": "url('@/assets/images/couples.jpg')",
        "texture": "url('@/assets/textures/paper.png')",
        "prewedding": "url('@/assets/prewedding.jpg')"
      },
      fontSize: {
        'xxs': '.65rem',
        'title': '3.5rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  plugins: [],
}
