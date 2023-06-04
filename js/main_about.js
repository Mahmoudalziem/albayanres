let main_about = document.querySelector('.main_about')
fetch('https://blog.albayanres.com//api/main_about').then(
    res=>res.json()
).then(
    res=>{

        main_about.innerHTML = res.text;
    }
)
//////////////////////////our bisines///////////////////
let main_our = document.querySelector('.main_our');
let d_our = document.querySelector('.description_our');
fetch('https://blog.albayanres.com//api/get_data_bus').then(
    res => res.json()
).then(
    res => res.forEach(e => {
        d_our.innerHTML = `خبرة أكثر من ${e.years} عاما`
        main_our.innerHTML += `
        <div class="statistic flex flex-center" style='padding-top:40px;padding-bottom:40px;'>
                <img src="https://blog.albayanres.com//image_our_business/${e.image}">
                <span></span>
                <p class="num" end="1">
                    +${e.number}
                </p>
                <div class="title">
                    ${e.text}
                </div>
            </div>
            
        `
    })
)
//////////////////////////////////////////////////////////////
let sc = document.querySelector('.sc_main');
fetch('https://blog.albayanres.com//api/get_sc').then(
    res => res.json()
).then(
    res => res.forEach(e => {
        sc.innerHTML += `
                <div class="major-card" >
                <div style='padding-top:20px; padding-bottom:20px' class="strech flex flex-center">
                    <div class="img">
                        <img src="https://blog.albayanres.com//images_Scientific_disciplines/${e.image}" alt="">
                    </div>
                   <p class="major-name">
                       ${e.name}
                    </p>
                </div>
            </d iv>
        `
    })
)
//////////////////////////////////////////////////////
let main_rating = document.querySelector('.main_rating');

fetch('https://blog.albayanres.com//api/get_data_rating').then(
    res => res.json()
).then(
    res => res.forEach(e => {
        main_rating.innerHTML += `
        <div class="rate-card">
            <div class="strech">
                <div class="img-container flex">
                    <img src="https://blog.albayanres.com//images_reating/${e.image}" alt="">
                </div>
                <p class="customer-name">
                    ${e.name}
                </p>
                <p class="customer-opinion">
                    ${e.text}
                </p>
            </div>
        </div>         
        `
    })
)

////////////////////////////////////////////////////////

let option_service = document.querySelector('.option_service')
let services_list = document.querySelector('.services-list');

let footer_services = document.querySelector('.footer-services-container');



fetch('https://blog.albayanres.com//api/get_services').then(
    res => res.json()
).then(
    res => res.forEach(e => {

        option_service.innerHTML += `
            <option value='${e.name}'>${e.name}</option>
                
        `
        services_list.innerHTML += `
            <a href="services-details.html?service_id=${e.id}" class="list-item">
                ${e.name}
            </a>
        `
        footer_services.innerHTML += `
            <a href="services-details.html?service_id=${e.id}" class="service">
                <i class="fa-solid fa-check"></i>
                ${e.name}
            </a>
        `


    })
)

///////////////////////////////////////
let search = document.querySelector('.search-box');
search.onchange = () => {

    localStorage.setItem('search', search.name.value)
    window.location.href = "search.html";
}



























let btn_form = document.querySelector('.btn_form');
let name_form = document.getElementById('name_form');
let email_form = document.getElementById('email_form');
let number_form = document.getElementById('number_form');
let state_form = document.getElementById('state_form');
let message_form = document.getElementById('message_form');
let service = document.getElementById('serv');
btn_form.addEventListener('click', function () {
    fetch('https://blog.albayanres.com//api/add_data_message', {
        method: 'POST',
        body: JSON.stringify({
            name: name_form.value,
            email: email_form.value,
            number: number_form.value,
            state: state_form.value,
            message: message_form.value,
            service: service.value
        }),
        headers: { 'Content-Type': 'application/json' },
    }).then(
        res => res.json()
    ).then(
        res => {
            if (res == 'done') {
                location.reload();

            }
        }
    )
})





