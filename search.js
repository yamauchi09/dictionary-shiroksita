let dictionary = [];

fetch('./words.json')
  .then(response => response.json())
  .then(data => {
    dictionary = data;
  });

function searchWord() {
  const input = document.getElementById('searchBox').value;

  const result = dictionary.find(
    item => item.word === input
  );

  const output = document.getElementById('result');

  if (result) {
    output.textContent = result.meaning;
  } else {
    output.textContent = '見つかりません';
  }
}
