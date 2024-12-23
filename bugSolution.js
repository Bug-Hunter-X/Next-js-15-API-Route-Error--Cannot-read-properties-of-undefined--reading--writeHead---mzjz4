```javascript
// pages/api/route.js
export default async function handler(req, res) {
  // Wrap the response in a Promise to handle potential async issues
  const responsePromise = new Promise(resolve => {
      setTimeout(() => resolve({ text: 'Hello' }), 0);
  });

  try {
    const response = await responsePromise;
    res.status(200).json(response);
  } catch (error) {
    console.error("Error in API route:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
```