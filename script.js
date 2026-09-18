(function () {
  const current = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach(function (link) {
    if (link.dataset.nav === current) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
