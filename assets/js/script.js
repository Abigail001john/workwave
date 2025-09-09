document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".menu-toggle");
    const menu = document.getElementById("mobileMenu");

    if (toggleBtn && menu) {
        toggleBtn.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    }
});

// Show/hide scroll button on scroll
window.onscroll = function() {
    const scrollBtn = document.getElementById("scrollUpBtn");
    if (scrollBtn) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    }
};

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const notifications = [
    // ICON Access – 5 entries
    {
        name: "Ada",
        location: "Abuja",
        plan: "ICON Access – ₦10,000",
        time: "2 mins ago"
    },
    {
        name: "Amina",
        location: "Kano",
        plan: "ICON Access – ₦10,000",
        time: "6 mins ago"
    },
    {
        name: "Blessing",
        location: "Owerri",
        plan: "ICON Access – ₦10,000",
        time: "9 mins ago"
    },
    {
        name: "Ngozi",
        location: "Enugu",
        plan: "ICON Access – ₦10,000",
        time: "12 mins ago"
    },
    {
        name: "Grace",
        location: "Uyo",
        plan: "ICON Access – ₦10,000",
        time: "15 mins ago"
    },

    // TITAN Access – 25 entries
    {
        name: "Emeka",
        location: "Lagos",
        plan: "TITAN Access – ₦20,000",
        time: "1 min ago"
    },
    {
        name: "Chika",
        location: "Port Harcourt",
        plan: "TITAN Access – ₦20,000",
        time: "3 mins ago"
    },
    {
        name: "Seyi",
        location: "Ibadan",
        plan: "TITAN Access – ₦20,000",
        time: "5 mins ago"
    },
    {
        name: "Tolu",
        location: "Benin",
        plan: "TITAN Access – ₦20,000",
        time: "7 mins ago"
    },
    {
        name: "Jide",
        location: "Abeokuta",
        plan: "TITAN Access – ₦20,000",
        time: "10 mins ago"
    },
    {
        name: "Ibrahim",
        location: "Sokoto",
        plan: "TITAN Access – ₦20,000",
        time: "14 mins ago"
    },
    {
        name: "Femi",
        location: "Osogbo",
        plan: "TITAN Access – ₦20,000",
        time: "17 mins ago"
    },
    {
        name: "Zainab",
        location: "Jos",
        plan: "TITAN Access – ₦20,000",
        time: "19 mins ago"
    },
    {
        name: "Chinedu",
        location: "Asaba",
        plan: "TITAN Access – ₦20,000",
        time: "20 mins ago"
    },
    {
        name: "Uche",
        location: "Awka",
        plan: "TITAN Access – ₦20,000",
        time: "21 mins ago"
    },
    {
        name: "Mariam",
        location: "Ibadan",
        plan: "TITAN Access – ₦20,000",
        time: "22 mins ago"
    },
    {
        name: "Abdullahi",
        location: "Kaduna",
        plan: "TITAN Access – ₦20,000",
        time: "23 mins ago"
    },
    {
        name: "Deborah",
        location: "Lokoja",
        plan: "TITAN Access – ₦20,000",
        time: "24 mins ago"
    },
    {
        name: "Yakubu",
        location: "Minna",
        plan: "TITAN Access – ₦20,000",
        time: "25 mins ago"
    },
    {
        name: "Ruth",
        location: "Makurdi",
        plan: "TITAN Access – ₦20,000",
        time: "26 mins ago"
    },
    {
        name: "Chisom",
        location: "Aba",
        plan: "TITAN Access – ₦20,000",
        time: "27 mins ago"
    },
    {
        name: "Tochi",
        location: "Owerri",
        plan: "TITAN Access – ₦20,000",
        time: "28 mins ago"
    },
    {
        name: "Kelvin",
        location: "Warri",
        plan: "TITAN Access – ₦20,000",
        time: "29 mins ago"
    },
    {
        name: "Efe",
        location: "Sapele",
        plan: "TITAN Access – ₦20,000",
        time: "30 mins ago"
    },
    {
        name: "Onyeka",
        location: "Nsukka",
        plan: "TITAN Access – ₦20,000",
        time: "31 mins ago"
    },
    {
        name: "Nafisat",
        location: "Ilorin",
        plan: "TITAN Access – ₦20,000",
        time: "32 mins ago"
    },
    {
        name: "Obinna",
        location: "Owerri",
        plan: "TITAN Access – ₦20,000",
        time: "33 mins ago"
    },
    {
        name: "Sade",
        location: "Akure",
        plan: "TITAN Access – ₦20,000",
        time: "34 mins ago"
    },
    {
        name: "Henry",
        location: "Aba",
        plan: "TITAN Access – ₦20,000",
        time: "35 mins ago"
    },
    {
        name: "Ijeoma",
        location: "Umuahia",
        plan: "TITAN Access – ₦20,000",
        time: "36 mins ago"
    },
    {
        name: "Mohammed",
        location: "Bauchi",
        plan: "TITAN Access – ₦20,000",
        time: "37 mins ago"
    }
];

let currentIndex = 0;

function showNotification() {
    const container = document.getElementById("notification-container");
    const {
        name,
        location,
        plan,
        time
    } = notifications[currentIndex];

    const notif = document.createElement("div");
    notif.className = "notification";
    notif.innerHTML = `<strong>${name}</strong> from <strong>${location}</strong> just subscribed to <br><em>${plan}</em> • <span style="color:#666;">${time}</span>`;

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 6000);

    currentIndex = (currentIndex + 1) % notifications.length;
}

setInterval(showNotification, 9000);