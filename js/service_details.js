let services_list = document.querySelector('.services-list');
let page_name = document.querySelector('.page-name');
let name_service = document.querySelector('.name_service');
let text_service = document.querySelector('.text_service');
let desc_service = document.querySelector('.desc_service');
let features = document.querySelector('.main_features');
let sub_title = document.querySelector('.sub_title');
let main_service2 = document.querySelector('.main_service2');
let image_service = document.querySelector('.image_service');
let app_serv4 = document.querySelector('.app_serv4')
let footer_services = document.querySelector('.footer-services-container');


fetch('https://blog.albayanres.com/api/get_services').then(
    res => res.json()
).then(
    res => res.forEach(e => {
        services_list.innerHTML += `
            <a href="services-details.html?service_id=${e.id}" class="list-item">
                ${e.name}
            </a>
        `
        main_service2.innerHTML+=`
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

    })
)

const service = new URLSearchParams(document.location.search);
const service_id = service.get("service_id");

let contact = document.querySelector('.contact-btn');


fetch('https://blog.albayanres.com/api/get_services_details', {
    method: 'POST',
    body: JSON.stringify({
        id:service_id,
    }),
    headers: { 'Content-Type': 'application/json' },
}).then(
    res => res.json()
).then(
    res => {
        contact.href=res.link;
        page_name.innerHTML=res.name;
        name_service.innerHTML = res.name;
        text_service.innerHTML = res.text;
        sub_title.innerHTML = `مميزات خدمة ${res.name}`;
        image_service.src=`https://blog.albayanres.com/images_services/${res.image}`

        
        res.description.forEach(e => {
            desc_service.innerHTML+=`
                        <div class="properties-container ">
                <!-- active class to first one -->
                <p class="property flex active">
                    ${e.title}
                    <i class="fa-solid fa-plus"></i>
                </p>
                <div class="answer" style='display:block;'>
                    <!-- it need to loop too -->
                    <p >
                       ${e.description}
                    </p>
                </div>
            </div>

            
            
            `
        });

        
        res.features.forEach(e => {
            features.innerHTML+=`
                <li>
                    <i class="fa-solid fa-star"></i>
                    ${e.features}
                </li>
                
            `
        });
    }
)

    

let btn_form4 = document.querySelector('.btn_form4');
let name_form4 = document.getElementById('name_form4');
let email_form4 = document.getElementById('email_form4');
let number_form4 = document.getElementById('number_form4');
let state_form4 = document.getElementById('state_form4');
let message_form4 = document.getElementById('message_form4');
let service2 = document.getElementById('app_serv4');

btn_form4.addEventListener('click', function () {
    fetch('https://blog.albayanres.com/api/add_data_message', {
        method: 'POST',
        body: JSON.stringify({
            name: name_form4.value,
            email: email_form4.value,
            number: number_form4.value,
            state: state_form4.value,
            message: message_form4.value,
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