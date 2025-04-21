import { client } from "src/client";

export async function getTotalSpent() {
  const res = await client.api.expenses["total-spent"].$get();
  if (!res.ok) {
    throw new Error("Server error");
  }
  const data = await res.json();
  return data;
}
