exports.seed = function (knex) {
  const resources = [
    {
      id: 1,
      res_name: "Crusader",
      res_description: "About Crusader resource ",
      project_id: 1,
    },
    {
      id: 2,
      res_name: "Business as Unusual",
      res_description: "About Business as Unusual resource",
      project_id: 2,
    },
    {
      id: 3,
      res_name: "Soul Spartans",
      res_description: "About Soul Spartans resource",
      project_id: 3,
    },
    {
      id: 4,
      res_name: "Voyager",
      res_description: "About Voyager resource",
      project_id: 4,
    },
  ];
  return knex("resources").insert(resources);
}; 
