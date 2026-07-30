// ==========================================
// WAIT UNTIL PAGE LOADS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ======================================
    // LOADER
    // ======================================

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        if (loader) {

            loader.style.opacity = "0";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }

    });


    // ======================================
    // SMOOTH SCROLL BUTTON
    // ======================================

    const startBtn = document.querySelector(".start-btn");

    if (startBtn) {

        startBtn.addEventListener("click", () => {

            const form = document.getElementById("prediction");

            if (form) {

                form.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    }


    // ======================================
    // DARK MODE
    // ======================================

    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {

        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const icon = themeBtn.querySelector("i");

            if (icon) {

                if (document.body.classList.contains("dark")) {

                    icon.className = "fa-solid fa-sun";

                } else {

                    icon.className = "fa-solid fa-moon";

                }

            }

        });

    }


    // ======================================
    // PROGRESS BAR
    // ======================================

    const form = document.getElementById("predictionForm");

    const inputs = form ? form.querySelectorAll("input") : [];

    const progressBar = document.getElementById("progressBar");

    const progressText = document.getElementById("progressText");

    function updateProgress() {

        if (!progressBar || !progressText) return;

        let filled = 0;

        inputs.forEach(input => {

            if (input.value.trim() !== "") {

                filled++;

            }

        });

        const percentage = Math.round((filled / inputs.length) * 100);

        progressBar.style.width = percentage + "%";

        progressText.textContent = percentage + "%";

    }

    inputs.forEach(input => {

        input.addEventListener("input", updateProgress);

    });


    // ======================================
    // RIPPLE EFFECT
    // ======================================

    document.querySelectorAll("button").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            const size = Math.max(rect.width, rect.height);

            ripple.style.width = size + "px";

            ripple.style.height = size + "px";

            ripple.style.left = (e.clientX - rect.left - size / 2) + "px";

            ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

            ripple.classList.add("ripple");

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });


    // ======================================
    // SCROLL TO TOP
    // ======================================

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.scrollY > 350) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    // ======================================
    // RESET BUTTON
    // ======================================

    const resetBtn = document.querySelector(".reset-btn");

    if (resetBtn && form) {

        resetBtn.addEventListener("click", () => {

            setTimeout(() => {

                updateProgress();

            }, 100);

        });

    }


    // ======================================
    // INPUT ANIMATION
    // ======================================

    inputs.forEach(input => {

        input.addEventListener("focus", () => {

            input.parentElement.style.transform = "translateY(-3px)";

        });

        input.addEventListener("blur", () => {

            input.parentElement.style.transform = "translateY(0)";

        });

    });


    // ======================================
    // INITIAL PROGRESS
    // ======================================

    updateProgress();

});