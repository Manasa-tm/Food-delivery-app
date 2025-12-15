document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const button = card.querySelector('button');
    const counter = document.createElement('div');
    counter.className = 'counter';
    counter.style.marginTop = '10px';
    counter.style.fontWeight = 'bold';
    counter.style.display = 'none'; // Hidden by default

    let count = 0;

    const minusBtn = document.createElement('button');
    minusBtn.textContent = '-';
    minusBtn.style.marginRight = '5px';
    minusBtn.style.display = 'none';

    const plusBtn = document.createElement('button');
    plusBtn.textContent = '+';
    plusBtn.style.marginLeft = '5px';
    plusBtn.style.display = 'none';

    card.appendChild(counter);
    card.appendChild(minusBtn);
    card.appendChild(plusBtn);

    button.addEventListener('click', () => {
      count = 1;
      counter.textContent = count;
      counter.style.display = 'block';
      button.style.display = 'none';
      minusBtn.style.display = 'inline-block';
      plusBtn.style.display = 'inline-block';
    });

    plusBtn.addEventListener('click', () => {
      count++;
      counter.textContent = count;
    });

    minusBtn.addEventListener('click', () => {
      if (count > 1) {
        count--;
        counter.textContent = count;
      } else {
        count = 0;
        counter.style.display = 'none';
        button.style.display = 'inline-block';
        minusBtn.style.display = 'none';
        plusBtn.style.display = 'none';
      }
    });
  });
});
