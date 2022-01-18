// getting the input data from index.html 
const plainText = document.getElementById("plainText");
const cipherText = document.getElementById("cipherText");

//The cipher functions is used for encryption/decryption
//It convers upper case A,B,C,D..Z by their mirror like Z,Y,X,W..A
//The same operation is done for a,b,c,d..z
//Characters other than english alphabets are unchanged 
function cipher(input){
  
  //declaring output as null string
  let ciphertext = "";
  
  //declaring an empty hash dictionary for storing has values
  let hash = {};
  
  //adding key-value pairs for uppercase letters
  for(let i=65;i<=90;i++) hash[String.fromCharCode(i)] = String.fromCharCode(90-(i-65));
  
  //adding key-value pairs for lowercase letters
  for(let i=97;i<=122;i++) hash[String.fromCharCode(i)] = String.fromCharCode(122-(i-97));
  
  //generating final output 
  for(let i=0; i<input.length; i++){
    if(hash[input[i]]) ciphertext+=hash[input[i]];
    else ciphertext+=input[i];
  }
  return ciphertext;
}


//converting plain text to cipher text
function encryption(){
  let string = plainText.value;
  cipherText.value = cipher(string);
}

//converting cipher text to plain text
function decryption() {
  let string = cipherText.value;
  plainText.value = cipher(string);
}


