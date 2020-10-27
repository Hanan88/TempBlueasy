const toggleBtn = document.getElementsByClassName('fa-bars')[0]
const navLink = document.getElementsByClassName ('navbar')[0]

toggleBtn.addEventListener('click', () => {
  navLink.classList.toggle('activeNavbar')
})
