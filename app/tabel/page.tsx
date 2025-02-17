'use client';

export default function Home() {
  const data = [
    { no: 1, nim: "123456", nama: "Ali", gender: "L", prodi: "Informatika", kelas: "A", semester: 4, alamat: "Jakarta", hobby: "Membaca", citaCita: "Programmer" },
    { no: 2, nim: "654321", nama: "Budi", gender: "L", prodi: "Sistem Informasi", kelas: "B", semester: 2, alamat: "Bandung", hobby: "Olahraga", citaCita: "Data Analyst" },
    { no: 3, nim: "112233", nama: "Citra", gender: "P", prodi: "Teknik Elektro", kelas: "C", semester: 6, alamat: "Surabaya", hobby: "Menulis", citaCita: "Dosen" },
    { no: 4, nim: "445566", nama: "Dewi", gender: "P", prodi: "Manajemen", kelas: "D", semester: 5, alamat: "Yogyakarta", hobby: "Menyanyi", citaCita: "Pengusaha" },
    { no: 5, nim: "778899", nama: "Eko", gender: "L", prodi: "Akuntansi", kelas: "E", semester: 3, alamat: "Semarang", hobby: "Game", citaCita: "Akuntan" },
    { no: 6, nim: "991122", nama: "Fajar", gender: "L", prodi: "Hukum", kelas: "F", semester: 7, alamat: "Medan", hobby: "Fotografi", citaCita: "Hakim" },
    { no: 7, nim: "334455", nama: "Gita", gender: "P", prodi: "Psikologi", kelas: "G", semester: 2, alamat: "Bali", hobby: "Melukis", citaCita: "Psikolog" },
    { no: 8, nim: "667788", nama: "Hadi", gender: "L", prodi: "Ilmu Komputer", kelas: "H", semester: 8, alamat: "Makassar", hobby: "Coding", citaCita: "Software Engineer" },
    { no: 9, nim: "223344", nama: "Indah", gender: "P", prodi: "Desain Grafis", kelas: "I", semester: 1, alamat: "Lombok", hobby: "Desain", citaCita: "Desainer" },
    { no: 10, nim: "556677", nama: "Joko", gender: "L", prodi: "Teknik Mesin", kelas: "J", semester: 5, alamat: "Palembang", hobby: "Otomotif", citaCita: "Insinyur" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-5xl overflow-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-400">Data Mahasiswa</h1>
        <div className="block md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.map((row) => (
            <div key={row.no} className="bg-gray-700 text-white p-4 rounded-lg shadow-md border border-indigo-500">
              <p><strong>No:</strong> {row.no}</p>
              <p><strong>NIM:</strong> {row.nim}</p>
              <p><strong>Nama:</strong> {row.nama}</p>
              <p><strong>Gender:</strong> {row.gender}</p>
              <p><strong>Prodi:</strong> {row.prodi}</p>
              <p><strong>Kelas:</strong> {row.kelas}</p>
              <p><strong>Semester:</strong> {row.semester}</p>
              <p><strong>Alamat:</strong> {row.alamat}</p>
              <p><strong>Hobby:</strong> {row.hobby}</p>
              <p><strong>Cita-cita:</strong> {row.citaCita}</p>
            </div>
          ))}
        </div>
        <table className="hidden md:table w-full text-white border border-gray-600 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-indigo-600 text-gray-100">
              <th className="p-3">No</th>
              <th className="p-3">NIM</th>
              <th className="p-3">Nama</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Prodi</th>
              <th className="p-3">Kelas</th>
              <th className="p-3">Semester</th>
              <th className="p-3">Alamat</th>
              <th className="p-3">Hobby</th>
              <th className="p-3">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.no} className="odd:bg-gray-700 even:bg-gray-800 hover:bg-indigo-500 transition">
                <td className="p-3 text-center border border-gray-600">{row.no}</td>
                <td className="p-3 text-center border border-gray-600">{row.nim}</td>
                <td className="p-3 text-center border border-gray-600">{row.nama}</td>
                <td className="p-3 text-center border border-gray-600">{row.gender}</td>
                <td className="p-3 text-center border border-gray-600">{row.prodi}</td>
                <td className="p-3 text-center border border-gray-600">{row.kelas}</td>
                <td className="p-3 text-center border border-gray-600">{row.semester}</td>
                <td className="p-3 text-center border border-gray-600">{row.alamat}</td>
                <td className="p-3 text-center border border-gray-600">{row.hobby}</td>
                <td className="p-3 text-center border border-gray-600">{row.citaCita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
