//!  Для начала проекта с готовым файлами package.json и gulpfiles.js в терминале просто пишем npm i (сам скачает и установит все указанные плагины в тех версиях )
// При этом стартовая структупа проекта должна содержать: index.html (пустой шаблон), папку app, в ней папки scss, css, js, файлы- package.json и gulpfiles.js

const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const cssnano = require("gulp-cssnano");
const browsersync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const autoprefixer = require("gulp-autoprefixer");
// Установить такую версию: npm i del@6.1.1 --save-dev (более новая не работает)
const del = require("del");
// Установить такую версию:  npm i gulp-imagemin@7.1.0 --save-dev  (более новая не работает)
const imagemin = require("gulp-imagemin");
// const clean = require("gulp-clean");

//? Функция обновления браузера
function browserSync() {
  browsersync.init({
    server: {
      baseDir: "./app",
    },
    port: 3000,
  });
}

//? Функция конвертации из scss в css
function styles() {
  return (
    src("./app/scss/style.scss")
      .pipe(scss({ outputStyle: "expanded" }))
      // .pipe(scss({ outputStyle: "compressed" }))
      // scss({outputStyle: 'expanded'}) - красиво оформляет файл style.css
      // scss({outputStyle: 'compressed'}) - сжимает (мимифицирует) файл style.css для быстрой обработки и загрузки на сервер
      .pipe(concat("style.css"))
      .pipe(
        autoprefixer({ overrideBrowserslist: ["last 10 version"], grid: true })
      )
      .pipe(dest("./app/css"))
      .pipe(browsersync.stream()),
    src("./app/css/style.css")
      .pipe(cssnano())
      .pipe(concat("style.min.css"))
      .pipe(dest("./app/css"))
      .pipe(browsersync.stream())
  );
}

//? Функция обработки скриптов
function scripts() {
  return src([
    "./node_modules/slick-carousel/slick/slick.js",
    "./app/js/main.js",
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("./app/js"))
    .pipe(browsersync.stream());
}

//? Функция обработки картинок
function images() {
  return src("./app/img/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("./dist/img"));
}

//? Функция отслеживания изменений в файлах
function watching() {
  watch(["./app/*.html"]).on("change", browsersync.reload);
  watch(["./app/scss/**/*.scss"], styles);
  // Отслеживает изменения во всех вложенных папках и файлах в папке scss и запускает функцию styles
  watch(["./app/js/**/*.js", "!./app/js/main.min.js"], scripts);
  // "./app/js/**/*.js", "!./app/js/main.min.js" - означает следить за всеми файлами *.js, кроме файла main.min.js
}

//? Функция очистки папки dist перед новым запуском build (чтобы не оставалось не актуальных шрифтов, картинок и др.  за которыми нет отслеживания и не было конфликта версий)
function cleanDist() {
  return del("./dist");
}

// если del не работает, используем gulp-clean
// function cleanDist() {
//   return src("./dist/*", {
//     read: false,
//   }).pipe(clean());
// }

//? Функция сборки build (загружает указанные файлы в папку dist (для выгрузки на сервер))
function build() {
  return src(
    [
      "./app/*.html",
      "./app/css/style.min.css",
      "./app/fonts/**.*",
      "./app/js/main.min.js",
    ],
    { base: "./app" }
  ).pipe(dest("./dist"));
  // {base: app} позволяет в папке dist создавать такую же структуру,что и в app, т.е. тоже создадутся папки css, js, fonts и пути у *.min.* файлов сохранятся
}

exports.browserSync = browserSync;
exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;

exports.default = parallel(styles, scripts, watching, browserSync);
// метод parallel - указывает параллельность/одновременность действий

exports.build = series(cleanDist, images, build);
// метод series - указывает последовательность действий
// Запуск build в последовательности: очищаем папку dist от предыдущей версии, потом сжимаем картинки , забрасываем их в dist, затем переносим файлы *.html и мимифицированные *.min.css, *.min.js в папку dist с сохранением структуры проекта

//? Ввод команд в терминале:
// gulp styles - запускает только преобразование файлов *.scss в *.css
// gulp scripts - только преобразование файлов *.js
// gulp images - сжатие и перенос картинок в dist
// gulp watching - отслеживание изменений файлов
//* gulp - запускает полное отслеживание изменений файлов и сразу отображение в браузере. На этом режиме идет разработка
//* gulp build - запускает перенос сжатых файлов и картинок в папку dist. Выполняется по необходимости, перед загрузкой на сервер.
