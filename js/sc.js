let sc=document.querySelector('.sc_main');
fetch('https://blog.albayanres.com/api/get_sc').then(
    res=>res.json()
).then(
    res=>res.forEach(e => {
        sc.innerHTML+=`
                <div class="major-card" >
                <div style='padding-top:20px; padding-bottom:20px' class="strech flex flex-center">
                    <div class="img">
                        <img src="https://blog.albayanres.com/images_Scientific_disciplines/${e.image}" alt="">
                    </div>
                    <p class="major-name">
                       ${e.name}
                    </p>
                </div>
            </div>
        `
    })
)
