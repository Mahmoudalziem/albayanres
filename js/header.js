let main_header = document.querySelector('.main_header');
fetch('https://blog.albayanres.com/api/get_header').then(
    res=>res.json()
).then(
    res=>{
        res.forEach(e => {

            main_header.innerHTML += `
            <div class="slide"  bg="https://blog.albayanres.com/${e.image}">
                <div class="banner">
                    <!-- slide title -->
                    <p class="banner-title h1">
                        ${e.head}
                    </p>
                    <!-- line 1 -->
                    <p class="description normal-text">
                        ${e.text}
                    </p>
                    <!-- line 2 -->

                    <a href="${e.link}" target="_blank" class="btn">
                        اطلب الخدمة
                    </a>
                </div>
            </div>

            `
            let bg = $(".slide").each(function () {
                let t = $(this).attr("bg");
                $(this).css({
                    backgroundImage:
                        "linear-gradient(to bottom, #19324c80, #19324c80),url('" + t + "')",
                });
            }),
                f_slide = $(".slider .slide:first-child").clone();
            $(".slider").append(f_slide);
            let slide_length = document.querySelectorAll("main .slide").length;
            function slider() {
                return (sliderRunning = setInterval(function () {
                    let slide_width = parseFloat($("main").css("width")),
                        tran = Math.abs($("main .slider").css("transform").split(",")[4]);
                    if (tran <= slide_width * (slide_length - 2)) {
                        let move = eval(tran + slide_width);
                        $("main .slider").css({
                            transform: "translate(-" + move + "px)",
                            transition: "1s",
                        });
                    } else $("main .slider").css({ transform: "translate(0px)", transition: "0s" });
                }, 5e3));
            }
            $(".slider").css({ width: 100 * slide_length + "%" }),
                $(".slide").css({ width: 100 / slide_length + "%" }),
                $(document).ready(slider()),
                $("main .next").click(function () {
                    clearInterval(sliderRunning), setTimeout(slider(), 5e3);
                    let t = parseFloat($("main").css("width")),
                        s = Math.abs($("main .slider").css("transform").split(",")[4]),
                        e = (Math.round(s / t) + 1) * t;
                    s <= t * (slide_length - 3) &&
                        $("main .slider").css({
                            transform: "translate(-" + e + "px)",
                            transition: "2s",
                        });
                }),
                $("main .prev").click(function () {
                    clearInterval(sliderRunning), setTimeout(slider(), 5e3);
                    let t = parseFloat($("main").css("width")),
                        s = Math.abs($("main .slider").css("transform").split(",")[4]),
                        e = (Math.round(s / t) - 1) * t;
                    s > 0 &&
                        $("main .slider").css({
                            transform: "translate(-" + e + "px)",
                            transition: "2s",
                        });
                })

            
        });
    }
)


