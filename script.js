/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('form_kontak'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // servceID - templateID - #form - publicKey (EmailJS)
    emailjs.sendForm('service_zij91oj','template_890ztcl','#form_kontak','uhNU3B-BDepeoXVzt')
    .then(() => {
        // show send message
        contactMessage.textContent = 'Pesan sudah terkirim ✅'

        // remove message after 5 detik
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // clear input fields
        contactForm.reset()
    }, () => {
        // show errror
        contactMessage.textContent = 'Pesan tidak terkirim (layanan error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)



// tombol batal
function resetForm() {
    // Mengosongkan semua inputan di form dengan ID "myForm"
    document.getElementById("form_kontak").reset();
}

// services box
function toggleText(busur) {
    const card = busur.closest(".card-services"); // Cari elemen card-services terdekat
    card.classList.toggle("active"); // Tambah atau hapus kelas 'active'
  }
  