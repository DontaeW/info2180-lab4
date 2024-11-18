window.onload = function () {
  const searchButton = document.querySelector(".buttn");
  const superHeroInput = document.getElementById("super_hero");
  const result = document.getElementById("result");

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();

    const searchVal = superHeroInput.value.trim();

    if (!searchVal) {
      fetch('http://localhost/info2180-lab4/superheroes.php')
        .then((response) => response.text())
        .then((data) => {
          result.innerHTML = `
            <h2>RESULT</h2>
            <ul>
              ${data}
            </ul>
          `;
        })
        .catch((error) => {
          console.error('Error:', error);
          result.innerHTML = `
            <h2>RESULT</h2>
            <p class="error">An error occurred while fetching the heroes list. Please try again.</p>
          `;
        });
      return;
    }
    const sanitizedInput = encodeURIComponent(searchVal);

    fetch(`http://localhost/info2180-lab4/superheroes.php?query=${sanitizedInput}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => {
        result.innerHTML = `
          <h2>RESULT</h2>
          ${data}
        `;
      })
      .catch((error) => {
        console.error('Error:', error);
        result.innerHTML = `
          <h2>RESULT</h2>
          <p class="error">An error occurred. Please try again.</p>
        `;
      });
  });
};

