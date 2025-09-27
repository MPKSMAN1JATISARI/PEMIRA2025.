# 🗳️ Sistem Pemilu Digital Sekolah

Sistem pemilu digital modern untuk sekolah dengan fitur live recap real-time. Dibangun menggunakan React.js dan Tailwind CSS.

## ✨ Fitur Utama

### 🗳️ Sistem Voting
- Form validasi data pemilih (Nama, NIS, Kelas)
- Antarmuka yang user-friendly untuk memilih kandidat
- Validasi untuk mencegah voting ganda berdasarkan NIS
- Konfirmasi setelah berhasil voting

### 📊 Live Recap Real-time
- Dashboard statistik langsung dengan update otomatis
- Grafik persentase suara setiap kandidat
- Informasi kandidat yang sedang terdepan
- Tracking partisipasi pemilih secara real-time
- Visualisasi data yang interaktif dan menarik

### 🎨 Desain Modern
- UI/UX yang responsif untuk desktop dan mobile
- Animasi smooth untuk perubahan data
- Gradien warna yang menarik
- Icon yang informatif menggunakan Lucide React

### 🔒 Keamanan
- Validasi NIS untuk mencegah duplikasi voting
- Sistem one-time voting per siswa
- Form validasi yang komprehensif

## 🚀 Instalasi dan Setup

### Prerequisites
- Node.js (v14 atau lebih tinggi)
- npm atau yarn

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/username/pemilu-digital-sekolah.git
   cd pemilu-digital-sekolah
   ```

2. **Install dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Setup Tailwind CSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Jalankan aplikasi**
   ```bash
   npm start
   # atau
   yarn start
   ```

5. **Buka di browser**
   ```
   http://localhost:3000
   ```

## 📁 Struktur Project

```
pemilu-digital-sekolah/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── VotingSystem.js      # Main component
│   │   ├── Navigation.js        # Navigation bar
│   │   ├── VotingForm.js        # Form untuk voting
│   │   ├── VoterDataForm.js     # Form data pemilih
│   │   ├── CandidateCard.js     # Card kandidat
│   │   ├── LiveRecap.js         # Live recap dashboard
│   │   ├── StatsCards.js        # Card statistik
│   │   ├── CandidateResults.js  # Hasil per kandidat
│   │   └── VoteChart.js         # Chart perolehan suara
│   ├── data/
│   │   ├── candidates.js        # Data kandidat
│   │   └── classes.js           # Daftar kelas
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## ⚙️ Konfigurasi

### Menambah/Edit Kandidat
Edit file `src/data/candidates.js`:
```javascript
export const candidatesData = [
  {
    id: 1,
    name: "Nama Kandidat",
    class: "Kelas",
    vision: "Visi dan misi kandidat",
    photo: "🎓" // Emoji atau bisa diganti dengan URL gambar
  }
];
```

### Menambah/Edit Daftar Kelas
Edit file `src/data/classes.js`:
```javascript
export const classOptions = [
  "10 IPA 1",
  "10 IPA 2",
  // tambah kelas lainnya
];
```

## 🚀 Build untuk Production

```bash
npm run build
# atau
yarn build
```

File hasil build akan tersimpan di folder `build/` dan siap untuk di-deploy ke hosting.

## 🌐 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis dari GitHub

### Netlify
1. Build project: `npm run build`
2. Upload folder `build/` ke [Netlify](https://netlify.com)

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Tambah script di package.json:
   ```json
   "homepage": "https://username.github.io/pemilu-digital-sekolah",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 🔮 Pengembangan Lanjutan

Untuk implementasi yang lebih robust, pertimbangkan:

### Backend Integration
- **Database**: MySQL, PostgreSQL, atau MongoDB
- **API**: Node.js + Express.js atau PHP
- **Authentication**: JWT atau session-based auth
- **Real-time Updates**: Socket.io atau WebSocket

### Fitur Tambahan
- **Admin Dashboard**: Untuk mengelola kandidat dan pemilihan
- **Export Data**: Export hasil ke Excel/PDF
- **Multiple Elections**: Mendukung multiple pemilu bersamaan
- **Notification System**: Email/SMS notification
- **Analytics**: Detailed analytics dan reporting

## 🤝 Kontribusi

1. Fork project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Kontak

- **Email**: [your-email@example.com]
- **GitHub**: [https://github.com/username]
- **Website**: [https://yourwebsite.com]

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) - Frontend library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [Create React App](https://create-react-app.dev/) - Project bootstrapping

---

⭐ **Jika project ini bermanfaat, berikan star di GitHub!**