// plugins/axios.js
import axios from 'axios'

// Configuration de base
const $http = axios.create({
  baseURL: '/api/',
  
  headers: {
  
  }
})

// Intercepteur de requête
$http.interceptors.request.use(
  (config) => {
    // Ajouter le token d'authentification si disponible
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // Log en développement
    if (import.meta.env.DEV) {
      console.log('📤 Request:', config.method?.toUpperCase(), config.url)
    }

    return config
  },
  (error) => {
    console.error('❌ Request Error:', error)
    return Promise.reject(error)
  }
)

// Intercepteur de réponse
$http.interceptors.response.use(
  (response) => {
    // Log en développement
    if (import.meta.env.DEV) {
      console.log('📥 Response:', response.status, response.config.url)
    }

    return response
  },
  (error) => {
    console.error('❌ Response Error:', error.response?.status, error.response?.data)

    // Gestion des erreurs courantes
    if (error.response) {
      switch (error.response.status) {
        case 400:
          error.message = 'Données invalides'
          break
        case 401:
          error.message = 'Non autorisé'
          // Rediriger vers la page de connexion si nécessaire
          break
        case 403:
          error.message = 'Accès refusé'
          break
        case 404:
          error.message = 'Ressource non trouvée'
          break
        case 500:
          error.message = 'Erreur serveur'
          break
        default:
          error.message = error.response.data?.message || 'Une erreur est survenue'
      }
    } else if (error.request) {
      error.message = 'Pas de réponse du serveur. Vérifiez votre connexion.'
    } else {
      error.message = 'Erreur lors de la configuration de la requête'
    }

    return Promise.reject(error)
  }
)

export default $http
