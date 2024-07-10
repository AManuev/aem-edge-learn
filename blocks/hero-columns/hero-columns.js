import { getMetadata } from '../../scripts/aem.js';

/**
 * loads and decorates the hero
 * @param {Element} block The hero column
 */
export default async function decorate(block) {

  let first = block.querySelector('a');
  firstLink.style.color = 'blue';
  firstLink.style.backgroundColor = 'white';
}