const produits = [
    {id : 1, nom : "clavier", categorie : "accessoires", prix : 120 , stock : 5},
    {id : 2, nom : "souris", categorie : "accessoires", prix : 80 , stock : 8},
    {id :3, nom : "ecran", categorie : "informatique", prix : 900 , stock : 0},
    {id : 4, nom : "casque", categorie : "accessoires", prix : 240 , stock : 3},
];

// produit valide :
function estValide(produits) {
    return Number.isFinite(produits.prix) && produits.prix >= 0 && Number.isFinite(produits.stock) && produits.stock >= 0;
}

// afficher nom et prix :
const produit = produits.map((p) => `nom : ${p.nom} , prix : ${p.prix}`);
console.log(produit);

// produit disponible :
const stocks = produits.filter((p) => p.stock > 0);
console.log(`produit disponible est : ${stocks.length}`);

// le prix minimal :
const disponible = produits.filter((p) => p.stock > 0);
if(disponible.length > 0){
    const moinscher = disponible.reduce((min,produits) => produits.prix < min.prix ? produits : min);
    const {nom,prix} = moinscher // utilisation de destructuration
    console.log("le produit disponible le moins cher est :", nom ,", le prix est : ", prix);

}
else{
    console.log("le produit n'est pas disponible .");
}

// Résumé :

const lignes = produits.map((p)=> {return `nom : ${p.nom} - prix : ${p.prix}MAD - stock unite : ${p.stock}`});
for(const ligne of lignes){
    console.log(ligne);
}




