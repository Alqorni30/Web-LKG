import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    colors: {
      'hover': '#EEF1F9',
      'primary': '#5976C6',
      'pink': '#D86D94',
      'card': '#F3F8FA',
      'orange-muda' : '#FCF4EB',
    }
    },
  },
  plugins: [],
}
export default config
