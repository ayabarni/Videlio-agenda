

const calendarButtons = document.querySelectorAll(".calendar-day");
const workShopCards = document.querySelectorAll(".workshop-card");
const calendarStatus = document.querySelector("#calendar-status");

calendarButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedDate = button.dataset.date;


        calendarButtons.forEach((calendarButton) => {
            calendarButton.setAttribute("aria-pressed", "false");
        });
        button.setAttribute("aria-pressed", "true");


        workShopCards.forEach((card) => {
            if (card.dataset.date === selectedDate) {
                card.hidden = false;
            } else {
                card.hidden = true;
            }
        })
        calendarStatus.textContent = `Workshopdetails voor ${button.textContent.trim()} juli 2026 worden getoond.`;
    })
})