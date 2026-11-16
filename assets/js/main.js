/* Small site behaviors: theme toggle, mobile menu, protected email, BibTeX. */
(function () {
  var root = document.documentElement;

  // Light / dark toggle (choice is remembered in this browser)
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Mobile menu
  var navBtn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (navBtn && nav) {
    navBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      navBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Email: stored reversed in the HTML so scrapers can't read it
  function rev(s) { return (s || "").split("").reverse().join(""); }
  document.querySelectorAll(".js-email").forEach(function (el) {
    var addr = rev(el.dataset.u) + "@" + rev(el.dataset.d);
    el.setAttribute("href", "mailto:" + addr);
    el.setAttribute("title", addr);
    if (el.dataset.show === "true") {
      var label = el.querySelector("span") || el;
      label.textContent = addr;
    }
  });

  // BibTeX: show/hide and copy
  document.querySelectorAll("[data-bibtex-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var box = document.getElementById(btn.getAttribute("data-bibtex-toggle"));
      var open = box.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = document.getElementById(btn.getAttribute("data-copy")).textContent;
      navigator.clipboard.writeText(text).then(function () {
        var old = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(function () { btn.textContent = old; }, 1500);
      });
    });
  });
})();
