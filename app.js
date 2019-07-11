window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            //console.log(position)
            long = position.coords.longitude;
            lat = position.coords.latitude;

            //const api = `api.openweathermap.org/data/2.5/weather?${lat},${long}`;

            /*fetch(api)
                .then(data =>{
                    return data.json()//return data.json()//we are taking that information and changing it to json so with json we can easily use it to JS
                    //console.log(JSON.stringify(data));
                });
                .then(data =>{
                    console.log(data);
                });*/

                /*fetch('https://api.darksky.net/forecast/68568119ac38ef741a51540efb8ad8b3/$(long),$(lat)id=68568119ac38ef741a51540efb8ad8b3');
                 .then(response => response.json())
                 .then(json => console.log(json))*/

                  const proxy = "http://cors-anywhere.herokuapp.com/";

                  const api = `${proxy}https://api.darksky.net/forecast/68568119ac38ef741a51540efb8ad8b3/${lat},${long}`;
                  fetch(api)
                    .then(data => {
                      return data.json();
                  })
                    .then(data => {
                    console.log(data);
                    });
                    //it will give a cors issue** so we'll be using a proxy




        });

    }/*else{
        h1.textContext = "hey this is not working because of reasons"
    }*/


});
