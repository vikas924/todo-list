import { tasks } from './add.js';

import remove from './remove.js';

export function edit(event) {
  const label = document.querySelectorAll('.listlabel');
  if (event.key === 'Enter' || event.key === 'Escape') {
    const inputvalue = this.value;
    const index = Array.from(label).indexOf(event.target);
    label[index].value = inputvalue;
    label[index].blur();
    const div = document.querySelectorAll('#style');
    div[index].style.backgroundColor = '#fff';
    this.style.backgroundColor = '#fff';
    const icon = document.querySelectorAll('.jvicon');
    const hide = document.querySelectorAll('.hide');
    icon[index].style.display = 'block';
    hide[index].style.display = 'none';
    tasks[index].description = label[index].value;
    localStorage.setItem('array', JSON.stringify(tasks));
  }
}

export function outclick() {
  const listner = (event) => {
    const label = document.querySelectorAll('.listlabel');
    const hide = document.querySelectorAll('.hide');
    const index = Array.from(label).indexOf(this);
    hide[index].removeEventListener('click', remove);
    if (event.target !== this) {
      const inputvalue = this.value;
      const index = Array.from(label).indexOf(this);
      label[index].value = inputvalue;
      tasks[index].description = label[index].value;
      localStorage.setItem('array', JSON.stringify(tasks));
      const div = document.querySelectorAll('#style');
      div[index].style.backgroundColor = '#fff';
      this.style.backgroundColor = '#fff';
      const icon = document.querySelectorAll('.jvicon');
      const hide = document.querySelectorAll('.hide');
      icon[index].style.display = 'block';
      hide[index].style.display = 'none';
      const list = document.querySelector('body');
      list.removeEventListener('click', listner);
      setTimeout(hide[index].addEventListener('click', remove), 2000);
    } else if (event.target === this) {
      const index = Array.from(label).indexOf(this);
      const div = document.querySelectorAll('#style');
      div[index].style.backgroundColor = 'red';
      this.style.backgroundColor = 'red';
      const icon = document.querySelectorAll('.jvicon');
      const hide = document.querySelectorAll('.hide');
      icon[index].style.display = 'none';
      hide[index].style.display = 'block';
    }
  };
  const list = document.querySelector('body');
  list.addEventListener('click', listner);
}