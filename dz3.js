//1
function minMunisMax(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return 0
    }

    let min = arr[0]
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max - min
}

//2
function numerword(str, num) {
    const words = str.split(' ')
    const result = []

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > num) {
            result.push(words[i])
        }
    }

    return result
}

//3
function words(str, endWords) {
    return str.endsWith(endWords)
}

//4
function middle(arr) {
    const result = []

    for (let i = 0; i < arr.length - 1; i++) {
        let sum = arr[i] + arr[i + 1]
        let mid = sum / 2
        result.push(mid)
    }

    return result
}

//5
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0

    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            count++
        }
    }

    return count
}

function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return vowels.includes(char.toLowerCase())
}

//5.2
function removeABC(str) {
    const letterRemove = ['a', 'b', 'c']
    let result = ''

    for (let i = 0; i < str.length; i++) {
        if (!letterRemove.includes(str[i].toLowerCase())) {
            result += str[i]
        }
    }

    if (result === str) {
        return null
    }

    return result
}

//6
function difference(arr1, arr2) {
    const uniqueElements = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!isDuplicate(uniqueElements, arr1[i])) {
            uniqueElements.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!isDuplicate(uniqueElements, arr2[i])) {
            uniqueElements.push(arr2[i]);
        }
    }

    uniqueElements.sort();

    return uniqueElements.map(String);
}

function isDuplicate(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}

//7
function object(obj) {
    const object = {};

    for (let key in obj) {
        const value = obj[key];
        object[value] = key;
    }

    return object;
}

//8
function calculate(items, limit) {
    let total = 0;

    for (let item in items) {
        total += items[item];
    }

    return total - limit;
}

//9
function brick(a, b, c, w, h) {
    const orientations = [
        [a, b],
        [a, c],
        [b, c]
    ];

    for (let i = 0; i < orientations.length; i++) {
        const [x, y] = orientations[i];

        if ((x <= w && y <= h) || (y <= w && x <= h)) {
            return true;
        }
    }

    return false;
}

//10
function file(fullPath) {
    const parts = fullPath.split('\\');
    const fileNameWithExtension = parts[parts.length - 1];
    const fileNames = fileNameWithExtension.split('.').slice(0, -1).join('.');
    return fileNames;
}

//11
function cyclicShift(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str2.length; i++) {
        const shiftedStr = str2.slice(i) + str2.slice(0, i);
        if (shiftedStr === str1) {
            return true;
        }
    }

    return false;
}

//12
function split(a) {
    const b = [];
    const c = [];

    while (a.length > 0) {
        let smallest = a[0];
        let closest = a[1];

        for (let i = 1; i < a.length; i++) {
            if (Math.abs(a[i] - a[0]) < Math.abs(closest - a[0])) {
                closest = a[i];
            }
            if (a[i] < smallest) {
                smallest = a[i];
            }
        }

        b.push(smallest);
        c.push(closest);

        const smallestIndex = a.indexOf(smallest);
        const closestIndex = a.indexOf(closest);

        a.splice(smallestIndex, 1);
        if (closestIndex !== -1) {
            a.splice(closestIndex, 1);
        }
    }

    return {b, c};
}

//13
function transform(inputString) {
    let outputString = '';
    const words = inputString.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (i === 0) {
            word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        } else {
            word = word.toLowerCase();
        }

        if (word.includes('http://') || word.includes('https://')) {
            word = '[посилання заборонено]';
        }

        if (word.includes('@')) {
            word = '[контакти заборонені]';
        }

        if (word.length > 3 && /^\d+$/.test(word)) {
            continue;
        }

        outputString += word + ' ';
    }

    outputString = outputString.trim();

    if (outputString.length > inputString.length) {
        setInterval(function () {
            alert('Потрібна допомога?');
        }, 5000);
    }

    return outputString;
}

