document.addEventListener('DOMContentLoaded', function() {
            const numbersGrid = document.getElementById('numbersGrid');
            const sortButton = document.getElementById('sortButton');
            const result = document.getElementById('result');
            let numbers = [];
            let lastWinner = null;

            // Array de URLs de imágenes de fondo
            const backgroundImages = [
                
'img/01-andres-jimenez.png',

'img/02-luis-angel-acuña.png',

'img/03-francisco-alvarez.png',
               
'img/04-luis-arraez.png',
                
'img/05-brayan-rocchio.png',
               
'img/06-ranger-suarez.png',

'img/07-luis-garcia.png',
                
'img/08-orlando-arcia.png',
                
'img/09-pablo-lopez.png',

'img/10-jackson-chourio.png',
                
'img/11-maikel-garcia.png',
                
'img/12-luis-torrens.png',
               
'img/13-ronald-acuña.png',
                
'img/14-salvador-perez.png',
                
'img/15-ezequiel-tovar.png',
                
'img/16-miguel-roja.png',
                
'img/17-eduardo-rodriguez.png',
                
'img/18-brusdar-graterol.png',
                
'img/19-ildemaro-vargas.png',
                
'img/20-jose-suarez.png ',
               
'img/21-wilmer-flores.png',
               
'img/22-williams-contreras.png',
                
'img/23-david-peralta.png',
                
'img/24-miguel-cabrera.png',
                
'img/25-anthony-santander.png',
                
'img/26-gleyber-torres.png',
                
'img/27-jose-altuve.png',
                
'img/28-eugenio-suarez.png',
               
'img/29-german-marquez.png',
                
'img/30-oswaldo-cabrera.png',
                
'img/31-wilmer-contreras.png',
                
'img/32-martin-perez.png',
                
'img/33-gabriel-montero.png',
                
'img/34-freddy-fermin.png',
                
'img/35-robert-suarez.png',
               
'img/36-jose-alvarado.png',
            ];

            // Generar los 36 números
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
                      
