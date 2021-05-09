import "/style.css";
import styles from "/details.module.css";
import { getPhotos } from "./utils/api";
import { createElement } from "./utils/elements";
import { createPhotoElement } from "./components/photo";

const params = new URLSearchParams(location.search);
const roverName = params.get("rover");
const date = "2021-05-06";
const photoSection = createElement("section", {
  className: styles["photo-list"],
  children: [
    createElement("p", {
      className: styles["photo-list__description"],
      innerText:
        "Choose an Earth date and get a glimpse of Mars for that date here...",
    }),
  ],
});

getPhotos(roverName, date).then((photos) => {
  const photoElements = photos.map(createPhotoElement);
  photoSection.append(...photoElements);
});

const mainElement = createElement("main", {
  className: "main",
  children: [
    createElement("h2", {
      className: styles["main-title"],
      innerText: "Enjoy all photos taken by your favorite Spacefluencer",
    }),
    createElement("input", {
      className: styles["date-input"],
      type: "date",
      value: date,
      onchange: (event) => {
        const date = event.target.value;
        photoSection.innerHTML = "";
        getPhotos(roverName, date).then((photos) => {
          const photoElements = photos.map(createPhotoElement);
          photoSection.append(...photoElements);
        });
      },
    }),
    photoSection,
    createElement("a", {
      href: "/index.html",
      innerText: "Back to choose another Spacefluencer",
    }),
  ],
});

document.querySelector("#app").append(mainElement);
