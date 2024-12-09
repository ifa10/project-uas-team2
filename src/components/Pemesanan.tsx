import React, { useState } from "react";
import { tambahPemesanan } from "../libs/firebase/pemesananService";
import { db } from "../libs/database/firebase"; // Sesuaikan jalur relatif


const Pemesanan: React.FC = () => {
  const [nama, setNama] = useState("");
  const [pesanan, setPesanan] = useState("");
  const [tanggal, setTanggal] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await tambahPemesanan(nama, pesanan, tanggal);
      alert('Pemesanan berhasil untuk ${nama} dengan pesanan ${pesanan} pada ${tanggal}');
      // Reset form setelah submit
      setNama("");
      setPesanan("");
      setTanggal("");
    } catch (error) {
      alert("Gagal menyimpan pemesanan. Silakan coba lagi.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pemesanan Paket Wisata</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nama">Nama:</label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
          />
        </div>

        <div>
          <label htmlFor="pesanan">Pesanan:</label>
          <select
            id="pesanan"
            value={pesanan}
            onChange={(e) => setPesanan(e.target.value)}
            required
            style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
          >
            <option value="">Pilih Pesanan</option>
            <option value="Ticket Camping">Ticket Camping</option>
            <option value="Ticket Masuk Wisata">Ticket Masuk Wisata</option>
            <option value="Pesan Kamar Glamping">Pesan Kamar Glamping</option>
            <option value="Pesan Villa">Pesan Villa</option>
          </select>
        </div>

        <div>
          <label htmlFor="tanggal">Tanggal Pemesanan:</label>
          <input
            id="tanggal"
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            required
            style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "100%",
            cursor: "pointer",
          }}
        >
          Pesan
        </button>
      </form>
    </div>
  );
};

export default Pemesanan;
