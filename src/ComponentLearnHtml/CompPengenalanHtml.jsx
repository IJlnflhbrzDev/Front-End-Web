import React, { Fragment } from 'react';
import { Jumbotron, Container, CardText, Card, CardImg, } from 'reactstrap'
import { Link } from 'react-router-dom'
const a = [` <title> - <p> - <li> - dan - <h1> sampai - <h6> `];
const draf = [`[Draft]`];
const html = ' <html>';
const head = ' <head>';
const body = ' <body>';
class PengenalanHtml extends React.Component {
  render() {
    return (
      <div id="Pengenalan-Html">
        <Jumbotron>
          <Container>
            <h2 className="mt-5">Belajar HTML dari Nol: Pengenalan Dasar HTML untuk Pemula</h2>
            <hr color="text-primary" />
            <CardText style={{ fontSize: '1.125rem' }}>HTML memang bahasa yang <strong>wajib dipelajari</strong>, bagi yang mau menjadi web developer.
              <br />
              Karenaa...
            <br /><br />
            HTML merupakan bahasa dasar untuk membuat web.
            <br /><br />
            Saya yakin, kamu sudah pernah mendengar HTML sebelumnya. Tapi tidak ada salahnya membaca kebali artikel ini.
          <br /><br />
              Pada tutorial ini, kita akan benar-benar membahas dari nol hingga kamu bisa membuat halaman HTML sendiri.
            <br /><br />
              Baiklah…
                <br /><br />
              Mari kita mulai!
            </CardText><hr color="text-danger" />
            <div>
              <h2>Apa Itu HTML?</h2>
              <p> Mari kita lihat pengertian HTML menurut wikipedia: </p>
              <Card className="p-2 font-italic mb-4">HTML atau HyperText Markup Language merupakan sebuah bahasa markah untuk membuat halaman web. </Card>
              <p>Paham kan maksudnya?</p>
              <p>Kalau belum paham, sini saya jelaskan…</p>
              <p>Jadi, HTML itu adalah sebuah bahasa yang menggunakan markup atau penanda untuk membuat halaman web.</p>
              <p>Penanda Atu Markup ini akan kita sebut dengan Tag</p>
              <p>HTML Berperan Untuk menentukan struktur kontent dan tampilan dari sebuah web</p>
              <p>Kalu kita Ibaratkan nih....</p>
              <p>HTML itu seperti batu bata untuk membangun rumah. Batu bata ini Dapat disusun Hingga Menjadi Fondasi Dasar</p>
              <img className="img-thumbnail" src="https://www.petanikode.com/img/html/dasar/html-css-js.png" className="w-100" />
              <p>Dalam membuat halaman web, HTML tidak sendirian. Ada bahasa lain lagi yang menjadi pelengkapnya, yakni CSS dan Javascript.</p>
              <p>CSS adalah bahasa khusus yang digunakan untuk memperindah tampilan web.</p>
              <p>Lalu Javascript bertugas untuk membuat halaman web menjadi hidup. Karena dengan Javascript, kita dapat menentukan fungsi-fungsi maupun efek yang akan diterapkan di website.</p>
              <p>Oh iya, pada tutorial ini.. Kita akan fokus dulu membahas HTML. Jika kamu ingin belajar CSS dan Javascript, silahkan Buka Navbar Tutorial Lalu Pilih Css okeeey</p>
              <p>Oke, saya anggap kamu sudah paham tentang apa itu HTML serta peranannya dalam pembuatan web.</p>
              <p>Berikutnya, biar lebih paham.. kita akan membahas sejarah dan asal-usul HTML.</p>
              <h2>Sejara Dan Asal Usul HTML</h2>
              <p>Cerita awal kemunculan HTML dimulai dari tahun 1980..</p>
              <p>Saat itu seorang ilmuan bernama Tim Berners-Lee sedang bekerja di CERN.</p>
              <img className="img-thumbnail" src="https://www.petanikode.com/img/html/sejarah/Tim_Berners-Lee_April_2009.jpg" />
              <p>CERN sendiri bukanlah perusahaan yang berkaitan tentang teknologi maupun internet. CERN adalah singkatan dari bahasa prancis: Conseil Européen pour la Recherche Nucléaire.</p>
              <p>Yang artinya: Komisi Eropa untuk Penelitian Fisika Nuklir.</p>
              <img className="img-thumbnail" src="https://www.petanikode.com/img/html/sejarah/website-cern.png" />
              <p>Para peneliti di CERN membutuhkan sebuah cara atau sistem agar bisa saling berbagi dokumen hasil penelitian.</p>
              <p>Tim kemudian mencoba membuat ENQUIRE. Ini adalah software hypertext yang akan digunakan untuk berbagi dokumen.</p>
              <p>Lalu di tahun 1989, Tim memperkenalkan ide tentang hypertext berbasis internet. Ini nantinya akan menjadi cikal-bakal HTML.</p>
              <p>Tim kemudian memulai proyek baru dengan rekannya Robert Cailliau yang merupakan system engineer di CERN. Akan tetapi proyek ini tidak resmi diadopsi oleh CERN.</p>
              <img className="img-thumbnail" src="https://www.petanikode.com/img/html/sejarah/tim-robert.jpg" />
              <p>Pada akhir tahun 1991, Tim Berners-Lee menerbitkan dokumen yang berjudul: “HTML Tags”.</p>
              <p>Dokumen ini berisi penjelasan tentang 18 tags awal yang menjadi konsep dasar HTML.</p>
              <p>HTML sebenarnya dirancang berdasarkan pada konsep bahasa markup yang dikenal dengan SGML (Standard Generalized Markup Language).</p>
              <p>SGML adalah sebauah standar internasional untuk membuat dokumen dengan tanda (markup) seperti paragraf, list, heading, dan lain-lain.</p>
              <p>Bisa Dibilang...</p>
              <p>Html  Adalah Implementasi Dari SGML</p>
              <p>kalau Kita Lihat Beberapa Tag seperti<code>{a}</code> berasal dari SGML. Namun, tidak semua yang ada di HTML berasal dari SGML.</p>
              <p>Salah satunya adalah <i><b>Hyperlink,</b></i> yang murni hasil pemikiran Tim Berners-Lee.</p>
              <p>Ide tentang HTML ini kemudian disebarkan ke dalam sebuah mailing list dan segera menjadi perhatian berbagai ilmuwan komputer di seluruh dunia.</p>
              <h2>Pengembang Versi HTML</h2>
              <p>HTML punya beberapa versi, dari versi yang paling tua hingga yang terbaru. Berikut ini perkembangan versi HTML:</p>
              <li><code>{draf}</code> HTML 1.0 (Juni 1993) adalah versi HTML pertama, namun tidak resmi dirilis;</li>
              <li><b>HTML2.0 HTML 2.0</b>  '24 November 1995' adalah versi HTML kedua yang resmi pertamakali beredar di pasaran dan dirilis oleh IETF</li>
              <li><code>{draf}</code> <b>HTML 3.0</b> (28 Maret 1995) versi ini gagal beredar, karena banyak perubahan yang memicu perdebatan;</li>
              <li>  <b>HTML 3.2</b> "14 Januari 1997" versi resmi yang dirilis W3C pertamakali.</li>
              <li><b>HTML 4.0</b> "24 April 1998" versi pengembangan dari yang seblumnya;</li>
              <li><b>HTML 4.01</b> "24 Desember 1999" versi perbaikan dari HTML 4.0;</li>
              <li><b>XHTML 1.0</b> "26 Januari 2000" pengembangan dari HTML 4.01 dengan mengadopsi XML;</li>
              <li><b>XHTML 2.0</b> "Augustus 2002—Juli 2006" versi kedua dari XHTML;</li>
              <li><b>HTML 5</b> "28 Oktober 2014" versi html saat ini.</li>
              <p>Versi <code>{draf} </code>adalah versi yang tidak resmi dirilis ke pasaran. Bentuknya cuma masih dalam draft speksifikasi saja.</p>
              <p>Artinya...</p>
              <p>Tidak ada yang menggunakan versi <code>{draf}</code> untuk membuat web.</p>
              <p>Lalu, versi mana yang akan kita pakai?</p>
              <p>Tentunya versi terbaru, yakni HTML 5.</p>
              <h2>Peralatan untuk Belajar HTML</h2>
              <p>Nah, sekarang.. Tiba saatnya kita praktik!</p>
              <p>Tapi sebelum itu, kamu harus siapkan beberapa alat yang akan digunakan untuk praktik.</p>
              <p>Adapun peralatan yang harus kamu persiapkan adalah:</p>
              <h3>
                <ol type="1">
                  <Fragment>

                    <li>
                      Teks Editor untuk Menulis HTML
                </li>
                    <p>Teks editor akan kita gunakan untuk menulis kode-kode HTML. Kamu bebas menggunakan teks editor apapun.</p>
                    <p>Notepad boleh, Notepad++ juga boleh..</p>
                    <img className="img-thumbnail" src="https://www.petanikode.com/img/html/dasar/notepadpp.png" />
                    <p>Apapun teks editornya, yang penting bisa digunakan untuk membuat dan menulis dokumen HTML.</p>
                    <p>Namun, pada tutorial ini.. kita akan menggunakan teks editor <a href="">Visual Studio Code.</a> </p>
                  </Fragment>

                  <Fragment>
                    <li>Web Browser untuk Membuka HTML</li>
                    <p>Web browser akan kita gunakan untuk membuka HTML. Kamu juga bebeas menggunakan web browser apapun.</p>
                    <img className="img-thumbnail" src="https://www.petanikode.com/img/html/dasar/web-browser.png" />
                    <p>Saran saya sih.. gunakan web browser yang terbaru, karena kita juga akan menggunakan HTML versi yang terbaru. seperti Firefox atau Google Chrome, saya kira sudah cukup.</p>
                  </Fragment>
                </ol>
              </h3>
              <h2>Membuat Dokumen HTML Pertamamu</h2>
              <p>Kini tiba saatnya, kamu harus mencoba sendiri membuat dokumen HTML. Caranya sangat mudah.</p>
              <p>Mari kita mulai dengan membuka teks editor, lalu tulislah kode berikut.</p>
              <img src="https://1.bp.blogspot.com/-wEVDjNpBFlA/Xd0wc8CnCwI/AAAAAAAAA1o/2Blr0XanZCkXWvWWoSMkikisMECjFCU1ACLcBGAsYHQ/s1600/Screenshot%2B%252860%2529.png" alt="" />
              <p>Setelah itu, simpan dengan nama <code>hello-world.html</code></p>
              <img className="img-thumbnail" src="https://www.petanikode.com/img/html/dasar/file-html.png" />
              <p>Tips: buat kamu yang menggunakan Notepad di Windows, simpanlah nama filenya dengan menggunakan tanda petik<code>"hello-world.html"</code>  agar ekstensinya <code>.html</code>, bukan <code>.txt</code></p>
              <p>Atau kamu bisa aktifkan fitur show extension pada Windows Explorer, agar bisa tahu ekstensi filenya.</p>
              <p>Caranya.. masuk ke menu View, lalu centang File name extensions.</p>
              <img className="img-thumbnail" src="https://www.petanikode.com/img/html/dasar/win-explorer-extension.png" alt="" />
              <p>Oke.. lanjut!</p>
              <p>Sekarang cobalah buka file <code>hello-world.html</code> dengan web browser..maka <br />hasilnya:</p>
              <img className="img-thumbnail" src="https://www.petanikode.com/img/html/dasar/hello-world-html.png" alt="" />
              <p>Selamat! 🎉</p>
              <p>Kita sudah berhasil membuat halaman web pertama dengan HTML.</p>
              <p>Kini giliran saya menjelaskan maksud dari kode di atas, tapi sebelum itu.. saya akan jelaskan dulu tentang nama file untuk HTML.</p>
              <h2>Nama File untuk HTML</h2>
              <p>Ada beberapa hal yang perlu diperhatikan dalam membuat nama file HTML:</p>
              <h2>1. Extensi file HTML</h2>
              <p>Setiap file HTML harus berekstensi <code>.html atau  .xhtml bisa juga dengan .htm </code> "untk XHTML",dan <code>.htm</code> saja. jika tidak mengunakan ekstensi ini , maka ia tidak akan bisa dibaca oleh browser.</p>
              <p>Contoh nya seperti ini:</p>
              <p>Nama Filenya adalah <code>hello-world.txt</code></p>
              <img className="img-thumbnail" src="https://www.petanikode.com/img/html/dasar/file-txt.png" alt="" />
              <p>Sedah jelas, ini bukan file HTML, melainkan sebuah file teks biasa. Maka.. browser akan menampilkan isi file tersebut apa adanya.</p>
              <h2>2. Nama Khusus untuk Homepage</h2>
              <p>Jika kamu ingin membuat halaman untuk homepage, maka sebaiknya gunakan nama<code> index.html. </code> Karena ia akan otomatis dibuka saat website dikunjungi.</p>
              <p>Contohnya saat kamu membuka <code>www.farmingcode.com..</code> maka file HTML yang akan Di buka adalah <code>index.html</code> yang berada di server farmingcode.</p>
              <h2>3. Hindari Beberapa Hal ini..</h2>
              <p><b>Penggunaan Spasi</b></p>
              <p>Nama file HTML biasanya akan tercantum pada URL, maka sebaiknya hindari menggunakan spasi pada nama file HTML, agar URL yang dibentuk lebih bagus.</p>
              <p>Spasi pada URL, biasanya akan otomatis diubah menjadi <code>%20.</code></p>
              <img src="https://www.petanikode.com/img/html/dasar/spasi-pada-url.png" className="img-thumbnail" />
              <p>Sebagai ganti spasi, kamu bisa gunakan tanda min <code>(-) atau undescore (_).</code></p>
              <p><strong>Jangan Alay!</strong></p>
              <p>Berikanlah nama file HTML dengan file yang biasa, hindari menggunakan huruf besar, campuran dari huruf besar dan kecil, dan juga menggunakan simbol.</p>
              <p>Contoh:</p>
              <li><code>HeLLoWORLD.HTMLhtml</code></li>
              <li><code>da*#$.HTML</code></li>
              <p>Meskipun nama ini bisa valid, tapi kurang bagus untuk dibaca.. baik oleh manusia, maupun mesin.</p>
              <p>Baiklah, berikutnya kita akan pelajari tentang kode-kode HTML.</p>
              <h2>Struktur Dasar HTML</h2>
              <p>Berikut ini adalah kode HTML yang baru saja kita buat:</p>
              <img src="https://www.petanikode.com/img/html/dasar/struktur-html.png" />
              <p>Penulisan kode HTML selalu dimulai dengan deklarasi DOCTYPE, lalau menuliskan tag <code>{html}</code>  dan di dalamnya terdapat tag <code>{head}</code> dan <code>{body}</code>.</p>
              <p>1. Bagian Deklarasi</p>
              <p>2. Bagian HEAD</p>
              <p>3. Bagian BODY</p>
              <p>Mari kita bahas satu persatu</p>
              <h2><b>Apa Selanjutnya?</b></h2>
              <p>Nah, sampai di sini dulu tutorial pertama ini..</p>
              <p>Jika ada yang belum jelas, bisa ditanyakan melalui komentar.</p>
              <p>Berikutnya silahkan pelajari tentang definisi tag, elemen, dan atribut:</p>
              <Card className="p-2  d-flex font-italic mb-4 m-2">Untuk tutorial HTML lainnya, silahkan cek d <code style={{ fontSize: '20px ', letterSpacing: '3px', marginTop: '-10px', textAlign: ' center' }}><Link to="/List-Belajar-html">List-Belajar-html</Link> </code></Card>
              <blockquote>Babaii Sampai Ketemu di Tutorial Berikut nya .......</blockquote>
            </div>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default PengenalanHtml;