const lightIcon = document.querySelector(".header__icon_light");
const darkIcon = document.querySelector(".header__icon_dark");
const list = document.querySelector(".navigation__list");
const navigation = document.querySelector(".navigation");

let lightIconActive = true;
let darkIconActive = false;

lightIcon.style.display = "none";

darkIcon.style.display = "none";

navigation.style.position = "absolute";
navigation.style.top = "-136px";
navigation.style.width = "100%";
navigation.style.display = "flex";
navigation.style.justifyContent = "center";
navigation.style.backgroundColor = "rgba(255,255,255, 0.8)";
navigation.style.zIndex = "100";

list.style.flexDirection = "column";
list.style.alignItems = "center";

if (window.innerWidth <= 768) {
  lightIcon.style.display = "inline-block";

  navigation.style.position = "absolute";
  navigation.style.top = "-136px";
  navigation.style.width = "100%";
}

if (window.innerWidth > 768) {
  navigation.style.position = "relative";
  navigation.style.top = "0px";
  navigation.style.width = "auto";
  navigation.style.justifyContent = "flex-end";

  list.style.flexDirection = "row";
  list.style.justifyContent = "flex-end";
}

lightIcon.addEventListener("click", () => {
  lightIconActive = false;
  darkIconActive = true;

  lightIcon.style.display = "none";

  darkIcon.style.display = "inline-block";

  navigation.style.height = "100%";
  navigation.style.alignItems = "flex-start";
  navigation.style.position = "absolute";
  navigation.style.top = "150px";

  document.body.style.overflow = "hidden";

  list.style.flexDirection = "column";
});

darkIcon.addEventListener("click", () => {
  darkIconActive = false;
  lightIconActive = true;

  darkIcon.style.display = "none";

  lightIcon.style.display = "inline-block";

  navigation.style.height = "auto";
  navigation.style.position = "absolute";
  navigation.style.top = "-136px";

  document.body.style.overflowY = "scroll";
});

list.addEventListener("click", (e) => {
  {
    if (e.target.localName) {
      lightIconActive = true;
      darkIconActive = false;

      if (window.innerWidth <= 768) {
        darkIcon.style.display = "none";

        lightIcon.style.display = "inline-block";

        navigation.style.height = "auto";
        navigation.style.position = "absolute";
        navigation.style.top = "-136px";

        document.body.style.overflowY = "scroll";
      }
    }
  }
});

window.addEventListener("resize", (e) => {
  if (e.target.innerWidth > 768) {
    lightIcon.style.display = "none";
    darkIcon.style.display = "none";
    navigation.style.position = "relative";
    navigation.style.top = "0px";
    navigation.style.justifyContent = "flex-end";

    list.style.flexDirection = "row";

    document.body.style.overflowY = "scroll";
  }

  if (e.target.innerWidth <= 768 && darkIconActive) {
    lightIcon.style.display = "none";
    darkIcon.style.display = "inline-block";

    navigation.style.height = "100%";
    navigation.style.alignItems = "flex-start";
    navigation.style.position = "absolute";
    navigation.style.top = "150px";

    document.body.style.overflow = "hidden";

    list.style.flexDirection = "column";
  }

  if (e.target.innerWidth <= 768 && lightIconActive) {
    darkIcon.style.display = "none";

    lightIcon.style.display = "inline-block";

    navigation.style.height = "auto";
    navigation.style.position = "absolute";
    navigation.style.top = "-136px";

    document.body.style.overflowY = "scroll";
  }

  if (e.target.innerWidth <= 768) {
    navigation.style.justifyContent = "center";
    navigation.style.width = "100%";
  }
});
