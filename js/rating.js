let main_rating = document.querySelector('.main_rating');

fetch('https://blog.albayanres.com/api/get_data_rating').then(
    res=>res.json()
).then(
    res=>res.forEach(e => {
        main_rating.innerHTML+=`
        <div class="rate-card">
            <div class="strech">
                <div class="img-container flex">
                    <img src="https://blog.albayanres.com/images_reating/${e.image}" alt="">
                </div>
                <p class="customer-name">
                    ${e.name}
                </p>
                <p class="customer-opinion">
                    ${e.text}
                </p>
            </div>
        </div>         
        `
    })
)


