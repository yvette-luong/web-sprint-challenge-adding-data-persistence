const db = require("../knexconfig");
module.exports = {
  find,
  findById,
  add,
  findTasks,
};

function find() {
  return db("projects");
}
function findById(id) {
  return db("projects").where({ id }).first();
}
function add() {
  return db("data").insert("data");
}
//post project
function add(data) {
  return db("projects").insert(data);
}
function findTasks(projectId) {
  return db("tasks")
    .where({ project_id: projectId })
    .join("projects", "projects.id", "tasks.project_id")
    .select(
      "projects.project_name",
      "projects.project_description",
      "tasks.task_name",
      "tasks.task_description",
      "tasks.note"
    );
}
