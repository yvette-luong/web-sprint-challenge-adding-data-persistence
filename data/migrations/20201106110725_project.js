exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments(); //project id
      tbl.string("project_name", 169).notNullable().unique(); //project name
      tbl.boolean("mvp"); //project completed
      tbl.string("project_description", 250).notNullable(); // prj description
    })

    .createTable("resources", (tbl) => {
      tbl.increments(); //resource id
      tbl.string("res_name", 169).notNullable().unique(); //resourse name
      tbl.string("res_description", 250).notNullable(); // prj description

      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE") // CASCADE, RESTRICT
        .onUpdate("CASCADE");
    })

    .createTable("tasks", (tbl) => {
      tbl.increments(); //task id
      tbl.string("task_name", 169).notNullable().unique(); //task name
      tbl.string("task_description", 250).notNullable(); // task description
      tbl.boolean("task_mvp"); //task completed
      tbl.string("note", 169).notNullable(); //project name

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
