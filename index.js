const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

// CORS engedélyezése
app.use(cors());

// Lokális változó, amit ellenőrizni kell
const localVariable = "1234";

// GET végpont szöveg ellenőrzésére
app.get('/check-code', (req, res) => {
  const { text: code } = req.query; // Kérjük a 'text' paramétert a lekérdezésből
  if (!code) {
    return res.status(400).json({ error: 'Text parameter is required' });
  }

  // Ellenőrizd, hogy a beérkező szöveg megegyezik-e a lokális változóval
  const isMatch = code === localVariable;

  // Válasz visszaadása
  res.json({ match: isMatch });
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
