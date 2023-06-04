let app_serv = document.querySelector('.app_serv')
let app_serv3 = document.querySelector('.app_serv3')
let nav_serv = document.querySelector('.services-list');
let footer_services = document.querySelector('.footer-services-container');

fetch('https://blog.albayanres.com/api/get_services').then(
    res => res.json()
).then(
    res => res.forEach(e => {
        app_serv.innerHTML += `
            <option value='${e.name}'>${e.name}</option>
        
        `
        app_serv3.innerHTML += `
            <option value='${e.name}'>${e.name}</option>
        
        `
        nav_serv.innerHTML += `
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







let btn_form2 = document.querySelector('.btn_form2');
let name_form2 = document.getElementById('name_form2');
let email_form2 = document.getElementById('email_form2');
let number_form2 = document.getElementById('number_form2');
let state_form2 = document.getElementById('state_form2');
let message_form2 = document.getElementById('message_form2');
let service2 = document.getElementById('serv2');
btn_form2.addEventListener('click', function () {
    fetch('https://blog.albayanres.com/api/add_data_message', {
        method: 'POST',
        body: JSON.stringify({
            name: name_form2.value,
            email: email_form2.value,
            number: number_form2.value,
            state: state_form2.value,
            message: message_form2.value,
            service: service2.value
        }),
        headers: { 'Content-Type': 'application/json' },
    }).then(
        res => res.json()
    ).then(
        res => {
            if (res=='done') {
                location.reload();

            }
        }
    )
})
///////////////////////////////////////////////////////////////////////////
let btn_form3 = document.querySelector('.btn_form3');
let name_form3 = document.getElementById('name_form3');
let email_form3 = document.getElementById('email_form3');
let number_form3 = document.getElementById('number_form3');
let addres_form3 = document.getElementById('address_form3');
let service3 = document.getElementById('serv3');
let specialization_3 = document.getElementById('specialization_3');
let arabic_3 = document.getElementById('arabic_3');
let order_details_3 = document.getElementById('order_details_3');
let normal = document.getElementById('normal');
let file_1 = document.getElementById('file_1');
var nu=1;   
normal.addEventListener('click',function () {
    nu=0;

})
    // console.log(URL.createObjectURL(fil e_1.files[0]));

// btn_form3.addEventListener('click', function () {
    
//     console.log(file_1.files[0].name);
//     fetch('http://127.0.0.1:8000/api/add_data_serv_req', {
//         method: 'POST',
//         body: JSON.stringify({
//             file: file_1.files[0].name,
            // name: name_form3.value,
            // email: email_form3.value,
            // number: number_form3.value,
            // address: addres_form3.value,
            // service: service3.value,
            // specialization: specialization_3.value,
            // arabic: arabic_3.value,
            // urgent: nu,
            // order_details: order_details_3.value,
//         }),
//         headers: { 'Content-Type': 'application/json' },
//     }).then(
//         res => res.json()
//     ).then(
//         res => {
//             if (res == 'done') {
//                 location.reload();

//             }
//         }
//     )

    

    

// })





let search = document.querySelector('.search-box');
search.onchange = () => {

    localStorage.setItem('search', search.name.value)
    window.location.href = "search.html";
}


const form = document.querySelector('.main_form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('file_1');

    formData.append('file', fileInput.files[0]);
    formData.append('name', name_form3.value);
    formData.append('email', email_form3.value);
    formData.append('number', number_form3.value);
    formData.append('address', addres_form3.value);
    formData.append('service', service3.value);
    formData.append('specialization', specialization_3.value);
    formData.append('arabic', arabic_3.value);
    formData.append('urgent', nu);
    formData.append('order_details', order_details_3.value);


    // make an AJAX request to upload the file to Laravel
    const response = await fetch('https://blog.albayanres.com/api/add_data_serv_req', {
        method: 'POST',
        body: formData
    });
    
    if (response.status=200) {
        location.reload();
    }
    // handle the response from Laravel
});