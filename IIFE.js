(function () {
    // Static array of names
    const names = ["Ram", "Shyam"];

    // Button click event
    const showNamesButton = document.getElementById("showNamesButton");
    const namesList = document.getElementById("namesList");
    const addedNames = [];

    showNamesButton.addEventListener("click", function () {
        const uniNames = names.filter(function (name) {
            return !addedNames.includes(name);
        });

        namesList.innerHTML = ""; // Clear the existing list before displaying unique names

        for (let i = 0; i < uniNames.length; i++) {
            const li = document.createElement("li");
            li.textContent = uniNames[i];
            namesList.appendChild(li);
            addedNames.push(uniNames[i]);
        }
    });

    const nameForm = document.getElementById("nameForm");
    const newNameInput = document.getElementById("newName");
    const newNamesList = document.getElementById("newNamesList");

    // Form submit event
    nameForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const newName = newNameInput.value;
        if (newName && !addedNames.includes(newName)) {
            const li = document.createElement("li");
            li.textContent = newName;
            newNamesList.appendChild(li);
            addedNames.push(newName);
            newNameInput.value = "";
        }
    });
})();
