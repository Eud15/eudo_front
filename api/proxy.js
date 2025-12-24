export default async function handler(req, res) {
  // Autoriser le CORS (important si ton frontend appelle ce proxy)
  // Autorisations du  CORS (important si ton frontend appelle ce proxy)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // URL complète vers ton backend
  const backendUrl = `http://31.97.53.56:8050${req.url}`;

  try {
    // Filtrer certains headers incompatibles
    const { host, connection, 'content-length': _, 'content-type': __, ...safeHeaders } = req.headers;

    // Set up timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 40000); // 10 seconds

    const response = await fetch(backendUrl, {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        ...safeHeaders,
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const text = await response.text();
    res.status(response.status).send(text);
  } catch (error) {
    console.error('Proxy error:', error);
    if (error.name === 'AbortError') {
      res.status(504).json({ error: 'Gateway Timeout' });
    } else {
      res.status(500).json({ error: 'Proxy request failed' });
    }
  }
}