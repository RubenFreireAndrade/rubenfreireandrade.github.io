const loremText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi non sunt porro, reprehenderit, adipisci est possimus architecto nemo ipsa, nisi veniam amet doloremque assumenda hic. Dicta cumque dolor modi quas.";
let repeatLoremText = 5;

const bodyContainer = document.getElementsByClassName('body-container');
const contentContainer = document.getElementById('content-container');
const navContainer = document.getElementById('nav-container');
//const textContainer = document.getElementById('text-container');
const homeContainer = document.getElementById('c1-container');
const aboutContainer = document.getElementById('c2-container');
const portfolioContainer = document.getElementById('c3-container');

const homePicture = document.getElementById('home-picture');
const homeText = document.getElementById('home-text');

const aboutPicture = document.getElementById('about-picture');
const aboutText = document.getElementById('about-text');

const portfolioPictureSdl = document.getElementById('portfolio-picture-sdl');
//const portfolioPictureSecureShare = document.getElementById('portfolio-picture-secureshare');
const portfolioPicturePicnic = document.getElementById('portfolio-picture-picnic');
const portfolioText = document.getElementById('portfolio-text');

function initialize() {
  const chapterOneLink = document.createElement('a');
  const chapterTwoLink = document.createElement('a');
  const chapterThreeLink = document.createElement('a');
  const github = document.createElement('strong');
  const degree = document.createElement('strong');
  const email = document.createElement('strong');
  const city = document.createElement('strong');

  let imgCarGirl = new Image();
  let ueDemo = new Image();
  let sdlDemo = new Image();
  let secureshareDemo = new Image();
  imgCarGirl.src = "./assets/girlcar.gif";
  ueDemo.src = "./assets/UEDEMO_350w.gif";
  sdlDemo.src = "./assets/SDLDEMO_350w.gif";

  // Navigation creation for hyperlink.
  chapterOneLink.setAttribute("id", "c1-link");
  chapterOneLink.textContent = "Home";
  chapterOneLink.setAttribute("href", "#home-section");

  chapterTwoLink.setAttribute("id", "c2-link");
  chapterTwoLink.textContent = "About";
  chapterTwoLink.setAttribute("href", "#about-section");

  chapterThreeLink.setAttribute("id", "c3-link");
  chapterThreeLink.textContent = "Portfolio";
  chapterThreeLink.setAttribute("href", "#portfolio-section");
  
  addToListNavigation(chapterOneLink);
  addToListNavigation(chapterTwoLink);
  addToListNavigation(chapterThreeLink);
  
  //homePicture.appendChild(imgCarGirl);
  //homeText.textContent = loremParagraph();

  //aboutPicture.appendChild(ueDemo);
  //aboutText.textContent = loremParagraph();
  // addToListInfo(github);

  // github.textContent = "GitHub: ";
  // const githubSpan = document.createElement('span');
  // githubSpan.setAttribute("style", "padding-left: 2%");

  // const githubLink = document.createElement('a');
  // githubLink.setAttribute("id", "github-link-text");
  // githubLink.setAttribute("href", "https://github.com/RubenFreireAndrade");
  // githubLink.textContent = "https://github.com/RubenFreireAndrade";

  // githubSpan.appendChild(githubLink);
  // aboutText.appendChild(githubSpan);

  //addToListInfo(degree);
  // addToListInfo(email);
  // addToListInfo(city);

  degree.textContent = "Degree: BSc Games Programming";
  email.textContent = "Email: ruben.freireandrade@gmail.com";
  city.textContent = "City: London, United Kingdom";

  portfolioPictureSdl.appendChild(sdlDemo);
  portfolioPicturePicnic.appendChild(ueDemo);
  //portfolioText.textContent = loremParagraph();

  
  // Appending child & setting text order.
  // displaySubheading(chapterOneContainer, chapterOneLink.textContent);
  // chapterOneContainer.appendChild(chapterOneTxt);
  // contentContainer.appendChild(chapterOneContainer);
  
  // displaySubheading(chapterTwoContainer, chapterTwoLink.textContent);
  // chapterTwoContainer.appendChild(chapterTwoTxt);
  // contentContainer.appendChild(chapterTwoContainer);
  
  // displaySubheading(chapterThreeContainer, chapterThreeLink.textContent);
  // chapterThreeContainer.appendChild(chapterThreeTxt);
  // contentContainer.appendChild(chapterThreeContainer);
}

function addToListNavigation(chapterName) {
  const list = document.createElement('li');

  list.appendChild(chapterName);
  navContainer.appendChild(list);
}

function addToListInfo(infoName) {

  aboutText.appendChild(infoName);
}

function createSpan(span) {
  return span;
}

function loremParagraph() {
  return loremText.repeat(repeatLoremText);
}

function displaySubheading(container, text) {
  const subheading = document.createElement('h3');

  subheading.setAttribute("id", text);
  subheading.textContent = text;

  container.appendChild(subheading);
}

function stickNavBar() {
  var sticky = navContainer.offsetTop;
  if (window.pageYOffset >= sticky) {
    navContainer.classList.add("sticky")
  } else {
    navContainer.classList.remove("sticky");
  }
}

initialize();
window.onscroll = function() {stickNavBar()};