import Api from '../../src/utils/api.js';

export default function decorate(block) {
  const [pictureDiv, titleDiv, textDiv] = block.children;
  pictureDiv.classList.add('login-teaser__picture');
  titleDiv.classList.add('login-teaser__title');
  textDiv.classList.add('login-teaser__text');

  const sideDiv = document.createElement('div');
  sideDiv.classList.add('login-teaser__side');
  sideDiv.append(titleDiv, textDiv);
  block.append(sideDiv);

  const formEl = document.createElement('form');
  formEl.classList.add('login-teaser__form');
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('placeholder', 'Email');
  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('placeholder', 'Senha');

  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  formEl.append(emailInput, passwordInput, submitBtn);
  block.append(formEl);

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    Api.login()
      .then((r) => {
        block.append(r.body);
      });
  });
}
