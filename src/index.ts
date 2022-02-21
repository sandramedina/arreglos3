let cantidad: number = Number(prompt("cuantos numeros quiere ingresar?"));
let i: number;
let num: number[] = new Array(cantidad);
let positivo: number = 0
let negativo: number = 0
let cero: number = 0

for(i = 0; i < cantidad;i++) {
num[i] = Number(prompt("ingrese num[", i, "]"));

 }
 
 for (i = cantidad - 1; i >= 0; i-- ) { 
  console.log(num[i], " ");
  if (num[i] < 0) {
  console.log(num[i],"es negativo");
  negativo++
 }
 else if (num[i] > 1) {
   console.log(num[i],"es positivo");
  positivo++
 }
 else if (num[i] === 0) {
   console.log(num[i],"es 0")
   cero++ 
    }
     }
      }
  console.log("total de", negativo, "negativos", positivo, "positivos", cero, "ceros");



  