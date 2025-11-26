let flags = [
  { key: "newDashboard", enabled: true },
  { key: "aiAssistant", enabled: false },
];

export async function GET() {
  return Response.json(flags);
}

export async function POST(req: Request) {
  const body = await req.json();
  flags = flags.map((f) =>
    f.key === body.key ? { ...f, enabled: body.enabled } : f
  );
  return Response.json({ success: true });
}
