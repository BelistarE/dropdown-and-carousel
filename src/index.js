import "./styles.css";
import extremelyPeaceful from "./images/Extremely_Peaceful_Sticker.webp";
import gaytheon from "./images/Gaytheon_Long_Sticker.webp";
import challenge from "./images/Home_of_Challenge_Pissing.webp";
import express from "./images/express.png";
import Hollywood from "./images/North_Hollywood_Sticker_MU_1.webp";
const main = {
  init: function () {
    console.log("Webpack is bundling CSS");
    this.appendContent();
  },
  appendContent: function () {
    const upperDiv = document.createElement("div");
    upperDiv.className = "dropdowndiv";

    const lowerDiv = document.createElement("div");
    lowerDiv.className = "carousel";

    document.body.appendChild(upperDiv);
    document.body.appendChild(lowerDiv);

    this.appendDropdown();
    this.initDropdown();
    this.appendCarousel();
  },
  appendDropdown: function () {
    console.log("appending dropdown menu");
    const dropdownDiv = document.createElement("div");
    dropdownDiv.className = "dropdown";

    const dropdownButton = document.createElement("button");
    dropdownButton.className = "dropdown-button";
    dropdownButton.textContent = "Menu";

    const dropdownContentDiv = document.createElement("div");
    dropdownContentDiv.className = "dropdown-content";

    const option1 = document.createElement("a");
    option1.href = "#";
    option1.textContent = "Option 1";

    const option2 = document.createElement("a");
    option2.href = "#";
    option2.textContent = "Option 2";

    const option3 = document.createElement("a");
    option3.href = "#";
    option3.textContent = "Option 3";

    dropdownContentDiv.appendChild(option1);
    dropdownContentDiv.appendChild(option2);
    dropdownContentDiv.appendChild(option3);

    dropdownDiv.appendChild(dropdownButton);
    dropdownDiv.appendChild(dropdownContentDiv);

    const lowerdiv = document.querySelector(".dropdowndiv");
    lowerdiv.appendChild(dropdownDiv);
  },
  appendCarousel: function () {
    const container = document.querySelector(".carousel");
    const carouselContainer = document.createElement("div");
    carouselContainer.className = "carousel-container";

    const carousel = document.createElement("div");
    carousel.className = "carousel";

    const images = [
      {
        src: extremelyPeaceful,
        alt: "Extremely Peaceful",
      },
      { src: gaytheon, alt: "Gaytheon" },
      { src: express, alt: "Image 3" },
      { src: challenge, alt: "Pee" },
      { src: Hollywood, alt: "Hollywood" },
    ];

    // Create slides and add them to the carousel
    images.forEach((image) => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide";
      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;
      slide.appendChild(img);
      carousel.appendChild(slide);
    });

    // Create previous and next buttons
    const prevButton = document.createElement("button");
    prevButton.className = "arrow prev";
    prevButton.innerHTML = "&#10094;"; // Left arrow
    const nextButton = document.createElement("button");
    nextButton.className = "arrow next";
    nextButton.innerHTML = "&#10095;"; // Right arrow

    // Create navigation dots container
    const navDots = document.createElement("div");
    navDots.className = "nav-dots";

    // Append elements to the container
    carouselContainer.appendChild(carousel);
    carouselContainer.appendChild(prevButton);
    carouselContainer.appendChild(nextButton);
    carouselContainer.appendChild(navDots);
    document.body.appendChild(carouselContainer);

    // Initialize the carousel
    let currentSlide = 0;
    const totalSlides = images.length;
    const slideInterval = 3000; // 5 seconds

    const showSlide = (index) => {
      if (index >= totalSlides) currentSlide = 0;
      else if (index < 0) currentSlide = totalSlides - 1;
      else currentSlide = index;

      const offset = -currentSlide * 100;
      carousel.style.transform = `translateX(${offset}%)`;

      updateDots();
    };

    const updateDots = () => {
      const dots = navDots.querySelectorAll("span");
      dots.forEach((dot, index) => {
        dot.className = index === currentSlide ? "active" : "";
      });
    };

    const createDots = () => {
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        dot.addEventListener("click", () => showSlide(i));
        navDots.appendChild(dot);
      }
      updateDots();
    };

    nextButton.addEventListener("click", () => {
      showSlide(currentSlide + 1);
    });

    prevButton.addEventListener("click", () => {
      showSlide(currentSlide - 1);
    });

    createDots();
    showSlide(currentSlide);

    setInterval(() => {
      showSlide(currentSlide + 1);
    }, slideInterval);
  },
  initDropdown: function () {
    console.log("initializing dropdown script");
    document.addEventListener("DOMContentLoaded", function () {
      const dropdownButton = document.querySelector(".dropdown-button");
      const dropdownContent = document.querySelector(".dropdown-content");

      dropdownButton.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
      });

      window.addEventListener("click", function (event) {
        if (!dropdownButton.contains(event.target)) {
          dropdownContent.classList.remove("show");
        }
      });
    });
  },
};

main.init();
