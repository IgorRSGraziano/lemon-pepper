export default async function initOpeningHours() {

    const informationsJSON = await (await fetch('/assets/menu/informations.json')).json()

    const operatingDays = informationsJSON.establishment.operatingDays

    const openingHours = informationsJSON.establishment.openingTime.start.split(":")
    const endHours = informationsJSON.establishment.openingTime.end.split(":")

    const now = new Date()
    const currentDay = now.getDay()
    const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), openingHours[0], openingHours[1]);
    const endTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHours[0], endHours[1]);


    const IsOperatingDay = !!operatingDays[currentDay - 1]


    const isOpeningHours = (now >= startTime && now < endTime)


    if (isOpeningHours && IsOperatingDay) {
        const editArea = document.querySelector('[class^="schedules__opening-time__icon"]')
        editArea.classList.replace(editArea.classList[0], 'schedules__opening-time__icon--open')

        editArea.innerText = 'Aberto'
    } else {
        const editArea = document.querySelector('[class^="schedules__opening-time__icon"]')
        editArea.classList.replace(editArea.classList[0], 'schedules__opening-time__icon--close')

        editArea.innerText = 'Fechado'
    }
}