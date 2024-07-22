import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { sendto, name, replyTo, ishtml, title, body } = req.body;

    const url = 'https://mail-sender-api1.p.rapidapi.com/';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': 'a30fef7067mshbf0600855ae6716p14afd6jsnd78bb80286a2',
        'x-rapidapi-host': 'mail-sender-api1.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sendto,
        name,
        replyTo,
        ishtml,
        title,
        body,
      }),
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Handle response from the API as needed
      console.log('Email sent successfully:', data);
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
