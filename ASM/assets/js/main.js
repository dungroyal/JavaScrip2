$(window).on('load', function(event) {
    $('body').removeClass('preloading');
    $('.load').fadeOut(500);
});

$(document).ready(function() {
    $('.header-right-menu a').click(function() {
        var href = 'page/' + ($(this).attr('href'));
        $.get(href, "", function(data) {
            $('div.main').html(data, loadData());
            loadJquery();
        });
        return false;
    });

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
});

function loadJquery() {
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
    $('.content-post-content-text_title a').each(function() {
        var idPost = $(this).attr('idPost');
        $(this).attr('href', 'dungdqps08542.vn/post.php?idPost=' + idPost)
        $('.content-post-content-image a').attr('href', 'dungdqps08542.vn/post.php?idPost=' + idPost)
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
                .slideDown(300);
        }
    });
    $("#collapse-content").on({
        click: function() {
            if ($(this).html() == '<i class="fas fa-compress-arrows-alt"></i> Thu gọn nội dung') {
                $(this).html('<i class="fas fa-expand-arrows-alt"></i> Mở rộng nội dung')
            } else if ($(this).html() == '<i class="fas fa-expand-arrows-alt"></i> Mở rộng nội dung') {
                $(this).html('<i class="fas fa-compress-arrows-alt"></i> Thu gọn nội dung')
            }
            $('.content-post-content-image img').css('height', 'auto');
            $('.content-post-content-text_summaryh').fadeToggle(0);
            $('.content-post-content-image').toggleClass('width10', 1000);
            $('.content-post-content-text').toggleClass('width90p', 1000);
            $('.content-post-content-list').toggleClass('height70px', 1000);
        }
    });
    $('.accordion-set a').click(function() {
        var href = 'page/' + ($(this).attr('href'));
        $('.content').load(href, function() {;
            loadJquery2()
        });
        return false;
    });
}

function loadJquery2() {
    $('.content-post-content-text_title a').each(function() {
        var idPost = $(this).attr('idPost');
        $(this).attr('href', 'dungdqps08542.vn/post.php?idPost=' + idPost)
        $('.content-post-content-image a').attr('href', 'dungdqps08542.vn/post.php?idPost=' + idPost)
    });
    $("#collapse-content").on({
        click: function() {
            if ($(this).html() == '<i class="fas fa-compress-arrows-alt"></i> Thu gọn nội dung') {
                $(this).html('<i class="fas fa-expand-arrows-alt"></i> Mở rộng nội dung')
            } else if ($(this).html() == '<i class="fas fa-expand-arrows-alt"></i> Mở rộng nội dung') {
                $(this).html('<i class="fas fa-compress-arrows-alt"></i> Thu gọn nội dung')
            }
            $('.content-post-content-image img').css('height', 'auto');
            $('.content-post-content-text_summaryh').fadeToggle(0);
            $('.content-post-content-image').toggleClass('width10', 1000);
            $('.content-post-content-text').toggleClass('width90p', 1000);
            $('.content-post-content-list').toggleClass('height70px', 1000);
        }
    });
}

function loadData() {  }

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