class Country {
    constructor(name, lang, greeting, colors, flag) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.flag = flag;
        this.colors = colors;
    }
    ChangeColor(){
        document.querySelector("#Color1").style.backgroundColor = this.colors[0];
        document.querySelector("#Color2").style.backgroundColor = this.colors[1];
        document.querySelector("#Color3").style.backgroundColor = this.colors[2];
        document.querySelector("#CountryName").innerText = `${this.name}`;
        document.querySelector("#OfficialLanguage").innerText = `${this.lang}`;
        document.querySelector("#HelloWorld").innerText = `${this.greeting}`;
        document.querySelector("#flag").src = `${this.flag}`;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "usa.jpg");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "mexico.jpg");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["green", "red", "white"], "algeria.png")
let germany = new Country("Germany", "German", "Hallo Welt", ["black", "red", "yellow"], "germany.png")
let egypt = new Country("Egypt", "Arabic", "مرحبا بالعالم", ["red", "black", "white"], "egypt.png");


function SwitchCountry() {
    let input = document.querySelector("#CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Germany") {
        country = germany;
    }
    else if (input === "Egypt") {
        country = egypt;
    }
    //DisplayColors(country);
    country.ChangeColor();
}

// function DisplayColors(country){
//     document.querySelector("#Color1").style.backgroundColor = country.colors[0];
//     document.querySelector("#Color2").style.backgroundColor = country.colors[1];
//     document.querySelector("#Color3").style.backgroundColor = country.colors[2];
// }

// function DisplayColorsMexico(){
//     let firstColor = document.querySelector("#Color1");
//     firstColor.style.backgroundColor = country.colors[0];
//     let secondColor = document.querySelector("#Color2");
//     secondColor.style.backgroundColor = country.colors[1];
//     let thirdColor = document.querySelector("#Color3");
//     thirdColor.style.backgroundColor = country.colors[2];
// }

// function DisplayColorsAlgeria(){
//     let firstColor = document.querySelector("#Color1");
//     firstColor.style.backgroundColor = country.colors[0];
//     let secondColor = document.querySelector("#Color2");
//     secondColor.style.backgroundColor = country.colors[1];
//     let thirdColor = document.querySelector("#Color3");
//     thirdColor.style.backgroundColor = country.colors[2];
// }