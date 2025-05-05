document.addEventListener('DOMContentLoaded', function() {
            const numbersGrid = document.getElementById('numbersGrid');
            const sortButton = document.getElementById('sortButton');
            const result = document.getElementById('result');
            let numbers = [];
            let lastWinner = null;

            // Array de URLs de imágenes de fondo
            const backgroundImages = [
                
  'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/37729.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42411.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41253.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39572.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41217.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39817.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4684365.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32530.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39671.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4917869.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4905884.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33805.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/36185.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31127.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4905919.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30791.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32675.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40965.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32985.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40981.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30627.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/39895.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33384.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5544.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/36084.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/33804.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31662.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32367.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/34874.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/40835.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32532.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/31098.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/42464.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/41928.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4148749.png&w=350&h=254',

                'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/36063.png&w=350&h=254',
              'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjB-_RS1oS9D09PZNG3b7yVUcwY6iLe8K_U2699ch4YYUG1CgpqI_5flL-nVtdaxQOTX8fnjtwxrwP9HKA7o90DcoUgPXJmUFQsuQxpYnG5X7wrsbuTkzRSjc9Y4AkQQRI13gpb8OmlNEAAz0LzzuYW5tCKtYdn3hIPr3Jop2rkSJU88JlybGPAn-i5qd_/s1600/2024112914014828.png&w=350&h=254'         
            ];

            // Generar los 37 números
            for (let i = 1; i <= 36; i++) {
                const numberDiv = document.createElement('div');
                numberDiv.className = 'number';
                numberDiv.innerHTML = `<span>${i}</span>`;
                numberDiv.style.backgroundImage = `url(${backgroundImages[i-1]})`;
                numbersGrid.appendChild(numberDiv);
                numbers.push(numberDiv);
            }

            // Función para realizar el sorteo
            function performSort() {
                // Resetear el último ganador
                if (lastWinner) {
                    lastWinner.classList.remove('winner');
                }

                // Deshabilitar el botón durante la animación
                sortButton.disabled = true;

                // Efecto de selección aleatoria
                let iterations = 0;
                const maxIterations = 30;
                const interval = setInterval(() => {
                    numbers.forEach(num => num.classList.remove('selected'));
                    const randomIndex = Math.floor(Math.random() * numbers.length);
                    numbers[randomIndex].classList.add('selected');

                    iterations++;
                    if (iterations >= maxIterations) {
                        clearInterval(interval);
                        // Seleccionar el ganador final
                        const winnerIndex = Math.floor(Math.random() * numbers.length);
                        lastWinner = numbers[winnerIndex];
                        lastWinner.classList.add('winner');
                        result.textContent = `¡El número ganador es el ${winnerIndex + 1}!`;
                        sortButton.disabled = false;
                    }
                }, 100);
            }

            sortButton.addEventListener('click', performSort);
        });
                      
