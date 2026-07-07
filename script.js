/* ==========================================
   Kaeyd Sevilla
   Main JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Crisp - Message Us
    ========================================== */

    const messageButton = document.getElementById("messageButton");

    if (messageButton) {
        messageButton.addEventListener("click", (e) => {

            e.preventDefault();

            if (window.$crisp) {

                $crisp.push(["do", "chat:open"]);

            } else {

                console.log("Crisp has not loaded.");

            }

        });
    }



    /* ==========================================
       Smooth Scroll
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });



    /* ==========================================
       Navbar Scroll Effect
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

});