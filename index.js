const navToggle = document.getElementById('navtoggle')
const nav = document.querySelector('nav')
const navIcon = document.querySelectorAll('.nav-icon')
const hamburger = document.getElementById('hamburger')
const currentTime = document.getElementById('currentTime')
const currentDay = document.getElementById('currentDay')

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open')

  navIcon.forEach((icon) => {
    icon.classList.toggle('hidden')
  })
})

window.addEventListener('resize', () => {
  if (document.body.clientWidth > 500) {
    nav.classList.remove('open')
    navIcon.forEach((icon) => {
      icon.classList.add('hidden')
    })
    hamburger.classList.remove('hidden')
  }
})

function updateTimeAndDay() {
  const now = new Date()
  const utcTime = now.toUTCString()
  const dayOfWeek = now.toLocaleString('en-us', { weekday: 'long' })

  currentTime.innerHTML = `Current Time in UTC  : <span>${utcTime}</span> `
  currentDay.innerHTML = `Day of the week: <span> ${dayOfWeek} </span> `
}

updateTimeAndDay()
setInterval(updateTimeAndDay, 60000) // Update every minute
