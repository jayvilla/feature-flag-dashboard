"use client";

import { logEvent } from "@/lib/logger";
import { updateFlag } from "@/lib/fetchClient";

export default function FlagItem({ flag }: any) {
  const toggle = async () => {
    const newValue = !flag.enabled;

    logEvent("flag_toggled", { key: flag.key, enabled: newValue });
    await updateFlag(flag.key, newValue);

    // Refresh UI (Next.js App Router)
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between p-2 border rounded mb-2">
      <span>{flag.key}</span>
      <button
        className={`px-3 py-1 rounded ${
          flag.enabled ? "bg-green-500" : "bg-gray-400"
        }`}
        onClick={toggle}
      >
        {flag.enabled ? "On" : "Off"}
      </button>
    </div>
  );
}
