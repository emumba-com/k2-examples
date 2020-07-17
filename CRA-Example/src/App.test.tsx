import { cleanup, render } from "@testing-library/react";
import React from "react";
import App from "./App";

afterEach(cleanup);

it("renders without crashing", () => {
  const { debug } = render(<App />);
  debug();
});
