import "./styles.css";

const main = {
  init: function () {
    console.log("Webpack is bundling CSS");
    this.appendContent();
  },
  appendContent: function () {
    const upperDiv = document.createElement("div");
    upperDiv.className = "dropdown";

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

    const lowerdiv = document.querySelector(".dropdown");
    lowerdiv.appendChild(dropdownDiv);
  },
  appendCarousel: function () {
    const container = document.querySelector(".carousel");
  },
  initDropdown: function () {
    console.log("initializing dropdown script");
    document.addEventListener("DOMContentLoaded", function () {
      const dropdownButton = document.querySelector(".dropdown-button");
      const dropdownContent = document.querySelector(".dropdown-content");

      // Toggle dropdown visibility when the button is clicked
      dropdownButton.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
      });

      // Close the dropdown if the user clicks outside of it
      window.addEventListener("click", function (event) {
        if (!dropdownButton.contains(event.target)) {
          dropdownContent.classList.remove("show");
        }
      });
    });
  },
};

main.init();
