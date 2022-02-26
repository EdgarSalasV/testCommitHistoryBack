const gulp = require("gulp");
const ts = require("gulp-typescript");
const nodemon = require("gulp-nodemon");
const clean = require("gulp-clean");

//clean js
gulp.task("clean", () => {
  return gulp.src("./lib", { allowEmpty: true }).pipe(clean());
});
//transpile ts
gulp.task("transpile", () => {
  return gulp
    .src("./src/**/*.ts")
    .pipe(
      ts({
        lib: ["es5", "es6", "DOM"],
        target: "es5",
        module: "commonjs",
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
        experimentalDecorators: true,
        sourceMap: true,
        noImplicitAny: true,
        strict: true,
        outDir: "./lib",
        strictPropertyInitialization: false,
        downlevelIteration: true,
      })
    )
    .pipe(gulp.dest("lib"));
});
//start
gulp.task("start", () => {
  nodemon({
    script: "./lib/index.js",
    ext: "ts",
    tasks: ["transpile"],
  });
});
// default
gulp.task("default", gulp.series("clean", "transpile", "start"));