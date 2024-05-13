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
document.addEventListener("DOMContentLoaded", function () {
  var inputName = document.getElementById("inputName");
  var validateErrorName = document.getElementById("nameError");
  var labelName = document.getElementById("nameLabel");
  var warningIconName = document.querySelector(".warning-icon-name");

  inputName.addEventListener("focus", function () {
    labelName.style.fontSize = "16px";
    // labelName.classList.add("focus");
    inputName.classList.add("focus");
    inputName.classList.remove("error");
    warningIconName.style.display = "none";
    validateErrorName.style.display = "none";
  });

  inputName.addEventListener("blur", function () {
    if (inputName.value.trim() === "") {
      inputName.classList.add("error");
      warningIconName.style.display = "inline";
      validateErrorName.style.display = "block";
      labelName.style.fontSize = "24px";
    }
  });

  inputName.addEventListener("input", function () {
    if (inputName.value.trim() !== "") {
      inputName.classList.remove("error");
      warningIconName.style.display = "none";
      validateErrorName.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var inputEmail = document.getElementById("inputEmail");
  var validateErrorEmail = document.getElementById("emailError");
  var labelEmail = document.getElementById("emailLabel");
  var warningIconEmail = document.querySelector(".warning-icon-email");

  inputEmail.addEventListener("focus", function () {
    labelEmail.style.fontSize = "16px";
    inputEmail.classList.add("focus");
    inputEmail.classList.remove("error");
    warningIconEmail.style.display = "none";
    validateErrorEmail.style.display = "none";
  });

  inputEmail.addEventListener("blur", function () {
    if (inputEmail.value.trim() === "") {
      inputEmail.classList.add("error");
      warningIconEmail.style.display = "inline";
      validateErrorEmail.style.display = "block";
      labelEmail.style.fontSize = "24px";
    }
  });

  inputEmail.addEventListener("input", function () {
    if (inputEmail.value.trim() !== "") {
      inputEmail.classList.remove("error");
      warningIconEmail.style.display = "none";
      validateErrorEmail.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var inputPhone = document.getElementById("inputPhone");
  var validateErrorPhone = document.getElementById("phoneError");
  var labelPhone = document.getElementById("phoneLabel");
  var warningIconPhone = document.querySelector(".warning-icon-phone");

  inputPhone.addEventListener("focus", function () {
    labelPhone.style.fontSize = "16px";
    inputPhone.classList.add("focus");
    inputPhone.classList.remove("error");
    warningIconPhone.style.display = "none";
    validateErrorPhone.style.display = "none";
  });

  inputPhone.addEventListener("blur", function () {
    if (inputPhone.value.trim() === "") {
      inputPhone.classList.add("error");
      warningIconPhone.style.display = "inline";
      validateErrorPhone.style.display = "block";
      labelPhone.style.fontSize = "24px";
    }
  });

  inputPhone.addEventListener("input", function () {
    if (inputPhone.value.trim() !== "") {
      inputPhone.classList.remove("error");
      warningIconPhone.style.display = "none";
      validateErrorPhone.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var inputMessage = document.getElementById("inputMessage");
  var validateErrorMessage = document.getElementById("messageError");
  var labelMessage = document.getElementById("messageLabel");
  var warningIconMessage = document.querySelector(".warning-icon-message");

  inputMessage.addEventListener("focus", function () {
    labelMessage.style.fontSize = "16px";
    inputMessage.classList.add("focus");
    inputMessage.classList.remove("error");
    warningIconMessage.style.display = "none";
    validateErrorMessage.style.display = "none";
  });

  inputMessage.addEventListener("blur", function () {
    if (inputMessage.value.trim() === "") {
      inputMessage.classList.add("error");
      warningIconMessage.style.display = "inline";
      validateErrorMessage.style.display = "block";
      labelMessage.style.fontSize = "24px";
    }
  });

  inputMessage.addEventListener("input", function () {
    if (inputMessage.value.trim() !== "") {
      inputMessage.classList.remove("error");
      warningIconMessage.style.display = "none";
      validateErrorMessage.style.display = "none";
    }
  });
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

// handle phần button Download - thử dùng code này xem chạy không chứ cũng chưa phân tích để hiểu kĩ lắm =)))
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
  if (window.pageYOffset >= 0 && window.pageYOffset < 900) {
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
