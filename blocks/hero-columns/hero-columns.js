import { getMetadata } from '../../scripts/aem.js';

/**
 * loads and decorates the hero
 * @param {Element} block The hero column
 */
export default async function decorate(block) {

  const heroColumnsMeta = getMetadata('hero_columns');
  let blockInt = block;
}