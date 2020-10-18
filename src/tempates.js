export default (block) => {
  if (block.type === 'image') {
    return `
      <div class="row">
        <img src="${block.value}" alt="${block.value}">
      </div>
    `
  }
  const value = (Array.isArray(block.value)) ? block.value : [ block.value ];
  const html = value.map((item) => `<div class="col"><${block.tag}>${item}</${block.tag}></div>`).join('');
  return `
    <div class="row">
      ${html}
    </div>
  `
};
