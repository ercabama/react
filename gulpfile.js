require('require-dir')('./gulp');
let gulp = require('gulp');

gulp.task('test', ['scsslint', 'eslint']);

gulp.task('dist', [
    'webpack',
    'htmlmin',
    'copy:dist',
    'package',
    'config'
]);

gulp.task('build', ['clean:dist', 'set-prod-node-env'], () =>
    gulp.run('dist')
);

