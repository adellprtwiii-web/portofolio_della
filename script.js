/* ===== DATA ===== */

const experience = [
    {
        date: "Sep 2025 – Des 2025",
        title: "Automation Engineering Intern",
        meta: "ROV Indonesia · Surabaya",
        points: [
            "Membantu perakitan dan pengujian sistem kelistrikan serta kontrol ROV agar integrasi dan fungsi sistem sesuai standar.",
            "Melakukan functional testing dan validasi sistem, menganalisis hasil pengujian, serta mendokumentasikan temuan teknis sebagai dasar perbaikan.",
            "Mendukung preventive maintenance dan kalibrasi peralatan elektronik, sensor, serta perangkat komunikasi."
        ]
    },
    {
        date: "Nov 2024 – Jul 2025",
        title: "Laboratory Assistant – Navigation and Communication Lab",
        meta: "Politeknik Perkapalan Negeri Surabaya (PPNS) · Surabaya",
        points: [
            "Mengelola administrasi keuangan penelitian: penyusunan anggaran dan monitoring pengeluaran.",
            "Membantu penyusunan dan publikasi jurnal penelitian, memastikan kelengkapan dan kualitas dokumen.",
            "Menyusun presentasi dan materi dokumentasi kegiatan penelitian dan laboratorium.",
            "Mengkoordinasikan kunjungan lapangan untuk pengujian peralatan Automatic Identification System (AIS).",
            "Mendukung pengumpulan dan pencatatan data lapangan agar akurat dan lengkap."
        ]
    },
    {
        date: "Agu 2026",
        title: "Sarjana Terapan Teknik Otomasi, IPK 3.55/4.00",
        meta: "Politeknik Perkapalan Negeri Surabaya · Surabaya",
        text: "Mata kuliah: Mikrokontroler, PLC, Instrumentasi, Pengujian dan Inspeksi, K3, Bahasa Inggris."
    },
    {
        date: "Agu 2019 – Agu 2022",
        title: "SMA Negeri Jogoroto (IPA)",
        meta: "Jombang"
    }
];

// image: ganti alamat gambar di sini
const achievements = [
    {
        date: "Jul 2024",
        title: "Juara 3 Kontes Robot Seni Tari Indonesia (KRSTI) Regional",
        text: "Balai Pengembangan Talenta Indonesia (BPTI) Pusat Prestasi Nasional Puspresnas",
        image: "images/penghargaan-krsti-2024.jpg"
    },
    {
        date: "Jul 2023",
        title: "Juara 4 Kontes Robot Seni Tari Indonesia (KRSTI) Regional",
        text: "Balai Pengembangan Talenta Indonesia (BPTI) Pusat Prestasi Nasional Puspresnas",
        image: "images/penghargaan-krsti-2023.jpg"
    },
    {
        date: "Nov 2022",
        title: "Juara 2 Debate Competition",
        text: "Politeknik Perkapalan Negeri Surabaya – DPM PPNS",
        image: "images/penghargaan-debate-2022.jpg"
    }
];

