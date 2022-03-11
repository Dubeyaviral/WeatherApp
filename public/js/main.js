const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_value = document.getElementById('temp_real_value');
const tempStatus = document.getElementById('tempStatus');

const datahide = document.querySelector('.middleLayer');

const getInfo =async(event)=> {
    event.preventDefault(); 
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = "Please write a city name before you search";
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=af6a864b336408af09c22564975e78d8`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerText = arrData[0].main.temp;
            
            const tempMood = arrData[0].weather[0].main;
            //condition to check sunny or cloudy
            if(tempMood=="Clear"){
                tempStatus.innerHTML = "<i class='fa fa-solid fa-sun' style='color: #eccc68'></i>";
            } else if(tempMood=="Clouds"){
                tempStatus.innerHTML = "<i class='fa fa-solid fa-cloud' style='color: #f1f2f6'></i>";
            } else if(tempMood=="Rain"){
                tempStatus.innerHTML = "<i class='fa fa-solid fa-cloud-rain' style='color: #a4b0be'></i>";
            } else{
                tempStatus.innerHTML = "<i class='fa fa-solid fa-cloud' style='color: #f1f2f6'></i>";
            }

            datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText = "Please write the city name properly";
            datahide.classList.add('data_hide');
        }
        } 
};

submitBtn.addEventListener('click',getInfo)