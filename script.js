
function acceptGift() {
    // Start the music before moving to the next page
    const music = document.getElementById("bgMusic");

    if (music) {
        music.play().catch(function() {});
    }

    // Remember that music was requested
    sessionStorage.setItem("playBirthdayMusic", "yes");

    window.location.href = "page3.html";
}

function showNoPage() {
    window.location.href = "page2.html";
}

function backToStart() {
    window.location.href = "index.html";
}

function showBirthday1() {
    window.location.href = "page4.html";
}

function showBirthday() {
    window.location.href = "page4.html";
}

function showBirthdayMessage() {
    window.location.href = "page5.html";
}

function showGallery() {
    window.location.href = "page6.html";
}

// Resume music on subsequent pages if it was requested
document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem("playBirthdayMusic") === "yes") {
        let music = document.getElementById("bgMusic");

        if (music) {
            music.play().catch(function() {});
        }
    }
});
