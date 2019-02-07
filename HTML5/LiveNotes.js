function clickFunc(buttonName){
    alert(buttonName);

    var textAreaObj = document.querySelector("textarea[name='notesArea']");
    var notesList = document.querySelector("ul[name='notesList']");

    var textAreaNote = textAreaObj.value;

    if(buttonName =='save'){
        var fileName = prompt("Please enter name of the notes to be saved:");
        window.localStorage.setItem(fileName,textAreaNote);
        var listTemp = document.createElement('li');
        listTemp.appendChild(document.createTextNode(fileName));
        notesList.appendChild(listTemp);
        textAreaObj.value="";
        

    }else if(buttonName == 'new'){


        textAreaObj.value="";

    }else if(buttonName == 'load'){

        var fileName = prompt("Please enter name of the notes to be loaded:");
        var noteContent = window.localStorage.getItem(fileName);
        textAreaObj.value=noteContent;
        alert("The notes has been loaded")
    }

}