//14
function checkParenthesesBalance(text) {
    let stack = [];
    let balanced = true;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '(') {
            stack.push('(');
        } else if (text[i] === ')') {
            if (stack.length === 0) {
                balanced = false;
                break;
            }
            stack.pop();
        }
    }

    if (balanced && stack.length === 0) {
        const encodedText = encodeURIComponent(text);
        const encodedHtml = '<p>' + encodedText + '</p>';
        const encodedScript =
            `<script>
    document.addEventListener("contextmenu", function(event) {
      event.preventDefault();
    });
    document.addEventListener("keydown", function(event) {
      if (event.key === "Control" || event.key === "c" || event.key === "C" || event.keyCode === 67) {
        event.preventDefault();
      }
    });
  </script>`
        const html = encodedHtml + encodedScript;

        document.body.innerHTML = html;
    }

    return balanced && stack.length === 0;
}

const text = 'Текст з (балансними) круглими дужками.';

if (checkParenthesesBalance(text)) {
    console.log('Баланс круглих дужок дотримується.');
} else {
    console.log('Баланс круглих дужок не дотримується.');
}
//15
function generatePassword() {
    const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_';
    const validDigits = '0123456789';

    let password = '';

    password += '_';

    password += getRandomCharacter(validChars);
    password += getRandomCharacter(validChars);

    while (password.length < 6) {
        let char = getRandomCharacter(validChars);
        password += char;
    }

    while (password.length < 20) {
        let char = getRandomCharacter(validChars + validDigits);

        if (validDigits.includes(char)) {
            let lastChar = password.slice(-1);
            if (lastChar === char) {
                continue;
            }
        }

        password += char;
    }

    return password;
}

function getRandomCharacter(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}
//16
function rearrangeArray(arr) {
    let smallestIndex = 0;
    let largestIndex = arr.length - 1;

    while (smallestIndex < largestIndex) {
        let temp = arr[smallestIndex];
        arr[smallestIndex] = arr[largestIndex];
        arr[largestIndex] = temp;

        smallestIndex++;
        largestIndex--;
    }

    return arr;
}

const array = [7, 3, 5, 2, 9, 1, 6];
const rearrangedArray = rearrangeArray(array);

console.log(rearrangedArray);
//17
function sortByFrequency(str) {
    let charCounts = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (charCounts[char]) {
            charCounts[char]++;
        } else {
            charCounts[char] = 1;
        }
    }

    let sortedStr = '';

    Object.keys(charCounts).sort((a, b) => {
        if (charCounts[a] === charCounts[b]) {
            return a.localeCompare(b);
        } else {
            return charCounts[b] - charCounts[a];
        }
    }).forEach(char => {
        sortedStr += char.repeat(charCounts[char]);
    });

    return sortedStr;
}

const input = 'abracadabra';
const sortedString = sortByFrequency(input);

console.log(sortedString);
//18
function findLongestSubstring(str1, str2) {
    let longestSubstring = '';

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            let substring = '';

            let x = i;
            let y = j;

            while (x < str1.length && y < str2.length && str1[x] === str2[y]) {
                substring += str1[x];

                x++;
                y++;
            }

            if (substring.length > longestSubstring.length) {
                longestSubstring = substring;
            }
        }
    }

    return longestSubstring;
}

const string1 = 'abcdef';
const string2 = 'defghi';
const longestSubstring = findLongestSubstring(string1, string2);

console.log(longestSubstring);
//19
function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);

    let encryptedStr = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (alphabet.includes(char.toLowerCase())) {
            let isUpperCase = char === char.toUpperCase();
            let index = alphabet.indexOf(char.toLowerCase());
            let encryptedChar = shiftedAlphabet[index];

            if (isUpperCase) {
                encryptedChar = encryptedChar.toUpperCase();
            }

            encryptedStr += encryptedChar;
        } else {
            encryptedStr += char;
        }
    }

    return encryptedStr;
}

const message = 'Hello, World!';
const encryptedMessage = caesarCipher(message, 3);

console.log(encryptedMessage);
//20
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');

    if (sortedStr1 === sortedStr2) {
        return true;
    } else {
        return false;
    }
}

const string1 = 'listen';
const string2 = 'silent';

const areAnagrams = isAnagram(string1, string2);

console.log(areAnagrams);
// інші не зміг вирішити
