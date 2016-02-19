var caesar64 = function(string, shift){
	var shift = shift || 3,
		words = string.split(' '),
		alphabet = 'abcdefghijklmnopqrstuvwxyz',
		encoded_words = [];

		for(var i = 0; i < words.length; i++){
			var encoded_letters = [];
			for(var j=0; j<words[i].length; j++){
				var letter = words[i].charAt(j),
					ascii_num = letter.charCodeAt(0),
					ascii_shift = ascii_num + shift;
				if(!isNaN(parseInt(letter))){
					ascii_shift > 57 ? encoded_letters.push(String.fromCharCode(ascii_shift - 10)) : encoded_letters.push(String.fromCharCode(ascii_shift));
				}
				else if(alphabet.indexOf(letter.toLowerCase()) >= 0){
					if(letter === letter.toUpperCase()){
						ascii_shift > 90 ? encoded_letters.push(String.fromCharCode(ascii_shift - 26)) : encoded_letters.push(String.fromCharCode(ascii_shift));
					}
					else{
						ascii_shift > 122 ? encoded_letters.push(String.fromCharCode(ascii_shift - 26)) : encoded_letters.push(String.fromCharCode(ascii_shift));
					}
				}
				else{
					ascii_shift > 126 ? encoded_letters.push(String.fromCharCode(ascii_shift - 94)) : encoded_letters.push(String.fromCharCode(ascii_shift));
				}
			}
			encoded_words.push(encoded_letters.join(''));
		}
	return btoa(encoded_words.join(' '));
}

var de_caesar64 = function(string, shift){
	var shift = shift || 3,
		words = atob(string).split(' '),
		alphabet = 'abcdefghijklmnopqrstuvwxyz',
		encoded_words = [];

		for(var i = 0; i < words.length; i++){
			var encoded_letters = [];
			for(var j=0; j<words[i].length; j++){
				var letter = words[i].charAt(j),
					ascii_num = letter.charCodeAt(0),
					ascii_shift = ascii_num - shift;
				if(!isNaN(parseInt(letter))){
					ascii_shift < 48 ? encoded_letters.push(String.fromCharCode(ascii_shift + 10)) : encoded_letters.push(String.fromCharCode(ascii_shift));
				}
				else if(alphabet.indexOf(letter.toLowerCase()) >= 0){
					if(letter === letter.toUpperCase()){
						ascii_shift < 65 ? encoded_letters.push(String.fromCharCode(ascii_shift + 26)) : encoded_letters.push(String.fromCharCode(ascii_shift));
					}
					else{
						ascii_shift < 97 ? encoded_letters.push(String.fromCharCode(ascii_shift + 26)) : encoded_letters.push(String.fromCharCode(ascii_shift));
					}
				}
				else{
					ascii_shift < 126 ? encoded_letters.push(String.fromCharCode(ascii_shift + 94)) : encoded_letters.push(String.fromCharCode(ascii_shift));
				}
			}
			encoded_words.push(encoded_letters.join(''));
		}
	return encoded_words.join(' ');
}



/* TODO:
	> Find a way to prevent symbols from becoming numbers/letters when shifted
	> Find a way to allow \ to come through, as well as '  and  "   --- escape them?
*/














