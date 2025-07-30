(function(){
  // Helper to read/write cookies
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var d = new Date();
      d.setTime(d.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + d.toUTCString();
    }
    document.cookie = name + "=" + (value||"") + expires + "; path=/";
  }
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i<ca.length;i++){
      var c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
  }

  document.addEventListener('DOMContentLoaded', function(){
    var banner = document.getElementById('cookie-banner');
    if (!getCookie('mpf_cookie_consent')) {
      banner.style.display = 'block';
    }

    document.getElementById('acceptCookies').addEventListener('click', function(){
      setCookie('mpf_cookie_consent', 'accepted', 365);
      banner.style.display = 'none';
    });

    document.getElementById('declineCookies').addEventListener('click', function(){
      setCookie('mpf_cookie_consent', 'declined', 365);
      banner.style.display = 'none';
    });
  });
})();
