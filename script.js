function changeContent() {
  const text = document.getElementById('dynamic-text');
  text.textContent = 'The content has been updated!';
  text.style.color = 'red';
  text.classList.toggle('highlight');
}

function toggleElement() {
  const existing = document.getElementById('extra');

  if (existing) {
    existing.remove();
  } else {
    const newElement = document.createElement('div');
    newElement.id = 'extra';
    newElement.textContent = 'This element was added dynamically!';
    newElement.style.marginTop = '10px';
    newElement.style.border = '1px solid #333';
    newElement.style.padding = '10px';
    document.body.appendChild(newElement);
  }
}
