import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders todos", async () => {
  render(<App />);
  const listitems = await screen.findAllByRole("listitem");
  expect(listitems).toHaveLength(3);

  userEvent.type(screen.getAllByRole("textbox"), "준비물 챙기기");
  userEvent.click(screen.getAllByRole("button"));

  expect(await screen.findAllByText("준비물 챙기기")).toBeInTheDocument();
});
