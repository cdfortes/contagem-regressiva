const daysContainer = document.querySelector('[data-js="days"]')
const hoursContainer = document.querySelector('[data-js="hours"]')
const minutesContainer = document.querySelector('[data-js="minutes"]')
const secondsContainer = document.querySelector('[data-js="seconds"]')
const newYearContainer = document.querySelector('.year')
const spinnerLoading = document.querySelector('.loading')
const countdownContainer = document.querySelector('.countdown')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

newYearContainer.textContent = nextYear

const getTimeUnit = (unit) => (unit < 10 ? '0' + unit : unit)

const insertCountdownValuesInDOM = ({ days, hours, minutes, seconds }) => {
  secondsContainer.textContent = getTimeUnit(seconds)
  minutesContainer.textContent = getTimeUnit(minutes)
  hoursContainer.textContent = getTimeUnit(hours)
  daysContainer.textContent = getTimeUnit(days)
}

const updateCountDown = () => {
  const currentTime = new Date()
  const diference = newYearTime - currentTime
  const days = Math.floor(diference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(diference / 1000 / 60 / 60) % 24
  const minutes = Math.floor(diference / 1000 / 60) % 60
  const seconds = Math.floor(diference / 1000) % 60

  insertCountdownValuesInDOM({ days, hours, minutes, seconds })
}

const handleCountdownDisplay = () => {
  spinnerLoading.remove()
  countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000)

setInterval(updateCountDown, 1000)
