const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

// Chemin vers le fichier main.less
const lessMainFile = 'styles/main.less';

// Tâche de compilation pour le fichier main.less
function compileMainLess() {
  return gulp.src(lessMainFile)          // Chemin du fichier LESS
    .pipe(less())                        // Compiler LESS en CSS
    .on('error', function (err) {        // Capture des erreurs pendant la compilation
      console.error(err.message);        // Affiche l'erreur dans le terminal
      this.emit('end');                  // Continue l'exécution même après l'erreur
    })
    .pipe(gulp.dest('styles'));          // Destination du fichier CSS compilé
}

// Tâche de surveillance
function watchFilesForChanges() {
  gulp.watch('styles/**/*.less', compileMainLess);
}

// Tâche par défaut
exports.default = gulp.series(compileMainLess, watchFilesForChanges);
