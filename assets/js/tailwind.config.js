const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter'],
            },
            colors: {
               gray: colors.blueGray, 
            },
            animate: {
    //4 values: 1-name of animation 2- length 3-Timing function 4-amount of cycles         
                spin: "spin 5s linear infinite",
                pulse: "pulse 1s linear infinite",
                ping: "ping 1s linear infinite",
                bounce: "bounce 1s linear infinite",
                wiggle: "wiggle 1s ease-in-out infinite",


            },
            keyframes: {},
        },
    },
    variants: {},
    plugins: {},
}

