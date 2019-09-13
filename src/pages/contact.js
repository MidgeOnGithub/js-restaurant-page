const contact_page = () => {
  const content = document.getElementById('content');
  const fragment = document.createDocumentFragment();

  const h1 = document.createElement('h1');
  const h1Text = document.createTextNode('Contact Us');
  h1.appendChild(h1Text);
  fragment.appendChild(h1);

  const h2 = document.createElement('h2');
  const h2Text = document.createTextNode('Just come eat and you can contact us here.');
  h2.appendChild(h2Text);
  fragment.appendChild(h2);

  content.appendChild(fragment);
};

export default contact_page;
