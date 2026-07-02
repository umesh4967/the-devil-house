const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
}

/* ==========================================
   FOOD CARD HEART BUTTON
========================================== */

const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        if(button.classList.contains("active")){
            button.innerHTML = "♥";
        }else{
            button.innerHTML = "♡";
        }

    });

});

/* ==========================================
   BOOK TABLE WHATSAPP FORM
========================================== */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("customerName").value.trim();
        const mobile = document.getElementById("customerMobile").value.trim();
        const email = document.getElementById("customerEmail").value.trim();
        const message = document.getElementById("customerMessage").value.trim();

        if (name === "" || mobile === "") {
            alert("Please fill Name and Mobile Number.");
            return;
        }

        const whatsappNumber = "917240495000";

        const text =
`Hello The Devil House,

🍽️ Table Booking Request

👤 Name : ${name}

📞 Mobile : ${mobile}

📧 Email : ${email || "Not Provided"}

💬 Comments :
${message || "No Comments"}

Please contact me regarding my table booking.

Thank You.`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");

    });

}

/* ==========================================
   LIVE CHAT POPUP
========================================== */

const chatBox = document.getElementById("chatBox");
const chatBtn = document.getElementById("chatBtn");
const chatMsg = document.getElementById("chatMsg");

if (chatBox && chatBtn) {

    function openChat() {
        chatBox.classList.add("show");
        chatBtn.style.display = "none";

        if (chatMsg) {
            chatMsg.innerHTML =
                "Hello 👋<br>How can we help you with your reservation?";
        }
    }

    function closeChat() {
        chatBox.classList.remove("show");
        chatBtn.style.display = "flex";
    }

    function toggleChat() {
        if (chatBox.classList.contains("show")) {
            closeChat();
        } else {
            openChat();
        }
    }

    window.openChat = openChat;
    window.closeChat = closeChat;
    window.toggleChat = toggleChat;

    window.addEventListener("load", function () {
        setTimeout(openChat, 5000);
    });

}