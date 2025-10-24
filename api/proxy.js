export default async function handler(req, res) {
  const backendUrl = `http://31.97.53.56:8050${req.url}`; // ton backend sans HTTPS

  try {
    const response = await fetch(backendUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...req.headers, // transmet les headers si besoin (token, etc.)
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    const text = await response.text();

    // Réponse brute pour gérer JSON, texte ou erreurs
    res.status(response.status).send(text);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy request failed' });
  }
}