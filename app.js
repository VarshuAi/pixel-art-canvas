
            const grid = document.getElementById('pixel-grid');
            for(let i=0; i<64; i++) {
                const cell = document.createElement('div');
                cell.className = 'p-cell';
                cell.addEventListener('click', () => {
                    cell.style.background = cell.style.background === 'violet' ? '' : 'violet';
                });
                grid.appendChild(cell);
            }
        