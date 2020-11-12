const SLIDESHOW = {
    index: 0,
    content: [
        {
            header: `Discover innovative ways to decorate`,
            body: `We provide unmatched quality, comfort, and style for property
                owners across the country. Our experts combine form and function
                in bringing your vision to life. Create a room in your own style
                with our collection and make your property a reflection of you 
                and what you love.`,
        },
        {
            header: `We are available all across the globe`,
            body: `With stores all over the world, it's easy for you to find 
                furniture for your home or place of business. Locally, we’re in 
                most major cities throughout the country. Find the branch 
                nearest you using our store locator. Any questions? Don't 
                hesitate to contact us today.`,
        },
        {
            header: `Manufactured with the best materials`,
            body: `Our modern furniture store provide a high level of quality. 
                Our company has invested in advanced technology to ensure that 
                every product is made as perfect and as consistent as possible. 
                With three decades of experience in this industry, we understand
                what customers want for their home and office.`,
        },
    ],
};

function changeSlideshow(value) {
    const $heading = $("#slideshow__heading");
    const $body = $("#slideshow__body");

    SLIDESHOW.index += value;

    if (SLIDESHOW.index >= SLIDESHOW.content.length) {
        SLIDESHOW.index = 0;
    } else if (SLIDESHOW.index < 0) {
        SLIDESHOW.index = SLIDESHOW.content.length - 1;
    }

    $heading.text(SLIDESHOW.content[SLIDESHOW.index].header);
    $body.text(SLIDESHOW.content[SLIDESHOW.index].body);
}

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
    const $prevButton = $("#slideshow__prev-button");
    const $nextButton = $("#slideshow__next-button");

    $navButton.on("click", function () {
        toggleNav();
    });

    $prevButton.on("click", function () {
        changeSlideshow(-1);
    });

    $nextButton.on("click", function () {
        changeSlideshow(1);
    });
};
