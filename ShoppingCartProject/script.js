function print(str){
    console.log(str);
}

function createListItem(str){

    let listItem = document.createElement("div");
    var closeIcon = document.createElement("p");
    closeIcon.appendChild(document.createTextNode("x"));
    closeIcon.onclick = function(){
        listItem.remove();
        SetVisibilityForHeading(shoppingList);
    }

    
    listItem.className = "itemDisplay";
    listItem.appendChild(document.createTextNode(str));
    listItem.append(closeIcon);
    print(listItem);
    return listItem;
}

function SetVisibilityForHeading(shoppingList){
    if(shoppingList.childElementCount == 0){
        shoListHeading.style.display = "none";
    }else{
        shoListHeading.style.display = "block";
    }
}


const txtName = document.getElementById("txtName");
const btnAdd = document.getElementById("btnAddItem");
const shoppingList = document.getElementById("shoppingList");
const shoListHeading = document.getElementById("shopListHeading");
SetVisibilityForHeading(shoppingList);


btnAdd.onclick = function(e){
    if(txtName.value === ""){
        alert("Please enter valid name");
        return;
    }

    shoppingList.appendChild(createListItem(txtName.value));
    txtName.value = "";
    print(shoppingList);
    SetVisibilityForHeading(shoppingList);
}