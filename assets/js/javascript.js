console.log("texte affiché dans la console");
document.write("hfdgjkdfgh"); 
var reponse1 = window.prompt("Saisissez votre nom");
var reponse2 = window.prompt("Saisissez votre prenom");
if (window.confirm("etre-vous un homme ?") == true) 
{ 
   var sex="homme"
}
window.alert("Bonjour "+sex+" "+reponse1+" "+reponse2+"\n\nBienvenue sur notre site web !")