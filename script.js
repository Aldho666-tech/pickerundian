const initialData = [
    "Robby Maulana (K04-10)", "Nur Nawaningtyas P (D14-03)", "Wisnu Gilang Romadhon (A07-47)", "Anindia Rachma (D15-08)",
    "Arman Adiansyah (K02-19)", "Mochamad Al Madania (K04-12)", "Feggy Nisa Sabelina (K02-10)", "Rizky Hidayatulloh (K02-15)",
    "Bayu Dwinovaldo (K04-14)", "Putri Pratiwi (D15-09)", "Tedy Soprayogo (K02-21)", "Dede Fahrurrozi (D10-04)",
    "Zalaludin Rahmat (K04-11)", "Helda Meliana (A07-36)", "Ari Astari (K02-09)", "Agnes Dwi Ayu Ningrum (A10-15)",
    "Muhamad Rizky Indrajulianto (K04-12A)", "Muhidin (D04-26)", "Antsya Dwi Agustina (K02-17)", "Khoirul Bahary (K04-16)",
    "Erna Susanti Kasaring (K07-05)", "Awalya Deviana Safitri (K07-06)", "Anwar Andryawan Gozaly (A05-02)", "Samsul Yusuf (K04-33)",
    "Iwan Setiawan (K07-18)", "Edy Margono (K02-18)", "Intan Kartika Sari (K04-27)", "Sukmawati (K08-12)",
    "Muhammad Raihansyah (A02-13)", "Rachman Kurniawan (K04-32)", "Hendro Sudrajat (K04-30)", "Gabryella Apriani Sinaga (K07-21)",
    "Bilianus Sisap (K04-15)", "Muhammad Agil Munawar (K04-08)", "Rizky Asriansyah Marpaung (A07-41)", "Ramadhan Maulana (A02-10)",
    "Deni Syarif Hamdani, ST (A07-39)", "Agustinus Wahyudi Sutopa (K07-04)", "Muhammad Fikri Imbar Ramadhan (K04-18)", "Evelin Octaviana Sitorus (K02-08)",
    "Naufal Aziz Amara (A03-01)", "Muhamad Said (K04-01)", "Christian (K04-28)", "Aji Saputra (D10-05)",
    "Ahmad Pujinursiwan (K02-12)", "Ilham Satiadi (K04-29)", "Dede Asep Surahman (D08-01)", "Hotdiran P Sinaga (K08-10)",
    "Achmad Rais Jusa (K08-03)", "Muhammad Hifdhi Hilmi (D15-12)", "Gigih Adhitama (K04-05)", "Marlin Tinambunan (K04-04)",
    "Diggy Irsan Djohan (K04-03)", "Ardani (K04-24)", "Arief Ahsan Nasrullah (K04-25)", "Fedro Budi Harjo (K02-07)",
    "Andri Leksono (K02-05)", "Saeful Amar (K02-06)", "R. Aryo Pratomo Hadianto (K04-21)", "Dimas Maulana Malik (K04-06)",
    "Fian Haryanto (K02-02)", "Fachmi Arifin (D13-04)", "Mahdy Rohmadoni (A07-35)", "Alian Bekti Wibowo (K02-26)",
    "Tri Rahayu (K05-17)", "Rohimam (K02-28)", "Muhammad Adhi Utama (K02-25)", "Muhamad Erwin Triansah (K04-19)",
    "Lukas Patty (K04-26)", "Martina Noor Dinari (K05-18)", "Doni Nurhidayat (K02-01)", "Ahmad Saroji (K07-14)",
    "Abid Hariz (K07-15)", "Zidan Ramadhan (K04-22)", "Artoni (K03-05)", "Erni (K04-17)",
    "Syumarinka Anpa Adora (K03-12)", "Dewi Sukmawati (K06-02)", "Anang Herdiana (K08-06)", "Tuti Alwiyah (K08-27)",
    "Christanto Sim (K03-18)", "Muhammad Hamdani (K03-08)", "Tisha Yasmin Astridita Rambe (K04-02)", "Putri Ayu Madini (K08-23)",
    "Khairannisa Vidany (A02-08)", "Firzha Ramadhan (K04-20)", "Eulis Nur Aisah (K07-02)", "Hastuti Melati (D14-04)",
    "Finnland Chaniago (K03-16)", "Muhammad Ilham (K02-16)", "Bintang Arya Putra (K03-14)", "Wijiati Lestari (K07-22)",
    "Lilia Yusnita (A03-03)", "Raihan Tsania Abdillah (K08-25)", "Reynold Sayhputra Rajagukguk (K03-10)", "Dana Akbar (K08-21)",
    "Khoirul Hudayanto (K08-11)", "Suryadi (K03-09)", "Tiwi Resti Pratiwi (K05-24)", "Jaka Dwicahyo (K05-25)",
    "Ilham Saputra (K04-31)", "Nina Anggian Putri (K08-12A)", "Herni (K06-05)", "Mochamad Apipi (A03-05)",
    "Saiful Amri (K05-14)", "Yohanes Rekzy Pandie (K08-07)", "Helena Pasaribu (K05-23)", "Imanuel Abraham (D15-11)",
    "Elka Yunita Sinaga, SE (K05-15)", "Iffah Marifah (K01-12)", "Muhammad Rizki Kurniawan (K01-18)", "Nurul Makarim (A03-04)",
    "Herry Febrianto Indra (A03-03)", "Fachmi arifin (D13-04)", "Alian Bekti Wibowo (K02-06)"
];

