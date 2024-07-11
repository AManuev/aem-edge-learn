export default function decorate(block) {
  const firstLink = block.querySelector('a');
  firstLink.style.color = 'blue';
  firstLink.style.backgroundColor = 'white';

 if (block.children[2]) {
      const bkColor = block.children[2].firstElementChild.firstElementChild.innerText.trim()

      if (bkColor) {
        block.parentElement.classList.add(bkColor);
      }
      block.children[2].remove();
  }
}
