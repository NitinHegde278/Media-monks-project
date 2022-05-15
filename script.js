/* Media Monks Frontend test script...*/

/* Initialization of constants and DOM elements reference*/
const textToLeft = [1, 2, 6, 7, 8];
const textArr = [
  "we are breaking our vow of silence",
  "talent is given true skill is earned",
  "be flexible to change and sturdy in conviction",
  "use many skills yet work as one",
  "to master anything find interest in everything",
  "individuals flourish if culture and wisdom are shared",
  "train for perfect but aim for more",
  "take pride in your work but do not seek praise",
  "temporary sacrifice brings lasting results",
  "become a monk",
];
const subText0 =
  "In January 2011, after a decade of digital, we opened the doors to our temple. Follow our noble eightfold path to digital enlightment here.";
const lastSubText = [
  "Interested in joining our monastery?",
  "Check out our current openings on <a href='https://mediamonks.com/careers' target='_blank'>mediamonks.com/careers</a> ",
];
const bodyRef = document.body;
const navTextRef = document.getElementById("nav-text");
const mainTextRef = document.getElementById("main-text");
const subTextRef = document.getElementById("sub-text");
const otherTextRef = document.getElementById("other-text");
const arrowLeftRef = document.getElementById("arrow-left");
const arrowRightRef = document.getElementById("arrow-right");
const lastSubTextRef = document.getElementsByClassName("last-sub-text");
const lastSubText1 = lastSubTextRef.item(0);
const lastSubText2 = lastSubTextRef.item(1);
const loader = document.getElementById("preloader");
const loaderText = document.getElementById("preloader-text");
const loaderTextSecond = document.getElementById("preloader-secondText");

/* Initialization of keyframe properties for animation*/
const keyFrameProps = [{ opacity: "0" }, { opacity: "0" }, { opacity: "1" }];
const keyFrameDuration = {
  duration: 2500,
  iterations: 1,
};
const loaderKeyFrameProps = [
  { opacity: "1" },
  { opacity: "0" },
  { opacity: "0" },
];
const loaderKeyFrameDuration = {
  duration: 2000,
  iterations: 1,
};

/* Initialization of window position and page*/
let position = 0;
let page = 0;

/* Initialization of texts and arrow */
subTextRef.innerHTML = subText0;
mainTextRef.innerHTML = textArr[0];
arrowLeftRef.style.visibility = "hidden";

/* SetTimeouts for initial page loader */
setTimeout(() => {
  loaderText.innerHTML = "";
}, 2000);

setTimeout(() => {
  loaderTextSecond.innerHTML = "Patience, young padawan...";
  loaderTextSecond.animate(keyFrameProps, keyFrameDuration);
}, 600);

setTimeout(() => {
  loader.animate(loaderKeyFrameProps, loaderKeyFrameDuration).onfinish = () =>
    (loader.style.display = "none");
}, 4000);

/*Triggered by arrow left button */
const arrowLeft = () => {
  arrowRightRef.style.visibility = "visible";
  lastSubText1.innerHTML = "";
  lastSubText2.innerHTML = "";
  if (position > 0 && page >= 0) {
    page -= 1;
    const buttonRef = document.getElementById(`b${page}`);
    buttonRef.focus();
    position -= 12.5;
    bodyRef.style.backgroundPosition = position + "% -5vh";
    bodyRef.style.transition = "all 1.5s";
    bodyRef.animate(keyFrameProps, keyFrameDuration);

    if (page > 0) {
      otherTextRef.style.top = "43%";
      mainTextRef.innerHTML = "";
      let align = textToLeft.find((ele) => page == ele) ? "left" : "right";
      otherTextRef.innerHTML = textArr[page];
      if (align === "left") {
        otherTextRef.style.right = "unset";
        otherTextRef.style.left = "0px";
        otherTextRef.style.textAlign = "unset";
      } else {
        otherTextRef.style.left = "unset";
        otherTextRef.style.right = "60px";
        otherTextRef.style.textAlign = "end";
      }
      subTextRef.innerHTML = "";
      navTextRef.innerHTML = `Step ${page} out of 8 on the path to digital enlightment`;
      navTextRef.style.transition = "unset";
      navTextRef.style.transition = "all 1s ease";
    } else if (page == 0) {
      arrowLeftRef.style.visibility = "hidden";
      otherTextRef.innerHTML = "";
      mainTextRef.innerHTML = textArr[0];
      subTextRef.innerHTML = subText0;
      navTextRef.innerHTML = "";
    }
  } else {
    const buttonRef = document.getElementById(`b${page}`);
    buttonRef.focus();
  }
};

