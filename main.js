import "./style.css";
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

const mainElement = createElement("main", {
  className: "main",
  children: [
    createElement("h2", {
      className: "main-title",
      innerText: "Meet your favorite Spacefluencer",
    }),
    createElement("section", {
      className: "characters",
      children: [
        createElement("div", {
          className: "characters-intro",
          innerText: "Display popular Spacefluencer here...",
        }),
      ],
    }),
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
