export const API_ROOT = (process.env.NODE_ENV === 'production')
    ? 'https://library.within.name/api'
    : 'https://library.dev/api';