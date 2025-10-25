export default async function handler(req, res) {
  const backendUrl = `http://31.97.53.56:8050${req.url}`; 

  try {
    const { host, ...headers } = req.headers;
    const response = await fetch(backendUrl, {
      method: req.method,
      headers: {
        ...headers,
        host: new URL(backendUrl).host,
      },
      body: req.method !== 'GET' ? req.body : undefined,
    });

    const text = await response.text();
    res.status(response.status).send(text);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy request failed' });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
