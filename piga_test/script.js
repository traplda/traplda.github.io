let data;
const allStrings = new Array; 
const searchResults = document.getElementById('searchResults');
const autocomplete = document.querySelector('.suggestions');

// Parsing data from csv file
Papa.parse('synthetic_data.csv', {
  header: true,
  delimiter: ";",
  download: true,
  dynamicTyping: true,
  complete: function(results) {
    data = results.data;
    data = data.slice(0,-1);
    data.forEach(e => {
      allStrings.push(e.VideoLink.toLowerCase());
      allStrings.push(e.VideoName.toLowerCase());
      allStrings.push(e.Subject.toLowerCase());
      allStrings.push(e.Week.toLowerCase());
      allStrings.push(e.Teacher.toLowerCase());
      allStrings.push(e.KlicoveSlovo1.toLowerCase());
      allStrings.push(e.KlicoveSlovo2.toLowerCase());
      allStrings.push(e.KlicoveSlovo3.toLowerCase());
    });    
  }
});

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredVideos = data.filter((video) => {
    return (
      video.VideoLink.toLowerCase().includes(searchString) ||
      video.VideoName.toLowerCase().includes(searchString) ||
      video.Subject.toLowerCase().includes(searchString) ||
      video.Week.toLowerCase().includes(searchString) ||
      video.Teacher.toLowerCase().includes(searchString) ||
      video.KlicoveSlovo1.toLowerCase().includes(searchString) ||
      video.KlicoveSlovo2.toLowerCase().includes(searchString) ||
      video.KlicoveSlovo3.toLowerCase().includes(searchString)
    );
  });
  showVideos(filteredVideos);
  autocomplete.innerHTML = '';
  const filteredStrings = allStrings.filter((s) => {
    return s.includes(searchString)
  });
  // console.log(filteredStrings.slice(0,2));
  filteredStrings.slice(0,2).forEach(function(suggested) {
    const div = document.createElement('div');
    div.classList.add('navrh');
    div.innerHTML = suggested;
    autocomplete.appendChild(div);
  });
  const suggestions = document.getElementsByClassName('navrh');
  for (let i = 0; i < suggestions.length; i++) {
    autocomplete.id = 'full';
    suggestions[i].addEventListener('click', addLabel);
  };
  if (searchString  === '') {
    autocomplete.innerHTML = '';
  };
});

const showVideos = (data) => {
  const htmlString = data
    .map((video) => {
      return `
      <li class="videoResult">
                <div class="subjectAndTeacher">
                  <h2>${video.VideoName}</h2>
                  <p>${video.Teacher}, ${video.Week}. týden</p>
                </div>
                <div class="klicova_slova">
                <p><b>Klíčová slova:</b></br>${video.KlicoveSlovo1}, ${video.KlicoveSlovo2}, ${video.KlicoveSlovo3}</p>
                <a href="${video.VideoLink}" target="_blank">odkaz na video</a>
                </div>
      </li>
    `;
    })
    .join('');
    searchResults.innerHTML = htmlString;
};

function addLabel () {
  const suggestion = this.innerHTML;
  console.log(suggestion);
  const div = document.createElement('div');
  div.classList.add('stitek');
  div.innerHTML = suggestion;
  const stitky = document.getElementById('stitky');
  stitky.appendChild(div);
  autocomplete.innerHTML = '';
  autocomplete.id = 'empty';
  document.getElementById('searchBar').value = '';
};
