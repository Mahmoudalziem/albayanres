let main_our = document.querySelector('.main_our');
let d_our = document.querySelector('.description_our');
fetch('https://blog.albayanres.com/api/get_data_bus').then(
    res=>res.json()
).then(
    res=>res.forEach(e => {
        d_our.innerHTML =`خبرة أكثر من ${e.years} عاما`
        main_our.innerHTML+=`
        <div class="statistic flex flex-center" style='padding-top:40px;padding-bottom:40px;'>
                <img src="https://blog.albayanres.com/image_our_business/${e.image}">
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
