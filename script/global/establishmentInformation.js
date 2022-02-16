export default function initEstablishmentInformation() {

    //Informações relativas, e especificas sobre a empresa do site

    const operatingDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

    const deliveryTime = {
        delivery: "1h",
        pickUp: "30m"
    }

    const openingTime = {
        start: "18:00",
        end: "23:00"
    }



    //Atualiza no site as informações

    function setOperatingDays(days) {
        const placeToSet = document.querySelectorAll('[data-operating-days]')

        const firstDay = days[0].toLowerCase()
        const lastDay = days[days.length - 1].toLowerCase()

        placeToSet.forEach(el => {
            if (el.dataset.operatingDays === 'first') {
                el.innerText = firstDay
            } else if (el.dataset.operatingDays === 'last') {
                el.innerText = lastDay
            }
        })

    }

    function setOpeningTime() {
        const placeToSet = document.querySelectorAll('[data-opening-hours]')

        const startTime = openingTime.start + 'h'
        const endTime = openingTime.end + 'h'

        placeToSet.forEach(el => {
            if (el.dataset.openingHours === 'first') {
                el.innerText = startTime
            } else if (el.dataset.openingHours === 'last') {
                el.innerText = endTime
            }
        })
    }

    function setDeliveryTime() {
        const placeToSet = document.querySelectorAll('[data-delivery-time]')

        const timeToDelivery = deliveryTime.delivery
        const timeToPickUp = deliveryTime.pickUp

        placeToSet.forEach(el => {
            if (el.dataset.deliveryTime === 'delivery') {
                el.innerText = timeToDelivery
            } else if (el.dataset.deliveryTime === 'pickup') {
                el.innerText = timeToPickUp
            }
        })
    }


    setDeliveryTime()
    setOperatingDays(operatingDays)
    setOpeningTime()

}

