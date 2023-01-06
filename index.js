const bodyContainer = document.getElementsByClassName('-body-container');
const contentContainer = document.getElementById('-content-container');

function createContainer(){
  const navContainer = document.createElement('div');
  const textContainer = document.createElement('div');
  const navLinkContainer = document.createElement('div');

  navContainer.setAttribute("id", "-nav-container");
  textContainer.setAttribute("id", "-text-container");
  navLinkContainer.setAttribute("id", "-nav-link-container");
  
  navContainer.textContent = "Navigation";
  textContainer.textContent = "Text";

  contentContainer.appendChild(navContainer);
  contentContainer.appendChild(textContainer);

  navContainer.appendChild(navLinkContainer);

  createList(navContainer);
}

function createList(container){
  const navContainer = container;

  const navListContainer = document.createElement('div');
  const chapterOne = document.createElement('a');
  const chapterTwo = document.createElement('a');
  const chapterThree = document.createElement('a');

  navListContainer.setAttribute("id", "-nav-list-container");
  
  chapterOne.setAttribute("id", "-c1-link");
  chapterOne.setAttribute("href", "#c1-link");
  chapterOne.textContent = "Chapter 1:";

  chapterTwo.setAttribute("id", "-c2-link");
  chapterTwo.setAttribute("href", "#c2-link");
  chapterTwo.textContent = "Chapter 2:";

  chapterThree.setAttribute("id", "-c3-link");
  chapterThree.setAttribute("href", "#c3-link");
  chapterThree.textContent = "Chapter 3:";

  navContainer.appendChild(navListContainer);

  addToList(navListContainer, chapterOne);
  addToList(navListContainer, chapterTwo);
  addToList(navListContainer, chapterThree);
}

function addToList(container, chapterName){
  const list = document.createElement('li');

  list.appendChild(chapterName);
  container.appendChild(list);
}

createContainer();