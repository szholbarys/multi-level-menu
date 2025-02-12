const menuData = {
  menu_options: [
    {
      name: "Electronics",
      level: 0,
      color: "#FF5733",
      options: [
        {
          name: "Computers",
          level: 1,
          color: "#FF5733",
          options: [
            {
              name: "Laptop",
              level: 2,
              color: "#FF5733",
            },
            {
              name: "Desktop",
              level: 2,
              color: "#FF5733",
            },
            {
              name: "Tablet",
              level: 2,
              color: "#FF5733",
            },
          ],
        },
        {
          name: "Smartphones",
          level: 1,
          color: "#FF5733",
          options: [
            {
              name: "iPhone",
              level: 2,
              color: "#FF5733",
            },
            {
              name: "Android",
              level: 2,
              color: "#FF5733",
            },
          ],
        },
        {
          name: "Accessories",
          level: 1,
          color: "#FF5733",
          options: [
            {
              name: "Headphones",
              level: 2,
              color: "#FF5733",
            },
            {
              name: "Chargers",
              level: 2,
              color: "#FF5733",
            },
          ],
        },
      ],
    },
    {
      name: "Clothing",
      level: 0,
      color: "#3498DB",
      options: [
        {
          name: "Men",
          level: 1,
          color: "#3498DB",
          options: [
            {
              name: "Shirts",
              level: 2,
              color: "#3498DB",
            },
            {
              name: "Pants",
              level: 2,
              color: "#3498DB",
            },
          ],
        },
        {
          name: "Women",
          level: 1,
          color: "#3498DB",
          options: [
            {
              name: "Dresses",
              level: 2,
              color: "#3498DB",
            },
            {
              name: "Skirts",
              level: 2,
              color: "#3498DB",
            },
          ],
        },
        {
          name: "Kids",
          level: 1,
          color: "#3498DB",
          options: [
            {
              name: "T-shirts",
              level: 2,
              color: "#3498DB",
            },
            {
              name: "Shorts",
              level: 2,
              color: "#3498DB",
            },
          ],
        },
      ],
    },
    {
      name: "Books",
      level: 0,
      color: "#27AE60",
      options: [
        {
          name: "Fiction",
          level: 1,
          color: "#27AE60",
          options: [
            {
              name: "Novels",
              level: 2,
              color: "#27AE60",
            },
            {
              name: "Short Stories",
              level: 2,
              color: "#27AE60",
            },
          ],
        },
        {
          name: "Non-fiction",
          level: 1,
          color: "#27AE60",
          options: [
            {
              name: "Biographies",
              level: 2,
              color: "#27AE60",
            },
            {
              name: "Self-help",
              level: 2,
              color: "#27AE60",
            },
          ],
        },
        {
          name: "Educational",
          level: 1,
          color: "#27AE60",
          options: [
            {
              name: "Textbooks",
              level: 2,
              color: "#27AE60",
            },
            {
              name: "Reference",
              level: 2,
              color: "#27AE60",
            },
          ],
        },
      ],
    },
    {
      name: "Sports",
      level: 0,
      color: "#E74C3C",
      options: [
        {
          name: "Team Sports",
          level: 1,
          color: "#E74C3C",
          options: [
            {
              name: "Football",
              level: 2,
              color: "#E74C3C",
            },
            {
              name: "Basketball",
              level: 2,
              color: "#E74C3C",
            },
          ],
        },
        {
          name: "Individual Sports",
          level: 1,
          color: "#E74C3C",
          options: [
            {
              name: "Tennis",
              level: 2,
              color: "#E74C3C",
            },
            {
              name: "Swimming",
              level: 2,
              color: "#E74C3C",
            },
          ],
        },
        {
          name: "Outdoor Activities",
          level: 1,
          color: "#E74C3C",
          options: [
            {
              name: "Hiking",
              level: 2,
              color: "#E74C3C",
            },
            {
              name: "Camping",
              level: 2,
              color: "#E74C3C",
            },
          ],
        },
      ],
    },
  ],
};

let currentPath = [];
const menuContainer = document.querySelector("#menu-container");
const menuPathElement = document.querySelector("#menu-path");
const backButton = document.querySelector("#back-button");

function renderMenu(options) {
  menuContainer.innerHTML = "";

  options.forEach((option, index) => {
    const xPos = index * 2 - (options.length - 1);
    const box = document.createElement("a-box");
    box.setAttribute("position", `${xPos} 0 0`);
    box.setAttribute("color", option.color);
    box.setAttribute("width", "1.5");
    box.setAttribute("height", "1.5");
    box.setAttribute("depth", "0.2");
    box.setAttribute("shadow", "");

    box.setAttribute("animation__scale", {
      property: "scale",
      to: "1.2 1.2 1.2",
      startEvents: "mouseenter",
      dur: 200,
    });
    box.setAttribute("animation__scale_reverse", {
      property: "scale",
      to: "1 1 1",
      startEvents: "mouseleave",
      dur: 200,
    });

    const text = document.createElement("a-text");
    text.setAttribute("value", option.name);
    text.setAttribute("align", "center");
    text.setAttribute("position", "0 0 0.11");
    text.setAttribute("scale", "0.75 0.75 0.75");
    text.setAttribute("color", "#FFFFFF");
    box.appendChild(text);

    box.addEventListener("click", () => handleClick(option));

    menuContainer.appendChild(box);
  });

  updateMenuPath();
}

function handleClick(option) {
  if (option.options) {
    currentPath.push(option);
    renderMenu(option.options);
  } else {
    currentPath.push(option);
    renderSingleItem(option);
  }
}

function renderSingleItem(item) {
  menuContainer.innerHTML = "";

  const box = document.createElement("a-box");
  box.setAttribute("position", "0 0 0");
  box.setAttribute("color", item.color);
  box.setAttribute("width", "2");
  box.setAttribute("height", "2");
  box.setAttribute("depth", "0.3");
  box.setAttribute("shadow", "");

  const text = document.createElement("a-text");
  text.setAttribute("value", item.name);
  text.setAttribute("align", "center");
  text.setAttribute("position", "0 0 0.16");
  text.setAttribute("scale", "1 1 1");
  text.setAttribute("color", "#FFFFFF");
  box.appendChild(text);

  menuContainer.appendChild(box);
  updateMenuPath();
}

function updateMenuPath() {
  const path = currentPath.map((item) => item.name).join(" / ");
  menuPathElement.textContent = path || "Main Menu";
}

function goBack() {
  if (currentPath.length > 0) {
    currentPath.pop();
    if (currentPath.length === 0) {
      renderMenu(menuData.menu_options);
    } else {
      renderMenu(currentPath[currentPath.length - 1].options);
    }
  }
}

backButton.addEventListener("click", goBack);

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuData.menu_options);
});
