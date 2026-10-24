(function () {
  // Header background on scroll
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") nav.classList.remove("open");
  });

  // Gallery lightbox
  var items = Array.prototype.slice.call(document.querySelectorAll(".gallery button"));
  var box = document.querySelector(".lightbox");
  if (box && items.length) {
    var img = box.querySelector("img");
    var current = 0;
    function show(i) {
      current = (i + items.length) % items.length;
      var src = items[current].querySelector("img");
      img.src = src.getAttribute("src");
      img.alt = src.alt;
      box.classList.add("open");
    }
    function close() { box.classList.remove("open"); }
    items.forEach(function (b, i) { b.addEventListener("click", function () { show(i); }); });
    box.querySelector(".lb-close").addEventListener("click", close);
    box.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
    box.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(current - 1);
      if (e.key === "ArrowRight") show(current + 1);
    });
  }

  // Enquiry form (Formspree). Messages come from data attributes so each language page sets its own.
  var form = document.querySelector("form.enquiry");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (form.action.indexOf("YOUR_FORM_ID") !== -1) {
        status.className = "form-status err";
        status.textContent = form.dataset.msgSetup;
        return;
      }
      var button = form.querySelector("button[type=submit]");
      button.disabled = true;
      status.className = "form-status";
      status.textContent = form.dataset.msgSending;
      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      }).then(function (res) {
        if (!res.ok) throw new Error(res.status);
        form.reset();
        status.className = "form-status ok";
        status.textContent = form.dataset.msgOk;
      }).catch(function () {
        status.className = "form-status err";
        status.textContent = form.dataset.msgErr;
      }).then(function () {
        button.disabled = false;
      });
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
