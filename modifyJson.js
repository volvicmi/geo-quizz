const fs = require('fs');

// Lire le fichier JSON
fs.readFile('dataFR.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur de lecture du fichier:', err);
    return;
  }

  let countries = JSON.parse(data);

  // Convertir le format pour permettre plusieurs capitales
  countries = countries.map(country => {
    return {
      pays: country.pays,
      capitales: [country.capital || country.capitale]
    };
  });

  // Écrire les modifications dans un nouveau fichier JSON
  fs.writeFile('dataFR_modified.json', JSON.stringify(countries, null, 2), 'utf8', err => {
    if (err) {
      console.error('Erreur d\'écriture du fichier:', err);
      return;
    }
    console.log('Le fichier a été modifié et enregistré sous "dataFR_modified.json".');
  });
});
