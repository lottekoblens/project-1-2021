export const errorState = () => {
  const section = document.querySelectorAll('section');
  const html = `
              <article>
                <h2>Geen data gevonden, probeer het later opnieuw!</h2>
              </article>
            `;
  section.insertAdjacentHTML('afterbegin', html);
};
