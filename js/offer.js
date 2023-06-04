let main_offer = document.querySelector('.mian_offer');
let sub_offer = document.querySelector('.sub_offer');
fetch('https://blog.albayanres.com/api/get_data_offers').then(
    res => res.json()
).then(
    res => res.forEach(e => {
        main_offer.innerHTML += `
                <div class="offer flex ">
                    <a href="application.html">
                        <img src="https://blog.albayanres.com/images_offers/${e.image}">
                    </a>

                    <!-- offer working or not -->

                    <div class="${e.is_found == 1 ? `situation continuous` : `situation end`} ">
                        ${e.is_found==1 ?`مستمر` : `منتهي`}
                    </div>
                </div>


        `

    })
)
