var now = new Date(),
    hours = now.getHours();

document.body.className += hours >= 18 || hours <= 6 ? ' night' : '';