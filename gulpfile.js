const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const gulpStylelint = require('gulp-stylelint')

const SRC_PATH = 'scss/**/*.scss'
const OUTPUT_FILE = 'output.css'

gulp.task('sass', () =>
  gulp
    .src(SRC_PATH)
    .pipe(sass())
    .pipe(rename(OUTPUT_FILE))
    .pipe(gulp.dest('./'))
)

gulp.task('stylelint', () =>
  gulp.src(SRC_PATH).pipe(
    gulpStylelint({
      reporters: [{ formatter: 'string', console: true }],
    })
  )
)

gulp.task('default', ['stylelint', 'sass'])

gulp.task('watch', () => gulp.watch(SRC_PATH, ['default']))
