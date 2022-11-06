function createGame(player1, hour, player2) {
  return `
  <li>
      <img src="./assets/flags/icon=${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/flags/icon=${player2}.svg" alt="Bandeira da ${player2}">
      </li>
</li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
         ${games}
        </ul>
    </div>
  `
}

  document.querySelector("#cards").innerHTML =
    // card 1 -------------------------------------------------------------------------------------------
    createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
    // card 2 -------------------------------------------------------------------------------------------
    createCard(
      "21/11",
      "segunda",
      createGame("england", "10:00", "iran") +
        createGame("senegal", "13:00", "netherlands") +
        createGame("united states", "16:00", "wales")
    ) +
    // card 3 -------------------------------------------------------------------------------------------
    createCard(
      "22/11",
      "terça",
      createGame("argentina", "07:00", "saudi arabia") +
        createGame("denmark", "10:00", "tunisia") +
        createGame("mexico", "13:00", "poland") +
        createGame("france", "16:00", "australia")
    ) +
    // card 4 -------------------------------------------------------------------------------------------
    createCard(
    "23/11", "quarta",
      createGame("morocco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
        createGame("spain", "13:00", "costa rica") +
          createGame("belgium", "16:00", "canada")) +
    // card 5-------------------------------------------------------------------------------------------
    createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "cameroon") +
     createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana") +
       createGame("brazil", "16:00", "serbia")
  ) +
  // card 6-------------------------------------------------------------------------------------------
   createCard(
     "25/11",
     "sexta",
     createGame("wales", "07:00", "iran") +
       createGame("qatar", "10:00", "senegal") +
       createGame("netherlands", "13:00", "ecuador") +
       createGame("england", "16:00", "united states")
   ) +
   // card 7-------------------------------------------------------------------------------------------
  createCard(
     "26/11",
     "sábado",
     createGame("tunisia", "07:00", "australia") +
       createGame("poland", "10:00", "saudi arabia") +
       createGame("france", "13:00", "denmark") +
       createGame("argentina", "16:00", "mexico")
   ) +
    // card 8-------------------------------------------------------------------------------------------
   createCard(
     "27/11",
     "domingo",
     createGame("japan", "07:00", "costa rica") +
       createGame("belgium", "10:00", "morocco") +
       createGame("croatia", "13:00", "canada") +
       createGame("spain", "16:00", "germany")
   ) +
    // card 9-------------------------------------------------------------------------------------------
     createCard(
     "28/11",
     "segunda",
     createGame("cameroon", "07:00", "serbia") +
       createGame("south korea", "10:00", "ghana") +
       createGame("brazil", "13:00", "switzerland") +
       createGame("portugal", "16:00", "uruguay")
   ) +
    // card 9-------------------------------------------------------------------------------------------
      createCard(
     "29/11",
     "terça",
     createGame("ecuador", "07:00", "senegal") +
       createGame("netherlands", "10:00", "qatar") +
       createGame("iran", "13:00", "united states") +
       createGame("wales", "16:00", "england")
   ) +
     // card 10-------------------------------------------------------------------------------------------
       createCard(
     "30/11",
     "quarta",
     createGame("tunisia", "07:00", "france") +
       createGame("australia", "10:00", "denmark") +
       createGame("poland", "13:00", "argentina") +
       createGame("saudi arabia", "16:00", "mexico")
   ) +
    // card 11-------------------------------------------------------------------------------------------
        createCard(
     "01/12",
     "quinta",
     createGame("croatia", "07:00", "belgium") +
       createGame("canada", "10:00", "morocco") +
       createGame("japan", "13:00", "spain") +
       createGame("costa rica", "16:00", "germany")
   ) +
    // card 12-------------------------------------------------------------------------------------------
         createCard(
     "02/12",
     "sexta",
     createGame("south korea", "07:00", "portugal") +
       createGame("ghana", "10:00", "uruguay") +
       createGame("serbia", "13:00", "switzerland") +
       createGame("cameroon", "16:00", "brazil")
   );
