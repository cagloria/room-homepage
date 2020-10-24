function toggleNav() {
    const $header = $(".header");
    const $navOverlay = $(".nav-overlay");
    const headerNavActiveClass = "header--nav-active";
    const $navButton = $("#nav__button");

    $header.toggleClass(headerNavActiveClass);

    if ($header.hasClass(headerNavActiveClass)) {
        $navButton.attr("aria-expanded", "true");
        $navOverlay.on("click", function () {
            toggleNav();
        });
    } else {
        $navButton.attr("aria-expanded", "false");
        $navOverlay.off();
    }
}

window.onload = function () {
    const $navButton = $("#nav__button");

    $navButton.on("click", function () {
        toggleNav();
    });
};
