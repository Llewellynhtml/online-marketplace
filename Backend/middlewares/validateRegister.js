module.exports = (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "All fields (firstname, lastname, email, password) are required" });
  }
  next();
};

  