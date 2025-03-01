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