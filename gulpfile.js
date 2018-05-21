var gulp = require("gulp"),
    server = require("gulp-server");
gulp.task("server", function() {
    gulp.src("src")
        .pipe(server({
            port: 8080,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                next();
            }
        }))
})