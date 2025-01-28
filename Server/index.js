require('dotenv').config();

const mysql = require('mysql2');
const express = require('express'); //เรียกใช้ express ผ่าน require
const cors = require('cors');

const app = express(); //สร้างตัวแปร myApp เพื่อใช้งาน express 
app.use(express.json());
const port = process.env.DB_HOST | 3500; //พอร์ตของ Server ที่ใช้ในการเปิด Localhost 

// Enable all CORS requests
app.use(cors());

// MySQL connection setup
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER, // Your MySQL username
    password: process.env.DB_PASS,  // Your MySQL password
    database: 'yourdatabase',  // Your database name
});
  
// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + db.threadId);
});


// API endpoint to get users from the database
app.get('/items', (req, res) => {
    db.query('SELECT * FROM items', (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Server Error');
      } else {
        res.json(results);
      }
    });
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

app.listen(port, () => {
  console.log(`Server running at <http://localhost>:${port}/`);
});