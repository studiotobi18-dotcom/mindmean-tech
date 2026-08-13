/*=========================================*
* Sticky Navbar
* Adds the "sticky" class to the navbar
* when the user scrolls down.
*=========================================*/

const header = document.getElementById("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

}


/*=========================================*
* Back To Top
* Shows the back-to-top button after the
* user scrolls down 500px.
*=========================================*/

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });


    /* Makes the page smoothly scroll back
       to the top when the button is clicked. */

    topBtn.onclick = function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}


/*=========================================*
* Contact Form → WhatsApp
* Takes the information entered in the
* contact form and prepares a WhatsApp
* message for Mindmean Tech.
*=========================================*/

const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        /* Stops the form from refreshing
           the page or submitting to "#". */

        event.preventDefault();


        /* Gets the information entered
           by the visitor. */

        const name = document.getElementById("name").value;

        const email = document.getElementById("email").value;

        const service = document.getElementById("service").value;

        const message = document.getElementById("message").value;


        /*=========================================
          YOUR WHATSAPP NUMBER
          
          Replace the number below with your
          actual Mindmean Tech WhatsApp number.
          
          IMPORTANT:
          Use the international format WITHOUT
          the "+" sign or spaces.
          
          Example:
          2347032653037
        =========================================*/

        const whatsappNumber = "2347032653037";


        /* Creates the message that will be
           sent to WhatsApp. */

        const whatsappMessage =
            "Hello Mindmean Tech!%0A%0A" +

            "Name: " + encodeURIComponent(name) + "%0A" +

            "Email: " + encodeURIComponent(email) + "%0A" +

            "Service: " + encodeURIComponent(service) + "%0A%0A" +

            "Message:%0A" +
            encodeURIComponent(message);


        /* Creates the WhatsApp link. */

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            whatsappMessage;


        /* Opens WhatsApp in a new tab. */

        window.open(whatsappURL, "_blank");

    });

}
/*=========================================*
* Homepage Contact Form → WhatsApp
* Takes the visitor's details from the
* homepage form and opens WhatsApp with
* a prepared message.
*=========================================*/


const homeContactForm =
    document.getElementById("homeContactForm");


/* Only runs if the homepage form exists */

if (homeContactForm) {


    /* Detects when the visitor clicks
       the Send Message button */

    homeContactForm.addEventListener("submit", function(event) {


        /* Stops the form from refreshing
           or trying to submit normally */

        event.preventDefault();


        /* Gets the information entered
           by the visitor */

        const name =
            document.getElementById("homeName").value;

        const email =
            document.getElementById("homeEmail").value;

        const phone =
            document.getElementById("homePhone").value;

        const message =
            document.getElementById("homeMessage").value;


        /*=========================================
          MINDMEAN TECH WHATSAPP NUMBER

          Replace the number below with the
          actual Mindmean Tech WhatsApp number.

          Use international format:
          234XXXXXXXXXX

          Do NOT use:
          +234
          spaces
          brackets
        =========================================*/

        const whatsappNumber = "2347032653037";


        /*=========================================
          WHATSAPP MESSAGE

          Creates the message the client will
          see when WhatsApp opens.
        =========================================*/

        const whatsappMessage =

            "Hello Mindmean Tech!%0A%0A" +

            "I would like to make an enquiry.%0A%0A" +

            "Name: " +
            encodeURIComponent(name) +
            "%0A" +

            "Email: " +
            encodeURIComponent(email) +
            "%0A" +

            "Phone: " +
            encodeURIComponent(phone) +
            "%0A%0A" +

            "Project Details:%0A" +

            encodeURIComponent(message);


        /*=========================================
          CREATE WHATSAPP LINK
        =========================================*/

        const whatsappURL =

            "https://wa.me/" +

            whatsappNumber +

            "?text=" +

            whatsappMessage;


        /*=========================================
          OPEN WHATSAPP
          Opens WhatsApp in a new browser tab.
        =========================================*/

        window.open(whatsappURL, "_blank");

    });

}