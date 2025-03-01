function what_are_words_worth() {
    let str = prompt('Entrez un mot');
    let result = confirm('la longueur de votre mot est-elle de ' + str.length + ' lettres ?');
    return result
}


function count_words(string_of_words) {
    let count_space = 0;
    for (let i=0; i < string_of_words.length; ++i){
        if (string_of_words.charAt(i) === " "){
            ++count_space;
        }
    }
    return count_space + 1;
}

function count_words_by(string_of_words, letter) {
    let count_letter = 0;
    for (let i=0; i < string_of_words.length; ++i){
        if (string_of_words.charAt(i) === letter){
            ++count_letter;
        }
    }
    return count_letter + 1;
}


function is_a_vowel(letter) {
    for (let i = 0; i < vowels.length; ++i) {
        if (letter === vowels[i]) {
            return true;
        }
    }
    return false;
}

function count_vowels(string_of_words) {
    let count = 0;
    for (let i = 0; i < string_of_words.length; ++i) {
        if (is_a_vowel(string_of_words.charAt(i))){
            ++count;
        }
    }
    return count;
}

function count_consonants(string_of_words) {
    return string_of_words.length - count_vowels(string_of_words) - count_words(string_of_words) + 1;
}

function remove(string_of_words, caracter) {
    let altered_string = "";
    for (let i = 0; i < string_of_words.length; ++i) {;
        if (string_of_words[i] !== caracter) {
            altered_string += string_of_words[i];
        }
    }
    return altered_string;
}

function remove_strings(string_of_words, caracters) {
    let altered_string = "";
    for (let i = 0; i < string_of_words.length; ++i) {
        let contains_caracters = false;
        for (let j = 0; j < caracters.length; ++j) {
            if (string_of_words[i] === caracters[j]) {
                contains_caracters = true;
                break;
            }
        }
        if (!contains_caracters) {
            altered_string += string_of_words[i];
        }
    }
    return altered_string;
}


function crypto(to_crypt, offset) {
    let crypted = "";
    for (let i = 0; i < to_crypt.length; ++i) {
        let charCode = to_crypt.charCodeAt(i);
        let newCharCode;

        if (charCode >= 65 && charCode <= 90) { // Pour les lettres majuscules
            newCharCode = ((charCode - 65 + offset) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) { // Pour les lettres minuscules
            newCharCode = ((charCode - 97 + offset) % 26) + 97;
        } else {
            crypted += to_crypt.charAt(i); // Ajoute le caractère inchangé s'il n'est pas une lettre
            continue;
        }

        // Convertir le nouveau code de caractère en lettre sans utiliser String.fromCharCode()
        for (let j = 0; j <= 65535; ++j) {
            if (j === newCharCode) {
                crypted += String.fromCharCode(j);
                break;
            }
        }
    }
    return crypted;
    // J'avoue cet exercice est le premier que je n'arrive pas à résoudre sans l'ia car je ne connais pas trop le fonctionnement des codes 
}


function decrypt(to_decrypt, offset) {
    return to_decrypt.split('').map(char => {
        let charCode = char.charCodeAt(0);
        let newCharCode;

        if (charCode >= 65 && charCode <= 90) { // Pour les lettres majuscules
            newCharCode = ((charCode - 65 - offset + 26) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) { // Pour les lettres minuscules
            newCharCode = ((charCode - 97 - offset + 26) % 26) + 97;
        } else {
            return char; // Retourne le caractère inchangé s'il n'est pas une lettre
        }

        // Convertir le nouveau code de caractère en lettre sans utiliser String.fromCharCode()
        for (let j = 0; j <= 65535; ++j) {
            if (j === newCharCode) {
                return String.fromCharCode(j);
            }
        }
    }).join('');
    // pareil c'est l'IA, je suis pas assez malin
}

function enigma(crypted_string) {
    for (let key = 0; key < 26; key++) console.log(`Key ${key}: ${decrypt(crypted_string, key)}`);
    // Toujours l'IA, le syndrome de l'imposteur est réel
}