export const errorHandler = async (err, req, res) => {
  let { message } = err;
  let status;

  // Check if the error is due to an undefined API endpoint
  if (err.status === 404) {
    status = 404;
    message = "API endpoint not found";
  }

  // Set a default status if it's not defined
  status = status || 500;
  message = status === 500 ? "Internal server error" : message;

  return res.status(status).json({ success: false, message });
};
