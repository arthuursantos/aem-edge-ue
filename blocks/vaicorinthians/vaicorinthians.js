export default async function decorate(block) {
  const [boolean] = block.children;
  const booleanValue = boolean.querySelector('p');

  if (booleanValue.textContent === 'true') {
    const response = await fetch('http://localhost:3233/api/v1/web/guest/eds/vaicorinthians', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const text = document.createElement('h1');
    text.innerHTML = await response.text();
    boolean.replaceChildren(text);
  }
}
