const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                neutral: colors.neutral
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                Roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
                RobotoCondensed: ['Roboto Condensed', ...defaultTheme.fontFamily.sans],
                NotoSerif: ['Noto Serif', ...defaultTheme.fontFamily.sans],
                Raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
                Economica: ['Economica', ...defaultTheme.fontFamily.sans],
                Rubik: ['Rubik', ...defaultTheme.fontFamily.sans]
            },
            backdropGrayscale: {
              10: '.1',
              20: '.2',
              30: '.3',
              40: '.4',
              50: '.5',
              60: '.6',
              70: '.7',
              80: '.8',
              90: '.9',
              100: '1'
            }
        }
    },
    plugins: []
};
