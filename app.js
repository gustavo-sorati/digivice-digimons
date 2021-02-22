const url = `https://digimon-api.vercel.app/api/digimon`;

const DOM = {
  container: document.querySelector('[data-js="digimon"]'),

  generateHTML(digimons) {
    let digimonsEl = '';

    digimons.map(({ name, img, level }) => {
      digimonsEl += `
        <li>
            <img src="${img}" />
            <h2>${name}</h2>
            <p>${level}</p>
        </li>
      `;
    });

    console.log(digimonsEl);
    DOM.insertElements(digimonsEl);
  },

  insertElements(digimons) {
    DOM.container.innerHTML = digimons;
  },
};

const getDigimons = async () => {
  const respose = await fetch(url);
  const json = await respose.json();

  DOM.generateHTML(json);
};

getDigimons();
// console.log(digimons);
