/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1720px",
    },
    extend: {
      textColor: {
        primary: "#FF00FF",
        secondary: "#BF00FF",
        pink: "#FF00FF",
        "dark-main": "#0A0C11",
        "dark-secondary": "rgb(19, 24, 35)",
        "light-main": "#D2D6EE",
      },
      backgroundColor: {
        pink: "#FF00FF",
        // primary:
        //   "linear-gradient(55deg, rgba(217,52,208,1) 0%, rgba(63,196,220,1) 100%)",
        secondary: "#BF00FF",
        "dark-main": "#0A0C11",
        "dark-secondary": "rgb(19, 24, 35)",
        "dark-tertiary": "#205d7d",
      },
      backgroundImage: () => ({
        "dark-primary":
          "linear-gradient(90deg, rgba(15,4,26,1) 0%, rgba(47,6,65,1) 50%, rgba(45,5,51,1) 100%)",
        "light-primary":
          "linear-gradient(55deg, rgba(105,30,101,1) 0%, rgba(87,9,79,1) 75%, rgba(47,6,65,1) 100%)",
        "blue-primary":
          "linear-gradient(55deg, rgba(247,249,249,1) 0%, rgba(0,221,235,1) 50%, rgba(87,9,79,1) 100%)",

        lavender: "linear-gradient(to right, #d49cc7, #0f041a)",
        "vibrant-purple": "linear-gradient(to right, #691e65, #57094f)",
        "rich-purple": "linear-gradient(to right, #2f0641, #2d0533)",
        "light-purple": "linear-gradient(to right, #84848b, #7f5295)",
        "tone-purple": "linear-gradient(to right, #44444c, #24242c)",
        primary:
          "linear-gradient(55deg, rgba(105,30,101,1) 0%, rgba(87,9,79,1) 100%)",
        secondary: "#BF00FF",
        // heroImg: "url('/assets/background/hero-img.jpg')",
        // landing: "url('/assets/background/landing.jpg')",
      }),
      width: {
        "10%": "10%",
        "12.5%": "12.5%",
        "30%": "30%",
        "45%": "45%",
        "55%": "55%",
        "60%": "60%",
      },
      height: {
        "10%": "10%",
        "30%": "30%",
        "45%": "45%",
        "60%": "60%",
      },
      borderColor: {
        primary: "#FF00FF",
        secondary: "#BF00FF",
        "dark-main": "#8F8686",
        "light-main": "#D2D6EE",
      },
      keyframes: {
        lightning: {
          "0%": {
            opacity: 0,
          },
          "50%": {
            opacity: 0.25,
          },
          "80%": {
            opacity: 0.5,
          },
          "90%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        pulse: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        shadowColorChange: {
          "0%": {
            boxShadow: "0px 0px 10px 5px #ee3a00",
          },
          "33%": {
            boxShadow: "0px 0px 10px 5px #17e8fe",
          },
          "66%": {
            boxShadow: "0px 0px 10px 5px #e23bfd",
          },
          "100%": {
            boxShadow: "0px 0px 10px 5px #eb7744",
          },
          // "100%": {
          //   boxShadow: "0px 0px 10px 5px #895335",
          // },
        },
        lightSpeedInLeft: {
          "0%": {
            transform: "translateX(-100%) skewX(-30deg)",
            opacity: 0,
          },
          "60%": {
            transform: "translateX(20%) skewX(20deg)",
            opacity: 1,
          },
          "80%": {
            transform: "translateX(-5%) skewX(-5deg)",
            opacity: 1,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideInFromTop: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        slideInFromLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideInFromRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        slideInFromBottom: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        pulse: "pulse 1s infinite",
        pulseBasic: "pulse 1s ease",
        bounceSlow: "bounce 1.5s infinite",
        slideInTopBasic: "slideInFromTop 1s ease-out",
        slideInRightBasic: "slideInFromRight 1s ease",
        slideInLeftBasic: "slideInFromLeft 1s ease",
        slideInBottomBasic: "slideInFromBottom 1s ease",
        slideInTopFast: "slideInFromTop 0.5s ease-out",
        slideInRightFast: "slideInFromRight 0.5s ease",
        slideInLeftFast: "slideInFromLeft 0.5s ease",
        slideInBottomInstant: "slideInFromBottom 0.25s ease",
        lightSpeedInLeftFast: "lightSpeedInLeft 0.5s ease-out",
        lightSpeedInLeftBase: "lightSpeedInLeft 1s ease-out",
        fadeInInstant: "fadeIn 0.25s ease",
        fadeInBasic: "fadeIn 0.5s ease",
        fadeInBase: "fadeIn 1s ease",
        lightningBase: "lightning 2s infinite",
        shadowColorChangeMythical: "shadowColorChange 5s infinite",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

// linear-gradient(90deg, rgba(212,156,199,1) 0%, rgba(15,4,26,1) 100%)
// linear-gradient(to right, #d49cc7, #0f041a)
// linear-gradient(to right, #691e65, #57094f)
// linear-gradient(to right, #2f0641, #2d0533)
// linear-gradient(to right, #84848b, #7f5295)
// linear-gradient(to right, #44444c, #24242c)
