// Pawiwahan
// Version   : 1.0.2
// Developer : Gede Juna
// GitHub    : https://github.com/parta99/pawiwahan

var modal = document.getElementById("modalWeddingGift");
var welcomeModal = document.getElementById("welcomeModal");
var containerGallery = document.getElementById("containerGallery");
var containerClosing = document.getElementById("containerClosing");
var ythLabel = document.getElementById("yth");
var toLabel = document.getElementById("to");
var inviteLabel = document.getElementById("invite");
var myAudio = document.getElementById("my_audio");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.get("to") != null) {
  toLabel.innerHTML = urlParams.get("to");
} else {
  ythLabel.innerHTML = "";
  inviteLabel.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function () {
  //open welcome modal
  welcomeModal.style.display = "block";
  // if (urlParams.get('to') != null) {
  // }

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener("click", function () {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
function closeWelcomeModal() {
  welcomeModal.style.display = "none";
  myAudio.play()
}

// play music in background
function toggleAudio(value) {
  return !value.checked ? myAudio.play() : myAudio.pause();
}

// scroll totop
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});
function copyToClipboard(element) {
  var value = element.innerText;
  var popup1 = document.getElementById("popupCopy1");
  var popup2 = document.getElementById("popupCopy2");
  element.id == "yeak" ? popup1.classList.toggle("show") : popup2.classList.toggle("show");

  navigator.clipboard
    .writeText(value)
    .then(() => {
      console.log("Text copied to clipboard...");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
}
// copy to clipboard
const textElement = document.getElementById("text");
const copyButton = document.getElementById("copy");

const copyText = (e) => {
  window.getSelection().selectAllChildren(textElement);
  document.execCommand("copy");
  e.target.setAttribute("tooltip", "Copied! ✅");
};

const resetTooltip = (e) => {
  e.target.setAttribute("tooltip", "Copy to clipboard");
};

copyButton.addEventListener("click", (e) => copyText(e));
copyButton.addEventListener("mouseover", (e) => resetTooltip(e));
