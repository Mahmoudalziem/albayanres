// $(document).ready(function () {
//   (document.onreadystatechange = function () {
//     "complete" !== document.readyState
//       ? ((document.querySelector("body").style.overflow = "hidden"),
//         (document.querySelector(".loading").style.visibility = "visible"))
//       : ($(".loading").fadeOut(),
//         (document.querySelector("body").style.overflow = "visible"));
//   }),
    $(".search-field").focus(function () {
      $("nav .search-box .drop-search").show();
    }),
    $(".search-field").blur(function () {
      setTimeout(function () {
        $("nav .search-box .drop-search").hide();
      }, 800);
    }),
    $(".alternative-nav .menu .menu-btn").click(function () {
      $(this).toggleClass("active"), $(".alternative-nav .taps").toggle();
    }),
    $(".alternative-nav .menu .menu-btn").blur(function () {
      setTimeout(function () {
        $(this).removeClass("active"), $(".alternative-nav .taps").hide();
      }, 800);
    }),
    $(".mobile-search-btn").click(function () {
      $("nav .search-box").show(), $(".shadow").show();
    }),
    $(".close").click(function () {
      $("nav .search-box").hide(), $(".shadow").hide();
    });
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
          transition: "1s",
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
          transition: "1s",
        });
    }),
    $(".info .taps button ").click(function () {
      $(".info .taps button").removeClass("active"), $(this).addClass("active");
      let t = $(this).attr("target-btn");
      $(".info .display").hide(), $("." + t).css({ display: "flex" });
    });
  let statistic_width = $(".experience .statistics-container .statistic").css(
    "width"
  );
  $(".experience .statistics-container .statistic").css({
    height: statistic_width,
  });
  let major_width = $(".majors .majors-slider .major-card").css("width");
  $(".majors .majors-slider .major-card").css({ height: major_width }),
    $(window).resize(function () {
      (statistic_width = $(".experience .statistics-container .statistic").css(
        "width"
      )),
        $(".experience .statistics-container .statistic").css({
          height: statistic_width,
        }),
        (major_width = $(".majors .majors-slider .major-card").css("width")),
        $(".majors .majors-slider .major-card").css({ height: major_width });
    });
  let major_card_width = parseFloat($(".major-card").css("width"));
  $(window).resize(function () {
    return (major_card_width = parseFloat($(" .major-card").css("width")));
  });
  let all_majors,
    slider_container_width,
    major_in_container,
    allowed_majors_transform =
      (document.querySelectorAll(".major-card").length -
        Math.floor(
          parseFloat($(".majors .majors-slider").css("width")) /
            major_card_width
        )) *
      major_card_width;
  $(".majors .major-next").click(function () {
    let t = Math.abs($(" .major-card").css("transform").split(",")[4]);
    t < allowed_majors_transform &&
      ((t += major_card_width),
      $(" .major-card").css({ transform: "translateX(-" + t + "px)" }));
  }),
    $(".majors .major-prev").click(function () {
      let t = Math.abs($(" .major-card").css("transform").split(",")[4]);
      (t -= major_card_width),
        $(" .major-card").css({ transform: "translateX(-" + t + "px)" });
    });
  let article_card_width = parseFloat($(" .article-card").css("width"));
  $(window).resize(function () {
    return (article_card_width = parseFloat($(" .article-card").css("width")));
  });
  let all_articles,
    articles_slider_container_width,
    article_in_container,
    allowed_articles_transform =
      (document.querySelectorAll(".article-card").length -
        Math.floor(
          parseFloat($(".articles .articles-slider").css("width")) /
            article_card_width
        )) *
      article_card_width;
  $(".articles .article-next").click(function () {
    let t = Math.abs($(" .article-card").css("transform").split(",")[4]);
    t < allowed_articles_transform - 1 &&
      ((t += article_card_width),
      $(" .article-card").css({ transform: "translateX(-" + t + "px)" }));
  }),
    $(".articles .article-prev").click(function () {
      let t = Math.abs($(" .article-card").css("transform").split(",")[4]);
      (t -= article_card_width),
        $(" .article-card").css({ transform: "translateX(-" + t + "px)" });
    });
  let blog_card_width = parseFloat($(" .blog-card").css("width"));
  $(window).resize(function () {
    return (blog_card_width = parseFloat($(" .blog-card").css("width")));
  });
  let all_blogs,
    blogs_slider_container_width,
    blog_in_container,
    allowed_blogs_transform =
      (document.querySelectorAll(".blog-card").length -
        Math.floor(
          parseFloat($(".blogs .blogs-slider").css("width")) / blog_card_width
        )) *
      blog_card_width;
  $(".blogs .blog-next").click(function () {
    let t = Math.abs($(" .blog-card").css("transform").split(",")[4]);
    t < allowed_blogs_transform - 1 &&
      ((t += blog_card_width),
      $(" .blog-card").css({ transform: "translateX(-" + t + "px)" }));
  }),
    $(".blogs .blog-prev").click(function () {
      let t = Math.abs($(" .blog-card").css("transform").split(",")[4]);
      (t -= blog_card_width),
        $(" .blog-card").css({ transform: "translateX(-" + t + "px)" });
    }),
    $(".services-drop-list button").click(function () {
      $(".services-drop-list .list").toggle();
    }),
    $(".services-drop-list button").blur(function () {
      setTimeout(function () {
        $(".services-drop-list .list").hide();
      }, 800);
    }),
    $(".questions .questions-container").click(function () {
      $(".answer").slideUp(),
        $(".questions .questions-container .question").removeClass("active"),
        $(this).find(".answer").slideDown(),
        $(this).find(".question").addClass("active");
    }),
    $(".properties .properties-container").click(function () {
      $(".answer").slideUp(),
        $(".properties .properties-container .property").removeClass("active"),
        $(this).find(".answer").slideDown(),
        $(this).find(".property").addClass("active");
    }),
    $(".type-of-service label").click(function () {
      $(".type-of-service label").removeClass("active"),
        $(this).addClass("active");
    });
  let rate_cards = document.querySelectorAll(".customer-opinion"),
    rate_heights = [0];
  for (i = 0; i < rate_cards.length; i++) {
    let rate_cards_height = rate_cards[i].clientHeight;
    rate_heights.push(rate_cards_height);
    let maxHeight = Math.max(...rate_heights);
    $(".customer-opinion").css({ height: maxHeight + "px" });
  }
  let rate_con = $(".rate-container").html();
  $(".rate-container").append(rate_con),
    setInterval(function () {
      let t = Math.abs($(".rate-card").css("transform").split(",")[4]),
        s = parseFloat($(".rate-card").css("width")),
        e = t + s;
      e <= (rate_cards.length + 1) * s
        ? $(".rate-card").css({
            transform: "translateX(-" + e + "px)",
            transition: "1s",
          })
        : $(".rate-card").css({
            transform: "translateX(0px)",
            transition: "0s",
          });
    }, 4e3);
  let done = 0,
    offset = $(".experience").offset();
  $(window).scroll(function () {
    if ($(window).scrollTop() >= offset.top - 200 && 0 == done) {
      done = 1;
      let t = $(".research").attr("end"),
        s = parseInt((14 / 15) * t),
        e = setInterval(function () {
          ++s < t ? $(".research").html(s) : clearInterval(e);
        }),
        r = $(".review").attr("end"),
        a = parseInt((14 / 15) * r),
        n = setInterval(function () {
          ++a < r ? $(".review").html(a) : clearInterval(n);
        }),
        c = $(".clients").attr("end"),
        l = parseInt((14 / 15) * c),
        o = setInterval(function () {
          ++l < c ? $(".clients").html(l) : clearInterval(o);
        });
    }
  });

  let majors = document.querySelectorAll(".major-card");
  let major_card_wid = parseFloat($(".major-card").css("width"));
  allowed_majors_transform =
    (document.querySelectorAll(".major-card").length -
      Math.floor(
        parseFloat($(".majors .majors-slider").css("width")) / major_card_width
      )) *
    major_card_width;
  console.log(allowed_majors_transform);
  let major_setin = setInterval(function () {
    let major_translate = Math.abs(
      $(".major-card").css("transform").split(",")[4]
    );
    let new_tran = major_translate + major_card_wid;

    if (new_tran <= allowed_majors_transform) {
      $(".major-card").css("transform", "translateX(-" + new_tran + "px)");
    } else {
      $(".major-card").css("transform", "translateX(0px)");
    }
  }, 3000);

  let blogs = document.querySelectorAll(".blog-card");
  let blog_card_wid = parseFloat($(".blog-card").css("width"));
  allowed_blogs_transform =
    (document.querySelectorAll(".blog-card").length -
      Math.floor(
        parseFloat($(".blogs .blogs-slider").css("width")) / blog_card_width
      )) *
    blog_card_width;
  console.log(allowed_blogs_transform);
  let blog_setin = setInterval(function () {
    let blog_translate = Math.abs(
      $(".blog-card").css("transform").split(",")[4]
    );
    let new_tran = blog_translate + blog_card_wid;

    if (new_tran <= allowed_blogs_transform) {
      $(".blog-card").css("transform", "translateX(-" + new_tran + "px)");
    } else {
      $(".blog-card").css("transform", "translateX(0px)");
    }
  }, 3000);


// });
