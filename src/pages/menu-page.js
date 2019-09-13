const menu_page = () => {
  const content = document.getElementById("content");
  const fragment = document.createDocumentFragment();
  
  const h1 = document.createElement("h1");
  const h1_text = document.createTextNode("Midge's Menu");
  h1.appendChild(h1_text);
  fragment.appendChild(h1);

  const h2 = document.createElement("h2");
  const h2_text = document.createTextNode("$5 Tomato");
  h2.appendChild(h2_text);
  fragment.appendChild(h2);

  content.appendChild(fragment);
};

export default menu_page