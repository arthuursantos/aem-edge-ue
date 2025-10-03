export default function createForm(fields) {
  const formEl = document.createElement('form');
  fields.forEach(() => {
    const inputEl = document.createElement('input');
    formEl.append(inputEl);
  });

  const submitInputEl = document.createElement('input');
  submitInputEl.setAttribute('type', 'submit');
  formEl.append(submitInputEl);

  return formEl;
}
