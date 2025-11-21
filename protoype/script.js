
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
          `;
          container.appendChild(card)
          card.addEventListener('click', function() {
          window.location.href = `country-details.html?country=${element.name}`;

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

  