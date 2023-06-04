let main_service = document.querySelector('.main_service')
let services_list = document.querySelector('.services-list');

let option_service = document.querySelector('.option_service')
let footer_services = document.querySelector('.footer-services-container');


fetch('https://blog.albayanres.com/api/get_services').then(
    res => res.json()
).then(
    res => res.forEach(e => {
        main_service.innerHTML += `
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



let search = document.querySelector('.search-box');
search.onchange = () => {

    localStorage.setItem('search', search.name.value)
    window.location.href = "search.html";
}