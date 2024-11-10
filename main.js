


let sommaDispari = 0; // Variabile per sommare i numeri dispari
let countNumDispari = 0; // Contatore per i numeri dispari

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {

        console.log("numero paro.." + i);   // stampa dei numeri pari con il controllo del resto  '%' se resto è zero allora è num.paro
    } else {

        sommaDispari = sommaDispari + i;  // sommaDispari contiene la somma dei num dispari 
        // Quando troviamo un nuovo numero dispari, lo sommiamo al valore attuale di sommaDispari.




        countNumDispari++; // e li va ad aggiungere al countNumDispari
    }
}


let mediaNumeriDispari = sommaDispari / countNumDispari;  // Calcola e stampa la media dei numeri dispari

console.log("quindi la media dei numeri dispari da 1 a 20 è..." + mediaNumeriDispari);

