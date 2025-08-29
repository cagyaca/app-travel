**TravelApp**

TravelApp adalah aplikasi frontend sederhana untuk eksplorasi artikel dan manajemen autentikasi (Login & Register).  
Proyek ini dibangun menggunakan React + TypeScript dengan styling modern menggunakan Tailwind CSS + PostCSS.

**Project Structure**

Struktur folder utama:
pages/
1. Home.tsx merupakan Halaman utama (landing page)
2. Login.tsx merupakan Halaman login
3. Register.tsx merupakan Halaman register
4. Articles.tsx merupakan Halaman daftar artikel
5. ArticleDetail.tsx merupakan Halaman detail artikel

**Tech Stack**

- React 18 + TypeScript → Framework utama + type safety  
- React Router DOM → Routing halaman (Home, Login, Register, Articles, ArticleDetail)  
- Redux Toolkit → State management (fetch & simpan data artikel)  
- Tailwind CSS + PostCSS → Styling modern, responsive, dan utility-first  
- API Dummy:  
  - https://extra-brooke-yeremiadio-46b2183e.koyeb.app/api/articles?populate=  
  - https://extra-brooke-yeremiadio-46b2183e.koyeb.app/api/articles/{documentId}  
  - https://extra-brooke-yeremiadio-46b2183e.koyeb.app/api/comments  
  - https://extra-brooke-yeremiadio-46b2183e.koyeb.app/api/comments/{documentId}
    
**Installation & Run Project**
1. npm install
2. npm install -D tailwindcss postcss autoprefixer
3. npx tailwindcss init -p
4. npm start
   