/*Triggered by arrow right button */
const arrowRight = () => {
  arrowLeftRef.style.visibility = "visible";
  arrowRightRef.style.visibility = "visible";
  if (position < 105 && page <= 9) {
    subTextRef.innerHTML = "";
    page += 1;
    const buttonRef = document.getElementById(`b${page}`);
    buttonRef.focus();
    position += 12.5;
    bodyRef.style.backgroundPosition = position + "% -5vh";
    bodyRef.style.transition = "all 1.5s";
    bodyRef.animate(keyFrameProps, keyFrameDuration);

    if (page < 9 && page > 0) {
      mainTextRef.innerHTML = "";
      lastSubText1.innerHTML = "";
      lastSubText2.innerHTML = "";
      let align = textToLeft.find((ele) => page == ele) ? "left" : "right";
      otherTextRef.innerHTML = textArr[page];
      otherTextRef.style.top = "43%";
      if (align === "left") {
        otherTextRef.style.right = "unset";
        otherTextRef.style.left = "0px";
        otherTextRef.style.textAlign = "unset";
      } else {
        otherTextRef.style.left = "unset";
        otherTextRef.style.right = "60px";
        otherTextRef.style.textAlign = "end";
      }
      navTextRef.innerHTML = `Step ${page} out of 8 on the path to digital enlightment`;
    } else if (page == 9) {
      arrowRightRef.style.visibility = "hidden";
      lastSubText1.innerHTML = lastSubText[0];
      lastSubText2.innerHTML = lastSubText[1];
      otherTextRef.style.left = "unset";
      otherTextRef.style.right = "20px";
      otherTextRef.style.top = "20px";
      otherTextRef.style.textAlign = "end";
      otherTextRef.innerHTML = textArr[page];
      navTextRef.innerHTML = "";
    }
  } else {
    const buttonRef = document.getElementById(`b${page}`);
    buttonRef.focus();
  }
};

/*Triggered by clicking on navigation buttons */
const navigation = (event) => {
  page = parseInt(event.target.value);
  otherTextRef.innerHTML = textArr[page];
  otherTextRef.style.top = "43%";
  lastSubText1.innerHTML = lastSubText[0];
  lastSubText2.innerHTML = lastSubText[1];
  if (page > 0 && page < 9) {
    arrowLeftRef.style.visibility = "visible";
    arrowRightRef.style.visibility = "visible";
    lastSubText1.innerHTML = "";
    lastSubText2.innerHTML = "";
    let align = textToLeft.find((ele) => page == ele) ? "left" : "right";
    mainTextRef.innerHTML = "";
    subTextRef.innerHTML = "";
    if (align === "left") {
      otherTextRef.style.right = "unset";
      otherTextRef.style.left = "0px";
      otherTextRef.style.textAlign = "unset";
    } else {
      otherTextRef.style.left = "unset";
      otherTextRef.style.right = "60px";
      otherTextRef.style.textAlign = "end";
    }
    navTextRef.innerHTML = `Step ${page} out of 8 on the path to digital enlightment`;
  } else if (page == 9) {
    arrowLeftRef.style.visibility = "visible";
    arrowRightRef.style.visibility = "hidden";
    otherTextRef.style.left = "unset";
    otherTextRef.style.top = "20px";
    otherTextRef.style.right = "20px";
    otherTextRef.style.textAlign = "end";
    navTextRef.innerHTML = "";
    mainTextRef.innerHTML = "";
    subTextRef.innerHTML = "";
  } else if (page == 0) {
    arrowLeftRef.style.visibility = "hidden";
    arrowRightRef.style.visibility = "visible";
    lastSubText1.innerHTML = "";
    lastSubText2.innerHTML = "";
    mainTextRef.innerHTML = textArr[0];
    subTextRef.innerHTML = subText0;
    otherTextRef.innerHTML = "";
    navTextRef.innerHTML = "";
  }
  position = page * 12.5;
  bodyRef.style.backgroundPosition = position + "% -5vh";
  bodyRef.style.transition = "all 1.5s";
  bodyRef.animate(keyFrameProps, keyFrameDuration);
};
