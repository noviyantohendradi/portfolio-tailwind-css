// Navbar Fixed
// 
window.onscroll = function() { //jalankan fungsi ketika ada scrol window oleh mouse/trackpad
    const header = document.querySelector('header');

    // tandai posisi awal header sebelum scroll ke const fixedNav 
    const fixedNav = header.offsetTop; // jarak awal header terhadap top nya, harusnya = 0

    // setelah scroll nanti pasti nambah tergantung selisih jarak geser dengan jarak awalnya
    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
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
})
