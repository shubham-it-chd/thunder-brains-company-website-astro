(function ($) {
  "use strict";

  var WidgetDefaultHandler = function ($scope) {
    if ($scope.find(".wow").length) {
      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
      });
      wow.init();
    }

    // mailchimp form
    if ($scope.find(".mc-form").length) {
      $scope.find(".mc-form").each(function () {
        var Self = $(this);
        var mcURL = Self.data("url");
        var mcResp = Self.parent().find(".mc-form__response");

        Self.ajaxChimp({
          url: mcURL,
          callback: function (resp) {
            // appending response
            mcResp.append(function () {
              return '<p class="mc-message">' + resp.msg + "</p>";
            });
            // making things based on response
            if (resp.result === "success") {
              // Do stuff
              Self.removeClass("errored").addClass("successed");
              mcResp.removeClass("errored").addClass("successed");
              Self.find("input").val("");

              mcResp.find("p").fadeOut(10000);
            }
            if (resp.result === "error") {
              Self.removeClass("successed").addClass("errored");
              mcResp.removeClass("successed").addClass("errored");
              Self.find("input").val("");

              mcResp.find("p").fadeOut(10000);
            }
          }
        });
      });
    }

    if ($scope.find(".curved-circle--item").length) {
      let curvedCircleItem = $scope.find(".curved-circle--item");
      curvedCircleItem.each(function () {
        let self = $(this);
        self.circleType();
      });
    }

    if ($scope.find(".curved-circle").length) {
      let curvedCircle = $scope.find(".curved-circle");
      curvedCircle.each(function () {
        let self = $(this);
        self.circleType({
          position: "absolute",
          dir: 1,
          radius: 70,
          forceHeight: true,
          forceWidth: true
        });
      });
    }

    let mainSliderTwoImage = $scope.find(".main-slider-two__img");
    if (mainSliderTwoImage.length) {
      mainSliderTwoImage.tilt({
        maxTilt: 5,
        scale: 1,
        perspective: 700,
        speed: 1000
      });
    }

    let tabsBox = $scope.find(".tabs-box");
    if (tabsBox.length) {
      tabsBox.find(".tab-buttons .tab-btn").on("click", function (e) {
        e.preventDefault();
        var target = $($(this).attr("data-tab"));

        if ($(target).is(":visible")) {
          return false;
        } else {
          target
            .parents(".tabs-box")
            .find(".tab-buttons")
            .find(".tab-btn")
            .removeClass("active-btn");
          $(this).addClass("active-btn");
          target
            .parents(".tabs-box")
            .find(".tabs-content")
            .find(".tab")
            .fadeOut(0);
          target
            .parents(".tabs-box")
            .find(".tabs-content")
            .find(".tab")
            .removeClass("active-tab");
          $(target).fadeIn(300);
          $(target).addClass("active-tab");
        }
      });
    }

    let thmSwiperSliders = $scope.find(".thm-swiper__slider");
    if (thmSwiperSliders.length) {
      thmSwiperSliders.each(function () {
        let elm = $(this);
        let options = elm.data("swiper-options");
        let thmSwiperSlider = new Swiper(
          elm,
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }

    let thmOwlCarousels = $scope.find(".thm-owl__carousel");
    if (thmOwlCarousels.length) {
      thmOwlCarousels.each(function () {
        let elm = $(this);
        let options = elm.data("owl-options");
        let thmOwlCarousel = elm.owlCarousel(
          "object" === typeof options ? options : JSON.parse(options)
        );
      });
    }

    let thmOwlNavCarousels = $scope.find(".thm-owl__carousel--custom-nav");
    if (thmOwlNavCarousels.length) {
      thmOwlNavCarousels.each(function () {
        let elm = $(this);
        let owlNavPrev = elm.data("owl-nav-prev");
        let owlNavNext = elm.data("owl-nav-next");
        $(owlNavPrev).on("click", function (e) {
          elm.trigger("prev.owl.carousel");
          e.preventDefault();
        });

        $(owlNavNext).on("click", function (e) {
          elm.trigger("next.owl.carousel");
          e.preventDefault();
        });
      });
    }

    //Single Item Carousel
    let singleItemCarousel = $scope.find(".single-item-carousel");
    if (singleItemCarousel.length) {
      singleItemCarousel.owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 500,
        autoplay: 5000,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        navText: [
          '<span class="icon fa fa-angle-left"></span>',
          '<span class="icon fa fa-angle-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          800: {
            items: 1
          },
          1024: {
            items: 1
          }
        }
      });
    }

    let circleProgress = $scope.find(".circle-progress");
    if (circleProgress.length) {
      circleProgress.appear(function () {
        let circleProgressItem = $(".circle-progress");
        circleProgressItem.each(function () {
          let progress = $(this);
          let progressOptions = progress.data("options");
          progress.circleProgress(progressOptions);
        });
      });
    }

    // News Two Carousel
    var blogCarousel = $(".blog-two__carousel");

    if (blogCarousel.length) {
      var nextBtn = $(".blog-two__carousel__custom-nav .left-btn");
      var prevBtn = $(".blog-two__carousel__custom-nav .right-btn");
      blogCarousel.owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        dots: false,
        autoplayTimeout: 10000,
        navText: [
          '<span class="icon-left-arrow"></span>',
          '<span class="icon-right-arrow"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          992: {
            items: 3
          },
          1024: {
            items: 3
          },
          1200: {
            items: 3
          }
        }
      });
      nextBtn.on("click", function (e) {
        e.preventDefault();
        blogCarousel.trigger("next.owl.carousel", [500]);
      });
      prevBtn.on("click", function (e) {
        e.preventDefault();
        blogCarousel.trigger("prev.owl.carousel", [500]);
      });
    }

    let videoPopup = $scope.find(".video-popup");
    if (videoPopup.length) {
      videoPopup.magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false
      });
    }

    let imgPopup = $scope.find(".img-popup");
    if (imgPopup.length) {
      var groups = {};
      imgPopup.each(function () {
        var id = parseInt($(this).attr("data-group"), 10);

        if (!groups[id]) {
          groups[id] = [];
        }

        groups[id].push(this);
      });

      $.each(groups, function () {
        $(this).magnificPopup({
          type: "image",
          closeOnContentClick: true,
          closeBtnInside: false,
          gallery: {
            enabled: true
          }
        });
      });
    }

    // Popular Causes Progress Bar
    let countBar = $scope.find(".count-bar");
    if (countBar.length) {
      countBar.appear(
        function () {
          var el = $(this);
          var percent = el.data("percent");
          $(el).css("width", percent).addClass("counted");
        },
        {
          accY: -50
        }
      );
    }

    //Fact Counter + Text Count
    let countBox = $scope.find(".count-box");
    if (countBox.length) {
      countBox.appear(
        function () {
          var $t = $(this),
            n = $t.find(".count-text").attr("data-stop"),
            r = parseInt($t.find(".count-text").attr("data-speed"), 10);

          if (!$t.hasClass("counted")) {
            $t.addClass("counted");
            $({
              countNum: $t.find(".count-text").text()
            }).animate(
              {
                countNum: n
              },
              {
                duration: r,
                easing: "linear",
                step: function () {
                  $t.find(".count-text").text(Math.floor(this.countNum));
                },
                complete: function () {
                  $t.find(".count-text").text(this.countNum);
                }
              }
            );
          }
        },
        {
          accY: 0
        }
      );
    }

     //======Circle Progress
     let dial = $scope.find(".dial");
     if (dial.length) {
    $(".dial").appear(
        function () {
            var elm = $(this);
            var color = elm.attr("data-fgColor");
            var perc = elm.attr("value");
            elm.knob({
                value: 0,
                min: 0,
                max: 100,
                skin: "tron",
                readOnly: true,
                thickness: 0.07,
                dynamicDraw: true,
                displayInput: false,
            });
            $({
                value: 0,
            }).animate(
                {
                    value: perc,
                },
                {
                    duration: 2000,
                    easing: "swing",
                    progress: function () {
                        elm.val(Math.ceil(this.value)).trigger("change");
                    },
                }
            );
            $(this).append(function () {});
        },
        {
            accY: 20,
        }
    );
}

    var odo = $scope.find(".odometer");
    if (odo.length) {
      odo.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    }

    var odoB = $scope.find(".odometer-brackers");
    if (odoB.length) {
      odoB.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    }

    //Progress Bar / Levels
    var ProgessBar = $scope.find(".progress-levels .progress-box .bar-fill");
    if (ProgessBar.length) {
      $(".progress-box .bar-fill").each(
        function () {
          $(".progress-box .bar-fill").appear(function () {
            var progressWidth = $(this).attr("data-percent");
            $(this).css("width", progressWidth + "%");
          });
        },
        {
          accY: 0
        }
      );
    }

      //Progress Bar / Levels
      if ($(".progress-levels .progress-box .bar-fill").length) {
        $(".progress-box .bar-fill").each(
            function () {
                $(".progress-box .bar-fill").appear(function () {
                    var progressWidth = $(this).attr("data-percent");
                    $(this).css("width", progressWidth + "%");
                });
            },
            {
                accY: 0,
            }
        );
      }


 

    var PostFilter = $scope.find(".post-filter");
    if (PostFilter.length) {
      var postFilterList = $(".post-filter li");
      // for first init
      $(".filter-layout").isotope({
        filter: ".filter-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
      // on click filter links
      postFilterList.on("click", function () {
        var Self = $(this);
        var selector = Self.attr("data-filter");
        postFilterList.removeClass("active");
        Self.addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    }
  };

  var WidgetTestimonialHandler = function ($scope) {
    if ($("#testimonials-one__thumb").length) {
      let testimonialsThumb = new Swiper("#testimonials-one__thumb", {
        slidesPerView: 4,
        spaceBetween: 0,
        speed: 1400,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
        autoplay: {
          delay: 5000
        }
      });

      let testimonialsCarousel = new Swiper("#testimonials-one__carousel", {
        observer: true,
        observeParents: true,
        speed: 1400,
        mousewheel: false,
        slidesPerView: 1,
        autoplay: {
          delay: 5000
        },
        thumbs: {
          swiper: testimonialsThumb
        },
        pagination: {
          el: "#testimonials-one__carousel-pagination",
          type: "bullets",
          clickable: true
        }
      });
    }
  };

  var WidgetFaqHandler = function ($scope) {
    // Accrodion
    if ($scope.find(".accrodion-grp").length) {
      var accrodionGrp = $scope.find(".accrodion-grp");
      accrodionGrp.each(function () {
        var accrodionName = $(this).data("grp-name");
        var Self = $(this);
        var accordion = Self.find(".accrodion");
        Self.addClass(accrodionName);
        Self.find(".accrodion .accrodion-content").hide();
        Self.find(".accrodion.active").find(".accrodion-content").show();
        accordion.each(function () {
          $(this)
            .find(".accrodion-title")
            .on("click", function () {
              if ($(this).parent().hasClass("active") === false) {
                $(".accrodion-grp." + accrodionName)
                  .find(".accrodion")
                  .removeClass("active");
                $(".accrodion-grp." + accrodionName)
                  .find(".accrodion")
                  .find(".accrodion-content")
                  .slideUp();
                $(this).parent().addClass("active");
                $(this).parent().find(".accrodion-content").slideDown();
              }
            });
        });
      });
    }
  };

  var WidgetPortfolioHandler = function ($scope) {
    if ($scope.find(".post-filter").length) {
      var postFilterList = $(".post-filter li");
      // for first init
      $(".filter-layout").isotope({
        filter: ".filter-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
      // on click filter links
      postFilterList.on("click", function () {
        var Self = $(this);
        var selector = Self.attr("data-filter");
        postFilterList.removeClass("active");
        Self.addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    }

    if ($(".post-filter.has-dynamic-filter-counter").length) {
      var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
        "li"
      );

      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this).append("<sup>[" + count + "]</sup>");
      });
    }
  };

  //elementor front start
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/widget",
      WidgetDefaultHandler
    );

    elementorFrontend.hooks.addAction(
      "frontend/element_ready/ontech-testimonials.default",
      WidgetTestimonialHandler
    );

    elementorFrontend.hooks.addAction(
      "frontend/element_ready/ontech-faq.default",
      WidgetFaqHandler
    );

    elementorFrontend.hooks.addAction(
      "frontend/element_ready/ontech-portfolio.default",
      WidgetPortfolioHandler
    );
  });

     // login
     $("#ontech-login").submit(function (event) {

      event.preventDefault();
  
      var login = 'action=signup_paragon&param=login&' + $(this).serialize();
      $.ajax({
          type: "POST",
          url: ontech_login_object.ajaxurl,
          data: login,
          beforeSend: function () {
              // setting a timeout
              $(".login-result").addClass('loading');
          },
          success: function (data) {
              $(".login-result").removeClass('loading');
              if (data.status == 2) {
                  $(".login-result").removeClass('alert alert-warning');
                  $(".login-result").html(data.message).addClass('alert alert-success');
                  window.location.href = ontech_login_object.login_redirect_url;
              } else if (data.status == 1) {
                  $(".login-result").html(data.message).addClass('alert alert-warning');
              } else {
                  $(".login-result").html(ontech_login_object.message).addClass('alert alert-warning');
              }
          }
      });
  }); //end login
  
  
  // register
  $("#ontech-registration").submit(function (event) {
  
      event.preventDefault();
  
      var signupForm = 'action=signup_paragon&param=register&' + $(this).serialize();
      $.ajax({
          type: "POST",
          url: ontech_login_object.ajaxurl,
          data: signupForm,
          beforeSend: function () {
              // setting a timeout
              $(".registration-result").addClass('loading');
          },
          success: function (data) {
              $(".registration-result").removeClass('loading');
              if (data.status == 2) {
                  $(".registration-result").removeClass('alert alert-warning');
                  $(".registration-result").html(data.message).addClass('alert alert-success');
                  window.location.href = ontech_login_object.registration_redirect_url;
              } else {
                  $(".registration-result").html(data.message).addClass('alert alert-warning');
              }
          }
      });
  }); //end register

})(jQuery);
