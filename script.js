// Hamburger menu and popup

const hamburgerMenu = document.querySelector('#hamburger-menu');
const menuItems = document.querySelector('.mobile-menu');
const cancelMenu = document.querySelector('#popup-cancel');
const menuItemsList = document.querySelectorAll('.popup-menu-list-item');

hamburgerMenu.addEventListener('click', displayMenu);
cancelMenu.addEventListener('click', closeMenu);

function displayMenu() {
    menuItems.classList.toggle('mobile-menu-view');
}

function closeMenu() {
    menuItems.classList.toggle('mobile-menu-view');
}

for (let i = 0; i < menuItemsList.length; i++) {
    menuItemsList[i].addEventListener('click', () => {
        menuItems.classList.toggle('mobile-menu-view');
    })
}

// Dynamic Markup Refactor
// Cards Data

const cardsData = [
    {
        cardTitle: "Professional Art Printing Data",
        supportingText: "A daily selection of privately personalized reads, no accounts or sign- ups required has been the industry's standard",
        otherTags: {
            tech_1: "html",
            tech_2: "bootstrap",
            tech_3: "ruby",
        },
    },
    {
        cardTitle: "Professional Art Printing Data",
        supportingText: "A daily selection of privately personalized reads, no accounts or sign- ups required has been the industry's standard",
        otherTags: {
            tech_1: "html",
            tech_2: "bootstrap",
            tech_3: "ruby",
        },
    },
    {
        cardTitle: "Professional Art Printing Data",
        supportingText: "A daily selection of privately personalized reads, no accounts or sign- ups required has been the industry's standard",
        otherTags: {
            tech_1: "html",
            tech_2: "bootstrap",
            tech_3: "ruby",
        },
    },
    {
        cardTitle: "Professional Art Printing Data",
        supportingText: "A daily selection of privately personalized reads, no accounts or sign- ups required has been the industry's standard",
        otherTags: {
            tech_1: "html",
            tech_2: "bootstrap",
            tech_3: "ruby",
        },
    },
    {
        cardTitle: "Professional Art Printing Data",
        supportingText: "A daily selection of privately personalized reads, no accounts or sign- ups required has been the industry's standard",
        otherTags: {
            tech_1: "html",
            tech_2: "bootstrap",
            tech_3: "ruby",
        },
    },
    {
        cardTitle: "Professional Art Printing Data",
        supportingText: "A daily selection of privately personalized reads, no accounts or sign- ups required has been the industry's standard",
        otherTags: {
            tech_1: "html",
            tech_2: "bootstrap",
            tech_3: "ruby",
        },
    },
]


let cardContainer = document.getElementById("cards-container");

cardContainer.innerHTML = `<div class="mask-group">
                            <div class="right-bloc">
                                <h2 class="title-post">
                                    Professional Art Printing Data
                                </h2>
                                <p class="other-cards-supporting-text">A daily selection of privately personalized
                                    reads; no accounts or sign-ups required.
                                    has been the industry's standard
                                </p>
                                <ul class="other-tags">
                                    <li class="html"><span>html</span></li>
                                    <li class="bootstrap"><span>bootstrap</span></li>
                                    <li class="ruby"><span>Ruby</span></li>
                                </ul>
                            </div>
                            <div class="action-sec">
                                <button>
                                    <span>See Project</span>
                                </button>
                            </div>
                        </div>`;


