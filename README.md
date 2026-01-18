# auth-console-ui

UI/UX antarmuka autentikasi modern untuk produk fintech/enterprise, dibangun hanya dengan **HTML, CSS, dan JavaScript** (tanpa backend). Proyek ini berfungsi sebagai portfolio piece untuk menunjukkan pemahaman tentang flow autentikasi dan keamanan dari sisi front-end.

---

## Fitur Utama (Bahasa Indonesia)

- **Halaman autentikasi lengkap**
  - Masuk (login) dengan state loading, error, dan sukses
  - Daftar akun (register) dengan field profesional
  - Verifikasi MFA (kode 6 digit + countdown kirim ulang)
- **Halaman setelah login**
  - Dasbor ringkasan akun (login terakhir, status keamanan, aktivitas terbaru)
  - Halaman Sesi (daftar perangkat dan sesi aktif, tombol “akhiri sesi” simulasi)
  - Halaman Pengaturan Keamanan (MFA, passkey, kontrol sesi, ganti kata sandi simulasi)
- **Desain**
  - Gaya modern SaaS dengan tema gelap merah–hitam (dark red-black)
  - Fokus pada tipografi, spacing, dan hirarki visual yang jelas
  - Komponen reusable: kartu, badge, tabel, tombol, alert, pill, dsb.
- **Interaksi (front-end only)**
  - Loading state pada tombol dan form (`data-loading-form`, `data-loading-button`)
  - State sukses/gagal simulasi untuk login, register, MFA, dan ganti kata sandi
  - Toggle on/off untuk pengaturan keamanan (MFA di perangkat baru, passkey)
  - Countdown resend untuk kode MFA

> Catatan: Semua data bersifat statis, **tidak ada backend, API, atau penyimpanan data sungguhan**. Proyek ini murni untuk demonstrasi UI/UX.

---

## Struktur Proyek

```text
ui/
  css/
    styles.css        # Design system + layout utama
  js/
    main.js           # Interaksi ringan (loading, toggle, countdown, dll.)
  pages/
    login.html        # Halaman masuk
    register.html     # Halaman daftar akun
    mfa.html          # Halaman verifikasi MFA
    dashboard.html    # Dasbor ringkasan akun
    sessions.html     # Daftar sesi login
    security-settings.html  # Pengaturan keamanan
```

---

## Cara Menjalankan Secara Lokal

Tidak perlu build step atau bundler. Cukup server statis sederhana.

```bash
cd "Authentication System"
python3 -m http.server 8000
```

Lalu buka di browser:

- Halaman masuk: `http://localhost:8000/ui/pages/login.html`
- Dasbor: `http://localhost:8000/ui/pages/dashboard.html`

Atau langsung buka file HTML di browser (klik dua kali), tetapi beberapa fitur bisa tampil lebih konsisten jika lewat HTTP server lokal.

---

## Stack Teknologi

- **HTML5** – struktur halaman dan konten
- **CSS** (tanpa framework) – design system custom, tema dark red-black
- **JavaScript Vanilla** – interaksi ringan:
  - Simulasi loading form
  - Tampil/sembunyi alert sukses/gagal
  - Toggle status pengaturan
  - Countdown MFA resend

Tidak ada:

- Backend (Node, Laravel, dsb.)
- Database
- Pemanggilan API

Sehingga repo ini aman untuk dijadikan contoh UI tanpa risiko kebocoran secret atau konfigurasi server.

---

## Ide Pengembangan Lanjutan

Jika ingin mengubah proyek ini menjadi sistem autentikasi sungguhan, beberapa langkah berikut bisa dilakukan:

- Menambahkan backend (misalnya Node.js/Express, Laravel, atau Django)
- Menambahkan database untuk menyimpan user, sesi, dan pengaturan keamanan
- Menghubungkan form login/register/MFA ke endpoint API
- Mengimplementasikan manajemen sesi (JWT atau cookie httpOnly)
- Menghubungkan halaman Sesi dan Pengaturan Keamanan dengan data nyata

---

## English Summary

This repository contains a **front-end only authentication console UI** designed for fintech or enterprise-style products. It focuses on:

- A complete authentication flow (login, register, MFA)
- Post-sign-in experience (dashboard, sessions, security settings)
- Consistent visual language (dark red-black theme, clear typography and spacing)
- Well-defined loading / error / success / disabled states across the UI

There is **no backend logic or real authentication** – all interactions are simulated in the browser using vanilla JavaScript. This makes the project ideal as a portfolio piece to showcase UI/UX thinking around security and account management flows.
