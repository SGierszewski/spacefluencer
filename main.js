import { createRoverElement } from "./components/rover";
import "./style.css";
import { getRoverInfo } from "./utils/api";
import { createElement } from "./utils/elements";

const headerElement = createElement("header", {
  className: "header",
  children: [
    createElement("h1", {
      className: "title",
      innerText: "Spacefluencer",
    }),
  ],
});
const roverSection = createElement("section", {
  className: "rover-list",
  // children: [
  //   createElement("div", {
  //     className: "rover-list__intro",
  //   }),
  // ],
});

["curiosity", "spirit", "opportunity"].map((rover) =>
  getRoverInfo(rover).then((roverInfo) => {
    const roverElement = createRoverElement(roverInfo);
    roverSection.append(roverElement);
  })
);

const mainElement = createElement("main", {
  className: "main",
  children: [
    createElement("h2", {
      className: "main-title",
      innerText: "Meet your favorite Spacefluencer",
    }),
    roverSection,
  ],
});

const footerElement = createElement("footer", {
  className: "footer",
  children: [
    createElement("div", {
      className: "footer-info",
      children: [
        createElement("span", {
          className: "footer-info__text",
          innerText: "Made with ",
        }),
        createElement("span", {
          className: "footer-info_logo",
          innerText: "❤",
        }),
        createElement("span", {
          className: "footer-info_text",
          innerText: " and ",
        }),
        createElement("span", {
          className: "footer-info_link",
          children: [
            createElement("a", {
              href: "https://api.nasa.gov/",
              innerText: "NASA APIs",
            }),
          ],
        }),
      ],
    }),
  ],
});

document
  .querySelector("#app")
  .append(headerElement, mainElement, footerElement);

fetch(
  `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=WOyfELI8lB2BmbG3Y6doTsCTqYqLP1L0twnkeIIy&sol=90`
)
  .then((response) => response.json())
  .then((data) => console.log(data));
