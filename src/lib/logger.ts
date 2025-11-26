export function logEvent(event: string, data: object = {}) {
  console.log(
    JSON.stringify({
      event,
      data,
      timestamp: new Date().toISOString(),
    })
  );
}
