# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Marketplace Digital Product

## Deskripsi Project

Marketplace Digital Product merupakan aplikasi web sederhana yang dibuat menggunakan React.js sebagai Frontend. Aplikasi ini memiliki fitur autentikasi (Login dan Register), pengelolaan pengguna, serta halaman Dashboard yang hanya dapat diakses oleh pengguna yang sudah login.

Project ini dibuat sebagai media pembelajaran mengenai pembuatan Single Page Application (SPA) menggunakan React, React Router, Axios, dan Context API.

---

## Tujuan Project

Tujuan pembuatan project ini adalah:

- Mempelajari penggunaan React.js.
- Memahami cara kerja React Router.
- Menghubungkan Frontend dengan REST API menggunakan Axios.
- Menerapkan sistem Login dan Logout.
- Membuat halaman yang hanya dapat diakses oleh user yang sudah login (Protected Route).
- Mempelajari penggunaan Context API untuk menyimpan data user yang sedang login.

---

## Teknologi yang Digunakan

Project ini dibuat menggunakan beberapa teknologi berikut:

- React JS
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Context API
- JavaScript (ES6)
- HTML5
- CSS3

---

## Struktur Folder

```
src
│
├── api
│   └── client.js
│
├── assets
│
├── components
│   ├── layout
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Registration.jsx
│   │   ├── Users.jsx
│   │   ├── UserDetail.jsx
│   │   ├── Categories.jsx
│   │   ├── Trending.jsx
│   │   ├── FeaturedProduct.jsx
│   │   ├── Footer.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   └── shared
│
├── context
│   └── AuthContext.jsx
│
├── App.jsx
└── main.jsx
```

---

## Fitur Aplikasi

Beberapa fitur yang tersedia pada aplikasi ini yaitu:

- Login User
- Register User
- Logout
- Dashboard
- Menampilkan daftar user
- Melihat detail user
- Protected Route
- Menyimpan status login menggunakan Context API
- Integrasi API menggunakan Axios
- Responsive Layout menggunakan Tailwind CSS

---

## Dependency

Beberapa package yang digunakan pada project ini yaitu:

- react
- react-dom
- react-router-dom
- axios
- tailwindcss
- vite

---

## Alur Login

1. User melakukan Login.
2. Data dikirim ke REST API menggunakan Axios.
3. Jika Login berhasil maka token disimpan.
4. Data user disimpan pada Context API.
5. User diarahkan ke Dashboard.
6. Protected Route akan mengecek apakah user sudah Login atau belum.

---

## Halaman yang Tersedia

- Home
- Login
- Register
- Dashboard
- Users
- Detail User

---

## Kelebihan Project

- Tampilan sederhana dan mudah dipahami.
- Menggunakan React versi terbaru.
- Routing sudah menggunakan React Router.
- Pengelolaan Login menggunakan Context API.
- Mudah dikembangkan menjadi aplikasi Marketplace yang lebih lengkap.

---

## Kekurangan Project

Masih terdapat beberapa fitur yang dapat dikembangkan, seperti:

- CRUD Product.
- Upload gambar produk.
- Pencarian produk.
- Keranjang Belanja.
- Checkout.
- Pembayaran.
- Riwayat transaksi.
- Dashboard Seller yang lebih lengkap.

---

## Kendala Selama Pengerjaan

Beberapa kendala yang ditemui saat mengerjakan project ini antara lain:

- Konfigurasi React Router.
- Pengelolaan Login dan Logout.
- Integrasi Axios dengan Backend API.
- Protected Route agar halaman tidak bisa diakses tanpa Login.
- Validasi Form Login dan Register.
- Menampilkan data user dari API.

---

## Solusi

Solusi yang dilakukan yaitu:

- Menggunakan Context API untuk menyimpan data user.
- Menggunakan Axios Interceptor agar token otomatis dikirim ke server.
- Membuat Protected Route untuk membatasi akses halaman.
- Menggunakan React Router agar perpindahan halaman lebih mudah.
- Melakukan validasi form sebelum data dikirim ke API.

---

## Pengembangan Selanjutnya

Project ini masih dapat dikembangkan dengan menambahkan fitur seperti:

- Marketplace Digital Product yang lengkap.
- Sistem pembayaran.
- Upload File Digital.
- Dashboard Seller.
- Dashboard Buyer.
- Filter dan Search Product.
- Wishlist.
- Rating dan Review.
- Notifikasi.
- Dark Mode.

---

## Author

Nama : Ahmad Afifil Gina

Project ini dibuat sebagai latihan dan pembelajaran React.js serta implementasi REST API menggunakan Axios dan Context API.

---

## Repo

repo github laravel backend untuk API
https://github.com/afifahmad121/marketplace-lanjutan.git
