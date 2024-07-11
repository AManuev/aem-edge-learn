export default function decorate(block) {
  const firstLink = block.querySelector('a');
  firstLink.style.color = 'blue';
  firstLink.style.backgroundColor = 'white';

  if (block.children[2]) {
    const bkColor = block.children[2].firstElementChild.firstElementChild.innerText.trim()

    if (bkColor) {
      if (block.classList.contains('white') || block.classList.contains('magenta') || block.classList.contains('black')) {
        block.classList.remove('white');
        block.classList.remove('magenta');
        block.classList.remove('black');
      }
      if (block.parentElement.classList.contains('white') || block.parentElement.classList.contains('magenta') || block.parentElement.classList.contains('black')) {
        block.parentElement.classList.remove('white');
        block.parentElement.classList.remove('magenta');
        block.parentElement.classList.remove('black');
      }

      block.classList.add(bkColor.toLowerCase());
      block.parentElement.classList.add(bkColor.toLowerCase());
    }
    block.children[2].remove();
   }
}
