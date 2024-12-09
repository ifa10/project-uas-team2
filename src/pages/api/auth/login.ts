import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch"; // You don't need to import Method from node-fetch

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: "POST" | "GET" = req.method as "POST" | "GET"; // Explicitly declare the method types

  if (method === "POST") {
    try {
      const data = await fetch("https://example.com/api", {
        method: "POST", // You can directly use 'POST' as a string literal
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });

      const result = await data.json();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