let participants = [...initialData];
let winners = [];
let isDrawing = false;
let animationInterval = null;

const rollingDisplayEl = document.getElementById('rolling-display');
const highlightGlow = document.getElementById('highlight-glow');
const statusTextEl = document.getElementById('status-text');
const newEntryInput = document.getElementById('new-entry');
const addForm = document.getElementById('add-form');
const winnerCountInput = document.getElementById('winner-count');
const drawBtn = document.getElementById('draw-btn');
const resetBtn = document.getElementById('reset-btn');
const btnText = document.getElementById('btn-text');

const confirmModalEl = document.getElementById('confirm-modal');
const databaseModalEl = document.getElementById('database-modal');
const participantListEl = document.getElementById('participant-list');
const winnerListEl = document.getElementById('winner-list');
const participantCountEl = document.getElementById('participant-count');
const statRemainingEl = document.getElementById('stat-remaining');
const statWinnersEl = document.getElementById('stat-winners');

// ======== WEB AUDIO API BUILT-IN SOUNDS ========
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function initAudio() {
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playTickSound() {
    if (!audioCtx) return;

    // Snare drum simulation (low thump + noise burst)
    const osc = audioCtx.createOscillator();
    const oscGain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

    oscGain.gain.setValueAtTime(0.8, audioCtx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

    osc.connect(oscGain);
    oscGain.connect(audioCtx.destination);

    const noiseOsc = audioCtx.createOscillator();
    const noiseGain = audioCtx.createGain();

    noiseOsc.type = 'square';
    noiseOsc.frequency.value = 500;

    noiseGain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);

    noiseOsc.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
    noiseOsc.start();
    noiseOsc.stop(audioCtx.currentTime + 0.05);
}

let winnerAudio = null;

function playWinnerSound() {
    if (winnerAudio) {
        winnerAudio.pause();
        winnerAudio.currentTime = 0;
    }
    winnerAudio = new Audio('Award Sound Effect.mp3');
    winnerAudio.play().catch(e => console.log('Audio play failed:', e));
}
// ========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Attempt audio unlock on first click anywhere
    document.body.addEventListener('click', () => { initAudio(); }, { once: true });

    renderAll();
    lucide.createIcons();

    document.getElementById('btn-kelola').addEventListener('click', () => {
        if (isDrawing) return;
        initAudio(); // Initialize audio just in case
        databaseModalEl.classList.remove('hidden');
        setTimeout(() => {
            const content = databaseModalEl.querySelector('.modal-content');
            if (content) {
                content.classList.remove('scale-90', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }
            setTimeout(() => newEntryInput.focus(), 50);
        }, 10);
    });

    const closeDb = () => {
        const content = databaseModalEl.querySelector('.modal-content');
        if (content) {
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-90', 'opacity-0');
        }
        setTimeout(() => databaseModalEl.classList.add('hidden'), 300);
    };

    document.getElementById('close-db-btn')?.addEventListener('click', closeDb);
    document.getElementById('close-db-btn2')?.addEventListener('click', closeDb);
    document.getElementById('db-backdrop')?.addEventListener('click', closeDb);

    // Fullscreen History Logic
    const fsBtn = document.getElementById('btn-fullscreen');
    fsBtn?.addEventListener('click', openFullscreenHistory);
});

function renderAll() {
    renderParticipants();
    renderWinners();
    updateStats();
    lucide.createIcons();
}

function updateStats() {
    participantCountEl.textContent = participants.length;
    statRemainingEl.textContent = participants.length;
    statWinnersEl.textContent = winners.length;
    if (participants.length > 0) {
        winnerCountInput.max = participants.length;
        if (parseInt(winnerCountInput.value) > participants.length) {
            winnerCountInput.value = participants.length;
        }
    } else {
        winnerCountInput.max = 1;
    }
}

