import 'normalize.css';
import './styles/app.css';
import landingPage from './pages/landing';
import contactPage from './pages/contact';
import menuPage from './pages/menu';

const content = document.getElementById('content');
function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

const landingTab = document.getElementById('landing-tab');
landingTab.addEventListener('click', () => {
  clearContent();
  landingPage();
});

const contactTab = document.getElementById('contact-tab');
contactTab.addEventListener('click', () => {
  clearContent();
  contactPage();
});

const menuTab = document.getElementById('menu-tab');
menuTab.addEventListener('click', () => {
  clearContent();
  menuPage();
});

landingPage();
