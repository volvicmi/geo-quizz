const home = {
    template: `
      	<div class="mainApp" ref="mainApp">
			<div class="home" ref="lockScreen"
				@touchstart="handleTouchStart" 
				@touchmove="handleTouchMove" 
				@touchend="handleTouchEnd"
				@mousedown="handleMouseDown"
				@mousemove="handleMouseMove"
				@mouseup="handleMouseUp">

				<div class="content" ref="content">
					<div class="topContainer">
						<p class="appName">GeoQuiz</p>
						<div>
							<span class="iconContainer"></span>
							<span class="iconContainer"></span>
							<span class="iconContainer"></span>
						</div>
					</div>
					<div class="clock">
						<p> 
							<span class="date">{{ currentDate }}</span>
							<span class="time">{{ currentTime }}</span>
						</p>
					</div>
					<div class="BottomBtnContainer">
						<button class="btnLeft button" @click="changeColor();" @touchstart="addClicked($event)">
							<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M25.0776 7.39576C25.0776 7.39576 13.5593 2.0544 13.1636 1.9594C12.7281 1.853 12.2797 1.7998 11.8287 1.7998C8.09134 1.7998 4.47469 5.41227 3.22847 10.3885C2.7184 12.4265 2.65801 14.4783 3.03446 16.3288C2.56038 16.995 2.16339 17.7803 1.88329 18.7163C1.79336 18.9924 -0.286732 25.5064 1.04175 27.8397C1.29614 28.2868 1.65845 28.5705 2.11839 28.6807C2.46144 28.7631 2.76594 28.7998 3.03575 28.7998C4.46701 28.7998 4.94495 27.7789 5.22245 27.1861C5.28668 27.0494 5.37148 26.8695 5.42801 26.8011C6.04086 26.9518 7.47855 27.2089 8.43698 26.6149C8.88922 26.335 9.17573 25.9094 9.28878 25.3509C9.40698 24.7682 9.40184 24.1134 9.39542 23.4814C9.39285 23.1951 9.39156 22.9127 9.39927 22.6391C12.6652 23.1951 20.7235 24.5592 20.7235 24.5592C21.0203 24.5972 21.3145 24.6162 21.6036 24.6162C25.0752 24.6162 27.9479 21.9044 29.0579 17.4727C30.3016 12.5039 27.9621 8.83575 25.0776 7.39576ZM5.53594 10.8309C6.55607 7.02741 9.2335 4.15845 11.7621 4.15845C12.0422 4.15845 12.3197 4.19392 12.587 4.26358C15.3133 4.97414 16.5865 9.07674 15.4263 13.4084C15.4212 13.4286 15.4148 13.4464 15.4084 13.4666C14.4499 13.2298 8.93055 12.0215 5.11195 14.3811C5.07341 13.264 5.20702 12.0568 5.53594 10.8309ZM16.7033 13.6655C15.6472 17.8882 12.6304 21.0979 9.61898 21.2601C9.70378 21.0333 9.82198 20.8269 9.98259 20.6483C12.5753 20.1619 15.051 17.3413 16.0608 13.5745C17.3147 8.89687 15.8308 4.43844 12.7536 3.6369C12.4324 3.55331 12.0984 3.51024 11.7618 3.51024C8.8967 3.51024 6.01118 6.51966 4.89849 10.6651C4.51304 12.1015 4.38714 13.5175 4.48479 14.8132C4.37687 14.8956 4.27408 14.9842 4.17002 15.0729C4.02355 13.6796 4.13147 12.1876 4.50405 10.6981C5.58842 6.36389 8.73609 3.0961 11.8275 3.0961C12.1718 3.0961 12.5161 3.13664 12.8476 3.2177C14.4318 3.60274 15.7114 4.87062 16.4514 6.78703C17.2249 8.787 17.3136 11.2284 16.7033 13.6655Z" fill="white"/>
							</svg>
						</button>
						<div class="swipeUpText">
							<div class="popAnimArrow">
								<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 11L11 1C11.3333 1 12 1.2 12 2L3 11L12 20C12 20.3333 11.8 21 11 21L1 11Z" fill="black" stroke="black" stroke-linejoin="round"/>
								</svg>
							</div>
							<p class="popAnimText">Glissez vers le haut pour déverrouiller</p>
						</div>	
							<router-link to="/list" class="btnRight button" @touchstart="addClicked($event)">
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
					</div>
					
				</div>
			</div>	
		</div>  
    `,
	data() {
		return {
		    currentDate: this.getCurrentDate(),
      		currentTime: this.getCurrentTime(),
			startY: 0, 
			maxY: null,
			minY: null,
      		isSwiping: false, 
			isMouseDown: false,
		};
	  },
	methods: {
		getCurrentDate() {
			const now = new Date();
			const dateOptions = {
			  weekday: 'long',  // Jour de la semaine complet
			  day: 'numeric',   // Jour du mois
			  month: 'long',    // Mois complet
			};
			return now.toLocaleDateString('fr-FR', dateOptions); // Formater la date
		},
		// Fonction pour récupérer et formater l'heure actuelle
		getCurrentTime() {
			const now = new Date();
			const timeOptions = {
				hour: '2-digit',  // Heures sur 2 chiffres
				minute: '2-digit' // Minutes sur 2 chiffres
			};
			return now.toLocaleTimeString('fr-FR', timeOptions); // Formater l'heure
		},
		updateDateTime() {
			this.currentDate = this.getCurrentDate();
			this.currentTime = this.getCurrentTime();
		},

		// Fonction pour active le hover au clique
		addClicked(event) {
			const button = event.currentTarget;

			button.classList.add('clicked');
			setTimeout(() => {
				button.classList.remove('clicked');
			  }, 300);
		},
	

		// Gérer le démarrage du toucher
		handleTouchStart(event) {
			this.startY = event.touches[0].clientY; // Position Y au début du toucher
			this.maxY = this.startY - window.innerHeight; // Limite max du déplacement vers le haut
			this.minY = this.startY; // Position de départ
		},
		// Gérer le mouvement du toucher
		handleTouchMove(event) {
			const currentY = event.touches[0].clientY; // Position Y actuelle lors du toucher

			// Calculer la distance parcourue
			const totalDistance = this.minY - this.maxY;
			const distanceMoved = this.minY - currentY;

			// Limiter le pourcentage entre 0% et 100%
			let percentMoved = (distanceMoved / totalDistance) * 100;
			percentMoved = Math.max(0, Math.min(100, percentMoved)); // Assurer une valeur entre 0 et 100

			// Calculer le scale en fonction du pourcentage
			const scalePourcent = 1 - (percentMoved / 100) * 0.15; // Scale allant de 1 à 0.85

			// Appliquer l'animation GSAP
			if (this.$refs.content) {
			gsap.to(this.$refs.content, {
				scale: scalePourcent,
				duration: 0.1,
				ease: "none"
			});
			}

			// Vérifier si un swipe est détecté
			if (this.startY - currentY > 50) {
			this.isSwiping = true;
			}
		},
		// Gérer la fin du toucher
		handleTouchEnd() {
			if (this.isSwiping) {
			this.unlockScreen();
			this.isSwiping = false;
			}

			// Réinitialiser le scale à 1 après la fin du toucher
			if (this.$refs.content) {
			gsap.to(this.$refs.content, {
				scale: 1,
				duration: 0.5,
				ease: "power2.inOut"
			});
			}
		},
		handleMouseDown(event) {
			this.isMouseDown = true;
			this.startY = event.clientY; 
			this.maxY = this.startY - window.innerHeight; // Définir un déplacement maximal de 50px vers le haut
			this.minY = this.startY;     
		},
		handleMouseMove(event) {
			if (this.isMouseDown) {
				const currentY = event.clientY;
			
				// Calculer le pourcentage de déplacement
				const totalDistance = this.minY - this.maxY;
				const distanceMoved = this.minY - currentY;
				
				// Limiter le pourcentage entre 0% et 100%
				let percentMoved = (distanceMoved / totalDistance) * 100;
				percentMoved = Math.max(0, Math.min(100, percentMoved)); // Limiter entre 0 et 100
			
				// Calculer le scale en fonction du pourcentage de mouvement
				const scalePourcent = 1 - (percentMoved / 100) * 0.15; // Scale allant de 1 à 0.6
				// Appliquer l'animation GSAP
				if (this.$refs.content) {
					gsap.to(this.$refs.content, {
					scale: scalePourcent, 
					duration: 0.1, 
					ease: "none"
					});
				}
			
				// Vérifier si un swipe est détecté
				if (this.startY - currentY > 50) {
					this.isSwiping = true;
				}
			}
		},
		handleMouseUp() {
			if (this.isSwiping) {
				this.unlockScreen();
				this.isSwiping = false;
			}
			this.isMouseDown = false;  // Réinitialiser l'état de la souris
		
			// Réinitialiser le scale à 1 après le relâchement
			if (this.$refs.content) {
				gsap.to(this.$refs.content, {
					scale: 1,
					duration: 0.5,
					ease: "power2.inOut"
				});
			}
		},
	
		// Fonction pour simuler le déverrouillage de l'écran
		unlockScreen() {
			this.$router.push('/login');
		}
	},
	mounted() {
		this.timer = setInterval(this.updateCurrentTime, 60000);
		
		gsap.timeline()
			.to(".popAnimArrow", { 
				opacity: 1, 
				y: '-30px', 
				duration: 1, 
				ease: "power2.inOut" 
			})
			.to(".popAnimText", { 
				opacity: 1, 
				y: '-25px', 
				duration: 1, 
				ease: "power2.inOut" 
			}, "1") 
			.to(".popAnimArrow", { 
				opacity: 0, 
				y: '-60px', 
				duration: 1, 
				ease: "power2.inOut"
		}, "1");
	},
	beforeUnmount() {
		// Nettoyer l'intervalle lors du démontage du composant
		clearInterval(this.timer);
	}
};
