// Navbar Fixed
// 
window.onscroll = function() { //jalankan fungsi ketika ada scrol window oleh mouse/trackpad
    const header = document.querySelector('header');

    // tandai posisi awal header sebelum scroll ke const fixedNav 
    const fixedNav = header.offsetTop; // jarak awal header terhadap top nya, harusnya = 0

    const toTop = document.querySelector('#to-top');

    // setelah scroll nanti pasti nambah tergantung selisih jarak geser dengan jarak awalnya
    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Hamburger Menu
// id = #hamburger di index.html
const hamburger = document.querySelector('#hamburger');

// const navMenu = document.getElementById('nav-menu'); atau
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    // hamburger.classList.add = untuk nambah class
    // hamburger.classList.remove = untuk hapus class
    // hamburger.classList.toggle = untuk melakukan kedua diatas bergantian
    hamburger.classList.toggle('hamburger-active');

    // sekalian toogle= memunculkan/menghapus nav-menu ya    
    navMenu.classList.toggle('hidden');
});


// Klik diluar Hamburger
window.addEventListener('click', function(e) {
    // console.log(e.target); // e.target ini bisa ambil properties elementnya, kita cocokan dengan const hamburger dan navMenu
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    // darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
    if (darkToggle.checked) { 
        html.classList.add('dark');
        // Whenever the user explicitly chooses dark mode
        localStorage.theme = 'dark';
     } else {
         html.classList.remove('dark');
         localStorage.theme = 'light';
    }});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }