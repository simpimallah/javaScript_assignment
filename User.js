let arrNames=new Array()
let arrEmails=new Array()
let arrContacts=new Array()


function savedata(){
let name = document.getElementById("name").value
let email=document.getElementById("email").value
let contact=document.getElementById("contact").value

arrNames[arrNames.length]=name
arrEmails[arrEmails.length]=email
arrContacts[arrContacts.length]=contact


}


function displaydata(){
    let content = "<b>Data Entered by User </b><br><br> "
    content+=[...arrNames]+"<br>"
    content+=[...arrEmails]+"<br>"
    content+=[...arrContacts]+"<br>"

    document.getElementById("display").innerHTML=content


}