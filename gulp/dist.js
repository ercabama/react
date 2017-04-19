const gulp = require('gulp'),
    config = require('./config.json');

const copyConfig = environment => gulp.src(`./config.${environment}.json`)
    .pipe(require('gulp-rename')('config.json'))
    .pipe(gulp.dest('dist'));

gulp.task('clean:dist', () => require('del')(config.clean.dist));

gulp.task('config:uat', () => copyConfig('uat'));

gulp.task('config:prod', () => copyConfig('prod'));

gulp.task('webpack', () =>
    gulp.src('src/app.module.js')
        .pipe(require('webpack-stream')(require('../webpack.prod.config.js'), require('webpack')))
        .pipe(gulp.dest('dist/public/assets'))
);

gulp.task('copy:dist', () =>
    gulp.src(config.copy.dist.src, {base: '.'})
        .pipe(gulp.dest(config.copy.dist.dest))
);

gulp.task('htmlmin', () =>
    gulp.src(config.htmlmin.src)
        .pipe(require('gulp-replace')('@version', new Date().getTime()))
        .pipe(require('gulp-htmlmin')(config.htmlmin.options))
        .pipe(gulp.dest(config.htmlmin.dest))
);

gulp.task('package', () => gulp.src('./package.json')
    .pipe(require('gulp-json-editor')(json => {
        delete json.devDependencies;
        return json;
    }))
    .pipe(gulp.dest('dist/'))
);
