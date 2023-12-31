import type { Config } from 'tailwindcss';

export default <Partial<Config>> {
  content: [
    'app.vue',
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md'
  ],
  theme: {
    extend: {},
    colors: {
      snow: '#fff',
      customBlack: '#141414',
      lightYellow: '#FFFCEF',
      redJapan: '#CB4533',
      lightBlack: '#222222',
      lightGray: '#828282',
      milk: '#ECE4CD',
      gray: '#cdcdcd',
      grayHard: '#F2F2F2'
    },
    fontFamily: {
      amiko: ['Amiko', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif']
    }
  },
  plugins: [],
}
