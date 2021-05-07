import "/style.css";
import "/details.module.css";
import { getPhotos } from "./utils/api";
import { createElement } from "./utils/elements";
import { createPhotoElement } from "./components/photo";

const params = new URLSearchParams(location.search);
const roverName = params.get("rover");
const date = "2021-05-06";
const photoSection = createElement("section", {
  className: "photo-list",
  innerText: "Display Spacefluencer photos here...",
});

getPhotos(roverName, date).then((photos) => {
  const photoElements = photos.map(createPhotoElement);
  photoSection.append(...photoElements);
});

const mainElement = createElement("main", {
  className: "main",
  children: [
    createElement("h2", {
      className: "main-title",
      innerText: "Enjoy all photos taken by your favorite Spacefluencer",
    }),
    createElement("input", {
      className: "input",
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
  ],
});

document.querySelector("#app").append(mainElement);
