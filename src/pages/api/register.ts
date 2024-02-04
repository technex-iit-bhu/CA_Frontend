import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const response = await fetch(
        'https://ca-api.technex.co.in/auth/register/',
        {
          method: 'POST',
          body: JSON.stringify(req.body),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      } else {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const errorData = await response.json();
          res.status(response.status).json(errorData);
        } else {
          res.status(response.status).end();
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  } else {
    res.status(405).end();
  }
}
