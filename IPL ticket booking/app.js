
function showToast(message) {
    let toast = document.getElementById("toast");

    toast.innerHTML = message;
    toast.style.display = "block";

    setTimeout(function() {
        toast.style.display = "none";
    }, 3000);
}

function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

    showToast("Redirecting to booking form!");
}

// Activity 7: DOM Selectors

document.addEventListener("DOMContentLoaded", function() {

    const match = document.getElementById("match");
    const stand = document.querySelector("#stand");
    const quantity = document.getElementById("quantity");

    const summaryMatch = document.getElementById("summaryMatch");
    const summaryStand = document.getElementById("summaryStand");
    const summaryPrice = document.getElementById("summaryPrice");
    const summaryQuantity = document.getElementById("summaryQuantity");
    const summaryTotal = document.getElementById("summaryTotal");
// Ticket prices for each match

const prices = {
    "RCB vs MI": {
        General: 800,
        Premium: 2000,
        VIP: 5000
    },

    "CSK vs KKR": {
        General: 1000,
        Premium: 2500,
        VIP: 6000
    },

    "DC vs SRH": {
        General: 900,
        Premium: 2200,
        VIP: 5500
    },

    "RR vs PBKS": {
        General: 800,
        Premium: 1800,
        VIP: 4500
    }
};

function updateSummary() {

    let selectedMatch = match.value;
    let selectedStand = stand.value;
    let ticketQuantity = Number(quantity.value);

    if (!Number.isInteger(ticketQuantity) ||
        ticketQuantity < 1 || ticketQuantity > 10) {

        showToast("Enter quantity between 1 and 10!");
        return;
    }

    let ticketPrice = prices[selectedMatch][selectedStand];

    let total = ticketPrice * ticketQuantity;

    summaryMatch.textContent = selectedMatch;
    summaryStand.textContent = selectedStand;
    summaryPrice.textContent = ticketPrice;
    summaryQuantity.textContent = ticketQuantity;
    summaryTotal.textContent = total;
showToast("Booking Summary Updated Successfully!");
}

// Event Listeners
match.addEventListener("change", updateSummary);
stand.addEventListener("change", updateSummary);
quantity.addEventListener("change", updateSummary);

});
