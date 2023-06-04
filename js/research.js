let main_research = document.querySelector('.infographics-container');
let home_element = document.querySelector('.infographics');
let close_image = document.querySelector('.close_image');
let services_list = document.querySelector('.services-list');

fetch('https://blog.albayanres.com/api/research', {

    headers: { 'Content-Type': 'application/json' },
}).then(
    res => res.json()
).then(
    res => {
        res.forEach(e => {
            main_research.innerHTML+=`
                <div class="infographic flex"   >
                    <img   src="https://blog.albayanres.com/images_research/${e.image}">
                    <div class="layer flex flex-center">
                        ${e.name}
                    </div>
                </div>
            `


            document.querySelectorAll('.infographic').forEach(e => {
                e.addEventListener('click',function () {
                   let image= e.firstElementChild;
                    e.classList.add('element');
                    home_element.classList.add('home_element')
                    image.classList.add('image_main');
                    close_image.style ='display:block !important; '; 
                    
                    
                    
                    close_image.addEventListener('click', function () {
                        e.classList.remove('element');
                        home_element.classList.remove('home_element')
                        image.classList.remove('image_main');
                    })

                })



            });

        });
    }
)
let app_serv = document.querySelector('.app_serv7')
let footer_services = document.querySelector('.footer-services-container');



//////////////////////////////////////////
fetch('https://blog.albayanres.com/api/get_services').then(
    res => res.json()
).then(
    res => res.forEach(e => {
        app_serv.innerHTML += `
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




let btn_form7 = document.querySelector('.btn_form7');
let name_form7 = document.getElementById('name_form7');
let email_form7 = document.getElementById('email_form7');
let number_form7 = document.getElementById('number_form7');
let state_form7 = document.getElementById('state_form7');
let message_form7 = document.getElementById('message_form7');
let service2 = document.getElementById('app_serv7');

btn_form7.addEventListener('click', function () {
    fetch('https://blog.albayanres.com/api/add_data_message', {
        method: 'POST',
        body: JSON.stringify({
            name: name_form7.value,
            email: email_form7.value,
            number: number_form7.value,
            state: state_form7.value,
            message: message_form7.value,
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
    console.log(search.name.value);
    localStorage.setItem('search', search.name.value)
    window.location.href = "search.html";
}
