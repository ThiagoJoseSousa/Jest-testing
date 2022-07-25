const Encryption = {
caesar : (str,key) => {
const arr = str.split('');

for (let i = 0; i<arr.length; i++){
    const newCode = Encryption.getNewSmallChar(str, i, key);
    arr[i]= newCode;
}
return arr.join('');
},
getNewSmallChar:(str,index,key)=> {
    key = key % 26;
    const newCharNo=str.charCodeAt(index) + key;

    if (newCharNo===33) { 
        return ' ';
            }
    else if (newCharNo <123) {
        return String.fromCharCode(newCharNo)
    }
    else{
        return String.fromCharCode(96+ (newCharNo % 122))
    }
    
}
}
module.exports = Encryption;