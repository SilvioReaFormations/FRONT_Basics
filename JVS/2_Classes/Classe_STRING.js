let myString = "Toto aime Lulu";


myString.length;            // 14
myString.charAt(6);         // "i"
myString.indexOf("aime");   // 5
myString.indexOf("AIME");   // -1   
myString.split(" ");        // ["Toto", "aime", "Lulu"]
myString.substring(5,7);    // "ai"
myString.toLocaleUpperCase