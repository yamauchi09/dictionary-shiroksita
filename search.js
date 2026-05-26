let dictionary = [];

fetch('./words.json')
  .then(response => response.json())
  .then(data => {
    dictionary = data;
  });

function showSuggestions() {
  const input = document
    .getElementById('searchBox')
    .value
    .toLowerCase();

  const suggestionsDiv =
    document.getElementById('suggestions');

  suggestionsDiv.innerHTML = '';

  if (input === '') {
    return;
  }

  const matches = dictionary.filter(item =>
    item.word.toLowerCase().startsWith(input)
  );

  matches.forEach(item => {
    const div = document.createElement('div');

    div.textContent =
      item.word + ' : ' + item.meaning;

    div.onclick = () => {
      document.getElementById('searchBox').value =
        item.word;

      document.getElementById('result').textContent =
        item.meaning;

      suggestionsDiv.innerHTML = '';
    };

    suggestionsDiv.appendChild(div);
  });
}
