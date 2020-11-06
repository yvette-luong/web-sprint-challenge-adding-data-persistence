exports.seed = function (knex) {
  const projects = [
    {
      id: 1,
      project_name: "Astro",
      mvp: false,
      project_description: "What do you write in a Astro project description?",
    },
    {
      id: 2,
      project_name: "Night Walker",
      mvp: false,
      project_description:
        "What do you write in a Night Walker project description?",
    },
    {
      id: 3,
      project_name: "Skyhawks",
      mvp: false,
      project_description:
        "What do you write in a Skyhawks project description?",
    },
    {
      id: 4,
      project_name: "Project X",
      mvp: false,
      project_description:
        "What do you write in a Project X project description?",
    },
  ];
  return knex("projects").insert(projects);
}; 

