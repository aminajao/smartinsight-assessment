const validateRequest = (req, res, next) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }
  next();
};

export default validateRequest;
