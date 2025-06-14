import app from "./app.js";

// React compiling and rendering part
const render = (object, section) => {
  const element = document.createElement(object.type); // Create element
  element.innerHTML = object.children; // Put children or text
  for (const prop in object.props) {
    if (prop === "children") continue; // If children is present
    element.setAttribute(prop, object.props[prop]); // Set attribute
  }
  section.appendChild(element); // Append element in root
};

// React main.jsx part
const root = document.querySelector("#root");

// create a custom element object
const anchor = {
  type: "a",
  props: {
    style: "color: blue",
    href: "https://google.com",
    target: "_blank",
  },
  children: "Visit Google",
};

render(anchor, root); // Render object in root

// Render app.js part 1
const element = app(); // Get object
render(element, root);

// Render app.js part 2
render(app(), root);
