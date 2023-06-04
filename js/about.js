let main_about = document.querySelector('.about_main');
fetch('https://blog.albayanres.com/api/get_about').then(
    res=>res.json()
).then(
    res=>{

        main_about.innerHTML = res[0].description;
    }
)


let image_one = document.querySelector('.image_one');
let one_about = document.querySelector('.one_about');
let btn_one = document.querySelector('.btn_one');
fetch('https://blog.albayanres.com/api/get_first_about').then(
    res => res.json()
).then(

    res => {
        image_one.src =`https://blog.albayanres.com/image_one_about/${res[0].image}`;
        btn_one.innerHTML=res[0].name;
        one_about.innerHTML=`
                            <div class="title">${res[0].name}</div>
                    <div class="subject">
                        ${res[0].text}
                    </div>
        `

    }
)
let two_about = document.querySelector('.two_about');
let btn_two = document.querySelector('.btn_two');
let image_two = document.querySelector('.image_two');

fetch('https://blog.albayanres.com/api/get_two_about').then(
    res => res.json()
).then(

    res => {
        image_two.src = `https://blog.albayanres.com/image_two_about/${res[0].image}`;

        btn_two.innerHTML = res[0].name;
        two_about.innerHTML = `
                            <div class="title">${res[0].name}</div>
                    <div class="subject">
                        ${res[0].text}
                    </div>
        `

    }
)




let three_about = document.querySelector('.three_about');

let btn_three = document.querySelector('.btn_three');

let image_three = document.querySelector('.image_three');

fetch('https://blog.albayanres.com/api/get_three_about').then(
    res => res.json()
).then(

    res => {
        image_three.src = `https://blog.albayanres.com/image_three_about/${res[0].image}`;

        btn_three.innerHTML = res[0].name;
        three_about.innerHTML = `
            <div class="title">${res[0].name}</div>
                <div class="subject">
                    ${res[0].text}
            </div>
        `

    }
)
