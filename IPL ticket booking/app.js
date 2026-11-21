
// Toast Notification
function showToast(message) {
    let toast = document.getElementById("toast");

    toast.innerHTML = message;
    toast.style.display = "block";

    setTimeout(function() {
        toast.style.display = "none";
    }, 3000);
}

// Scroll to Booking Section
function scrollToBooking() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });

    showToast("Redirecting to booking form!");
}


// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function() {

    // Activity 7: DOM Selectors
    const match = document.getElementById("match");
    const stand = document.querySelector("#stand");
    const quantity = document.getElementById("quantity");

    const summaryMatch = document.getElementById("summaryMatch");
    const summaryStand = document.getElementById("summaryStand");
    const summaryPrice = document.getElementById("summaryPrice");
    const summaryQuantity = document.getElementById("summaryQuantity");
    const summaryTotal = document.getElementById("summaryTotal");

    // Ticket Prices
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

    // Update Booking Summary
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

    // Booking Event Listeners
    match.addEventListener("change", updateSummary);
    stand.addEventListener("change", updateSummary);
    quantity.addEventListener("change", updateSummary);

    document.getElementById("updateBooking")
        .addEventListener("click", updateSummary);


    // Activity 8: Team Filter
    const teamFilter = document.getElementById("teamFilter");
    const matchCards = document.querySelectorAll(".match-card");

    teamFilter.addEventListener("change", function() {

        let selectedTeam = teamFilter.value;

        matchCards.forEach(function(card) {

            let teams = card.dataset.teams;

            if (selectedTeam === "all" ||
                teams.includes(selectedTeam)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";
            }
        });

        showToast("Match filter updated!");
    });


    // Activity 8: Grid View
    const matchContainer = document.getElementById("matchContainer");

    document.getElementById("gridBtn")
        .addEventListener("click", function() {

            matchContainer.classList.remove("list-view");

            showToast("Grid View Enabled!");
        });


    // Activity 8: List View
    document.getElementById("listBtn")
        .addEventListener("click", function() {

            matchContainer.classList.add("list-view");

            showToast("List View Enabled!");
        });


    // Activity 8: Mobile Hamburger Menu
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", function() {

        navLinks.classList.toggle("active");

    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");

        });
    });

});
