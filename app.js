const app = Vue.createApp({
  data() {
    return {
      progression: 0,  // Le score de progression
      nameTag: 'John',
      currentWord: '',
      currentPrefix: '',
      userInput: '',
      tips: '',
      actual_JSON: null,
      currentElement: null,
      messages: []  // Liste pour stocker les messages de l'utilisateur
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
        this.changeWord();  // Première question à afficher
      } catch (error) {
        console.error(error);
      }
    },
    enterAnimation(el, done) {
		const messageContainer = document.querySelector('.messageContainer');
		gsap.from(el, {
			opacity: 0,
			duration: 0.6,
			ease: "power2.out",
			onComplete: () => {
				done(); // L'animation est terminée
			}
		});

	  // Animer le défilement en même temps que l'apparition du message
      gsap.to(messageContainer, {
        scrollTop: messageContainer.scrollHeight,
        duration: 0.6,  // Même durée que l'animation du message
        ease: "power2.out",
        onComplete: done
      });
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
        // Vérifie si l'input n'est pas vide
      if (this.userInput.trim() === '') {
        // Si l'input est vide, ne rien faire
        return;
      }

      const response = this.normalizeString(this.userInput);

      const capitalCorrect = this.currentElement.capital.some(cap =>
        this.normalizeString(cap).toUpperCase() === response.toUpperCase()
      );

      // Ajoute l'input de l'utilisateur avec la classe reponseHolder
      this.messages.push({ text: this.userInput, type: 'reponseHolder' });

      gsap.delayedCall(.5, () => {
        if (capitalCorrect) {
          // Incrémente le score de progression
          this.progression += 1;
  
          // Ajoute un message de succès avec la classe questionHolder, y compris la question posée
          this.messages.push({
            text: `Bonne réponse !`,
            type: 'questionHolder'
          });
          gsap.delayedCall(0.7, () => {
            this.changeWord(); // Change le mot après 0.5s
          });
        } else {
          // Ajoute un message d'erreur avec la classe questionHolder, y compris la question posée
          this.messages.push({
            text: `Mauvaise réponse !`,
            type: 'questionHolder'
          });
        }
      });

      this.userInput = ''; // Réinitialise l'input après chaque tentative
      this.tips = '';
    },
    changeWord() {
      if (this.actual_JSON.length === 0) {
        return;
      }

      this.currentElement = this.getRandomElement(this.actual_JSON);

      // Ajoute la nouvelle question dans la liste des messages
      this.messages.push({
        text: `Quelle est la capitale <span class="no-wrap">${this.currentElement.prefix}&nbsp;<span class="word">${this.currentElement.country}</span> ?</span>`,
        type: 'questionHolder'
      });

      this.currentWord = this.currentElement.country;
      this.currentPrefix = this.currentElement.prefix;
      this.userInput = '';
      this.tips = '';
    },
    giveTips() {
      const newTip = this.currentElement.capital[0].substr(this.tips.length, 1);
      this.tips += newTip;
      this.userInput = this.tips;
    }
  }
});

app.mount('#app');
