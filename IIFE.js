(function () {
    // Static array of names
    const names = ["Ram", "shyam"];  //names to be displayed in array.

    // Button click event
    const showNamesButton = document.getElementById("showNamesButton");    //gets data from id "showNamesButton" and put it in ShowNameButton
    const namesList = document.getElementById("namesList"); //gets data from id "nameLists" and store it on nameList.
    const addedNames = [];
    showNamesButton.addEventListener("click", function () {     // Trigger an event on showNameButton when  it is clicked.
        
          const uniNames = names.filter(function(names){
              
              return !addedNames.includes(names);  //checks if the names are repeated or not and add the other names in it
            })
            namesList.innerHTML = "";
        for (let i = 0; i < uniNames.length; i++) {
            const li = document.createElement("li");   //creates list element in li
            li.textContent = uniNames[i];   //gets the content of all element in uniqueNames and put it in li.
            namesList.appendChild(li); // displays names of names array  by creating a new lists as a child.
            addedNames.push(uniNames[i]); // pushes the names in addedNames.
            newNamesList.appendChild(li);  //displays the names written in form by creating a new list as a child
        }
            // Display the first two names
        
    });
    const nameForm = document.getElementById("nameForm");  // gets data from id "nameForm" and keep it on nameForm
    const newNameInput = document.getElementById("newName"); // gets data from id "newName" and put it on newNameInput.
    const newNamesList = document.getElementById("newNamesList"); //gets data from id "newNameList" and put it on newNameList.

    // Form submit event

    nameForm.addEventListener("submit", function (event) {   //event handler for submit button 
        event.preventDefault();
        const newName = newNameInput.value.trim();     //the names written in newNameInput will be stored in newName.
        if (newName && !addedNames.includes(newName)) {
            const li = document.createElement("li"); //creates a list element in li
            li.textContent = newName;  // gets text from newName.
            newNamesList.appendChild(li);  // creates a child list 
            newNameInput.value = "";  // The name is displayed
            addedNames.push(newName); //if the name is not repeated it will be displayed.
        }
    });
})();