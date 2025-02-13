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
let currentIndex = 0;
const menuContainer = document.querySelector("#menu-container");
const menuPathElement = document.querySelector("#menu-path");
const backButton = document.querySelector("#back-button");

document.body.insertAdjacentHTML(
  "beforeend",
  `
  <div id="menu-controls">
    <button id="prev-item">Previous</button>
    <button id="next-item">Next</button>
    <button id="delete-item">Delete Item</button>
    <button id="copy-path">Copy Path</button>
  </div>
  `
);

const prevButton = document.querySelector("#prev-item");
const nextButton = document.querySelector("#next-item");
const deleteButton = document.querySelector("#delete-item");
const copyPathButton = document.querySelector("#copy-path");

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
    box.setAttribute("class", "clickable");
    box.setAttribute("scale", "1 1 1");

    const text = document.createElement("a-text");
    text.setAttribute("value", option.name);
    text.setAttribute("align", "center");
    text.setAttribute("position", "0 0 0.11");
    text.setAttribute("scale", "0.75 0.75 0.75");
    text.setAttribute("color", "#FFFFFF");
    box.appendChild(text);

    box.addEventListener("mouseenter", () => {
      anime({
        targets: box.object3D.position,
        y: 0.2,
        duration: 300,
        easing: "easeOutBack",
      });

      anime({
        targets: box.object3D.scale,
        x: 1.2,
        y: 1.2,
        z: 1.2,
        duration: 300,
        easing: "easeOutElastic(1, .5)",
      });
    });

    box.addEventListener("mouseleave", () => {
      anime({
        targets: box.object3D.position,
        y: 0,
        duration: 300,
        easing: "easeOutBack",
      });

      anime({
        targets: box.object3D.scale,
        x: 1,
        y: 1,
        z: 1,
        duration: 300,
        easing: "easeOutElastic(1, .5)",
      });
    });

    box.addEventListener("click", () => handleClick(option));
    box.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      deleteItem(option);
    });

    menuContainer.appendChild(box);
  });

  updateMenuPath();
  updateNavigationButtons();
}

function handleClick(option) {
  if (option.options) {
    currentPath.push(option);
    renderMenu(option.options);
  } else {
    currentPath.push(option);
    currentIndex = 0;
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
  box.setAttribute("class", "clickable");

  box.setAttribute("material", "opacity: 0");

  const text = document.createElement("a-text");
  text.setAttribute("value", item.name);
  text.setAttribute("align", "center");
  text.setAttribute("position", "0 0 0.16");
  text.setAttribute("scale", "1 1 1");
  text.setAttribute("color", "#FFFFFF");
  box.appendChild(text);

  box.addEventListener("loaded", () => {
    anime({
      targets: box.getAttribute("material"),
      opacity: 1,
      duration: 500,
      easing: "easeOutCubic",
      update: function () {
        box.setAttribute(
          "material",
          "opacity",
          box.getAttribute("material").opacity
        );
      },
    });
  });

  box.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    deleteItem(item);
  });

  menuContainer.appendChild(box);
  updateMenuPath();
  updateNavigationButtons();
}

function updateMenuPath() {
  const path = currentPath.map((item) => item.name).join(" / ");
  menuPathElement.textContent = path || "Main Menu";
}

function deleteItem(targetItem) {
  const currentMenu = menuData.menu_options;
  const parentMenu = null;
  const itemToDelete = null;
  const parentPath = [];

  function findItem(menu, target, path = []) {
    for (let i = 0; i < menu.length; i++) {
      const item = menu[i];
      if (item === target) {
        return {
          found: true,
          parent: menu,
          index: i,
          path: path,
        };
      }
      if (item.options) {
        const result = findItem(item.options, target, [...path, item]);
        if (result.found) {
          return result;
        }
      }
    }
    return { found: false };
  }

  const result = findItem(menuData.menu_options, targetItem);

  if (result.found) {
    result.parent.splice(result.index, 1);

    exportJSON();

    if (result.path.length > 0) {
      currentPath = result.path;
      renderMenu(result.path[result.path.length - 1].options);
    } else {
      currentPath = [];
      renderMenu(menuData.menu_options);
    }
  }
}

function exportJSON() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const dataStr = JSON.stringify(menuData, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `menu-config-${timestamp}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function copyCurrentPath() {
  const path = currentPath.map((item) => item.name).join("/");
  const url = `${window.location.origin}${
    window.location.pathname
  }#${encodeURIComponent(path)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Path copied to clipboard!");
  });
}

function updateNavigationButtons() {
  const isLastLevel =
    currentPath.length > 0 && !currentPath[currentPath.length - 1].options;
  prevButton.style.display = isLastLevel ? "inline" : "none";
  nextButton.style.display = isLastLevel ? "inline" : "none";
  deleteButton.style.display = currentPath.length > 0 ? "inline" : "none";
  copyPathButton.style.display = currentPath.length > 0 ? "inline" : "none";
}

function navigateItems(direction) {
  if (currentPath.length > 0) {
    const parentPath = currentPath.slice(0, -1);
    let currentMenu = menuData.menu_options;

    for (const item of parentPath) {
      currentMenu = currentMenu.find((opt) => opt.name === item.name).options;
    }

    currentIndex =
      (currentIndex + direction + currentMenu.length) % currentMenu.length;
    renderSingleItem(currentMenu[currentIndex]);
  }
}

function goBack() {
  if (currentPath.length > 0) {
    currentPath.pop();
    if (currentPath.length > 0) {
      const lastItem = currentPath[currentPath.length - 1];
      if (lastItem.options) {
        renderMenu(lastItem.options);
      } else {
        renderSingleItem(lastItem);
      }
    } else {
      renderMenu(menuData.menu_options);
    }
  }
}

backButton.addEventListener("click", goBack);
prevButton.addEventListener("click", () => navigateItems(-1));
nextButton.addEventListener("click", () => navigateItems(1));
deleteButton.addEventListener("click", () => {
  const currentItem = currentPath[currentPath.length - 1];
  if (currentItem) {
    deleteItem(currentItem);
  }
});
copyPathButton.addEventListener("click", copyCurrentPath);

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(menuData.menu_options);

  if (window.location.hash) {
    const path = decodeURIComponent(window.location.hash.slice(1)).split("/");
    let currentMenu = menuData.menu_options;

    for (const itemName of path) {
      const item = currentMenu.find((opt) => opt.name === itemName);
      if (item) {
        handleClick(item);
        if (item.options) {
          currentMenu = item.options;
        }
      }
    }
  }
});
