const loremText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi non sunt porro, reprehenderit, adipisci est possimus architecto nemo ipsa, nisi veniam amet doloremque assumenda hic. Dicta cumque dolor modi quas.";
let repeatLoremText = 30;

const bodyContainer = document.getElementsByClassName('body-container');
const contentContainer = document.getElementById('content-container');
const navContainer = document.getElementById('nav-container');
const textContainer = document.getElementById('text-container');
//const navLinkContainer = document.getElementById('-nav-link-container');

function initialize(){
  //const navLinkContainer = document.createElement('div');
  const chapterOne = document.createElement('a');
  const chapterTwo = document.createElement('a');
  const chapterThree = document.createElement('a');
  const chapterOneTxt = document.createElement('div');
  const chapterTwoTxt = document.createElement('div');
  const chapterThreeTxt = document.createElement('div');
  const image = document.createElement('div');

  let imgCarGirl = new Image();
  imgCarGirl.src = "./assets/girlcar.gif";
  image.appendChild(imgCarGirl);
  
  // Navigation creation for hyperlink.
  chapterOne.setAttribute("id", "c1-link");
  chapterOne.textContent = "Home";
  chapterOne.setAttribute("href", "#" + chapterOne.textContent);

  chapterTwo.setAttribute("id", "c2-link");
  chapterTwo.textContent = "About";
  chapterTwo.setAttribute("href", "#" + chapterTwo.textContent);

  chapterThree.setAttribute("id", "c3-link");
  chapterThree.textContent = "Portfolio";
  chapterThree.setAttribute("href", "#" + chapterThree.textContent);

  // Text for each Navigation.
  chapterOneTxt.setAttribute("id", "c1-text");
  chapterOneTxt.textContent = loremParagraph();

  chapterTwoTxt.setAttribute("id", "c2-text");
  chapterTwoTxt.textContent = loremParagraph();

  chapterThreeTxt.setAttribute("id", "c3-text");
  chapterThreeTxt.textContent = loremParagraph();

  // navContainer.appendChild(navLinkContainer);
  
  addToList(chapterOne);
  addToList(chapterTwo);
  addToList(chapterThree);

  // Appending child & setting text order.
  displaySubheading(chapterOne.textContent);
  textContainer.appendChild(chapterOneTxt);
  
  displaySubheading(chapterTwo.textContent);
  textContainer.appendChild(chapterTwoTxt);
  
  displaySubheading(chapterThree.textContent);
  textContainer.appendChild(chapterThreeTxt);
  textContainer.appendChild(image);
}

function addToList(chapterName){
  const list = document.createElement('li');

  list.appendChild(chapterName);
  navContainer.appendChild(list);
}

function loremParagraph(){
  return loremText.repeat(repeatLoremText);
}

function displaySubheading(text){
  const subheading = document.createElement('h3');

  subheading.setAttribute("id", text);
  subheading.textContent = text;

  textContainer.appendChild(subheading);
}

var sticky = navContainer.offsetTop;

function stickNavBar() {
  if (window.pageYOffset >= sticky) {
    navContainer.classList.add("sticky")
  } else {
    navContainer.classList.remove("sticky");
  }
}

initialize();
window.onscroll = function() {stickNavBar()};