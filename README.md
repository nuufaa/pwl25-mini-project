# pwl25-mini-project - REST API Data Pasien (CRUD)
Nama: [Fitri Nufa Dastana]
NIM: [F1D02310052]

## Ringkasan Proyek
Proyek ini merupakan implementasi REST API CRUD (Create, Read, Update, Delete) untuk mengelola data pasien menggunakan Node.js, framework Express.js, dan database MySQL.
Dirancang dengan menerapkan pola Model-View-Controller (MVC) yang dilengkapi dengan middleware utama seperti Logger, Validator, dan Error Handler untuk meningkatkan modularitas dan keamanan sistem.
## Struktur Folder Proyek
Struktur direktori aplikasi mengikuti pola MVC, yang memisahkan antara logika aplikasi, pengaturan database, serta middleware agar lebih terorganisir dan mudah dikembangkan.

<img width="246" height="479" alt="image" src="https://github.com/user-attachments/assets/38833f1f-ceaf-48f1-b0b9-81689ccef299" />

## Database
Aplikasi ini menggunakan database MySQL dengan nama rumahsakit. Di dalamnya terdapat satu tabel utama bernama pasien yang menyimpan data seperti:
•	id_pasien (Primary Key)
•	nama
•	jenis_kelamin
•	tgl_lahir
•	penyakit
•	tgl_masuk
Struktur tabel ini digunakan untuk menyimpan dan memproses seluruh data pasien yang akan diakses melalui API.

## Penjelasan Kode Utama
Berikut adalah penjelasan singkat untuk setiap file berdasarkan kode yang Anda berikan:
1. config/db.js
Mengatur koneksi ke database MySQL menggunakan mysql2 dengan konfigurasi yang diambil dari file .env.
Tujuannya agar informasi sensitif seperti host, user, dan password tidak langsung ditulis di kode utama.
2. models/pasienModel.js
Berisi seluruh fungsi yang berhubungan dengan database, seperti:
-  getAllPasien() → Menampilkan seluruh data pasien
- getPasienById() → Mengambil data pasien berdasarkan ID
-  addPasien() → Menambah pasien baru
-  updatePasien() → Memperbarui data pasien
-  deletePasien() → Menghapus pasien berdasarkan ID
3. *controllers/pasienController.js *:  Mengatur alur logika CRUD. Controller ini menerima permintaan (request) dari client, memproses data menggunakan model, lalu mengembalikan hasil dalam format JSON response.
Setiap fungsi juga dilengkapi dengan penanganan error jika terjadi kesalahan dalam eksekusi query.
4. *routes/pasienRouter.js *: Mendefinisikan seluruh endpoint utama API, yaitu:
    - GET /pasien → Mengambil semua data pasien
    - GET /pasien/:id → Mengambil data pasien berdasarkan ID
    - POST /pasien → Menambah pasien baru (dengan validasi)
    - PUT /pasien/:id → Memperbarui data pasien berdasarkan ID
    - DELETE /pasien/:id → Menghapus pasien berdasarkan ID
5. middleware/log.js : Middleware yang mencatat setiap aktivitas request (method dan URL) ke konsol, sehingga proses monitoring server lebih mudah dilakukan.
6. *middleware/pasienValidate.js *: Melakukan pengecekan agar semua field wajib seperti nama, jenis_kelamin, tgl_lahir, penyakit, dan tgl_masuk terisi sebelum data dikirim ke database. Jika ada yang kosong, maka akan mengembalikan HTTP 400 (Bad Request).
7. *middleware/errorHandler.js *: Menangani error yang tidak tertangkap oleh proses utama. Jika terjadi error, middleware ini akan mengembalikan respons dengan status HTTP 500 (Internal Server Error) dan menampilkan pesan error yang lebih informatif.

8. app.js Merupakan file utama (entry point) aplikasi. Di dalamnya, Express diinisialisasi, middleware global dipasang, route pasien dihubungkan, serta server dijalankan pada port 4000.
## Implementasi Middleware Wajib
-  Logger (log.js)
Mencatat setiap permintaan (request) yang masuk ke server dengan format METHOD URL.
- Validator (pasienValidate.js)
Memvalidasi input data sebelum request diteruskan ke controller.
- Error Handler (errorHandler.js)
Menangkap semua error tak terduga dan menampilkan respons dengan format JSON agar seragam.

## Hasil Uji API dengan Postman
1.	GET /pasien 
Endpoint ini digunakan untuk mengambil semua data pasien dari database.
Hasil pengujian menunjukkan data pasien berhasil ditampilkan dalam format JSON dengan status "success": true.
2.	GET /pasien/:id
Endpoint ini menampilkan data pasien berdasarkan ID tertentu.
Response berisi informasi lengkap pasien seperti nama, jenis kelamin, tanggal lahir, penyakit, dan tanggal masuk.
3.	POST /pasien
Endpoint ini menambahkan data pasien baru ke database.
Body dikirim dalam format JSON berisi field lengkap pasien, dan server merespons dengan pesan "Pasien sukses ditambahkan" beserta data pasien yang baru dimasukkan.
4.	PUT /pasien/:id
Endpoint ini memperbarui data pasien berdasarkan ID.
Request dikirim dengan data baru, dan response menampilkan pesan "Pasien sukses diedit" menandakan pembaruan berhasil dilakukan.
5.	DELETE /pasien/:id
Endpoint ini menghapus data pasien berdasarkan ID tertentu.
Response JSON menampilkan "success": true dan pesan "Pasien dihapus", yang berarti data berhasil dihapus dari database.
