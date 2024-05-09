var portfolioBtns = document.querySelectorAll(".portfolio-detail-btn");
var portfolioModal = document.querySelector(".portfolio-modal");
var modalBody = document.querySelector(".modal-body");
var portfolioModalCloseBtn = document.querySelector(".btn-x");
var portfolioModalCloseBtn2 = document.querySelector(".btn-primary");

var portfolioModalElements = {
  heading: portfolioModal.querySelector(".heading h2"),
  image: portfolioModal.querySelector(".portfolio-image img"),
  desc: portfolioModal.querySelector(".desc"),
};

var portfolioData = [
  {
    id: 1,
    heading: "LOG CABIN",
    img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
  },
  {
    id: 2,
    heading: "TASTY CAKE",
    img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
  },
  {
    id: 3,
    heading: "CIRCUS TENT",
    img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
  },
  {
    id: 4,
    heading: "CONTROLLER",
    img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
  },
  {
    id: 5,
    heading: "LOCKED SAFE",
    img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
  },
  {
    id: 6,
    heading: "SUBMARINE",
    img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.",
  },
];

portfolioBtns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    document.body.classList.add("fixed-body");
    var currentData = portfolioData[index];
    portfolioModal.style.display = "block";
    portfolioModalElements.heading.textContent = currentData.heading;
    portfolioModalElements.image.src = currentData.img;
    portfolioModalElements.desc.textContent = currentData.desc;
  });
});

portfolioModalCloseBtn.addEventListener("click", function () {
  document.body.classList.remove("fixed-body");
  portfolioModal.style.display = "none";
});

portfolioModalCloseBtn2.addEventListener("click", function () {
  document.body.classList.remove("fixed-body");
  portfolioModal.style.display = "none";
});

// phần click outside đóng modal (mà click modal không bị ảnh hưởng)

portfolioModal.addEventListener("click", function () {
  document.body.classList.remove("fixed-body");
  portfolioModal.style.display = "none";
});
modalBody.addEventListener("click", function (event) {
  event.stopPropagation();
});

// phần contact input - validate required field

var inputName = document.getElementById("inputName");
var validateErrorName = document.getElementById("nameError");

inputName.addEventListener("blur", function () {
  if (this.value.trim() === "") {
    validateErrorName.classList.add("show");
  } else {
    validateErrorName.classList.remove("show");
  }
});

var inputEmail = document.getElementById("inputEmail");
var validateErrorEmail = document.getElementById("emailError");

inputEmail.addEventListener("blur", function () {
  if (this.value.trim() === "") {
    validateErrorEmail.classList.add("show");
  } else {
    validateErrorEmail.classList.remove("show");
  }
});

var inputPhone = document.getElementById("inputPhone");
var validateErrorPhone = document.getElementById("phoneError");

inputPhone.addEventListener("blur", function () {
  if (this.value.trim() === "") {
    validateErrorPhone.classList.add("show");
  } else {
    validateErrorPhone.classList.remove("show");
  }
});

var inputMessage = document.getElementById("inputMessage");
var validateErrorMessage = document.getElementById("messageError");

inputMessage.addEventListener("blur", function () {
  if (this.value.trim() === "") {
    validateErrorMessage.classList.add("show");
  } else {
    validateErrorMessage.classList.remove("show");
  }
});

// phần cố định vị trí của header khi scroll page + khi bắt đầu scroll thì height của header thu nhỏ lại
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("minimized");
  } else {
    header.classList.remove("minimized");
  }
});

// phần button Download - thử dùng code này xem chạy không chứ cũng chưa phân tích để hiểu kĩ lắm =)))
var downloadFile = document.getElementById("downloadButton");

downloadFile.addEventListener("click", function () {
  // Create a new Blob object containing the content to download
  const content = "This is the content of the file.";
  const blob = new Blob([content], { type: "text/plain" });

  // Create a link element
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);

  // Set the file name
  link.download = "example.txt";

  // Append the link to the body
  document.body.appendChild(link);

  // Trigger the download
  link.click();

  // Clean up
  document.body.removeChild(link);
});

// handle scroll - active section
var portfolioMenuItem = document.querySelector(".portfolio-link");
var aboutMenuItem = document.querySelector(".about-link");
var contactMenuItem = document.querySelector(".contact-link");
window.addEventListener("scroll", function () {
  console.log(window.pageYOffset, "scroll");
  if (window.pageYOffset > 450 && window.pageYOffset < 900) {
    portfolioMenuItem.classList.add("active-section-link");
    aboutMenuItem.classList.remove("active-section-link");
    contactMenuItem.classList.remove("active-section-link");
  } else if (window.pageYOffset >= 900 && window.pageYOffset < 1400) {
    aboutMenuItem.classList.add("active-section-link");
    portfolioMenuItem.classList.remove("active-section-link");
    contactMenuItem.classList.remove("active-section-link");
  } else if (window.pageYOffset > 1400) {
    contactMenuItem.classList.add("active-section-link");
    portfolioMenuItem.classList.remove("active-section-link");
    aboutMenuItem.classList.remove("active-section-link");
  }
});
