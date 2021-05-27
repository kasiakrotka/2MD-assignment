class HomePage {
  constructor() {
    this.galleryData = new Array();
    this.descFull = false;
    this.connectButtons();
    this.addDynamicData();
    this.loadGalleryData();
  }

  connectButtons() {
    const moreBtn = document.getElementById("more-btn");
    moreBtn.addEventListener("click", this.moreBtnHandler.bind(this));
  }

  addDynamicData() {
    const descriptionDiv = document.getElementById("description-container");
    const dateContainer = document.getElementById("date-container");
    const timeContainer = document.getElementById("time-container");
    const date = new Date();
    timeContainer.textContent =
      "Current date: " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    dateContainer.textContent = "Current time: " + date.toLocaleDateString();
  }

  moreBtnHandler() {
    const descriptionDiv = document.querySelector(".content-container");
    descriptionDiv.classList.toggle("expanded");
  }

  getJSON(url, callback) {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "json";
    request.onload = function () {
      const status = request.status;
      callback(status, request.response);
    };
    request.send();
  }

  loadGalleryData() {
    this.getJSON("https://picsum.photos/v2/list?limit=10", (err, data) => {
      if (err !== 200) {
        console.error("Cant load data from source.", err);
      } else {
        this.addDataToModal(data);
      }
    });
  }

  addDataToModal(data) {
    const carouselInner = document.querySelector(".carousel-inner");
    const item = document.querySelector(".carousel-item");

    data.forEach((item, index) => {
      const newItem = document.createElement("div");
      const img = document.createElement("img");
      newItem.classList.add("carousel-item");
      if (index === 0) {
        newItem.classList.add("active");
      }
      img.src = item.download_url;
      img.alt = item.url;
      img.classList.add("img-fluid", "mx-auto", "d-block", "w-75");
      newItem.appendChild(img);
      carouselInner.appendChild(newItem);
    });
  }
}

new HomePage();
