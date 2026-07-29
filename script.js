// ===== FUNGSI AMBIL SALAM DARI SERVER =====
async function ambilSalam() {
    const responseDiv = document.getElementById('server-response');
        responseDiv.textContent = '⏳ Menghubungi server...';
            responseDiv.className = 'server-response active';

                try {
                        const response = await fetch('/api/salam');
                                const data = await response.json();
                                        responseDiv.innerHTML = `
                                                    <strong>${data.pesan}</strong><br>
                                                                🕐 Waktu server: ${data.waktu}
                                                                        `;
                                                                            } catch (error) {
                                                                                    responseDiv.innerHTML = '❌ Gagal menghubungi server';
                                                                                        }
                                                                                        }

                                                                                        // ===== COUNTER =====
                                                                                        let count = 0;

                                                                                        function ubahCounter(nilai) {
                                                                                            count += nilai;
                                                                                                const counterEl = document.getElementById('counter');
                                                                                                    counterEl.textContent = count;
                                                                                                        counterEl.style.transform = 'scale(1.2)';
                                                                                                            setTimeout(() => {
                                                                                                                    counterEl.style.transform = 'scale(1)';
                                                                                                                        }, 200);
                                                                                                                        }

                                                                                                                        function resetCounter() {
                                                                                                                            count = 0;
                                                                                                                                document.getElementById('counter').textContent = '0';
                                                                                                                                }

                                                                                                                                // ===== FORM =====
                                                                                                                                function kirimForm(event) {
                                                                                                                                    event.preventDefault();
                                                                                                                                        const statusDiv = document.getElementById('form-status');
                                                                                                                                            statusDiv.textContent = '✅ Pesan berhasil dikirim! (simulasi)';
                                                                                                                                                event.target.reset();

                                                                                                                                                    setTimeout(() => {
                                                                                                                                                            statusDiv.textContent = '';
                                                                                                                                                                }, 3000);
                                                                                                                                                                }

                                                                                                                                                                // ===== TOGGLE MENU MOBILE =====
                                                                                                                                                                function toggleMenu() {
                                                                                                                                                                    document.querySelector('.nav-links').classList.toggle('active');
                                                                                                                                                                    }

                                                                                                                                                                    // ===== TUTUP MENU SAAT LINK DIKLIK =====
                                                                                                                                                                    document.querySelectorAll('.nav-links a').forEach(link => {
                                                                                                                                                                        link.addEventListener('click', () => {
                                                                                                                                                                                document.querySelector('.nav-links').classList.remove('active');
                                                                                                                                                                                    });
                                                                                                                                                                                    });

                                                                                                                                                                                    // ===== NAVBAR SCROLL EFFECT =====
                                                                                                                                                                                    window.addEventListener('scroll', () => {
                                                                                                                                                                                        const navbar = document.querySelector('.navbar');
                                                                                                                                                                                            if (window.scrollY > 50) {
                                                                                                                                                                                                    navbar.style.background = 'rgba(10, 10, 46, 0.98)';
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                navbar.style.background = 'rgba(10, 10, 46, 0.9)';
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                    });