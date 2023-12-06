const menu = {
    "nasi goreng": 15000,
    "mie goreng": 12000,
    "ayam goreng": 20000,
    "sate ayam": 18000,
    "es teh": 5000,
    "es jeruk": 6000
  };
    
  function pesanMakanan() {
    alert("Selamat datang di resto kami!");
      
    const makananInput = prompt("Mau pesan apa?\n=> Nasi goreng(15000)\n=> Mie Goreng(12000)\n=> Ayam Goreng(20000)\n=> Sate Ayam(18000)\n=> Es Teh(5000)\n=> Es Jeruk(6000)");
    makanan = makananInput.toLowerCase();
    const harga = menu[makanan];
    
    if (makanan && harga !== undefined) {
      alert(`${makanan} : Rp${harga}`);
      alert(`Terimakasih sudah memesan`);
    } else if (makanan && harga === undefined) {
      alert(`Maaf, ${makanan} tidak ada dalam menu kami`);
    } else {
      alert(`Anda belum memasukkan pesanan. Silakan coba lagi`);
    }
  }
    
  pesanMakanan();