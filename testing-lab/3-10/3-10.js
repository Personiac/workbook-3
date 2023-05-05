"use strict";

      function hideOrShowDetails() {
        const detailsSection = document.getElementById("detailsSection");
        const detailsSection2 = document.getElementById("detailsSection2");
        const toggleDetailsCheckbox = document.getElementById("toggleDetailsCheckbox");
        const toggleBtn = document.getElementById("toggleBtn");

        function hideOrShowBtn() {

            if (detailsSection2.style.display === "none") {
                detailsSection2.style.display = "block";
            } else {
            detailsSection2.style.display = "none";
            }
        }

        if (toggleDetailsCheckbox.checked) {
          detailsSection.style.display = "block";
        } else {
          detailsSection.style.display = "none";
        }
      }