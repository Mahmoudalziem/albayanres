

let main_blog = document.querySelector('.main_blog');

fetch('https://blog.albayanres.com/api/get_data_blog').then(
    res => res.json()
).then(
    res => res.forEach((e,index) => {
        console.log(e);
        main_blog.innerHTML+=`
                    <div class="blog-card">
                <div class="strech flex flex-center">
                    <a href="read.html?id=${e.id}" class="img">
                        <img src="https://blog.albayanres.com/images_blog/${e.image}" alt="">
                    </a>
                    <!-- blog-name -->
                    <a href="application.html" class="blog-name">
                        ${e.name}
                    </a>
                    <!-- date and views -->
                    <div class="date-views flex">
                        <p class="date">
                            <i class="fa-solid fa-calendar"></i>
                            <span>
                                ${e.created_at.slice(0,10)}
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
                    <a href="application.html" class="description">
                        ${e.sub_text}
                    </a>
                </div>
            </div>


        `
        let categories = document.querySelector(`.categories_${index}`)
        e.tag.forEach(t => {


            categories.innerHTML += `<a href="application.html">${t.name}</a>`
        });

    })
)




