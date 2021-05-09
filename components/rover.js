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
  total_photos,
}) {
  return createElement("div", {
    className: "rover",
    children: [
      createElement("img", {
        className: "rover-image",
        src: `../assets/${name.toLowerCase()}.png`,
      }),
      // Link to details page using rover name
      createElement("a", {
        href: `/details.html?rover=${name.toLowerCase()}`,
        children: [
          createElement("h3", {
            className: "rover__name",
            innerText: name,
          }),
        ],
      }),
      createElement("span", {
        innerText: "Mission status: ",
        children: [createElement("p", { innerText: status })],
      }),
      createElement("span", {
        innerText: "Launch date: ",
        children: [createElement("p", { innerText: launch_date })],
      }),
      createElement("span", {
        innerText: "Landing date: ",
        children: [createElement("p", { innerText: landing_date })],
      }),
      createElement("span", {
        innerText: "Number of photos: ",
        children: [createElement("p", { innerText: total_photos })],
      }),
    ],
  });
}
