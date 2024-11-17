document.getElementById("searchButton").addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/superheroes.php";
    xhr.open("GET", url, true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert(xhr.responseText);
      } else {
        alert('Request failed. Status: ' + xhr.status);
      }
    };
    xhr.send();
  });