function renderParticipants() {
    participantListEl.innerHTML = '';
    if (participants.length === 0) {
        participantListEl.innerHTML = `
            <div class="text-center font-bold text-slate-400 text-sm mt-10 px-4 flex flex-col items-center">
                <i data-lucide="clipboard-list" class="w-10 h-10 mb-2"></i>
                <p>Data Kosong</p>
            </div>`;
        return;
    }
    participants.forEach((name, idx) => {
        const div = document.createElement('div');
        div.className = 'list-item group';
        div.innerHTML = `
            <span class="truncate font-black">${idx + 1}. ${name}</span>
            <button onclick="removeParticipant(${idx})" class="text-slate-400 hover:text-red-600 transition-all p-2 bg-slate-100 hover:bg-red-100 rounded-lg">
                <i data-lucide="trash-2" class="w-5 h-5"></i>
            </button>
        `;
        participantListEl.appendChild(div);
    });
}

function renderWinners() {
    winnerListEl.innerHTML = '';
    if (winners.length === 0) {
        winnerListEl.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-slate-300 font-bold text-center">
                <i data-lucide="trophy" class="w-16 h-16 mb-4"></i>
                <p class="text-xs uppercase tracking-widest">Belum ada pemenang</p>
            </div>`;
        return;
    }
    [...winners].reverse().forEach((winnerObj, idx) => {
        const realIdx = winners.length - idx;
        const div = document.createElement('div');
        div.className = 'winner-item group';
        div.innerHTML = `
            <div class="winner-badge shrink-0">${realIdx}</div>
            <div class="flex flex-col flex-1 min-w-0">
                <span class="winner-name-text-sm truncate">${winnerObj.name}</span>
                <span class="winner-time-text">${winnerObj.time}</span>
            </div>
        `;
        winnerListEl.appendChild(div);
    });
}

window.showConfirmModal = () => { if (!isDrawing) confirmModalEl.classList.remove('hidden'); }
window.closeConfirmModal = () => { confirmModalEl.classList.add('hidden'); }
window.executeReset = () => {
    participants = [...initialData];
    winners = [];
    rollingDisplayEl.textContent = "???";
    rollingDisplayEl.classList.remove('winner-highlight');
    if (highlightGlow) highlightGlow.style.opacity = '0';
    statusTextEl.textContent = "SIAP UNTUK MENGUNDI";
    renderAll();
    closeConfirmModal();
    showNotification('Data dikembalikan ke posisi semula!');
}

window.removeParticipant = (index) => {
    if (isDrawing) return;
    const removedName = participants[index];
    participants.splice(index, 1);
    renderAll();
    showNotification(`Dihapus: ${removedName}`);
};

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = newEntryInput.value.trim();
    if (val) {
        participants.push(val);
        newEntryInput.value = '';
        renderAll();
        showNotification(`Ditambahkan: ${val}`);
        setTimeout(() => { if (participantListEl) participantListEl.scrollTop = participantListEl.scrollHeight; }, 50);
    }
});

drawBtn.addEventListener('click', () => {
    initAudio();
    const countToWin = parseInt(winnerCountInput.value) || 1;
    if (participants.length === 0) return showNotification("Daftar Peserta Kosong!");
    if (participants.length < countToWin) return alert(`Hanya ada ${participants.length} peserta.`);
    startDraw(countToWin);
});

function startDraw(count) {
    isDrawing = true; toggleControls(false);
    statusTextEl.textContent = "MENGACAK...";
    statusTextEl.classList.add('animate-pulse');

    rollingDisplayEl.classList.remove('winner-highlight');
    rollingDisplayEl.classList.add('slot-rolling');
    if (highlightGlow) highlightGlow.style.opacity = '0';

    const orbWrapper = document.getElementById('orb-wrapper');
    if (orbWrapper) orbWrapper.classList.add('orb-drawing');

    let tickCount = 0;

    animationInterval = setInterval(() => {
        // Smoother rolling interval
        rollingDisplayEl.textContent = participants[Math.floor(Math.random() * participants.length)];

        if (tickCount % 2 === 0) { playTickSound(); }
        tickCount++;
    }, 60);

    setTimeout(() => { finishDraw(count); }, 4000); // 4 detik durasi acak
}

function finishDraw(count) {
    clearInterval(animationInterval);
    statusTextEl.classList.remove('animate-pulse');

    const orbWrapper = document.getElementById('orb-wrapper');
    if (orbWrapper) orbWrapper.classList.remove('orb-drawing');

    rollingDisplayEl.classList.remove('slot-rolling');
    void rollingDisplayEl.offsetWidth; // Force Reflow
    rollingDisplayEl.classList.add('winner-highlight');

    if (highlightGlow) highlightGlow.style.opacity = '1';

    const shuffled = [...participants].sort(() => 0.5 - Math.random());
    const selectedWinners = shuffled.slice(0, count);
    const ts = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    selectedWinners.forEach(name => winners.push({ name, time: ts }));
    participants = shuffled.slice(count);

    rollingDisplayEl.textContent = selectedWinners[0];
    statusTextEl.textContent = selectedWinners.length > 1 ? `+ ${selectedWinners.length - 1} LAINNYA` : "PEMENANG TERPILIH";

    renderAll(); isDrawing = false; toggleControls(true);

    // Play guaranteed synth sound
    playWinnerSound();

    triggerConfetti();
    showModal(selectedWinners);
}

let currentWinnersQueue = [];
let currentWinnerIndex = 0;

function generateSparkles() {
    const container = document.getElementById('winner-stars');
    if (!container) return;
    container.innerHTML = '';
    const count = 40;
    for (let i = 0; i < count; i++) {
        const s = document.createElement('div');
        s.className = 'sparkle';
        s.style.left = Math.random() * 100 + '%';
        s.style.top = Math.random() * 100 + '%';
        s.style.width = (Math.random() * 5 + 3) + 'px';
        s.style.height = s.style.width;
        s.style.animationDelay = (Math.random() * 2) + 's';
        s.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
        container.appendChild(s);
    }
}

let activeModalEl = null;
let activeModalContentEl = null;
let activeModalNamesEl = null;
let activeModalActionBtn = null;
let activeModalCounter = null;

function showModal(winnerList) {
    currentWinnersQueue = winnerList;
    currentWinnerIndex = 0;

    const suffix = '-umroh';
    activeModalEl = document.getElementById(`winner-modal${suffix}`);
    activeModalContentEl = document.getElementById(`modal-content${suffix}`);
    activeModalNamesEl = document.getElementById(`modal-winner-names${suffix}`);
    activeModalActionBtn = document.getElementById(`modal-action-btn${suffix}`);
    activeModalCounter = document.getElementById(`winner-step-counter${suffix}`);

    generateSparkles();
    displaySingleWinner();
}

function displaySingleWinner() {
    const name = currentWinnersQueue[currentWinnerIndex];
    const total = currentWinnersQueue.length;
    const isLast = currentWinnerIndex === total - 1;

    // Extra confetti + sound for subsequent winners
    if (currentWinnerIndex > 0) {
        playWinnerSound();
        triggerConfetti();
    }

    // Inject name with animation class
    // Inject name with premium animation
    activeModalNamesEl.innerHTML = `
        <div class="glow-ring"></div>
        <div class="winner-name-animate">${name}</div>
    `;

    // Step counter
    if (total > 1) {
        activeModalCounter.textContent = `Pemenang ke-${currentWinnerIndex + 1} dari ${total}`;
        activeModalCounter.classList.remove('hidden');
    } else {
        activeModalCounter.classList.add('hidden');
    }

    // Action button
    if (isLast) {
        activeModalActionBtn.innerHTML = '🏁 &nbsp; SELESAI';
        activeModalActionBtn.onclick = () => closeModal();
    } else {
        activeModalActionBtn.innerHTML = 'PEMENANG SELANJUTNYA &nbsp; →';
        activeModalActionBtn.onclick = () => nextWinner();
    }

    // Show overlay
    activeModalEl.style.display = 'flex';

    // Animate card in
    activeModalContentEl.classList.remove('active');
    void activeModalContentEl.offsetWidth; // force reflow
    setTimeout(() => activeModalContentEl.classList.add('active'), 20);
}

function nextWinner() {
    // Slide out
    activeModalContentEl.style.transform = 'scale(0.85) translateY(20px)';
    activeModalContentEl.style.opacity = '0';
    setTimeout(() => {
        activeModalContentEl.style.transform = '';
        activeModalContentEl.style.opacity = '';
        activeModalContentEl.classList.remove('active');
        currentWinnerIndex++;
        generateSparkles();
        displaySingleWinner();
    }, 320);
}

function closeModal() {
    if (winnerAudio) {
        winnerAudio.pause();
        winnerAudio.currentTime = 0;
    }
    if (!activeModalContentEl) return;
    activeModalContentEl.style.transform = 'scale(0.85) translateY(30px)';
    activeModalContentEl.style.opacity = '0';
    if (highlightGlow) highlightGlow.style.opacity = '0';
    setTimeout(() => {
        if (activeModalEl) activeModalEl.style.display = 'none';
        activeModalContentEl.style.transform = '';
        activeModalContentEl.style.opacity = '';
        activeModalContentEl.classList.remove('active');
    }, 350);
}
window.closeModal = closeModal;


function triggerConfetti() {
    const end = Date.now() + 4000;
    const colors = ['#facc15', '#10b981', '#fbbf24', '#059669', '#ffffff'];
    (function frame() {
        confetti({ particleCount: 6, angle: 60, spread: 60, origin: { x: 0 }, colors, zIndex: 1000 });
        confetti({ particleCount: 6, angle: 120, spread: 60, origin: { x: 1 }, colors, zIndex: 1000 });
        if (Date.now() < end) requestAnimationFrame(frame);
    }());
}

function toggleControls(enable) {
    drawBtn.disabled = !enable; resetBtn.disabled = !enable;
    newEntryInput.disabled = !enable; winnerCountInput.disabled = !enable;
    btnText.innerHTML = !enable
        ? `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> MENGUNDI...`
        : `<i data-lucide="power" class="w-5 h-5"></i> MULAI PENGACAKAN`;
    lucide.createIcons();
}

function showNotification(message) {
    const el = document.createElement('div');
    el.className = 'fixed top-6 right-6 z-[150] transition-all duration-300 flex items-center gap-3 font-black text-sm transform translate-x-[200%]'; el.style.cssText += 'background:rgba(0,30,10,0.92);border:2px solid rgba(250,204,21,0.6);color:#fff;padding:0.85rem 1.25rem;border-radius:0.875rem;box-shadow:0 10px 30px rgba(0,0,0,0.4);backdrop-filter:blur(12px);';
    el.innerHTML = `<i data-lucide="check-circle" class="w-8 h-8 text-emerald-500"></i><span>${message}</span>`;
    document.body.appendChild(el);
    lucide.createIcons();
    setTimeout(() => { el.style.transform = 'translateX(0)'; }, 10);
    setTimeout(() => { el.style.transform = 'translateX(200%)'; setTimeout(() => el.remove(), 300); }, 3000);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement !== newEntryInput && !isDrawing && participants.length > 0 && modalEl.classList.contains('hidden') && databaseModalEl.classList.contains('hidden') && confirmModalEl.classList.contains('hidden')) {
        drawBtn.click();
    }
    if (e.key === 'Escape') {
        if (!modalEl.classList.contains('hidden')) closeModal();
        else if (!databaseModalEl.classList.contains('hidden')) document.getElementById('close-db-btn')?.click();
        else if (!confirmModalEl.classList.contains('hidden')) closeConfirmModal();
    }
});

function openFullscreenHistory() {
    const fsModal = document.getElementById('fullscreen-history-modal');
    const fsList = document.getElementById('fullscreen-winner-list');
    const sourceList = document.getElementById('winner-list');

    if (!fsModal || !fsList || !sourceList) return;

    // Clear and clone winners
    fsList.innerHTML = sourceList.innerHTML;

    // Make items much larger in fullscreen and remove truncation
    const items = fsList.querySelectorAll('.winner-item');
    items.forEach(item => {
        // Find the name text and make it huge & multi-line
        const nameText = item.querySelector('.winner-name-text-sm');
        if (nameText) {
            nameText.classList.remove('winner-name-text-sm', 'truncate');
            nameText.classList.add('text-3xl', 'md:text-5xl', 'font-black', 'text-yellow-400', 'leading-tight');
            nameText.style.whiteSpace = 'normal'; // Ensure it wraps
        }

        // Find the badge and make it huge
        const badge = item.querySelector('.winner-badge');
        if (badge) {
            badge.classList.remove('shrink-0');
            badge.classList.add('w-20', 'h-20', 'text-4xl', 'flex-none');
        }

        // Time text
        const timeText = item.querySelector('.winner-time-text');
        if (timeText) {
            timeText.classList.add('text-xl', 'text-white/40', 'mt-2');
        }

        // Add container styling
        item.classList.add('p-8', 'bg-white/5', 'rounded-3xl', 'border', 'border-yellow-500/20', 'flex', 'items-center', 'gap-10');
        item.style.height = 'auto';
    });

    lucide.createIcons();
    fsModal.style.display = 'flex';
}

function closeFullscreenHistory() {
    const fsModal = document.getElementById('fullscreen-history-modal');
    if (fsModal) fsModal.style.display = 'none';
}

window.openFullscreenHistory = openFullscreenHistory;
window.closeFullscreenHistory = closeFullscreenHistory;