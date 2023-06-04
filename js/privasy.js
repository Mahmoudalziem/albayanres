let option_service = document.querySelector('.option_service')
let services_list = document.querySelector('.services-list');
let footer_services = document.querySelector('.footer-services-container');



fetch('https://blog.albayanres.com/api/get_services').then(
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



let btn_form = document.querySelector('.btn_form');
let name_form = document.getElementById('name_form');
let email_form = document.getElementById('email_form');
let number_form = document.getElementById('number_form');
let state_form = document.getElementById('state_form');
let message_form = document.getElementById('message_form');
let service = document.getElementById('serv');
btn_form.addEventListener('click', function () {
    fetch('https://blog.albayanres.com/api/add_data_message', {
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


let search = document.querySelector('.search-box');
search.onchange = () => {

    localStorage.setItem('search', search.name.value)
    window.location.href = "search.html";
}
