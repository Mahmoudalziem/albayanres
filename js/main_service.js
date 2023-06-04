let main_service=document.querySelector('.main_service');
let app_serv4 = document.querySelector('.app_serv6')
let main_serv_nav = document.querySelector('.main_serv_nav')
let footer_services = document.querySelector('.footer-services-container');


fetch('https://blog.albayanres.com/api/get_services').then(
    res => res.json()
).then(
    res=>{
        res.forEach(e => {
            main_service.innerHTML+=`
                        <div class="service flex">
                    <img src="img/card.png" class="card-img">
                    <img src="https://blog.albayanres.com/images_services/${e.image}" class="bg-img">
                    <div class="data">
                        <p class="service-name">${e.name}</p>
                    </div>
                    <div class="layer-details">
                        <div class="upper">

                            <p class="layer-description">
                                ${e.sub_text}
                            </p>
                        </div>
                        <div class="lower">
                            <a href="application.html">
                                اطلب الخدمة
                            </a>
                            <a href="services-details.html?service_id=${e.id}">
                                تفاصيل الخدمة
                            </a>
                        </div>
                    </div>
                </div>
            `
            app_serv4.innerHTML += `
            <option value='${e.name}'>${e.name}</option>
        
        `
            footer_services.innerHTML += `
            <a href="services-details.html?service_id=${e.id}" class="service">
                <i class="fa-solid fa-check"></i>
                ${e.name}
            </a>
        `




        main_serv_nav.innerHTML+=`
                <a href="application.html?service_id=${e.id}" class="list-item">
                    ${e.name}
                </a>
        
        `

        });
    }
)



let btn_form = document.querySelector('.btn_form6');
let name_form = document.getElementById('name_form6');
let email_form = document.getElementById('email_form6');
let number_form = document.getElementById('number_form6');
let state_form = document.getElementById('state_form6');
let message_form = document.getElementById('message_form6');
let service2 = document.getElementById('app_serv6');
console.log(btn_form);
btn_form.addEventListener('click', function () {
    fetch('https://blog.albayanres.com/api/add_data_message', {
        method: 'POST',
        body: JSON.stringify({
            name: name_form6.value,
            email: email_form6.value,
            number: number_form6.value,
            state: state_form6.value,
            message: message_form6.value,
            service: service2.value
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

let search = document.querySelector('.search-box');
search.onchange = () => {

    localStorage.setItem('search', search.name.value)
    window.location.href = "search.html";
}