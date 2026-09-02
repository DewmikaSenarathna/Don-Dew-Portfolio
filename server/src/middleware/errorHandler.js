export function notFound(req, res, next) {
  res.status(404).json({ ok: false, error: "Not found." });
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({
    ok: false,
    error: status === 500 ? "Something went wrong. Please try again shortly." : err.message,
  });
}
