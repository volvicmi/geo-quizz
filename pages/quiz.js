const quiz = {
    template: `
		<div class="mainApp" ref="mainApp">
			<header class="menu" ref="header">
				<button id="return" class="btn btnClickAnimation" @click="btnReturn">
					<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 11L11 1C11.3333 1 12 1.2 12 2L3 11L12 20C12 20.3333 11.8 21 11 21L1 11Z" fill="black" stroke="black" stroke-linejoin="round"/>
					</svg>
				</button>
				<div class="advance">
					<div id="score">
						<div class="progressCircle" :style="{ background: updateProgress }">
							<div class="progressValue">{{ progression }}</div>
						</div>
					</div>
					<span class="nameTag">{{ username }}</span>
				</div>
				<button id="btnTips" class="btn btnClickAnimation" @mousedown.prevent="giveTips">
					<svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M14.9999 6.18333C15.8366 6.18333 16.3944 5.62556 16.3944 4.78889V3.39444C16.3944 2.55778 15.8366 2 14.9999 2C14.1632 2 13.6055 2.55778 13.6055 3.39444V4.78889C13.6055 5.62556 14.1632 6.18333 14.9999 6.18333Z" fill="black"/>
						<path d="M26.1561 13.1558H24.7616C23.925 13.1558 23.3672 13.7135 23.3672 14.5502C23.3672 15.3869 23.925 15.9447 24.7616 15.9447H26.1561C26.9927 15.9447 27.5505 15.3869 27.5505 14.5502C27.5505 13.7135 26.9927 13.1558 26.1561 13.1558Z" fill="black"/>
						<path d="M6.63353 14.5502C6.63353 13.7135 6.07575 13.1558 5.23908 13.1558H3.84464C3.00797 13.1558 2.4502 13.7135 2.4502 14.5502C2.4502 15.3869 3.00797 15.9447 3.84464 15.9447H5.23908C6.07575 15.9447 6.63353 15.3869 6.63353 14.5502Z" fill="black"/>
						<path d="M21.8339 9.11119C22.2522 9.11119 22.5311 8.97175 22.81 8.69286L23.7861 7.71675C24.3439 7.15897 24.3439 6.3223 23.7861 5.76452C23.2283 5.20675 22.3917 5.20675 21.8339 5.76452L20.8578 6.74064C20.3 7.29841 20.3 8.13508 20.8578 8.69286C21.1367 8.97175 21.555 9.11119 21.8339 9.11119Z" fill="black"/>
						<path d="M7.05069 20.4065L6.07458 21.3826C5.51681 21.9404 5.51681 22.777 6.07458 23.3348C6.35347 23.6137 6.77181 23.7531 7.05069 23.7531C7.32958 23.7531 7.74792 23.6137 8.02681 23.3348L9.00292 22.3587C9.56069 21.8009 9.56069 20.9642 9.00292 20.4065C8.44514 19.8487 7.60847 19.9881 7.05069 20.4065Z" fill="black"/>
						<path d="M22.9477 20.4061C22.3899 19.8483 21.5533 19.8483 20.9955 20.4061C20.4377 20.9639 20.4377 21.8006 20.9955 22.3583L21.9716 23.3345C22.2505 23.6133 22.6688 23.7528 22.9477 23.7528C23.2266 23.7528 23.6449 23.6133 23.9238 23.3345C24.4816 22.7767 24.4816 21.94 23.9238 21.3822L22.9477 20.4061Z" fill="black"/>
						<path d="M7.05188 8.69314C7.33076 8.97203 7.7491 9.11148 8.16743 9.11148C8.58576 9.11148 8.86465 8.97203 9.14354 8.69314C9.70132 8.13536 9.70132 7.2987 9.14354 6.74092L8.16743 5.62536C7.60965 5.06759 6.77299 5.06759 6.21521 5.62536C5.65743 6.18314 5.65743 7.01981 6.21521 7.57759L7.05188 8.69314Z" fill="black"/>
						<path d="M21.9724 14.5501C21.9724 12.4584 20.9963 10.3667 19.323 9.11172C17.6496 7.71728 15.4185 7.29895 13.3269 7.85672C10.8169 8.4145 8.86463 10.3667 8.30686 12.8767C7.74908 14.9684 8.16741 16.9206 9.42241 18.5939C10.2591 19.9884 10.8169 21.5223 10.8169 23.0562C10.8169 24.4506 11.9324 25.7056 13.4663 25.7056H16.6735C18.068 25.7056 19.323 24.5901 19.323 23.0562C19.323 21.5223 19.8807 19.9884 20.9963 18.3151C21.5541 17.1995 21.9724 15.9445 21.9724 14.5501ZM18.4863 16.7812C17.0919 18.7334 16.3946 20.8251 16.3946 22.9167H13.6057C13.6057 20.8251 12.9085 18.7334 11.6535 16.9206C10.8169 15.9445 10.6774 14.6895 10.9563 13.4345C11.3746 12.0401 12.4902 10.7851 14.0241 10.5062C15.2791 10.2273 16.6735 10.5062 17.6496 11.3428C18.6257 12.0401 19.1835 13.2951 19.1835 14.5501C19.1835 15.3867 18.9046 16.2234 18.4863 16.7812Z" fill="black"/>
						<path d="M16.3952 27.1001H13.6064C12.7697 27.1001 12.2119 27.6579 12.2119 28.4945C12.2119 29.3312 12.7697 29.889 13.6064 29.889H16.3952C17.2319 29.889 17.7897 29.3312 17.7897 28.4945C17.7897 27.6579 17.2319 27.1001 16.3952 27.1001Z" fill="black"/>
						</svg>
				</button>
			</header>
			<div class="quizzHolder" ref="quizzHolder">
				<div class="bgColorSwitch"></div>
				<img src="images/worldBgApple.jpg" alt="">
				<transition-group class="messageContainer" ref="messageContainer" name="fade" tag="div" @enter="enterAnimation">
					<div class="questionHolder hiddenBlock" :key="'questionHolder'"><span>test</span></div>
					<div v-for="(message, index) in messages" :key="index" :class="message.type" v-html="message.text">
					</div>
				</transition-group>
			</div> 
			<div class="inputHolder" ref="inputHolder">
				<div class="inputDot">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 8L1 8" stroke="#7E7F84" stroke-width="2" stroke-linecap="round"/>
						<path d="M8 1L8 15" stroke="#7E7F84" stroke-width="2" stroke-linecap="round"/>
					</svg>
				</div>
				<div class="inputContainer">
					<input id="userInput" v-model="userInput" ref="protectedInput" @keydown="preventDeletion" @keydown.enter="verifWord" type="text" placeholder="Message">
					<div id="letterTipsContainer">
						<span class="tips">{{ tips }}</span>{{ userInput.slice(tips.length) }}
					</div>
				</div>
			</div>
		</div>
    `,
    data() {
        return {
          progression: 0,  // Le score de progression
          progressionMax: 0, // Nombre total d'éléments dans le JSON, mis à jour dynamiquement
          currentWord: '',
          currentPrefix: '',
          userInput: '',
          tips: '',
		  lockedContent: '',
          actual_JSON: null,
          currentElement: null,
          messages: [],  // Liste pour stocker les messages de l'utilisateur
          capitalsFound: [] // Liste des capitales trouvées pour ne pas les répéter
        };
    },
    mounted() {
		this.loadProgress();
		this.loadJSON();
		this.username = localStorage.getItem('username') || 'Utilisateur';
		},
	computed:{
		updateProgress() {
		// Récupère les valeurs des variables CSS
		const rootStyles = getComputedStyle(document.documentElement);
		const mainColor = rootStyles.getPropertyValue('--mainColor').trim();
		const bgColorScore = rootStyles.getPropertyValue('--bgColorScore').trim();

		const percentage = (this.progression / this.progressionMax) * 100;
		return `conic-gradient(${mainColor} ${percentage * 3.6}deg, ${bgColorScore} 0deg)`;
		}
	},
  	methods: {
		// Fonction pour normaliser une chaîne de caractères
		normalizeString(str) {
		return str
			.replace(/\s/g, "")  // Supprime les espaces
			.replace(/[àáâãäå]/g, "a")  // Remplace les accents sur "a"
			.replace(/æ/g, "ae")
			.replace(/ç/g, "c")
			.replace(/[èéêë]/g, "e")
			.replace(/[ìíîï]/g, "i")
			.replace(/ñ/g, "n")
			.replace(/[òóôõö]/g, "o")
			.replace(/œ/g, "oe")
			.replace(/[ùúûü]/g, "u")
			.replace(/[ýÿ]/g, "y")
			.replace(/\W/g, "");  // Supprime les caractères non-alphanumériques
		},
		
		// Fonction pour sauvegarder la progression dans localStorage
		saveProgress() {
		localStorage.setItem('progression', this.progression);
		localStorage.setItem('username', this.username);
		localStorage.setItem('capitalsFound', JSON.stringify(this.capitalsFound));
		},
		
		// Fonction pour charger la progression depuis localStorage
		loadProgress() {
		const savedProgression = localStorage.getItem('progression');
		const savedNameTag = localStorage.getItem('username');
		const savedCapitalsFound = localStorage.getItem('capitalsFound');
		
		if (savedProgression !== null) {
			this.progression = parseInt(savedProgression, 10);
		}
		if (savedNameTag !== null) {
			this.username = savedNameTag;
		}
		if (savedCapitalsFound !== null) {
			this.capitalsFound = JSON.parse(savedCapitalsFound);
		}
		},

		async loadJSON() {
			try {
				const response = await fetch('data/dataFR.json');
				if (!response.ok) {
				throw new Error('Erreur lors du chargement du fichier JSON');
				}
				this.actual_JSON = await response.json();
				
				// Met à jour progressionMax avec le nombre d'éléments dans le JSON
				this.progressionMax = this.actual_JSON.length;

				this.changeWord();  // Première question à afficher
			} catch (error) {
				console.error(error);
			}
		},
		
		// Fonction pour récupérer un élément aléatoire du tableau en excluant les capitales déjà trouvées
		getRandomElement(data) {
			const filteredData = data.filter(item => !this.capitalsFound.includes(item.country));
			
			if (filteredData.length === 0) {
				this.showSuccessMessage();
				return null;
			}
			
			const index = Math.floor(Math.random() * filteredData.length);
			const element = filteredData[index];
			data.splice(data.indexOf(element), 1);  // Supprimer l'élément de la liste
			return element;
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
		verifWord() {
			if (this.userInput.trim() === '') {
				return;
			}

			const response = this.normalizeString(this.userInput);

			// Vérifier si l'utilisateur demande une image ou un indice
			if (this.detectHintRequest(response)) {
				gsap.delayedCall(.5, () => {
					this.displayIndice();
				});
				  // Afficher l'image ou l'indice
				this.messages.push({ text: this.userInput, type: 'reponseHolder' });
				this.userInput = '';
				this.tips = '';

				return;  // Sortir de la fonction pour ne pas valider comme une réponse de capitale
			}

			const capitalCorrect = this.currentElement.capital.some(cap =>
				this.normalizeString(cap).toUpperCase() === response.toUpperCase()
			);

			this.messages.push({ text: this.userInput, type: 'reponseHolder' });

			gsap.delayedCall(.5, () => {
				if (capitalCorrect) {
				this.progression += 1;  // Incrémente la progression
				this.capitalsFound.push(this.currentElement.country);  // Ajouter la capitale trouvée
				this.saveProgress();  // Sauvegarder la progression

				this.messages.push({
					text: `Bonne réponse !`,
					type: 'questionHolder'
				});

				gsap.delayedCall(0.7, () => {
					this.changeWord();
				});
				} else {
				this.messages.push({
					text: `Mauvaise réponse !`,
					type: 'questionHolder'
				});
				}
			});

			this.userInput = '';
			this.tips = '';
		},
		detectHintRequest(response) {
			const keywords = ['Indice', 'indice'];  // Mots-clés à détecter
			console.log("on passe dans la fonction detechInt");
			return keywords.some(keyword => response.includes(keyword));
		},
		displayIndice() {
			this.messages.push({
				text: `Voici un indice : Sois meilleur !`,
			type: 'imageHolder'  // Classe spéciale pour les images
			});
		},
		changeWord() {
			if (this.actual_JSON.length === 0) {
				return;
			}

			const element = this.getRandomElement(this.actual_JSON);
			if (!element) return;

			this.currentElement = element;

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
			this.lockedContent = this.userInput;
		},
		preventDeletion(event) {
			const inputElement = this.$refs.protectedInput;
			const selectionStart = inputElement.selectionStart;
			const selectionEnd = inputElement.selectionEnd;
		  
			// Vérifier si l'utilisateur essaie de couper ou de coller du texte avec Ctrl+X ou Ctrl+V
			if ((event.ctrlKey || event.metaKey) && (event.key === 'x' || event.key === 'v')) {
			  // Empêcher de couper ou coller dans la partie verrouillée
			  if (selectionStart < this.lockedContent.length) {
				event.preventDefault();
			  }
			}
		  
			// Vérifier si une suppression est en cours (backspace ou delete)
			if (event.key === 'Backspace' || event.key === 'Delete') {
			  // Si du texte est sélectionné (par exemple avec Ctrl+A ou via une sélection manuelle)
			  if (selectionStart !== selectionEnd) {
				// Empêcher la suppression si la sélection commence avant la fin du contenu verrouillé
				if (selectionStart < this.lockedContent.length) {
				  event.preventDefault();
				}
			  } else {
				// Empêcher la suppression de la lettre si elle fait partie du contenu verrouillé
				if (
				  (event.key === 'Backspace' && selectionStart <= this.lockedContent.length) ||
				  (event.key === 'Delete' && selectionStart < this.lockedContent.length)
				) {
				  event.preventDefault(); // Bloquer la suppression
				}
			  }
			}
		  
			// Vérifier si l'utilisateur essaie de sélectionner tout avec Ctrl+A
			if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
			  // Permettre seulement la sélection de la partie non protégée
			  if (selectionStart < this.lockedContent.length) {
				event.preventDefault(); // Bloquer Ctrl+A si cela inclut le texte verrouillé
			  }
			}
		  },

		// Fonction pour afficher un message de succès une fois toutes les capitales trouvées
		showSuccessMessage() {
			this.messages.push({
				text: "Félicitations ! Vous avez deviné toutes les capitales.",
				type: "successMessage"
			});
		}
	}
};
