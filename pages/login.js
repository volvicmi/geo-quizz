const login = {
	template: `
		<div class="mainApp" ref="mainApp" >
			<div class="login">
				<div class="bgLock">
					<div></div>
				</div>
				<div class="content" ref="content">
					<div class="loginInputContainer">
						<p class="inputTitle">Entre ton pseudo</p>
						<input class="inputLogin" ref="usernameField" type="text" v-model="username" @keydown.enter="submitUsername" placeholder="">
					</div>
					<div class="btnContainer">
						<router-link to="/" class="btn">Retour</router-link>
						<button class="btn" @click="submitUsername">Entrer</button>
					</div>
				</div>
			</div>
		</div>
	`,
	
	  methods: {
		submitUsername() {
		  if (this.username.trim() !== '') {
			 // Effacer la progression précédente
			 localStorage.removeItem('progression');
			 localStorage.removeItem('username');
			 localStorage.removeItem('capitalsFound');

			// Enregistrer le pseudo dans le localStorage
			localStorage.setItem('username', this.username);
			// Rediriger vers la page quiz
			this.$router.push('/levels');
		  }
		}
	  }
	};
  