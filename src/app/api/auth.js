import { auth } from "../firebase/config";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);
    if (decodedToken) {
      // Handle your secure data interaction here
      res.status(200).json({ success: true, data: "Your secure data" });
    } else {
      res.status(403).json({ error: "Forbidden" });
    }
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
}
