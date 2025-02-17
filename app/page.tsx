'use client';

import { useState, FormEvent } from 'react';

export default function Page() {
  const [curhat, setCurhat] = useState<string>('');
  const [submittedCurhat, setSubmittedCurhat] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmittedCurhat(curhat);
    setCurhat('');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-inter">
      {/* Navbar */}
      <nav className="bg-indigo-800 text-white shadow-lg">
        <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold hover:text-indigo-400 cursor-pointer transition duration-300 ease-in-out">
            My CV
          </div>

          {/* Navbar Toggle Button for Mobile */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          {/* Navbar Links (Visible in Desktop and when menu is open in mobile) */}
          <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex space-x-8 text-lg font-medium">
              <li><a href="#about" className="hover:text-indigo-300 transition duration-300 ease-in-out">About</a></li>
              <li><a href="#skills" className="hover:text-indigo-300 transition duration-300 ease-in-out">Skills</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-300 transition duration-300 ease-in-out">Portfolio</a></li>
              <li><a href="#services" className="hover:text-indigo-300 transition duration-300 ease-in-out">Layanan</a></li>
              <li><a href="#contact" className="hover:text-indigo-300 transition duration-300 ease-in-out">Kontak</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg transform transition duration-300 hover:scale-105">
        {/* Menambahkan Foto di atas CV */}
        <div className="mb-8 flex justify-center">
          <img src="/alwan.png" alt="Alwan Wildan Zahran" className="w-36 h-36 rounded-full border-4 border-indigo-600 shadow-lg transform transition duration-300 hover:scale-110" />
        </div>

        <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-6">CV Online</h1>
        
        <div className="mb-6 space-y-2 text-gray-800">
          <p><strong className="text-indigo-700">Nama:</strong> Alwan Wildan Zahran</p>
          <p><strong className="text-indigo-700">Kelas:</strong> A</p>
          <p><strong className="text-indigo-700">Prodi:</strong> Sistem Informasi</p>
          <p><strong className="text-indigo-700">Alamat:</strong> Permata hijau, Rancaekek</p>
          <p><strong className="text-indigo-700">Hobby:</strong> Game, Comic, Anime, Basket</p>
          <p><strong className="text-indigo-700">Cita-cita:</strong> The richest person in the world and the hereafter</p>
          <p><strong className="text-indigo-700">Profesi:</strong> Mahasiswa</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block text-lg font-semibold text-gray-900">Kolom Curhat:</label>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out transform hover:scale-105"
            rows={6}
            value={curhat}
            onChange={(e) => setCurhat(e.target.value)}
            placeholder="Tulis curhatan Anda di sini..."
          ></textarea>
          <button 
            type="submit" 
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none transition duration-200 ease-in-out transform hover:scale-105"
          >
            Kirim
          </button>
        </form>

        {submittedCurhat && (
          <div className="mt-6 p-6 bg-gray-100 rounded-lg shadow-md border-l-4 border-indigo-500">
            <h2 className="text-xl font-semibold text-gray-800">Curhatan Anda:</h2>
            <p className="mt-2 text-gray-700">{submittedCurhat}</p>
          </div>
        )}
      </div>

      {/* Sections for About, Skills, Portfolio, Services, and Contact */}
      <section id="about" className="py-16 bg-gradient-to-r from-indigo-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-700">I am a passionate student of Information Systems, dedicated to learning and improving my skills.</p>
        </div>
      </section>

      <section id="skills" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Skills</h2>
          <p className="text-lg text-gray-700">Here are some of my skills: Web Development, Database Management, System Analysis, and more...</p>
        </div>
      </section>

      <section id="portfolio" className="py-16 bg-gradient-to-r from-indigo-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-lg text-gray-700">Check out my recent projects and contributions in various domains of Information Systems.</p>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Layanan</h2>
          <p className="text-lg text-gray-700">I offer a variety of services including web development, system analysis, and consultancy.</p>
        </div>
      </section>

      <section id="contact" className="py-16 bg-gradient-to-r from-indigo-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Kontak</h2>
          <p className="text-lg text-gray-700">Feel free to reach out to me through the contact form or email.</p>
        </div>
      </section>
    </div>
  );
}
