import FlagList from "@/components/FlagList";

export default async function FlagsPage() {
  const res = await fetch("http://localhost:3000/api/flags", {
    cache: "no-store",
  });
  const flags = await res.json();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Feature Flags</h1>
      <FlagList flags={flags} />
    </main>
  );
}
