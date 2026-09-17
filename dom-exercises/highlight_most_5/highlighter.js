let p = document.getElementById("myParagraph");

function mostWords(text) {
  let textArr = text.textContent.match(/[a-zA-Z]+/g) || [];
  let count = {};

  for (let i = 0; i < textArr.length; i++) {
    const word = textArr[i];
    if (count[word]) {
      count[word]++;
    } else {
      count[word] = 1;
    }
  }

  let sorted = Object.keys(count).sort((a, b) => {
    return count[b] - count[a];
  });

  const most5 = sorted.slice(0, 5);
  return most5;
}

function higlighter() {
  let originalText = p.textContent;
  let result = '';

  let originalP = originalText.split(/([a-zA-Z]+)/);

  for (let i = 0; i < originalP.length; i++) {
    const word = originalP[i];
    if (mostWords(p).includes(word)) {
      if (word[0] === word[0].toUpperCase()) {
        result += `<span style="color: green; font-weight: bold; text-decoration: underline">${word}</span>`;
      } else {
        result += `<span style="color: green; font-weight: bold;">${word}</span>`;
      }
    } else {
      result += word;
    }

  }
  return result;
}

p.innerHTML = higlighter();