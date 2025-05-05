module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                crt: 'crtFlicker 1s infinite',
                matrix: 'matrixScroll 4s linear infinite',
                pulse: 'pulse 1s steps(1) infinite',
                fadeIn: 'fadeIn 0.6s ease-out forwards',
            },
            keyframes: {
                matrixScroll: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                },
                crtFlicker: {
                    '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '0.1' },
                    '20%, 22%, 24%, 55%': { opacity: '0.3' },
                },
                fadeIn: {
                    '0%': { opacity: 0, transform: 'translateY(8px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
            },
            dropShadow: {
                neon: '0 0 4px #00ff99, 0 0 8px #00ff99',
            },
        },
    },
    plugins: [],
}
