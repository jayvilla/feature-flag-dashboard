import { render, fireEvent } from "@testing-library/react";
import FlagItem from "@/components/FlagItem";

test("toggles flag", async () => {
  const { getByText } = render(
    <FlagItem flag={{ key: "test", enabled: false }} />
  );
  const btn = getByText("Off");

  fireEvent.click(btn);

  expect(btn).toBeTruthy();
});
