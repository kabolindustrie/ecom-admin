 export default function handle(req, res) {
  const { method } = req;
  if (method === "POST") {
    res.status(200).json({ message: "Product created" });
  }
 }
