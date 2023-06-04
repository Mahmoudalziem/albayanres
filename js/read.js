const blog = new URLSearchParams(document.location.search);

const blog_id = blog.get("blog_details");

let first_image = document.querySelector('.first_image_read');
let name_blog = document.querySelector('.name_read');
let blog_desc = document.querySelector('.blog_desc');
let page_name = document.querySelector('.page-name');

let app_serv = document.querySelector('.app_serv7')
let services_list = document.querySelector('.services-list');

let footer_services = document.querySelector('.footer-services-container');




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

                                
let main_blog = document.querySelector('.main_blog');
let date = document.querySelector('.date');

fetch('https://blog.albayanres.com/api/get_data_blog', {
    

    headers: { 'Content-Type': 'application/json' },
}).then(
    res => res.json()
).then(
    res=>{

        res.forEach((e,index) => {

            main_blog.innerHTML+=`
            <div class="blog-p" style='margin-top:40px;'>
                        <a href="read.html?blog_details=${e.id}" class="img">
                            <img src="https://blog.albayanres.com/images_blog/${e.image}" alt="">
                        </a>
                        <!-- blog-name -->
                        <a href="read.html?blog_details=${e.id}" class="blog-name">
                            ${e.name}
                        </a>
                        <!-- date and views -->
                        <div class="date-views flex">
                            <p class="date">
                                <i class="fa-solid fa-calendar"></i>
                                <span>
                                ${ e.created_at.slice(0, 10) }
                                </span>
                            </p>
                            <p class="views">
                                <i class="fa-solid fa-eye"></i>
                                <span>${e.views}</span>
                            </p>
                        </div>
                        <!-- Categories -->
                        <div class="categories categories_${index} flex">

                        </div>
                        <!-- description -->
                        <a href="read.html?blog_details=${e.id}" class="description">
                            ${e.sub_text}
                        </a>
                    </div>
            
            `
        let categories = document.querySelector(`.categories_${index}`)
        e.tag.forEach(t => {
            

            categories.innerHTML += `<a href="read.html?blog_details">${t.name}</a>`
        });

            date.innerHTML = e.created_at.slice(0, 10) 

        });
    }
)















let frame = document.querySelector('.blog-iframe');


fetch('https://blog.albayanres.com/api/get_blog_details', {
    method:'post',
    body: JSON.stringify({
        id: blog_id,
    }),
    headers: { 'Content-Type': 'application/json' },
}).then(
    res => res.json()
).then(
    res=>{
        if (res.video != null) {
            frame.style='display:block;'
            frame.src =res.video;
        } 
        first_image.src = `https://blog.albayanres.com/images_blog/${res.image}`
        name_blog.innerHTML = res.name;
        page_name.innerHTML = res.name;
        blog_desc.innerHTML=res.description;



    }
)



let search = document.querySelector('.search-box');
search.onchange = () => {
    console.log(search.name.value);
    localStorage.setItem('search', search.name.value)
    window.location.href = "search.html";
}


let main_sections = document.querySelector('.main_sections');

fetch('https://blog.albayanres.com/api/get_sections').then(
    res => res.json()
).then(
    res => res.forEach(e => {

        main_sections.innerHTML += `
            <li>
                <a href="read.html?blog_details=${e.id}">
                    ${e.name} (${e.blog.length})
                </a>
            </li>
        `

    })
)

let main_tags = document.querySelector('.tags-container');

fetch('https://blog.albayanres.com/api/data_tags').then(
    res => res.json()
).then(
    res => res.forEach(e => {

        if (e.blog == null) {
            main_tags.innerHTML += `
                <a href="application.html">${e.name}</a>
            `

        } else {

            main_tags.innerHTML += `
                <button style='background-color:#6687c5; padding:0px 15px; color:#fff; font-size:14px' class='btn_tag'> ${e.name}</button >


                `

        }

        document.querySelectorAll('.btn_tag').forEach(e => {
            e.addEventListener('click', function () {
                localStorage.setItem('tag', e.textContent);
                window.location = 'tag.html'
            })
        })

    })
)





let blog_latest = document.querySelector('.blog_latest');

fetch('https://blog.albayanres.com/api/latest_blog').then(
    res => res.json()
).then(
    res => res.forEach(e => {
        blog_latest.innerHTML += `
            <li>
                <a href="read.html?blog_details=${e.id}">
                    ${e.name}
                </a>
            </li>
        `

    })
)
