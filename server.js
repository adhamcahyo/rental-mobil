import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// File paths untuk data pengguna, mobil, peminjaman, dan pengembalian
const USERS_FILE = 'users.json';
const CARS_FILE = 'cars.json';
const RENTALS_FILE = 'rentals.json';
const RETURNS_FILE = 'returns.json';

// Fungsi untuk membaca data dari file JSON
const readFileData = (filePath) => {
  try {
    if (!fs.existsSync(filePath)) {
      return []; // Jika file tidak ada, kembalikan array kosong
    }
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading file ${filePath}:`, err);
    return [];
  }
};

// Fungsi untuk menyimpan data ke file JSON
const writeFileData = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Error writing to file ${filePath}:`, err);
  }
};

// Endpoint Registrasi Pengguna
app.post('/api/register', (req, res) => {
  const userData = req.body;

  // Validasi input
  if (!userData.username || !userData.name || !userData.address || !userData.phone || !userData.license || !userData.password) {
    return res.status(400).json({ success: false, message: 'Semua informasi pengguna harus diisi' });
  }

  const users = readFileData(USERS_FILE);
  const existingUser = users.find(u => u.username === userData.username);

  if (existingUser) {
    return res.status(400).json({ success: false, message: 'Username sudah terdaftar' });
  }

  users.push(userData);
  writeFileData(USERS_FILE, users);
  res.status(200).json({ success: true, message: 'Data pengguna berhasil disimpan' });
});

// Endpoint untuk login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Validasi input
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username dan password harus diisi' });
  }

  const users = readFileData(USERS_FILE);
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    return res.status(200).json({ success: true, message: 'Login berhasil', user });
  } else {
    return res.status(401).json({ success: false, message: 'Username atau password salah' });
  }
});

// Endpoint untuk menambahkan mobil
app.post('/api/cars', (req, res) => {
  const carData = req.body;

  // Validasi input mobil
  if (!carData.brand || !carData.model || !carData.plate || !carData.price) {
    return res.status(400).json({ success: false, message: 'Semua informasi mobil harus diisi' });
  }

  const cars = readFileData(CARS_FILE);

  // Menambahkan mobil baru ke data mobil yang sudah ada
  cars.push(carData);
  writeFileData(CARS_FILE, cars);
  res.status(200).json({ success: true, message: 'Mobil berhasil ditambahkan' });
});

// Endpoint untuk mendapatkan semua mobil
app.get('/api/cars', (req, res) => {
  const cars = readFileData(CARS_FILE);
  if (cars.length === 0) {
    return res.status(404).json({ success: false, message: 'Tidak ada mobil yang tersedia' });
  }
  res.status(200).json({ success: true, cars });
});

// Endpoint untuk mencari mobil berdasarkan merek atau model
app.get('/api/cars/search', (req, res) => {
  const { brand, model } = req.query;
  const cars = readFileData(CARS_FILE);

  const filteredCars = cars.filter(car => {
    return (
      (brand ? car.brand.toLowerCase().includes(brand.toLowerCase()) : true) &&
      (model ? car.model.toLowerCase().includes(model.toLowerCase()) : true)
    );
  });

  if (filteredCars.length === 0) {
    return res.status(404).json({ success: false, message: 'Tidak ada mobil yang ditemukan' });
  }

  res.status(200).json({ success: true, cars: filteredCars });
});

// Error handling middleware untuk menangani error secara umum
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err.stack);
  res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server. Silakan coba lagi nanti.' });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
