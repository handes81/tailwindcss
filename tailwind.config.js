/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    
    extend: {
      colors:{
        'bluer' : '#3F7DFF',
        'palo' : '#ece8e1',
        'birupalo' : '#0f1923',
        'merahpalo' : '#ff4655',
      },
      screens:{
        'hp' : '280px',
      },
      fontFamily:{
        'Tungsten': ['Tungsten-bold'],
      },
    },
  },
  // theme.colors: {
  //   extend: {
  //     colors:{
  //       'bluer' : '#72B0FF'
  //     }
     
  //     }
  //   },
  // },
  plugins: [],
}
