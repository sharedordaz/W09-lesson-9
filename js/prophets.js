const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing'
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

        card.appendChild(h2);

        document.querySelector('div.cards').appendChild(card);

         let b_date = document.createElement("p");
         let b_place = document.createElement("p");
         let image = document.createElement("img");

         b_date.innerHTML = "<b>Birthdate:  </b>" + prophets[i].birthdate;
         b_place.innerHTML = "<b>Birthplace: </b>" + prophets[i].birthplace;

         image.setAttribute('src', prophets[i].imageurl); // pasted content

        card.appendChild(b_date);
        card.appendChild(b_place);
        card.appendChild(image)

        // document.querySelector('div.cards').appendChild(card);
    }
  });