const projects = [
    {
        date: "Feb 2026 – Jul 2026",
        title: "Sistem Indoor Positioning untuk Monitoring Pekerja Menggunakan Ultra-Wideband (UWB)",
        goal: "Tujuan: Mengembangkan sistem monitoring pekerja secara real-time dengan UWB untuk pengukuran jarak, penentuan posisi, dan visualisasi data berbasis web.",
        points: [
            "Merancang, merakit, dan mengkalibrasi perangkat keras UWB: ESP32, modul DWM1000, autentikasi sidik jari, dan rangkaian pendukung.",
            "Melakukan pengukuran jarak, pengujian fungsional, dan validasi sistem untuk menilai akurasi dan kinerja.",
            "Menganalisis hasil pengukuran dan troubleshooting untuk meningkatkan keandalan sistem.",
            "Mengembangkan firmware dan menerapkan algoritma trilaterasi untuk penentuan posisi pekerja secara real-time.",
            "Mendokumentasikan hasil pengujian dan kinerja sistem."
        ],
        image: "proyek-uwb.jpg"
    },
    {
        date: "Jul 2025",
        title: "Sistem Sortir Botol Otomatis Berdasarkan Klasifikasi Material pada Industri Daur Ulang",
        goal: "Tujuan: Mengembangkan sistem sortir botol otomatis yang mengklasifikasikan botol berdasarkan jenis material dengan computer vision.",
        points: [
            "Mengembangkan sistem sortir dengan computer vision berbasis YOLOv11 untuk mengidentifikasi material botol.",
            "Melatih dan mengintegrasikan model deteksi objek untuk klasifikasi material secara real-time.",
            "Mengimplementasikan mekanisme sortir otomatis untuk menaikkan efisiensi daur ulang dan mengurangi kesalahan sortir manual."
        ],
        image: "images/proyek-sortir-botol.jpg"
    },
    {
        date: "Apr 2025",
        title: "Computer Integrated System – SCADA",
        goal: "Tujuan: Mengembangkan modul SCADA untuk monitoring, pengendalian, dan integrasi proses industri secara real-time.",
        points: [
            "Mengembangkan modul SCADA untuk memonitor dan mengendalikan proses industri.",
            "Menguji dan memvalidasi komunikasi serta akuisisi data.",
            "Mengimplementasikan fitur visualisasi untuk mempermudah monitoring dan pengendalian."
        ],
        image: "images/proyek-scada.jpg"
    },
    {
        date: "Nov 2023",
        title: "Automatic Fish Feeder Berbasis IoT",
        goal: "Tujuan: Mengembangkan pemberi pakan ikan otomatis berbasis IoT dengan pengaturan jadwal dan monitoring real-time.",
        points: [
            "Merancang sistem pemberi pakan dengan jadwal terprogram.",
            "Mengimplementasikan monitoring dan pengendalian jarak jauh lewat aplikasi mobile.",
            "Mengintegrasikan sensor dan komunikasi nirkabel untuk efisiensi dan keandalan sistem."
        ],
        image: "images/proyek-fish-feeder.jpg"
    }
];

const organization = [
    {
        date: "Jan 2023 – Agu 2024",
        title: "Artship – Tim Robot Seni Tari",
        meta: "Marine Robotic Community, UKM Robot PPNS · Surabaya",
        points: [
            "Merancang dan mengembangkan struktur serta fungsi robot.",
            "Membuat dan merancang kostum robot sesuai kebutuhan kompetisi.",
            "Memprogram gerakan tangan robot secara presisi."
        ]
    },
    {
        date: "Jul 2024 – Des 2024",
        title: "Panitia Divisi Acara, Automation Week VII",
        meta: "Kompetisi Mahasiswa Nasional Bidang Robotika, PLC, dan Essay · Surabaya",
        points: [
            "Menyusun konsep kegiatan, jadwal, dan rangkaian acara bersama tim.",
            "Mendukung pelaksanaan di lapangan, termasuk registrasi peserta, serta menangani kendala agar acara berjalan lancar."
        ]
    },
    {
        date: "Okt 2024",
        title: "Liaison Officer (LO), Kontes Kapal Indonesia 2024",
        meta: "Kompetisi Teknologi Maritim dan Perkapalan Mahasiswa Tingkat Nasional · Surabaya",
        points: [
            "Menjadi narahubung utama peserta: informasi kegiatan, pembaruan jadwal, dan penanganan kendala.",
            "Mengelola komunikasi antara juri dan peserta serta menangani konflik antara peserta, juri, dan panitia."
        ]
    },
    {
        date: "Mar 2024 – Des 2024",
        title: "Anggota Departemen Minat dan Bakat, HIMATO PPNS",
        meta: "Himpunan Mahasiswa Teknik Otomasi · Surabaya",
        points: [
            "Aktif sebagai panitia kompetisi bakat dan olahraga tingkat departemen.",
            "Berkontribusi pada program dan agenda pengembangan internal departemen."
        ]
    },
    {
        date: "Jan 2023 – Des 2023",
        title: "Anggota Divisi Latihan dan Pengembangan, DPM PPNS",
        meta: "Dewan Perwakilan Mahasiswa · Surabaya",
        points: ["Mengevaluasi efektivitas program dengan mengumpulkan umpan balik peserta."]
    }
];


