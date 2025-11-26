export async function updateFlag(key: string, enabled: boolean) {
  return fetch("/api/flags", {
    method: "POST",
    body: JSON.stringify({ key, enabled }),
  });
}
