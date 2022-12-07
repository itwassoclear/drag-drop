const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

placeholders.forEach((el) => {
  el.addEventListener('dragover', dragover);
  el.addEventListener('dragenter', dragenter);
  el.addEventListener('dragleave', dragleave);
  el.addEventListener('drop', drop);
});

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => {
    event.target.classList.add('hide');
  }, 0);
}

function dragend(event) {
  event.target.className = 'item';
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.add('hovered');
}

function dragleave(event) {
  event.target.classList.remove('hovered');
}

function drop(event) {
  event.target.classList.remove('hovered');
  event.target.append(item);
}
