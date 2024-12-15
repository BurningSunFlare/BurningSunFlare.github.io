function createInput(event, elem)
{
    var newthing = document.createElement("p");
    newthing.textContent = `ID: ${elem.name} Class:${Array.from(elem.classList)}`;
    newthing.classList.add ("button3");
    newthing.classList.add ("todelete");
    elem.appendChild(newthing);
  
  
    var x = event.clientX;
    var y = event.clientY;
  
    newthing.style.position = "fixed";
    newthing.style.left = x + "px";
    newthing.style.top = y + "px";

    var diddy = document.getElementsByClassName("todelete");
    for (i = 0; i < diddy.length - 1; i++)
    {
        diddy[i].remove();
    }
}

doelems();

async function doelems()
{
    /*let orig = [];
    await sleep(1000); const ever = document.getElementsByClassName('everything');
    for (let i = 0; i < ever.length; i++)
    {
        orig.push( ever[i].textContent );
        ever[i].onmouseover = function ()
        {
            console.log( ever[i].type );
            ever[i].textContent = "Text changed!";
        };

        ever[i].onmouseout = function ()
        {
            ever[i].textContent = orig[i];
        };
    }
    */
}
const cssElements =
{
    body:
    {
        properties:
`background: linear-gradient(to left, #0e052e, #1c1c1c);
color: lightskyblue;
animation: body 10s ease-in-out infinite;
background-size: 400% 100%;
box-shadow: 5px 10px 8px hsl(241, 86%, 11%)`
    },
    "body.non-chromium":
    {
            properties:
`background: linear-gradient(to left, #0e052e, #1c1c1c);`
    },
    "div":
    {
        properties:
`box-shadow: 5px 10px 8px hsl(241, 86%, 11%);`
    },
    "::placeholder":
    {
        properties:
`
color:cornflowerblue
`
    },
".collection, item":
    {
        properties:
`
.collection, .item
{
border: 1px dashed #2959c9;
padding: 5px;
margin-top: 5px;
box-shadow: 5px 6px 8px #0d1f4885;
}
`
    },
".inbox":
    {
        properties:
`
background-color: #56209e43;
color: rgb(147, 194, 255);
border: 2px solid #4a297e;
border-radius: 8px;
`
    },
".inbox:hover":
    {
        properties:
`
border-color: #7426b3;
`
    },
".inbox:focus":
    {
        properties:
`
outline: 2px solid #7426b3;
font-weight:bold;
color: rgb(147, 255, 194);
`
    },
".empty":
    {
        properties:
`

`
    },
".empty":
    {
        properties:
`

`
    },
".empty":
    {
        properties:
`

`
    },
".empty":
    {
        properties:
`

`
    },
".empty":
    {
        properties:
`

`
    },
".empty":
    {
        properties:
`

`
    },
".empty":
    {
        properties:
`

`
    },
".empty":
    {
        properties:
`

`
    },
".empty":
    {
        properties:
`

`
    },
".empty":
    {
        properties:
`

`
    },

};
let exportList = {};

const cssElementSelect = document.getElementById("css-element");
const cssTextbox = document.getElementById("css-textbox");
const colorPicker = document.getElementById("color-picker");
const addToExportButton = document.getElementById("add-to-export");
const copyCssButton = document.getElementById("copy-css");
const saveJsonButton = document.getElementById("save-json");
const loadJsonButton = document.getElementById("load-json");
const fileInput = document.getElementById("file-input");
const exportItems = document.getElementById("export-items");

// Create a global <style> tag to manage live updates
const liveStyle = document.createElement("style");
document.head.appendChild(liveStyle);

// Fetch or initialize styles for the selected element
const loadStyles = (element) => {
    // Initialize styles for new elements
    if (!cssElements[element]) {
        cssElements[element] = { properties: "" };
    }

    // Load existing styles into the editor
    cssTextbox.value = cssElements[element].properties;
};

// Apply styles live to the document
const applyStyles = () => {
    let cssContent = "";
    for (const [el, { properties }] of Object.entries(cssElements)) {
        cssContent += `${el} { ${properties} } `;
    }
    liveStyle.textContent = cssContent;
};

// Update the text box and color picker when selecting an element
cssElementSelect.addEventListener("change", () => {
    const selectedElement = cssElementSelect.value;
    loadStyles(selectedElement);
});

// Update styles dynamically as you type
cssTextbox.addEventListener("input", () => {
    const selectedElement = cssElementSelect.value;
    cssElements[selectedElement] = { properties: cssTextbox.value };
    applyStyles();
});


// Add element to the export list
addToExportButton.addEventListener("click", () => {
    const selectedElement = cssElementSelect.value;
    if (!exportList[selectedElement]) {
        exportList[selectedElement] = cssElements[selectedElement];
        const li = document.createElement("li");
        li.textContent = selectedElement;
        li.dataset.element = selectedElement;
        li.addEventListener("click", () => {
            delete exportList[selectedElement];
            exportItems.removeChild(li);
        });
        exportItems.appendChild(li);
    }
});

// Copy compact CSS to clipboard
copyCssButton.addEventListener("click", () => {
    let cssString = "<style>";
    for (const [element, { properties }] of Object.entries(exportList)) {
        cssString += `${element}{${properties.replace(/\s+/g, " ").trim()}}`;
    }
    cssString += "</style>";

    navigator.clipboard.writeText(cssString).then(() => {
        alert("CSS copied to clipboard!");
    });
});

// Save settings to a JSON file
saveJsonButton.addEventListener("click", () => {
    const data = JSON.stringify({ cssElements, exportList }, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "css-editor-settings.json";
    a.click();
    URL.revokeObjectURL(url);
});

// Load settings from a JSON file
loadJsonButton.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const data = JSON.parse(reader.result);

            // Update cssElements and exportList
            Object.assign(cssElements, data.cssElements);
            Object.assign(exportList, data.exportList);

            // Update export list UI
            exportItems.innerHTML = "";
            for (const element of Object.keys(exportList)) {
                const li = document.createElement("li");
                li.textContent = element;
                li.dataset.element = element;
                li.addEventListener("click", () => {
                    delete exportList[element];
                    exportItems.removeChild(li);
                });
                exportItems.appendChild(li);
            }

            // Apply loaded styles to the live editor
            applyStyles();
            alert("Settings loaded!");
        };
        reader.readAsText(file);
    }
});
applyStyles();