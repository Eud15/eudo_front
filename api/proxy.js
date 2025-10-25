export default async function handler(req, res) {
  const backendUrl = `http://31.97.53.56:8050${req.url}`;
  
  console.log('🔄 Proxying:', req.method, backendUrl);

  try {
    
    const headers = {};
    
    
    if (req.headers['content-type']) {
      headers['Content-Type'] = req.headers['content-type'];
    }
    
    if (req.headers['authorization']) {
      headers['Authorization'] = req.headers['authorization'];
    }
    
    if (req.headers['accept']) {
      headers['Accept'] = req.headers['accept'];
    }

    console.log('📤 Headers envoyés au backend:', headers);

    const fetchOptions = {
      method: req.method,
      headers: headers
    };

    // Ajouter le body pour POST/PUT/PATCH/DELETE
    if (req.method !== 'GET' && req.method !== 'HEAD' && req.body) {
      fetchOptions.body = JSON.stringify(req.body);
      console.log('📦 Body:', req.body);
    }

    const response = await fetch(backendUrl, fetchOptions);
    const text = await response.text();
    
    console.log('✅ Response status:', response.status);
    
    res.status(response.status).send(text);
    
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy request failed', message: error.message });
  }
}