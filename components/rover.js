import "./rover.css";
import { createElement } from "../utils/elements";

// "rover": {
//     "id": 5,
//     "name": "Curiosity",
//     "landing_date": "2012-08-06",
//     "launch_date": "2011-11-26",
//     "status": "active"
//   }

// Function to create character element for intro section
export function createRoverElement({
  //id,
  name,
  landing_date,
  launch_date,
  status,
}) {
  return createElement("div", {
    className: "rover",
    children: [
      createElement("img", {
        src: `../assets/${name.toLowerCase()}.png`,
      }),
      // Link to details page using id
      createElement("a", {
        href: `/details.html?rover=${name.toLowerCase()}`,
        children: [
          createElement("h3", {
            className: "rover__name",
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
