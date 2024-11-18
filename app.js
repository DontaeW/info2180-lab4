window.onload = function () {
    const searchButton = document.querySelector(".buttn");
    const super_hero = document.getElementById("super_hero");
    const result = document.getElementById("result");
    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
          
        const searchVal = super_hero.value.trim();
        fetch(`http://localhost/info2180-lab4/superheroes.php?query=${encodeURIComponent(searchVal)}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            result.innerHTML = '';
            
            const resultTitle = document.createElement('h2');
            resultTitle.textContent = 'RESULT';
            result.appendChild(resultTitle);

            try {
                
                result.innerHTML += data;
            } catch (e) {
                throw new Error('Error parsing response data');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            result.innerHTML = `
                <h2>RESULT</h2>
                <p class="error">SUPERHERO NOT FOUND</p>
            `;
        });
    });
};
