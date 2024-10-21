const levels = {
    template: `
      <div class="mainApp" ref="mainApp">
        <div class="level-selection">
          <h2>Choisissez un niveau</h2>
          <button @click="selectLevel(1)">Niveau 1</button>
          <button @click="selectLevel(2)">Niveau 2</button>
        </div>
      </div>
    `,
    methods: {
      selectLevel(level) {
        // Logique de sélection de niveau
        this.$router.push('/quiz');  // Redirige vers la page du quizz
      }
    }
  };
  