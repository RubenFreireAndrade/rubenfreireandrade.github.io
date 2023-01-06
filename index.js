const bodyContainer = document.getElementsByClassName('-body-container');
const contentContainer = document.getElementById('-content-container');

function createContainer(){
  const navContainer = document.createElement('div');
  const textContainer = document.createElement('div');

  navContainer.setAttribute("id", "-nav-container");
  textContainer.setAttribute("id", "-text-container");
  
  navContainer.textContent = "Navigation";
  textContainer.textContent = "Text";

  contentContainer.appendChild(navContainer);
  contentContainer.appendChild(textContainer);
}

createContainer();