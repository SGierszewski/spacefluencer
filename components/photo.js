import { createElement } from "../utils/elements";

// Function to create photo element for details section
export function createPhotoElement({ sol, earth_date, camera, img_src }) {
  return createElement("div", {
    className: "photo",
    children: [
      createElement("img", { src: img_src }),
      createElement("p", { innerText: sol }),
      createElement("p", { innerText: earth_date }),
      createElement("p", { innerText: camera.name }),
    ],
  });
}
