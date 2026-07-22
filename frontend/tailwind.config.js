/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {

    extend: {

      fontFamily: {

        display: [
          "Playfair Display",
          "serif"
        ],

        sans: [
          "Inter",
          "sans-serif"
        ]

      },


      colors: {

        lunar: {

          pink:"#F9A8D4",
          cyan:"#67E8F9",
          purple:"#B794F4"

        }

      },


      backgroundImage: {

        "lunar-gradient":
        "linear-gradient(135deg,#0f172a,#312e81,#831843)"

      },


      boxShadow: {

        lunar:
        "0 0 40px rgba(103,232,249,0.25)"

      },


      animation: {

        float:
        "float 6s ease-in-out infinite",

        glow:
        "glow 3s ease-in-out infinite"

      },


      keyframes: {

        float: {

          "0%,100%":{
            transform:"translateY(0)"
          },

          "50%":{
            transform:"translateY(-15px)"
          }

        },


        glow: {

          "0%,100%":{
            opacity:"0.6"
          },

          "50%":{
            opacity:"1"
          }

        }

      }

    }

  },


  plugins: []

}