module.exports = {
  addPost: async (req, res) => {
    let { id, content } = req.body;
    console.log(id, content);
    const db = req.app.get("db");
    let post = await db.add_post([id, content]).catch(err => {
      console.log(err);
    });

    res.json(post);
  },

  getPost: async (req, res) => {
    let { id } = req.params;
    console.log(id);
    const db = req.app.get("db");
    let posts = await db.get_post(id).catch(err => {
      console.log(err);
    });
    res.json(posts);
  },

  getQuery: async (req, res) => {
    let id = JSON.stringify(req.query.id);
    let name = JSON.stringify(req.query.name);
    console.log(id);
    console.log(name);
  }
};
