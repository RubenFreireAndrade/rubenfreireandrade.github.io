const bodyContainer = document.getElementsByClassName('-body-container');
const contentContainer = document.getElementById('-content-container');
const navContainer = document.getElementById('-nav-container');
const textContainer = document.getElementById('-text-container');
const navLinkContainer = document.getElementById('-nav-link-container');

const loremText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi non sunt porro, reprehenderit, adipisci est possimus architecto nemo ipsa, nisi veniam amet doloremque assumenda hic. Dicta cumque dolor modi quas.";

function Initialize(){
  const navListContainer = document.createElement('div');
  const chapterOne = document.createElement('a');
  const chapterTwo = document.createElement('a');
  const chapterThree = document.createElement('a');
  const chapterOneTxt = document.createElement('div');
  const chapterTwoTxt = document.createElement('div');
  const chapterThreeTxt = document.createElement('div');

  navListContainer.setAttribute("id", "-nav-list-container");
  
  // Navigation creation for hyperlink.
  chapterOne.setAttribute("id", "-c1-link");
  chapterOne.setAttribute("href", "#c1-link");
  chapterOne.textContent = "Chapter 1:";

  chapterTwo.setAttribute("id", "-c2-link");
  chapterTwo.setAttribute("href", "#c2-link");
  chapterTwo.textContent = "Chapter 2:";

  chapterThree.setAttribute("id", "-c3-link");
  chapterThree.setAttribute("href", "#c3-link");
  chapterThree.textContent = "Chapter 3:";

  // Text for each Navigation.
  chapterOneTxt.setAttribute("id", "c1-link");
  chapterOneTxt.textContent = loremParagraph();

  chapterTwoTxt.setAttribute("id", "c2-link");
  chapterTwoTxt.textContent = loremParagraph();

  chapterThreeTxt.setAttribute("id", "c3-link");
  chapterThreeTxt.textContent = loremParagraph();

  navContainer.appendChild(navListContainer);
  
  addToList(chapterOne);
  addToList(chapterTwo);
  addToList(chapterThree);

  displaySubheading(chapterOne.textContent);
  textContainer.appendChild(chapterOneTxt);
  displaySubheading(chapterTwo.textContent);
  textContainer.appendChild(chapterTwoTxt);
  displaySubheading(chapterThree.textContent);
  textContainer.appendChild(chapterThreeTxt);
}



function addToList(chapterName){
  const list = document.createElement('li');

  list.appendChild(chapterName);
  navContainer.appendChild(list);
}

function loremParagraph(){
  return loremText.repeat(5);
}

function displaySubheading(text){
  const subheading = document.createElement('h3');

  subheading.setAttribute("id", "-subheading");
  subheading.textContent = text;

  textContainer.appendChild(subheading);
}

Initialize();
//displayText();
//createContainer();