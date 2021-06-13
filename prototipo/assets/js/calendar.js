
const createCalendar = ({ year }) => {
    console.log("Creando calendario tal");
    const weekdays = [...Array(7).keys()]
    const intlWeekDay = new Intl.DateTimeFormat('es', { weekday: 'short' })

    const el = document.getElementById('calendar')

    // document.getElementById('up').addEventListener('click', () => {
    //   el.scrollTo({ top: el.scrollTop - window.innerHeight, behavior: 'smooth' })
    // })

    // document.getElementById('down').addEventListener('click', () => {
    //   el.scrollTo({ top: el.scrollTop + window.innerHeight, behavior: 'smooth' })
    // })

    const weekDaysNames = weekdays.map((_, weekDayIndex) => {
      const date = new Date(2021, 10, weekDayIndex + 1)
      const weekDayName = intlWeekDay.format(date)
      return weekDayName
    })

    const renderedWeekDays = weekDaysNames.map(weekDayName => `<li class='day-name'>${weekDayName.toUpperCase()}</li>`).join('')

    const months = [...Array(12).keys()]
    const intl = new Intl.DateTimeFormat('es', { month: 'long' })

    const calendar = months.map(monthKey => {
      const monthName = intl.format(new Date(year, monthKey))

      const nextMonthIndex = monthKey + 1
      const daysOfMonth = new Date(year, nextMonthIndex, 0).getDate()

      const startsOn = new Date(year, monthKey, 1).getDay()

      return {
        monthName,
        daysOfMonth,
        startsOn
      }
    })

    const html = calendar.filter(({monthName}) => {
        const thisMonth = intl.format(new Date(2021, new Date().getMonth()))
        return (monthName == thisMonth)
    }).map(({ daysOfMonth, monthName, startsOn }) => {
      const days = [...Array(daysOfMonth).keys()]

      const firstDayAttributes = `class='li-item first-day' style='--first-day-start: ${startsOn}'`

      const renderedDays = days.map((day, index) =>
        `<li ${index === 0 ? firstDayAttributes : 'class="li-item"'}>${day + 1}</li>`
      ).join('')

      const title = `<h2 class="h2-item">${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${year}</h2>`

      return `<div class='month'>${title}<ol>${renderedWeekDays} ${renderedDays}</ol></div>`
    }).join('')

    el.innerHTML = html
}

createCalendar({ year: 2021 })

document.onclick = (e) => {
    if (e === undefined) e = window.event
    const target = e.target
    if (target.tagName == 'LI') {
        alert('No puedes añadir eventos el día ' + target.innerHTML)
    }
}

const addEvent = () => {
    alert("Función no disponible actualmente")
}