$(window).on('load', function(event) {
    $('body').removeClass('preloading');
    $('.load').fadeOut(500);
});

$(document).ready(function() {
    // Smooth Scroll to Div using jQuery
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
    //  Clock
    clockUpdate();
    setInterval(clockUpdate, 1000);

    // Return to top
    $("#return-to-top").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // collapse-content


    $(".accordion-set > a").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".accordion-content")
                .slideUp(200);
            $(".accordion-set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $(".accordion-set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $(".accordion-set > a").removeClass("active");
            $(this).addClass("active");
            $(".accordion-content").slideUp(200);
            $(this)
                .siblings(".accordion-content")
                .slideDown(200);
        }
    });


    $("#collapse-content").on({
        click: function() {
            if ($(this).html() == '<i class="fas fa-compress-arrows-alt"></i> Thu gọn nội dung') {
                $(this).html('<i class="fas fa-expand-arrows-alt"></i> Mở rộng nội dung')
            } else if ($(this).html() == '<i class="fas fa-expand-arrows-alt"></i> Mở rộng nội dung') {
                $(this).html('<i class="fas fa-compress-arrows-alt"></i> Thu gọn nội dung')
            }
            $('.content-post-content-list').toggleClass('height70px', 300);
            $('.content-post-content-image').toggleClass('width10', 700);
            $('.content-post-content-image img').css('height', 'auto');
            $('.content-post-content-text').toggleClass('width90p', 700);
            $('.content-post-content-text_summaryh').fadeToggle();
        }
    });

    $('.accordion-content li a').each(function() {
        var idCatalog = $(this).attr('idCatalog');
        console.log(idCatalog);
        $(this).attr('href', 'dungdqps08542.vn/post.php?idCatalog=' + idCatalog);
    })

    $('.content-post-content-text_title a').each(function() {
        var idPost = $(this).attr('idPost');
        $(this).attr('href', 'dungdqps08542.vn/post.php?idPost=' + idPost)
        $('.content-post-content-image a').attr('href', 'dungdqps08542.vn/post.php?idPost=' + idPost)
    });

    $('.content-post-content-list .content-post-content-text_title a').each(function() {
        var title = $(this).text();
        $(this).parent().parent().parent().attr('title', title);
    })


});





// Cập nhật đồng hồ

function clockUpdate() {
    var date = new Date();
    $('.digital-clock').css({ 'color': '#fff', 'text-shadow': '0 0 6px #ff0' });

    function addZero(x) {
        if (x < 10) {
            return x = '0' + x;
        } else {
            return x;
        }
    }

    function twelveHour(x) {
        if (x > 12) {
            return x = x - 12;
        } else if (x == 0) {
            return x = 12;
        } else {
            return x;
        }
    }

    var h = addZero(twelveHour(date.getHours()));
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());

    $('.digital-clock').text(h + ':' + m + ':' + s)
}