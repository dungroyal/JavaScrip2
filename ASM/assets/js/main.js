$(window).on('load', function(event) {
    $('body').removeClass('preloading');
    $('.load').fadeOut(500);
});

/*---------------------------------------------------------------------------------*/

$(document).ready(function() {

    $('.header-right-menu a, .footer-links a').click(function() {
        var href = 'page/' + ($(this).attr('href'));
        var title = $(this).html();
        $('title').html(title + " | Đoàn Quốc Dũng")
        $.get(href, "", function(data) {
            $('.main').html(data, function() {
                $('.main').children().hide().show(500);
            });
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

/*---------------------------------------------------------------------------------*/

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
            $('.content-post-content-text_summaryh').fadeToggle(400);
            $('.content-post-content-image').toggleClass('width10', 500);
            $('.content-post-content-text').toggleClass('width90p', 500);
            $('.content-post-content-list').toggleClass('height70px', 500);
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
    // Accordion Jquery IU
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

    // Hiệu ứng trang ảnh đẹp
    $(".img-box .transparent-box").dblclick(
        function() {
            $(this).parent().hide(1000);
        }
    );
    $("#show-gallery").click(function() {
        $(".img-box").show(1000);
    })



    // Load nội dung lần 2 
    $('.accordion-set a,#loadDN,#btn-link_dangky').click(function() {
        var href = 'page/' + ($(this).attr('href'));
        $('.content').load(href, function() {
            loadJquery2();
        });
        return false;
    });

    $('#btn-link_dangky,#loadDN').click(function() {
        var href = 'page/' + ($(this).attr('href'));
        $('div.main').load(href, function() {
            loadJquery2();
        });
        return false;
    });

    // Search Nav
    $('.searchbtn').on({
        click: function() {
            $('#search_error').remove();
            var data = $('#form_search_nav').serialize();
            var skeyword = data.slice(8);
            if (skeyword == "") {
                $(this).siblings().attr("placeholder", "Bạn chưa nhập từ khoá :(");
                return false;
            }
        }
    });

    // Autocomplete jQuery UI
    $(function() {
        var names = ["Covid19", "Virus Corona", "Wuhan", "Hoa Kỳ", "WHO", "Đoàn Quốc Dũng", "Nguyễn Văn Long", "Wd14301", "JavaScrip nâng cao", "PHP", "Lập trình Jquery cơ bản"];
        var accentMap = {
            "á": "a",
            "ö": "o"
        };
        var normalize = function(term) {
            var ret = "";
            for (var i = 0; i < term.length; i++) {
                ret += accentMap[term.charAt(i)] || term.charAt(i);
            }
            return ret;
        };
        $("#search_autocomplete").autocomplete({
            source: function(request, response) {
                var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                response($.grep(names, function(value) {
                    value = value.label || value.value || value;
                    return matcher.test(value) || matcher.test(normalize(value));
                }));
            }
        });
    });

    $(function() {
        $("#datepicker").datepicker($.datepicker.regional["vi-VN"]);
    });

    jQuery(function($) {
        $.datepicker.regional["vi-VN"] = {
            closeText: "Đóng",
            prevText: "Trước",
            nextText: "Sau",
            currentText: "Hôm nay",
            monthNames: ["Tháng một", "Tháng hai", "Tháng ba", "Tháng tư", "Tháng năm", "Tháng sáu", "Tháng bảy", "Tháng tám", "Tháng chín", "Tháng mười", "Tháng mười một", "Tháng mười hai"],
            monthNamesShort: ["Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười", "Mười một", "Mười hai"],
            dayNames: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
            dayNamesShort: ["CN", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            weekHeader: "Tuần",
            dateFormat: "dd/mm/yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: "",
            changeYear: true
        };

        $.datepicker.setDefaults($.datepicker.regional["vi-VN"]);
    });

    $(function() {
        $(document).tooltip({
            track: true
        });
    });
    // Đăng ký 
    $("#username").on({
        blur: function() {
            var data = $("#form-dangky").serialize();
            $('#status-dangky-username').remove();
            $.post("assets/xuly.php", data,
                function(DataBack) {
                    if (DataBack.substring(0, 1) == '1') {
                        status_user = "<span id='status-dangky-username'><i class='fas fa-times-circle'></i> Tên đăng nhập đã được sử dụng.</span>";
                        $('#username').parent().after(status_user);
                        $("#btn-dangky").css('opacity', '.5');
                        $("#btn-dangky").attr('disable', 'true');
                    } else {
                        $("#btn-dangky").css('opacity', '1');
                        $("#btn-dangky").attr('disable', 'false');
                    }
                }
            );
        },
    });


    $("#re-new-password").on({
        blur: function() {
            var data = $("#form-dangky").serialize();
            $('#status-dangky-pass').remove();
            $.post("assets/xuly.php", data,
                function(DataBack) {
                    if (DataBack.substring(1, 2) == '1') {
                        status_pass = "<span id='status-dangky-pass'><i class='fas fa-times-circle'></i>Hai mật khẩu không trùng khớp</span>";
                        $('#re-new-password').parent().after(status_pass);
                        $("#btn-dangky").css('opacity', '.5');
                    } else {
                        $("#btn-dangky").css('opacity', '1');
                    }
                }
            );
        },
    });
    $('.input100').on({
        click: function() {
            $(this).css({
                'background': '#cef38540',
                'border-radius': '3px'
            });
        },
        blur: function() {
            $(this).css('background', 'transparent');
        }
    });
    $('#btn-dangky').click(function() {
        if ($('#username').val() == "") {
            $('#username').attr('placeholder', 'Tên đăng nhập không được để trống!');
            var status_username = false;
        }
        if ($('#new-password').val() == "") {
            $('#new-password').attr('placeholder', 'Mật khẩu không được để trống!');
        }
        if ($('#re-new-password').val() == "") {
            $('#re-new-password').attr('placeholder', 'Xác nhận mật khẩu hkông được để trống!');
            var status_repassword = false;
        }
        if ($('#datepicker').val() == "") {
            $('#datepicker').attr('placeholder', 'Bạn sinh ngày bao nhiêu?');
            var status_date = false;
        }
        return false;
    });
    // Đăng nhập
    $('#btn-login').click(function() {
        var data = $('#form_login').serialize();
        var username = $('#username').val();
        var password = $('#username').val();
        $('#status-dangky-username').remove();
        if (username == "" || password == "") {
            $('#btn-login').parent().before("<span id='status-dangky-username'><i class='fas fa-times-circle'></i> Chưa nhập trên đăng nhập hoặc mật khẩu!</span>");
        } else {
            $.post("assets/dangnhap.php", data,
                function(databack) {
                    if ((databack.trim()) == 1) {
                        $('#btn-login').parent().before("<span id='status-dangky-username'><i class='fas fa-times-circle'></i> Sai tên đăng nhập hoặc mật khẩu</span>");
                    } else {
                        $('#wrap-container-login').html("<p id='status-login-sucsset'><i class='far fa-check-circle'></i>Đăng nhập thành công</p>");
                    }
                }
            );
        }
        return false;
    });
}

/*---------------------------------------------------------------------------------*/

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
            $('.content-post-content-text_summaryh').fadeToggle(400);
            $('.content-post-content-image').toggleClass('width10', 500);
            $('.content-post-content-text').toggleClass('width90p', 500);
            $('.content-post-content-list').toggleClass('height70px', 500);
        }
    });

    $('#btn-link_dangky,#loadDN').click(function() {
        var href = 'page/' + ($(this).attr('href'));
        $('div.main').load(href, function() {
            loadJquery2();
        });
        return false;
    });
    var title = $('.content-post-title-detail span').html();
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

getLocation();

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var apiKey = "a73d1598452fcb3363972697cfab5212";
    var url = "http://api.openweathermap.org/data/2.5/weather?lang=vi&lat=" + lat + "&lon=" + long + "&appid=" + apiKey;
    console.log(url);
    hienthoitiet(url);
}

function hienthoitiet(url) {
    $.getJSON(url, function(data) {
        tp = data['name'];
        temp = (data['main']['temp']) - 273.15;
        humidity = data['main']['humidity'];
        console.log(humidity);

        if (humidity < 40) {
            $('#term').before('<i class="fas fa-sun"></i>');
        } else if (humidity > 80) {
            $('#term').before('<i class="fas fa-cloud-showers-heavy"></i>');
        } else if (humidity > 60) {
            $('#term').before('<i class="fas fa-cloud"></i>');
        } else if (humidity > 40) {
            $('#term').before('<i class="fas fa-cloud-sun"></i>');
        }

        $('#term').html(temp + '°C');
        $('#city').html(' ' + tp);
    });

}