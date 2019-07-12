window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDesription = document.querySelector(".temperature-desription");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    const temperatureSpan = document.querySelector(".temperature span");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            //console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const proxy = "http://cors-anywhere.herokuapp.com/";
            //it will give a cors issue** so we'll be using a proxy
            const api = `${proxy}https://api.darksky.net/forecast/68568119ac38ef741a51540efb8ad8b3/${lat},${long}`;
            fetch(api)
            .then(data => {
              return data.json();
            })
            .then(data => {
                console.log(data);
                
                //data.currently.temperatue
                const {temperature, summary, icon} = data.currently;//es2015 shorthand

                //set DOM elements form the api
                temperatureDegree.textContent = temperature;
                temperatureDesription.textContent = summary;
                locationTimezone.textContent =  data.timezone;

                //FORMULA FOR CELSIUS
                let celsius = (temperature -32) * (5/9);

                //SET ICON
                setIcons(icon, document.querySelector(".icon"));

                //Change temperature form f to c
                temperatureSection.addEventListener("click", () => {
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C";
                        temperatureDegree.textContent = Math.floor(celsius);
                    }else{
                        temperatureSpan.textContent = "F";
                        temperatureDegree.textContent = temperature;
                    }
                });
            });
        });
    }else{
        h1.textContext = "hey this is not working because of some mystical reasons XD"
    }


    //SETTING UP ICON FORM SKYCONS
    function setIcons(icon, iconId){
        const skycons = new Skycons({"color": "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon]);
    }
});
