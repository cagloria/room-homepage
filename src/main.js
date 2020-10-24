function toggleNav() {
    const $header = $(".header");
    const $navOverlay = $(".nav-overlay");
    const $navButton = $("#nav__button");
    const $navLink = $(".nav a");
    const headerNavActiveClass = "header--nav-active";

    $header.toggleClass(headerNavActiveClass);

    if ($header.hasClass(headerNavActiveClass)) {
        $navButton.attr("aria-expanded", "true");
        $navLink.attr("tabindex", "0");
        $navOverlay.on("click", function () {
            toggleNav();
        });
    } else {
        $navButton.attr("aria-expanded", "false");
        $navLink.attr("tabindex", "-1");
        $navOverlay.off();
    }
}

window.onload = function () {
    const $navButton = $("#nav__button");

    $navButton.on("click", function () {
        toggleNav();
    });
};
