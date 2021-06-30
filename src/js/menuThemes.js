import menu from "../menu.json";
import menuTemplates from "../templates/menuItems.hbs";

const menuList = document.querySelector('.js-menu');

const cardsMarkup = createMenuCardsMarkup(menu);

menuList.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(menu) {
    return menuTemplates(menu);
}