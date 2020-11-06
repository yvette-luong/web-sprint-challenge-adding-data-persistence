// help to clean all tables and reset primary keys back to 1 
const cleaner = require("knex-cleaner"); // install npm i knex-cleaner

exports.seed = function (knex) {
    return cleaner.clean(knex, {
        mode: "truncate", // resets ids back 1
        ignoreTables: ["knex_migrations", "knex_migrations_lock"], // don't empty migration tables
    });
}; 
