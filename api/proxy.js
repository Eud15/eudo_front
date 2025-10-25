export default async function handler(req, res) {
  // --- Autorisations CORS ---
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // --- URL de ton backend ---
  const backendUrl = `http://31.97.53.56:8050${req.url}`;

  try {
    // --- Nettoyage d’en-têtes ---
    const { host, connection, 'content-length': _, ...safeHeaders } = req.headers;

    // Ne force PAS de Content-Type, on laisse passer celui du client
    const response = await fetch(backendUrl, {
      method: req.method,
      headers: safeHeaders,
      body: req.method !== 'GET' ? req.body : undefined, // ⚠️ pas de JSON.stringify ici
    });

    // --- Lecture de la réponse ---
    const contentType = response.headers.get('content-type') || 'text/plain';
    const text = await response.text();

    res.setHeader('Content-Type', contentType);
    res.status(response.status).send(text);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy request failed' });
  }
}
