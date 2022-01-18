// getting the input data from index.html 
const plainText = document.getElementById("plainText");
const cipherText = document.getElementById("cipherText");

//The cipher functions is used for encryption/decryption
//It convers upper case A,B,C,D..Z by their mirror like Z,Y,X,W..A
//The same operation is done for a,b,c,d..z
//Characters other than english alphabets are unchanged 
function cipher(text){
  
  //declaring output as null string
  let output = "";
  
  //declaring an empty hash dictionary for storing has values
  let hash = {};
  
  //adding key-value pairs for uppercase letters
  for(let k=65;k<=90;k++) hash[String.fromCharCode(k)] = String.fromCharCode(90-(k-65));
  
  //adding key-value pairs for lowercase letters
  for(let k=97;k<=122;k++) hash[String.fromCharCode(k)] = String.fromCharCode(122-(k-97));
  
  //generating final output 
  for(let i=0; i<text.length; i++){
    if(hash[text[i]]) output+=hash[text[i]];
    else output+=text[i];
  }
  return output;
}


//converting plain text to cipher text
function encryption(){
  let text = plainText.value;
  cipherText.value = cipher(text);
}

//converting cipher text to plain text
function decryption() {
  let text = cipherText.value;
  plainText.value = cipher(text);
}


