// pages/api/register.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const response = await fetch('https://ca-backend-467n.onrender.com/auth/login/', {
          method: 'POST',
          body: JSON.stringify(req.body), // Pass the request body as-is
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          res.status(200).json(data); // Forward the response from the external API
        } else {
          res.status(response.status).end();
        }
      } catch (error) {
        console.error(error);
        res.status(500).end();
      }
    } else {
      res.status(405).end();
    }
  }
  