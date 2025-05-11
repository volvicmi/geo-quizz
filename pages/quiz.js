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
				<button id="btnTips" class="btn btnClickAnimation" @mousedown.prevent="giveTips" @touchstart.prevent="giveTips">
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
				<img :src="$root.preloadedImageSrc" alt="géoquiz">
				<transition-group class="messageContainer" ref="messageContainer" name="fade" tag="div" @enter="enterAnimation">
					<div class="questionHolder hiddenBlock" :key="'questionHolder'"><span>test</span></div>
					<div v-for="(message, index) in messages" :key="index" :class="message.type" v-html="message.text">
					</div>
				</transition-group>
			</div> 
			<div class="inputHolder" ref="inputHolder">
				<router-link to="/list" class="inputDot">
					<svg width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M32.4538 1.62289C15.332 1.62289 1.40356 15.6979 1.40356 33C1.40356 50.302 15.332 64.3771 32.4538 64.3771C49.5756 64.3771 63.504 50.302 63.504 33C63.504 15.6979 49.5756 1.62289 32.4538 1.62289ZM47.6142 13.1588L46.4681 12.0357L46.6592 11.3341L47.4582 10.9658L48.5523 11.2991L49.3159 12.2289L47.9966 12.3515L48.9084 13.2463L49.7501 14.2286L50.3058 15.211C50.3058 15.211 51.2605 16.439 51.2605 16.5091C51.2605 16.5791 51.3472 17.1406 51.3472 17.1406L50.1319 16.9648L48.7601 15.9474L48.5689 15.1225L48.6209 14.1577L47.6142 13.1588ZM32.4538 63.2996C28.7488 63.2996 25.2003 62.6123 21.9214 61.3647L20.2602 60.147L17.3291 57.8763L14.1535 55.6055C14.1535 55.6055 13.567 53.8775 13.5183 53.7297C13.4697 53.582 12.7367 52.0511 12.541 51.8039C12.3453 51.5569 10.4711 49.5331 10.4711 49.5331L9.60925 47.361L8.33864 44.7939H5.75027L4.60815 44.2168C3.23354 40.7438 2.46948 36.9615 2.46948 32.9997C2.46948 18.3297 12.8409 6.06479 26.5619 3.29009L24.9623 3.91193V5.31641L26.9509 5.81771H29.6272L31.5132 2.90889L33.7962 5.81771H31.0171L28.8335 6.82071H25.5576L22.5797 7.92443L18.2125 10.8332L19.503 11.435L19.0069 12.2377L15.4335 13.3414L14.9374 16.6517L16.3272 17.0532L18.4114 15.9495L19.7019 14.9465L19.9001 13.9435L22.0837 11.8374L25.7566 11.1351L27.2453 12.3386L29.2306 12.8399L28.7345 14.5452L30.5208 12.7401L27.5429 10.5336L29.6271 10.634L31.017 11.3363L32.0095 13.7438L33.7958 14.5465V12.5402L35.1856 12.4398L36.3766 12.139L37.7665 10.1327L38.6596 10.835L40.8432 10.2332L41.6375 11.3369L43.7223 12.3399V13.3429L40.2483 12.7411L37.1715 12.5408L35.484 13.1426V14.2463L37.0721 15.0484H38.6602L40.6455 15.1489L40.8438 16.6532L38.8584 18.1575L33.201 17.1545L31.7124 17.556L30.918 18.1578L27.5435 16.9543L25.0622 16.0517L24.2679 15.1492L21.29 15.751L17.9154 17.7572H16.0294L13.3492 20.7665L12.5548 22.6723L10.4706 25.3808V30.9978L12.5558 32.9998L14.5412 34.6053L16.3275 35.1066H19.4042L22.68 32.9998L24.7642 33.9037H26.4518L25.9557 37.3138L27.0972 39.0191L28.7348 42.1282L28.0399 43.8335L28.4372 46.7423L29.6281 49.1498L30.5213 51.6572L31.3156 52.8607L32.454 54.3114L33.8566 54.5461L34.6908 53.1617L36.6762 51.3566L37.7684 49.7518L38.9594 46.9435L42.334 46.0409L42.4334 41.327L43.7239 39.6217L46.4042 36.0107L49.0844 34.7066L50.6715 32.9999V30.9949L46.4031 30.7946L45.6094 28.8175L44.319 27.284L42.9291 24.4756L42.1354 22.6705L40.15 19.461H42.036L42.6315 20.464L43.624 23.072L44.6166 25.1781L46.0064 25.5796L46.3041 26.6833L46.6017 28.8186L46.999 29.692H50.0757L52.3587 28.8186H54.6417L55.3367 26.2819L53.1531 23.4735L52.3593 24.2756L50.573 23.3731L48.29 19.8625L49.5805 19.762L51.6647 21.066L52.9551 22.2696L54.2456 23.1721L55.3378 24.4761L56.8265 25.3787L58.1169 26.6827L58.9106 28.388V29.7925L60.2011 30.2938V37.6155L61.0942 37.2141L62.3993 34.5653C61.5894 50.5472 48.4682 63.2995 32.4538 63.2995L32.4538 63.2996Z" fill="#F4F4F6"/>
						<path d="M43.5654 46.5704L41.9528 48.2984L41.7083 50.5691L42.3437 51.3096L43.7116 50.0756L44.8351 48.9894L46.0569 47.2121L45.715 45.3356L43.5654 46.5704Z" fill="#F4F4F6"/>
						<path d="M25.5902 12.7514L25.3867 12.0317H24.7001L24.1663 12.263L24.7001 12.5969L25.5902 12.7514Z" fill="#F4F4F6"/>
						<path d="M24.3186 13.6506L24.8782 14.5759L25.1829 14.0539V13.4712L24.4964 13.1883L24.3186 13.6506Z" fill="#F4F4F6"/>
						<path d="M27.7262 13.8818L27.4463 14.0537L26.7598 14.1647V14.6529L27.574 14.3532L27.7262 13.8818Z" fill="#F4F4F6"/>
						<path d="M35.4872 15.6488L34.9117 15.4162L33.926 15.3383V15.8556L35.1678 16.3335L35.4872 15.6488Z" fill="#F4F4F6"/>
						<path d="M18.1013 8.80524L18.5684 8.22755L17.9722 7.93521L17.3448 8.35799L16.9905 8.78141L16.2173 9.67617L17.4409 9.57823L18.1013 8.80524Z" fill="#F4F4F6"/>
						<path d="M20.8386 8.16276L20.6935 7.33284V6.48665H20.1623L19.4218 6.69794V8.34179L18.5684 9.367L20.8386 8.16276Z" fill="#F4F4F6"/>
					</svg>
				</router-link>
				<div class="inputContainer">
					<input id="userInput" v-model="userInput" ref="protectedInput" @keydown="preventDeletion" @keydown.enter="verifWord" type="text" placeholder="Message">
					<div class="sendBtn" @click="verifWord">
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20.25 9.20274L2.17 0.162736C1.7 -0.0772636 1.16 -0.0472636 0.71 0.222736C0.27 0.502736 0 0.982736 0 1.50274V7.25274C0 7.95274 0.48 8.55274 1.16 8.71274L8.96 10.5427L1.16 12.3727C0.48 12.5327 0 13.1327 0 13.8327V19.5827C0 20.1027 0.27 20.5827 0.71 20.8627C0.95 21.0127 1.23 21.0827 1.5 21.0827C1.73 21.0827 1.96 21.0327 2.17 20.9227L20.25 11.8827C20.76 11.6327 21.08 11.1127 21.08 10.5427C21.08 9.97274 20.76 9.45274 20.25 9.20274Z" fill="black"/>
						</svg>
					</div>
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
          capitalsFound: [], // Liste des capitales trouvées pour ne pas les répéter
		  region: null
        };
    },
	created() {
		// Récupérer la région depuis les paramètres de route
		this.region = this.$route.params.region || 'global';
		
		// Charger les capitales trouvées spécifiques à cette région
		const savedCapitalsFound = localStorage.getItem(`capitalsFound_${this.region}`);
		if (savedCapitalsFound) {
		  this.capitalsFound = JSON.parse(savedCapitalsFound);
		}
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
		
		loadProgress() {
			// Charger la progression spécifique à la région
			const savedProgression = localStorage.getItem(`progression_${this.region}`);
			if (savedProgression !== null) {
			  this.progression = parseInt(savedProgression, 10);
			}
		},
		saveProgress() {
			// Sauvegarder la progression spécifique à la région
			localStorage.setItem(`progression_${this.region}`, this.progression);
			localStorage.setItem(`progressionMax_${this.region}`, this.progressionMax);
			localStorage.setItem(`capitalsFound_${this.region}`, JSON.stringify(this.capitalsFound));
		},

		async loadJSON() {
			try {
			  // Charger le JSON correspondant à la région
			  const jsonFile = `data${this.region.toUpperCase()}.json`;
			  const response = await fetch(`data/${jsonFile}`);
			  if (!response.ok) {
				throw new Error('Erreur lors du chargement du fichier JSON');
			  }
			  this.actual_JSON = await response.json();
			  this.progressionMax = this.actual_JSON.length;
			  this.changeWord();
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
			this.lockedContent = '';
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
				text: `Quelle est la capitale <span class="no-wrap">${this.currentElement.prefix}<span class="word">${this.currentElement.country}</span> ?</span>`,
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
				type: "successMessage, questionHolder"
			});
		}
	}
};
