$(window).on('load', function(event) {
    $('body').removeClass('preloading');
    $('.load').fadeOut(500);
});

$(document).ready(function() {

    $('.header-right-menu a, .form-btn-dk-dn').click(function() {
        var href = 'page/' + ($(this).attr('href'));
        var title = $(this).html();
        $('title').html(title + " | Đoàn Quốc Dũng")
        $.get(href, "", function(data) {
            $('div.main').html(data);
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
    $('.content-post-content-text_title a').each(function() {
        var idPost = $(this).attr('idPost');
        var title = $(this).html();
        $(this).attr('href', 'dungdqps08542.vn/post.php?idPost=' + idPost)
        $(this).parent().parent().siblings().children().attr('href', 'dungdqps08542.vn/post.php?idPost=' + idPost);
        $(this).parent().parent().siblings().children().attr('title', title);
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

    $('.accordion-set a').click(function() {
        var href = 'page/' + ($(this).attr('href'));
        $('.content').load(href, function() {
            loadJquery2();
        });
        return false;
    });

    // Hình ảnh đẹp

    $(".img-box .transparent-box").dblclick(
        function() {
            $(this).parent().toggle(1000);
        }
    );
    $("#show-gallery").click(function() {
        $(".img-box").show(1000);
    })
}

function loadJquery2() {
    $('.content-post-content-text_title a').each(function() {
        var idPost = $(this).attr('idPost');
        var title = $(this).html();
        $(this).attr('href', 'dungdqps08542.vn/post.php?idPost=' + idPost)
        $(this).parent().parent().siblings().children().attr('href', 'dungdqps08542.vn/post.php?idPost=' + idPost);
        $(this).parent().parent().siblings().children().attr('title', title);
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
    var title = $('.content-post-title-detail').html();
    $('title').html(title + " | Đoàn Quốc Dũng");

}

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


(function($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function() {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function() {
        $(this).focus(function() {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);