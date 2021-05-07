import "./character.css";
import { createElement } from "../utils/elements";

// "rover": {
//     "id": 5,
//     "name": "Curiosity",
//     "landing_date": "2012-08-06",
//     "launch_date": "2011-11-26",
//     "status": "active"
//   }

// Function to create character element for intro section
export function createCharacterElement({
  //id,
  name,
  landing_date,
  launch_date,
  status,
}) {
  return createElement("div", {
    className: "characters",
    children: [
      // Link to details page using id
      createElement("a", {
        href: "",
        children: [
          createElement("h3", {
            className: "characters__title",
            innerText: name,
          }),
        ],
      }),
      createElement("p", { innerText: status }),
      createElement("p", { innerText: landing_date }),
      createElement("p", { innerText: launch_date }),
    ],
  });
}
