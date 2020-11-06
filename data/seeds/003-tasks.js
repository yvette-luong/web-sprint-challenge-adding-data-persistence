exports.seed = function (knex) {
  const tasks = [
    {
      id: 1,
      task_name:"Clean Database",
      task_description:
        "What do you write in Clean Database  task description?",
      task_mvp: false,
      note: "What do you note in Clean Database task ?",
      project_id: 1,
      resource_id: 1,
    },
    {
      id: 2,
      task_name:"Change severity of event",
      task_description:
        "What do you write in Change severity of event task description?",
      task_mvp: false,
      note: "What do you note Change severity of event task ?",
      project_id: 2,
      resource_id: 2,
    },
    {
      id: 3,
      task_name:"Clear reception log",
      task_description:
        "What do you write in Clear reception log task description?",
      task_mvp: false,
      note: "What do you note Clear reception log task ?",
      project_id: 3,
      resource_id: 3,
    },
    {
      id: 4,
      task_name:"Send Email",
      task_description: "What do you write in Send Email task description?",
      task_mvp: false,
      note: "What do you note Send Email task ?",
      project_id: 4,
      resource_id: 4,
    },
  ];
  return knex("tasks").insert(tasks);
};

