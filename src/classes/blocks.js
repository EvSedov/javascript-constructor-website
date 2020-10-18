import {row, col, css} from '../utils';

class Block {
  constructor(value, options) {
    this.value = value,
    this.options = options
  }

  toHTML() {
    throw new Error('Метод toHTML() должен быть определен.');
  }
};

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { tag = 'h2', styles } = this.options;
    const html = `<${tag}>${this.value}</${tag}>`;
    return row(col(html), css(styles));
  }
};

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { tag, imageStyles: is, alt = '', styles } = this.options;
    const html = `<${tag} src='${this.value}' alt='${alt}' style="${css(is)}" />`;
    return row(html, css(styles));
  }
};

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { tag = 'p', styles } = this.options;
    const html = `<${tag}>${this.value}</${tag}>`;
    return row(col(html), css(styles));
  }
};

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }

  toHTML() {
    const { tag = 'p', styles } = this.options;
    const buildElement = (element) => col(`<${tag}>${element}</${tag}>`);
    const html = this.value.map(buildElement).join('');
    return row(html, css(styles));
  }
};