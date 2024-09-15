const app = Vue.createApp({
    data() {
      return {
        message: 'Bienvenue au Géo Quizz',
        score: 0,
        nameTag: 'John Doe',
        currentWord: '',
        userInput: '',
        tips: '',
        actual_JSON: null,
        currentElement: null,
      };
    },
    mounted() {
      this.loadJSON();
    },
    methods: {
      async loadJSON() {
        try {
          const response = await fetch('data/dataFR.json');
          if (!response.ok) {
            throw new Error('Erreur lors du chargement du fichier JSON');
          }
          this.actual_JSON = await response.json();
          this.changeWord();
        } catch (error) {
          console.error(error);
        }
      },
      setupEvenement() {
        // Vous pouvez ignorer cette fonction, Vue gère les événements automatiquement
      },
      getRandomElement(data) {
        const index = Math.floor(Math.random() * data.length);
        const element = data[index];
        data.splice(index, 1);
        return element;
      },
      normalizeString(str) {
        return str
          .replace(/\s/g, "")
          .replace(/[àáâãäå]/g, "a")
          .replace(/æ/g, "ae")
          .replace(/ç/g, "c")
          .replace(/[èéêë]/g, "e")
          .replace(/[ìíîï]/g, "i")
          .replace(/ñ/g, "n")
          .replace(/[òóôõö]/g, "o")
          .replace(/œ/g, "oe")
          .replace(/[ùúûü]/g, "u")
          .replace(/[ýÿ]/g, "y")
          .replace(/\W/g, ""); // Remove all non-word characters including apostrophes
      },
      verifWord() {
        const response = this.normalizeString(this.userInput);
  
        const capitalCorrect = this.currentElement.capital.some(cap => 
          this.normalizeString(cap).toUpperCase() === response.toUpperCase()
        );
  
        if (capitalCorrect) {
          this.changeScore('increase');
          this.changeWord();
        }
      },
      changeWord() {
        if (this.actual_JSON.length === 0) {
          this.showSuccessMessage();
          return;
        }
  
        this.currentElement = this.getRandomElement(this.actual_JSON);
        this.currentWord = this.currentElement.country;
        this.userInput = '';
        this.tips = '';
      },
      changeScore(action) {
        switch (action) {
          case 'increase':
            this.score += 1;
            break;
          case 'split':
            this.score = Math.trunc(this.score / 2);
            break;
        }
      },
      showSuccessMessage() {
        this.currentWord = "Félicitations ! Vous avez deviné toutes les capitales.";
        this.userInput = '';
      },
      giveTips() {
        const newTip = this.currentElement.capital[0].substr(this.tips.length, 1);
        this.tips += newTip;
        this.userInput = this.tips;
        this.changeScore('split');
      }
    }
  });
  
  app.mount('#app');
  