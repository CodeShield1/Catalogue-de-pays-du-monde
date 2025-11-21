
let container = document.getElementById('container');
let select=document.getElementById('continents');

let allCountries = [];
fetch('https://countries-api-hsak.onrender.com/api/countries')
    .then(res=>res.json())
    .then(data=>{
       allCountries=data;
       displaycountries(allCountries);
    })
    .catch(error=>{
      console.error(error)
    })

   
      function displaycountries(list){
        container.innerHTML=``;
        list.forEach(element => {
          let card =document.createElement('div')
          card.classList.add('card')
          card.innerHTML=`
          <img src ="${element.flag}">
          <h3>${element.name}</h3>
          <h42  >${element.continent}</h42>
          <h4>${element.capital}</h4>

          `;
          container.appendChild(card)
          card.addEventListener('click', function() {
          sessionStorage.setItem("selectedCountry",JSON.stringify(element))
          window.location.href = `country-details.html?countryr=${element.name}`;

       });

        })
      }

      select.addEventListener('change',function(){
        let continents = select.value

        if(continents==="all"){
          displaycountries(allCountries);
          return;
        }

        const filtercountry = allCountries.filter(c=>c.continent===continents);
        displaycountries(filtercountry)
      });


      let search =document.getElementById("search");

      search.addEventListener("input", function() {
        let searchCountry = search.value.toLowerCase();
        let cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
          let titre=card.querySelector("h3").textContent.toLowerCase();

          if(titre.includes(searchCountry)){
            card.style.display = "block";
          }else{
            card.style.display = "none";
         }
      })

      })
let popInput = document.getElementById("population");
let popFilterBtn = document.getElementById("popFilterBtn");

popFilterBtn.addEventListener('click', () => {
    let minPopulation = popInput.value; 
    if(!minPopulation) return; 
    let filtered = allCountries.filter(c => c.population > minPopulation);
    displaycountries(filtered);
});



        







  