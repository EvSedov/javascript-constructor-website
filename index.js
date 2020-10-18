const model = [
  { type: 'title', value: 'Hello World from JS!' },
  { type: 'text', value: 'С другой стороны начало повседневной работы по формированию            позиции требует анализа позиции, занимаемых участниками в отношении поставленных задач. Таким образом дальнейшее развитие различных форм деятельности обеспечивает широкому кругу специалистов экономической целесообразности принимаемых изменений.' },
  { type: 'columns', value: [
    '1111111',
    '2222222',
    '3333333'
  ] }
]

const $site = document.querySelector('#site');
console.log($site);

model.forEach((block) => {
  let html = '';
  if (block.type === 'title') {
    html = `
      <div class="row">
        <div class="col">
          <h1>${block.value}</h1>
        </div>
      </div>
    `
  } else if (block.type === 'text') {
    html = `
      <div class="row">
        <div class="col">
          <p>${block.value}</p>
        </div>
      </div>
    `
  } else if (block.type === 'columns') {
    
  }

  $site.insertAdjacentHTML('beforeend', html);
})
