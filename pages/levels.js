const levels = {
	template: `
	  <div class="mainApp pageLevels" ref="mainApp">
		<div class="levels">
		  <header class="menu" ref="header">
			<button id="return" class="btn btnClickAnimation" @click="btnReturn">
			  <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1 11L11 1C11.3333 1 12 1.2 12 2L3 11L12 20C12 20.3333 11.8 21 11 21L1 11Z" fill="black" stroke="black" stroke-linejoin="round"/>
			  </svg>
			</button>
			<p class="title">Niveaux</p>
		  </header>
		  <ul class="levelsHolder">
			<li v-for="level in levels" :key="level.id" class="item">
			  <router-link :to="{ name: 'quiz', params: { region: level.id }}" class="rooterLinkHolder">
				<div class="imageHolder" :ref="'imageHolder_' + level.id"> 
				  	<img :src="level.image" :alt="level.title">
				</div>
				<div class="textHolder">
				  <h3 class="title">{{ level.title }}</h3>
				  <p class="score">Progression : {{ getProgression(level.id) }}</p>
				</div>
				<div class="launchBtn"> 
				  <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1 11L11 1C11.3333 1 12 1.2 12 2L3 11L12 20C12 20.3333 11.8 21 11 21L1 11Z" fill="black" stroke="black" stroke-linejoin="round"/>
				  </svg> 
				</div>
			  </router-link>
			</li>
		  </ul>
		</div>
	  </div>
	`,
	data() {
	  return {
		levels: [
		  { id: 'global', title: 'Toutes les capitales', image: './images/levels/World.svg' },
		  { id: 'europe', title: 'Europe', image: './images/levels/Europe.svg' },
		  { id: 'asia', title: 'Asie', image: './images/levels/Asia.svg' },
		  { id: 'north-america', title: 'Amérique du Nord', image: './images/levels/NorthAmerica.svg' },
		  { id: 'south-america', title: 'Amérique du Sud', image: './images/levels/SouthAmerica.svg' },
		  { id: 'africa', title: 'Afrique', image: './images/levels/Africa.svg' },
		  { id: 'oceania', title: 'Australie et Océanie', image: './images/levels/Oceania.svg' }
		]
	  };
	},
	computed: {
	  getProgressions() {
		// Génère un objet avec les progressions pour chaque niveau
		return this.levels.reduce((acc, level) => {
		  acc[level.id] = localStorage.getItem(`progression_${level.id}`) || '0';
		  return acc;
		}, {});
	  }
	},
	methods: {
	  btnReturn() {
		this.$router.back();
	  },
	  getProgression(regionId) {
		// Récupère la progression pour un niveau spécifique
		return this.getProgressions[regionId];
	  }
	}
};
