export default async function handler(req, res) {
  // Récupérer le chemin dynamique
  const { path } = req.query;
  const apiPath = Array.isArray(path) ? path.join('/') : path;
  
  const apiUrl = `http://31.97.53.56:8050/api/${apiPath}`;
  
  console.log('🔄 Proxying:', req.method, apiUrl);

  try {
    const options = {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      }
    };

    // Ajouter l'Authorization header si présent
    if (req.headers.authorization) {
      options.headers.Authorization = req.headers.authorization;
    }

    // Ajouter le body pour POST/PUT/PATCH
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      options.body = JSON.stringify(req.body);
    }

    const response = await fetch(apiUrl, options);
    const data = await response.json();

    res.status(response.status).json(data);
    
  } catch (error) {
    console.error('❌ Proxy error:', error);
    res.status(500).json({ 
      error: 'Erreur de connexion au serveur',
      message: error.message 
    });
  }
}