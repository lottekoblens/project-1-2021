import { renderDataOpenLeerMateriaal, renderDataDiet, renderDataSport, renderDataNutrition } from './render.js';
import { loadingState } from './ui.js';

export const getDataNutrition = () => {
  loadingState();
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const key = 'ffbc1ededa6f23371bc40df1864843be';
  const secret = '3374c8bacbdd81eef70e7bb33d451efd';
  const detail = 'Default';
  const pagesize = '20';
  const query = 'voeding';
  // with the query the books about voeding are fetched
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };
  // authorization header uses secret key for this API

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data = data.results;
      // because I only need the data that is stored in data.results.
      // I set data to data.results, so I don't have to doe that every time I want to use it
      renderDataNutrition(data);
    })
    .catch((err) => {
      console.log(err);
      // because the api doesn't work well at the time of making this,
      // the data is also stored in a local file so the data can be loaded when the api doesn't work
      fetch('nutrition.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          renderDataNutrition(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
};

export const getDataDiet = () => {
  loadingState();
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const key = 'ffbc1ededa6f23371bc40df1864843be';
  const secret = '3374c8bacbdd81eef70e7bb33d451efd';
  const detail = 'Default';
  const pagesize = '20';
  const query = 'dieet';
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data = data.results;
      // because I only need the data that is stored in data.results.
      // I set data to data.results, so I don't have to doe that every time I want to use it
      renderDataDiet(data);
    })
    .catch((err) => {
      // because the api doesn't work well at the time of making this,
      // the data is also stored in a local file so the data can be loaded when the api doesn't work
      console.log(err);
      fetch('diet.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          renderDataDiet(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
};

export const getDataSport = () => {
  loadingState();
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
  const key = 'ffbc1ededa6f23371bc40df1864843be';
  const secret = '3374c8bacbdd81eef70e7bb33d451efd';
  const detail = 'Default';
  const pagesize = '20';
  const query = 'sport';
  const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&pagesize=${pagesize}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
  };

  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data = data.results;
      // because I only need the data that is stored in data.results.
      // I set data to data.results, so I don't have to doe that every time I want to use it
      renderDataSport(data);
    })
    .catch((err) => {
      console.log(err);
      // because the api doesn't work well at the time of making this,
      // the data is also stored in a local file so the data can be loaded when the api doesn't work
      fetch('sport.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          renderDataSport(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
};

export const getDataOpenLeermateriaal = () => {
  loadingState();
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const url = `${cors}https://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=voeding+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=76f45dfa187d66be5fd6af05573eab04&output=json`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data = data.results;
      // because I only need the data that is stored in data.results.
      // I set data to data.results, so I don't have to doe that every time I want to use it
      renderDataOpenLeerMateriaal(data);
    })
    .catch((err) => {
      console.log(err);
      // because the api doesn't work well at the time of making this,
      // the data is also stored in a local file so the data can be loaded when the api doesn't work
      fetch('openLeermateriaal.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          renderDataOpenLeerMateriaal(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
};
