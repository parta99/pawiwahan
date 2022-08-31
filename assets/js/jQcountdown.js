function countdown() {
    const today = new Date();
    var offerDate = new Date('28 sep 2022 09:00:00');

    //If offer ends reset to new value
    if (today.getSeconds() == offerDate.getSeconds()) {
        offerDate = resetOfferDate();
    }

    //offerTime will have the total millseconds 
    const offerTime = offerDate - today;

    // 1 sec= 1000 ms
    // 1 min = 60 sec
    // 1 hour = 60 mins
    // 1 day = 24 hours
    const offerDays = Math.floor(offerTime / (1000 * 60 * 60 * 24));
    const offerHours = Math.floor((offerTime / (1000 * 60 * 60) % 24));
    const offerMins = Math.floor((offerTime / (1000 * 60) % 60));
    const offerSecs = Math.floor((offerTime / 1000) % 60);

    const days_el = document.getElementById("days_left");
    days_el.innerHTML = offerDays;
    const hours_el = document.getElementById("hours_left");
    hours_el.innerHTML = offerHours;
    const mins_el = document.getElementById("mins_left");
    mins_el.innerHTML = offerMins;
    const secs_el = document.getElementById("secs_left");
    secs_el.innerHTML = offerSecs;
}

function resetOfferDate() {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 15);
    return futureDate;
}

setInterval(countdown, 1000);