$(function () {
    var $username = $('#username'),
        $phone = $('#phone'),
        $pwd = $('#pwd'),
        $btn = $('#btn');

    $username.blur(function () {
        fnCheckUser()
    })
    function fnCheckUser() {
        var vals = $username.val()
        var re = /^\w{6,20}$/
        if (vals == '') {
            $username.next().show().html('*用户名不能为空')
            return
        }
        if (re.test(vals)) {
            $username.next().hide()
        } else {
            $username.next().show().html('用户名是6-20位数字、字母和下划线！')
        }
    }

    $pwd.blur(function () {
        fnCheckPwd()
    })
    function fnCheckPwd() {
        var vals = $pwd.val()
        var rePass = /^[\w!-@#$%^&*]{6,20}$/
        if (vals == '') {
            $pwd.next().show().html('密码不能为空')
            return
        }
        if (rePass.test(vals)) {
            $pwd.next().hide()
        }
        else {
            $pwd.next().show().html('密码是6到20位字母、数字，还可包含@!#$%^&*-字符')
        }
    }

    $phone.blur(function () {
        fnCheckPhone()
    })
    function fnCheckPhone() {
        var vals = $phone.val()
        var rePass = /^1(3|4|5|7|8)\d{9}$/
        if (vals == '') {
            $phone.next().show().html('手机号不能为空')
            return
        }
        if (rePass.test(vals)) {
            $phone.next().hide()
        }
        else {
            $phone.next().show().html('手机号码有误，请重填')
        }
    }

    $btn.click(function () {
        var count = 60
        var countDown = setInterval(function() {
            if (count === 0) {
                $btn.text('重新发送').removeAttr('disabled');
                $btn.css({
                    background: '#ff9400',
                    color: '#fff',
                });
                clearInterval(countDown);
            } else {
                $btn.attr('disabled', true);
                $btn.css({
                    background: '#d8d8d8',
                    color: '#707070',
                });
                $btn.text(count + '秒后可重新获取');
            }
            count--
        }, 1000)
    })

})