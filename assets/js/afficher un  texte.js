var reponse1 = window.prompt("Saisissez votre nom");
var reponse2 = window.prompt("Saisissez votre prenom");


if (window.confirm("Etes-vous un homme") == true) 
{
    var sex = "Monsieur"
}
window.alert("bonjour "+ sex +" "+reponse1+" "+reponse2+"\n\nbienvenue sur notre site web!");
