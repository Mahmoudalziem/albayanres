
let btn_form = document.querySelector('.btn_form');
let name_form = document.getElementById('name_form');
let email_form = document.getElementById('email_form');
let number_form = document.getElementById('number_form');
let state_form = document.getElementById('state_form');
let message_form = document.getElementById('message_form');
let service = document.getElementById('serv');
btn_form.addEventListener('click',function(){
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



