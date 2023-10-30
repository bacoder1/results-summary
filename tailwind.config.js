/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-red': 'hsl(0, 100%, 67%)',
        'lighter-red': 'hsla(0, 100%, 67%, 0.05)',
        'orangey-yellow': 'hsl(39, 100%, 56%)',
        'light-orangey-yellow': 'hsla(39, 100%, 56%, 0.05)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'light-green-teal': 'hsla(166, 100%, 37%, 0.05)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        'light-cobalt-blue': 'hsla(234, 85%, 45%, 0.05)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'hanken': 'Hanken Grotesk, sans-serif',
    },
  },
  plugins: [],
}