/* ===== RENDER ===== */

const pointsHTML = (list) =>
    list && list.length ? `<ul class="points">${list.map(p => `<li>${p}</li>`).join("")}</ul>` : "";

const imgSlot = (src, label) =>
    `<div class="img-slot" data-label="${label}"><img src="${src}" alt="${label}"></div>`;

function renderTimeline(id, items) {
    document.getElementById(id).innerHTML = items.map(i => `
        <div class="t-item">
            <span class="date">${i.date}</span>
            <h3>${i.title}</h3>
            ${i.meta ? `<p class="meta">${i.meta}</p>` : ""}
            ${i.text ? `<p>${i.text}</p>` : ""}
            ${pointsHTML(i.points)}
        </div>`).join("");
}

function renderCards(id, items) {
    document.getElementById(id).innerHTML = items.map(i => `
        <article class="card">
            ${imgSlot(i.image, i.title)}
            <div class="card-body">
                <span class="date">${i.date}</span>
                <h3>${i.title}</h3>
                ${i.goal ? `<p class="goal">${i.goal}</p>` : ""}
                ${i.text ? `<p>${i.text}</p>` : ""}
                ${pointsHTML(i.points)}
            </div>
        </article>`).join("");
}

renderTimeline("experience-list", experience);
renderTimeline("organization-list", organization);
renderCards("achievement-list", achievements);
renderCards("project-list", projects);

// Gambar yang belum ada: tampilkan placeholder berlabel
document.querySelectorAll(".img-slot img").forEach(img => {
    const mark = () => { img.style.display = "none"; img.parentElement.classList.add("empty"); };
    img.addEventListener("error", mark);
    if (img.complete && img.naturalWidth === 0) mark();
});


/* ===== UI ===== */

document.querySelector("footer p").innerHTML =
    `© ${new Date().getFullYear()} Rina Adella Pratiwi. All Rights Reserved.`;

// Menu mobile
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
    toggle.setAttribute("aria-expanded", links.classList.toggle("open"));
});
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
}));

// Progress bar scroll
const bar = document.querySelector(".progress");
function updateProgress() {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
}
addEventListener("scroll", updateProgress, { passive: true });
updateProgress();


/* ===== Gelembung ===== */

(function bubbles() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = document.getElementById("bubbles");
    const ctx = c.getContext("2d");
    let w, h, list = [];

    function resize() {
        w = c.width = innerWidth;
        h = c.height = innerHeight;
        list = Array.from({ length: Math.min(40, Math.floor(w / 35)) }, () => make(true));
    }
    function make(anywhere) {
        return {
            x: Math.random() * w,
            y: anywhere ? Math.random() * h : h + 20,
            r: 2 + Math.random() * 6,
            v: 0.25 + Math.random() * 0.6,
            s: Math.random() * Math.PI * 2
        };
    }
    function frame() {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = "rgba(125, 220, 235, 0.35)";
        ctx.fillStyle = "rgba(125, 220, 235, 0.06)";
        list.forEach((b, i) => {
            b.y -= b.v;
            b.s += 0.02;
            const x = b.x + Math.sin(b.s) * 10;
            ctx.beginPath();
            ctx.arc(x, b.y, b.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            if (b.y < -20) list[i] = make(false);
        });
        requestAnimationFrame(frame);
    }
    addEventListener("resize", resize);
    resize();
    frame();
})();
