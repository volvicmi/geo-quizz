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
						<button class="btnLeft button" @click="changeColor(); handleClick($event)">
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

							<router-link to="/list" class="btnRight button" @click="handleClick($event);">
								<svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.79167 6C3.52084 6 2.30206 6.5052 1.40345 7.40381C0.504835 8.30242 0 9.52084 0 10.7917C0 12.0625 0.504835 13.2815 1.40345 14.1801C2.30206 15.0787 3.52084 15.5833 4.79167 15.5833C6.0625 15.5833 7.28128 15.0787 8.17989 14.1801C9.0785 13.2815 9.58333 12.0625 9.58333 10.7917C9.58333 9.52084 9.0785 8.30242 8.17989 7.40381C7.28128 6.5052 6.0625 6 4.79167 6ZM14.375 8.39583V13.1875H50V8.39583H14.375ZM4.79167 20.375C3.52084 20.375 2.30206 20.8802 1.40345 21.7788C0.504835 22.6774 0 23.8958 0 25.1667C0 26.4375 0.504835 27.6565 1.40345 28.5551C2.30206 29.4537 3.52084 29.9583 4.79167 29.9583C6.0625 29.9583 7.28128 29.4537 8.17989 28.5551C9.0785 27.6565 9.58333 26.4375 9.58333 25.1667C9.58333 23.8958 9.0785 22.6774 8.17989 21.7788C7.28128 20.8802 6.0625 20.375 4.79167 20.375ZM14.375 22.7708V27.5625H50V22.7708H14.375ZM4.79167 34.75C3.52084 34.75 2.30206 35.2552 1.40345 36.1538C0.504835 37.0524 0 38.2708 0 39.5417C0 40.8125 0.504835 42.0315 1.40345 42.9301C2.30206 43.8287 3.52084 44.3333 4.79167 44.3333C6.0625 44.3333 7.28128 43.8287 8.17989 42.9301C9.0785 42.0315 9.58333 40.8125 9.58333 39.5417C9.58333 38.2708 9.0785 37.0524 8.17989 36.1538C7.28128 35.2552 6.0625 34.75 4.79167 34.75ZM14.375 37.1458V41.9375H50V37.1458H14.375Z" fill="white"/>
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
		handleClick(event) {
			const button = event.target.closest('.button');
			// Définit quel bouton a été cliqué

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
				opacity: .8, 
				y: '-30px', 
				duration: 1, 
				ease: "power2.inOut" 
			})
			.to(".popAnimText", { 
				opacity: .8, 
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
