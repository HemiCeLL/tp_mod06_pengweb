import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const nama = "Aruna";
  const hero = {
    color: 'Green',
    fontSize: '24px'
  }
  const n = 15;
  const jam = 9;

  return (
    <>
      <header>
          <h2 className="judul" style={hero}>Kantin {nama}</h2>
          <p>Saldo awal kartu kantin: Rp {(n* 1000).toLocaleString('id-ID')}</p>
            <p>{(jam) < 12 ? "Selamat Pagi" : "Selamat Siang"}</p>
          <button type="button" disabled>Bayar</button>
        </header>
    </>
  )
}

export default App
