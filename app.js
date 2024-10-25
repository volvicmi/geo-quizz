// Définir les routes
const routes = [
	{ path: '/', component: home, name: 'home' },
	{ path: '/login', component: login, name: 'login' },
	{ path: '/levels', component: levels, name: 'levels' },
	{ path: '/list', component: list, name: 'list' },
	{ path: '/quiz', component: quiz, name: 'quiz' },
	{ path: '/:pathMatch(.*)*', component: { template: '<div>Page non trouvée</div>' } }, // Route fallback
];

// Créer le routeur
const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
});

// Garde globale de navigation
router.beforeEach((to, from, next) => {
	const username = localStorage.getItem('username');
	
	// Si un pseudo est déjà défini et que l'utilisateur essaie d'accéder à /login
	if (username && to.path === '/login') {
	  // Rediriger directement vers /quiz
	  next('/quiz');
	} 
	// Si aucun pseudo n'est défini et qu'il essaie d'accéder au /quiz
	else if (!username && to.path === '/quiz') {
	  // Rediriger vers la page de login
	  next('/login');
	} 
	// Dans tous les autres cas, continuer vers la page demandée
	else {
	  next();
	}
});


const app = Vue.createApp({});

// Mixin global pour rendre btnReturn et les animations accessibles partout
app.mixin({
	data() {
		return {
			transitionName: 'fade', // Transition par défaut
			activeColor: "#aed7e5", // La couleur active (par défaut)
			color: ['#040404', '#fbc1cc','#3B80F5', '#aed7e5'], // Les couleurs disponibles
			username: '', // Nom de l'utilisateur
		};
		},
	watch: {
	$route(to, from) {
		// Définir le nom de la transition en fonction des routes
		if (from.name === 'home') {
			if (from.name === 'home' && to.name ==='login' ) {
				this.transitionName = 'slideToLogin';
			} else {
				this.transitionName = 'slide';
			}
		} else if (from.name === 'login') {
			this.transitionName = 'slideInverse';
		} else {
			this.transitionName = 'fade';
		}
	},
	},
	methods: {
		// Ajouter la route /home dans l'historique
		btnReturn() {
			this.$router.push('/');
			// this.$router.back();
		},
		setAppHeight() {
			if (this.$refs.screen) {
				this.$refs.screen.style.height = `${window.innerHeight}px`;
			}
		},
		// ColorSwitch
		changeColor() {
			// Trouve l'index actuel de la couleur active
			const currentIndex = this.color.indexOf(this.activeColor);
			// Calcule l'index de la couleur suivante (cyclique)
      		const nextIndex = (currentIndex + 1) % this.color.length;
			// Met à jour la couleur active avec la couleur suivante
			this.activeColor = this.color[nextIndex];
			this.setThemeColor(this.activeColor); // Change la couleur du thème
			window.localStorage.setItem("colorTheme", this.activeColor); // Enregistre dans le localStorage
		},
		setThemeColor(el) {
			// Appliquer la couleur sélectionnée
			document.documentElement.style.setProperty("--mainColor", el);
		},
		initTheme() {
			// Vérifie si une couleur est stockée dans localStorage
			const storedColor = window.localStorage.getItem("colorTheme");

			if (storedColor) {
			// Applique la couleur stockée
			this.activeColor = storedColor;
			this.setThemeColor(storedColor);
			} else {
			// Applique la couleur par défaut
			this.setThemeColor(this.activeColor);
			}
		},
		// Animation
		beforeEnter(el) {
			console.log(this.transitionName);
			if (this.transitionName === 'slide') {
				// Slide beforeEnter
				gsap.set(el, {
					top: '100%',
					
					position: "absolute",
					transformOrigin:"bottom",
					zIndex: 2
				});
			} else if (this.transitionName === 'slideInverse') {
			  // SlideInverse beforeEnter
			  	gsap.set(el, {
					scale: 0,
					zIndex: 1
			  	});
			} else if (this.transitionName === 'slideToLogin') {
				// Slide beforeEnter
				gsap.set(el, {
					top: '50vh',
					scale: 0,
					position: "absolute",
					transformOrigin:"bottom",
					zIndex: 2
				});
				const elContent = el.querySelector('.content');  
				if (elContent) {
					gsap.set(elContent, {
						opacity: 0
					});
				}
				
			} else {
				// Animation par défaut
				gsap.set(el, { 
					transformOrigin:"50% 50%" ,
					scale:0,
					opacity: 0 
				});
			}
		},
		enter(el, done) {
			// Slide enter element
			if (this.transitionName === 'slide') {
				gsap.to(el, {
					top:0,
					scale:1,
					duration: .5,
					ease: "power2.inOut",
				});
			} else if (this.transitionName === 'slideToLogin') {
				gsap.to(el, {
					top:0,
					scale:1,
					duration: .5,
					ease: "power2.inOut",
					onComplete: () => {
						// Commence l'animation de 'content' une fois que l'élément principal a terminé
						const elContent = el.querySelector('.content');
						if (elContent) {
							gsap.to(elContent, {
								opacity: 1,
								duration: .2,
								ease: 'power2.inOut',
								onComplete: done 
							});

						} else {
							done(); 
						}
						const bgHome = document.querySelector('.bgHome');  
						if (bgHome) {
							gsap.set(bgHome, {
								filter: "blur(10px) grayscale(50%)",
								duration: .2,
								ease: 'power2.inOut',
								onComplete: done 
							});
						}
					}
				});
			} else if (this.transitionName === 'slideInverse') {
				// SlideInverse enter
					gsap.to(el, {
						scale: 1,
						duration: .5,
						ease: "power4.inOut",
						onComplete: done
					});
					const bgHome = document.querySelector('.bgHome');  
					if (bgHome) {
						gsap.set(bgHome, {
							filter: "blur(0) grayscale(50%)",
							duration: .2,
							ease: 'power2.inOut',
							onComplete: done 
						});
					}
			  	} else {
					// Animation par défaut
					gsap.to(el, { 
						scale:1,
						opacity: 1,
						duration: 0.5,
						onComplete: done
					});
			  	}
		},
		beforeLeave(el){
			if (this.transitionName === 'slideInverse') {
				// SlideInverse leave element 
				gsap.set(el, {
					zIndex:2,
					transformOrigin:"top"
				});
			} else if (this.transitionName === 'slide') {
				gsap.set(el, {
					zIndex: 3
				});
		  	} 
		},
		// Préparer avant que l'élément ne commence à quitter
		leave(el, done) {
			// Slide leave element
			if (this.transitionName === 'slide') {
				gsap.to(el, {
					top:'-100%',
					duration: 0.5,
					ease: "power2.inOut",
					onComplete: done
				});
				const elContent = document.querySelector('.bgHome');
				gsap.to(elContent, {
					top:'-100%',
					duration: 0.5,
					ease: "power2.inOut",
					onComplete: () => {
						gsap.to(elContent, { top:0});
					}
				});

		  	} else if (this.transitionName === 'slideToLogin') {
				gsap.to(el, {
					top:'-100%',
					opacity: 0,
					duration: 0.5,
					ease: "power2.inOut",
					onComplete: done
				});
		  	} else if (this.transitionName === 'slideInverse') {
				// SlideInverse leave element 
				gsap.to(el, {
					top: '-150vh',
					duration: .5,
					ease: "power2.inOut",
					onComplete: done
				});
				const elContent = el.querySelector('.content');
				if (elContent) {
					gsap.to(elContent, {
						opacity: 0,
						duration: .3,
					});

				} else {
					done(); 
				}
		  	} else {
				// Animation par défaut
				gsap.to(el, { 
					transformOrigin:"50% 50%" ,
					scale:1.2,
					opacity: 0,
					duration: 0.5,
					onComplete: done
				});
		  	}
		}
	},
	mounted() {
	this.$nextTick(() => {
		this.initTheme();
		this.setAppHeight();
		window.addEventListener('resize', this.setAppHeight);
	});
	}
});

// Utiliser le routeur dans l'application
app.use(router);

// Monter l'application
app.mount('#app');
