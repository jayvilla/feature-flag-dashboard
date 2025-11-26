import { logEvent } from "@/lib/logger";

test("logs structured event", () => {
  const spy = vi.spyOn(console, "log");
  logEvent("test_event", { x: 1 });

  expect(spy).toHaveBeenCalled();
  const log = JSON.parse(spy.mock.calls[0][0]);
  expect(log.event).toBe("test_event");
  expect(log.data).toEqual({ x: 1 });
});
