import landing_page from './pages/landing-page';
import contact_page from './pages/contact-page';
import menu_page from './pages/menu-page';

const content = document.getElementById('content');
function clearContent() {
  while(content.firstChild){
    content.removeChild(content.firstChild);
  }
}

const landing_tab = document.getElementById('landing-tab');
landing_tab.addEventListener('click', () => {
  clearContent();
  landing_page();
});

const contact_tab = document.getElementById('contact-tab');
contact_tab.addEventListener('click', () => {
  clearContent();
  contact_page();
});

const menu_tab = document.getElementById('menu-tab');
menu_tab.addEventListener('click', () => {
  clearContent();
  menu_page();
});

landing_page();