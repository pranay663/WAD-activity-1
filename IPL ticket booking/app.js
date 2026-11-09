
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
