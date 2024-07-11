export default function decorate(block) {
  const firstLink = block.querySelector('a');
  firstLink.style.color = 'blue';
  firstLink.style.backgroundColor = 'white';

  const bkColor = block.children[0].firstElementChild.firstElementChild.firstElementChild.alt.trim();
  if (bkColor) {
    block.parentElement.style.backgroundColor = bkColor;
  }
}
