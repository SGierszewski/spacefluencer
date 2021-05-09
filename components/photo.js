import "/style.css";
import "./photo.css";
import { createElement } from "../utils/elements";

// Function to create photo element for details section
export function createPhotoElement({ sol, earth_date, camera, img_src }) {
  return createElement("div", {
    className: "photo",
    children: [
      createElement("section", {
        className: "photo-section",
        children: [
          createElement("img", { src: img_src }),
          createElement("span", {
            innerText: "Martian day (Sol): ",
            children: [createElement("p", { innerText: sol })],
          }),
          createElement("span", {
            innerText: "Earth date: ",
            children: [createElement("p", { innerText: earth_date })],
          }),
          createElement("span", {
            innerText: "Camera name: ",
            children: [createElement("p", { innerText: camera.name })],
          }),
        ],
      }),
    ],
  });
}
