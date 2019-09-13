const landing_page = () => {
  const content = document.getElementById("content");
  const fragment = document.createDocumentFragment();
  
  const h1 = document.createElement("h1");
  const h1_text = document.createTextNode("Midge's Restaurant");
  h1.appendChild(h1_text);
  fragment.appendChild(h1);

  const img = document.createElement("img");
  img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg');
  img.setAttribute('alt', 'Two red tomatoes side-by-side, the left one is halved.');
  fragment.appendChild(img);

  const p = document.createElement("p");
  const p_text = document.createTextNode("As you can see by the beautiful image of a beautiful ingredient, we take our food very seriously. We have received the highest praise from award-winning people. If you eat food, we'll serve you.");
  p.appendChild(p_text);
  fragment.appendChild(p);

  content.appendChild(fragment);
};

export default landing_page