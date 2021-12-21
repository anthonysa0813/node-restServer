const getUsers = (req, res) => {
  const query = req.query;

  res.json({
    msg: "get api - controller",
    query,
  });
};

const postUser = (req, res) => {
  const body = req.body;

  res.json({
    msg: "post api - controller",
    body,
  });
};

const putUser = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "put api - controller",
    id,
  });
};

const deleteUser = (req, res) => {
  res.json({
    msg: "delete api - controller",
  });
};

const patchUser = (req, res) => {
  res.json({
    msg: "delete api - controller",
  });
};

module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
  patchUser,
};
