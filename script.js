function getWord(word){
  fetch(`https://api.datamuse.com/words?rel_rhy=${word}`)
  .then(resp => resp.json())
  .then(respJson => displayResults(respJson))
  .catch(err => console.log('ERROR'))
}

function displayResults(respJson){
  $('.js-search-results').empty();
  for(i = 0; i < respJson.length; i++){
    $('.js-search-results').append(`<li>${respJson[i].word}</li>`)
  }
  
}

function watchForm(){
  $('.js-search-form').submit(function (evt){
    evt.preventDefault();
    let word = $('#js-query').val();
    getWord(word);
    $('#js-query').val('');
  })
}

$(watchForm);
