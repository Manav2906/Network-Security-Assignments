// getting the input data from index.html 
const pt = document.getElementById("plain");
const ct = document.getElementById("cipher");

//The cipher functions is used for encryption/decryption
//It convers upper case A,B,C,D..Z by their mirror like Z,Y,X,W..A
//The same operation is done for a,b,c,d..z
//Characters other than english alphabets are unchanged 
function plaintocipher(input){
  
  //declaring output as null string
  let ct = "";
  
  //declaring an empty hash dictionary for storing has values
  let convert_hash = {};
  
  //adding key-value pairs for uppercase letters
  for(let i=65;i<=90;i++) convert_hash[String.fromCharCode(i)] = String.fromCharCode(90-(i-65));
  
  //adding key-value pairs for lowercase letters
  for(let i=97;i<=122;i++) convert_hash[String.fromCharCode(i)] = String.fromCharCode(122-(i-97));
  
  //generating final output 
  for(let i=0; i<input.length; i++){
    if(convert_hash[input[i]]) ct+=convert_hash[input[i]];
    else ct+=input[i];
  }
  return ct;
}


//converting plain text to cipher text
function enc(){
  let string = pt.value;
  ct.value = plaintocipher(string);
}

//converting cipher text to plain text
function dec() {
  let string = ct.value;
  pt.value = plaintocipher(string);
}


