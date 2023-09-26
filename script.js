var app = "vnd.youtube://youtube.com/redirect?event=comments&redir_token=QUFFLUhqbElvdFNuWEVKa1FaYXFYLXBuLVlyMk5iaFZsQXxBQ3Jtc0tsQVBzOGt4WnhLdVdzQjJXQUtLNFFWbmk5eC1YNC1FbVhweFdYX2F4T3JDd0ptS2xaZldXOEY4TUZGOThCaWtEWXl6ekhXS0NBWVVWVzA5cnBDOGY1U0tTRkdGcTRVcm9HaUVDVnlaRld2cGdXN0YyZw&q=https%3A%2F%2Fattractivechicktyh5.com%2F%3Futm_source%3DlE4HZjeECe15Tz%26utm_campaign%3Dyy_vip&html_redirect=1";

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {

    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = app;
      window.setTimeout(function() {
        window.location.href = mobileFallback;
      }, 25);
    } else {
    }

    function killPopup() {
      window.removeEventListener('pagehide', killPopup);
    }

    window.addEventListener('pagehide', killPopup);
  }, 10);
});

document.getElementById("button").addEventListener("click", function() {
  // Add your desired action here
  alert("Button clicked!");
});