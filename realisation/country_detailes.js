if (!sessionStorage.getItem("selectedCountry")) {
    document.body.innerHTML = "<h2>No data found!</h2>";
} else {
    let country = JSON.parse(sessionStorage.getItem("selectedCountry"));

    let details = document.getElementById("details");

    details.innerHTML = `
        <h1>${country.name}</h1>
        <img src ="${country.flag}">
        <p><strong>Capital:</strong> ${country.capital}</p>
        <p><strong>Continent:</strong> ${country.continent}</p>
        <p><strong>Population:</strong> ${country.population}</p>
        <p><strong>Languages:</strong> ${country.languages}</p>
        <p><strong>Area:</strong> ${country.area} km²</p>
    `;
}
