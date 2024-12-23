```javascript
// pages/api/route.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
```
This API route works fine in Next.js 14. However, in Next.js 15, it throws an error: `TypeError: Cannot read properties of undefined (reading 'writeHead')`.  This happens inconsistently, seemingly dependent on other code execution.