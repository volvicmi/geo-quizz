const list = {
	
	template: `
	  	<div class="mainApp pageList" ref="mainApp">
			<div class="list">
				<header class="menu" ref="header">
					<button id="return" class="btn btnClickAnimation" @click="btnReturn">
						<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 11L11 1C11.3333 1 12 1.2 12 2L3 11L12 20C12 20.3333 11.8 21 11 21L1 11Z" fill="black" stroke="black" stroke-linejoin="round"/>
						</svg>
					</button>
					<p class="title">Liste</p>
				</header>
				<!-- Boucle pour afficher chaque pays et sa capitale -->
				<div class="listHolder">
					<input type="text" v-model="searchTerm" placeholder="Rechercher un pays ou une capitale..." />

					<ul v-if="!loading && !error">
						<li v-for="country in filteredCapitals" :key="country.country" class="country-item">
							<!-- Pays avec surlignage -->
							<span class="countryTag" v-html="highlight(country.country)"></span>
							
							<!-- Liste des capitales -->
							<span class="capitalTag">
							<span v-for="(cap, index) in country.capital" :key="index">
								<!-- Capitale avec surlignage -->
								<span v-html="highlight(cap)"></span>
								<!-- Ajouter une virgule après chaque capitale, sauf la dernière -->
								<span v-if="index < country.capital.length - 1">, </span>
							</span>
							</span>
						</li>
					</ul>


					<!-- Message de chargement -->
					<p v-if="loading">Chargement des données...</p>

					<!-- Message d'erreur -->
					<p v-if="error">{{ error }}</p>
				</div>
			</div>
		</div>
	`,
	data() {
		return {
			searchTerm: '',
			countries: [], // Liste initialement vide, sera peuplée par les données JSON
			loading: true,
			error: null
		};
	  },
	  mounted() {
		// Charger les données du fichier JSON au moment où le composant est monté
		this.loadJSON();
	  },
	  methods: {
		async loadJSON() {
			try {
			  // Commence le chargement
			  this.loading = true;
			  this.error = null;
  
			  // Récupérer le fichier JSON
			  const response = await fetch('data/dataFR.json'); // Mettre le chemin correct vers ton fichier JSON
			  if (!response.ok) {
				throw new Error('Erreur lors du chargement du fichier JSON');
			  }
  
			  // Stocker les données JSON dans le tableau 'countries'
			  this.countries = await response.json();
			} catch (error) {
			  // Gestion des erreurs
			  this.error = error.message;
			} finally {
			  // Fin du chargement, peu importe le résultat
			  this.loading = false;
			}
		},
		highlight(text) {
			// Si searchTerm est vide, renvoyer le texte tel quel
			if (!this.searchTerm) return text;
		
			// Création d'une expression régulière pour matcher la partie du texte correspondant à la recherche
			const regex = new RegExp(`(${this.searchTerm})`, 'gi'); // 'gi' pour insensible à la casse et global
		
			// Remplacement des correspondances par du texte surligné
			return text.replace(regex, '<mark>$1</mark>');
		}
	  },
	computed: {
		// Filtrer les pays et capitales en fonction de la recherche
		filteredCapitals() {
		  return this.countries.filter(country => {
			const capital = Array.isArray(country.capital) ? country.capital[0].toLowerCase() : '';
			const countryName = country.country ? country.country.toLowerCase() : '';
			const searchTerm = this.searchTerm.toLowerCase();
	  
			return capital.includes(searchTerm) || countryName.includes(searchTerm);
		  });
		}
	}
  };
  