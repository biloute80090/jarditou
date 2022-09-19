//boucle FOR
for(let i = 0; i < 3; i += 1) {
console.log('boucle : ' + i);
}

//parcourir un tableau
let tab = ['pomme', 'fraise', 'fraise'];

console.log('--for--');
for (let i = 0; i <tab.length; i += 1) {
console.log(tab[i]);
}

console.log('--wile--');
let j = 0;
while (j < tab.length){
console.log(tab[j]);
j +=1;
}
    
console.log('--do while--');
let k =0;
do {
console.log(tab[k]);
k +=1;
}while (k < tab.length); 

//for IN : iterer sur les cles d 'un objet
let voiture ={marque:'peugeot', moteur: 'essance' };

console.log('--for IN');
for (let k in voiture) {
    console.log(k);
}

//for of : iterer sur les valeurs d'un tableau
let tab2 =['bleu','blanc','rouge'];


console.log('--for OF--');
for (let v of tab2) {
    console.log(v);
    }