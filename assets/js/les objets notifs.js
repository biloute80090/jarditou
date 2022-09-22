cl =console.log
function tableau()
{
    var tableau =[]
    do
    {
    var saisie = Number(window.prompt("donnez une valeur numerique"));
    if(saisie == null || saisie == "" ||saisie == 0 )
    {
        return tableau;
        break;
    }

     tableau.push(saisie)
     console.log(tableau);
         }while (saisie !=null && saisie != "")


}
var tableau =tableau();
cl(tableau);
cl("nombre de valeur saisie : "+tableau.length);
const initialvalue = 0;
const sumWithInitial =tableau.reduuce((previousValue, currentValue) => previousValue + currentValue, initialvalue );
cl("la somme de valurs = "+sumWithInitial);
cl("la moyenne est " +sumWithInitial/tableau.length);
