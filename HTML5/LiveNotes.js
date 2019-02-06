function clickFunc(buttonName){
    alert(buttonName);

    var textAreaObj = document.querySelector("textarea[name='notesArea']");
    var notesList = document.querySelector("ul[name='notesList']");

    var textAreaNote = textAreaObj.value;

    if(buttonName =='save'){
        var fileName = prompt("Please enter name of the notes:");
        window.localStorage.setItem(fileName,textAreaNote);
        var listTemp = document.createElement('li');
        listTemp.appendChild(document.createTextNode(fileName));
        notesList.appendChild(listTemp);
        textAreaObj.value="";
        

    }else if(buttonName == 'new'){


    }else if(buttonName == 'load'){


    }

}