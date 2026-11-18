// Backend ka base URL. Build time par VITE_API_URL se aata hai (Docker build arg).
// Local dev me .env nahi hai to localhost:5000 use hoga.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
export default API_URL
