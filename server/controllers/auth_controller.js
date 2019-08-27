const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    if (!username || !password) {
      res.status(406).json({
        error: "Please fill in all information"
      });
    } else {
      const db = req.app.get("db");
      const user = await db
        .check_for_user([username])
        .catch(err => console.log(err));
      if (user[0]) {
        res.status(401).json({ error: "Username already taken" });
      } else {
        console.log("check");
        const hash = await bcrypt.hash(password, 10).catch(err => {
          console.log(err);
        });
        console.log(hash);
        let regUser = await db.add_user([username, hash]);

        req.session.user = {
          ...regUser[0]
        };
        res.status(200).json(req.session.user);
      }
    }
  },

  logout: (req, res) => {
    console.log(req.session);
    req.session.destroy();
    res.sendStatus(200);
  },

  login: async (req, res) => {
    let { username, password } = req.body;
    if (!username || !password) {
      res.status(406).json({
        error: "Please fill in all information"
      });
    } else {
      const db = req.app.get("db");
      let user = await db.check_for_user([username]).catch(err => {
        err;
      });
      if (!user[0]) {
        return res.sendStatus(403);
      }
      let access = await bcrypt.compare(password, user[0].password);
      if (!access) {
        res.sendStatus(403);
      } else {
        req.session.user = {
          ...user[0]
        };
        delete req.session.user.password;
        res.status(200).json(req.session.user);
      }
    }
  }
};
