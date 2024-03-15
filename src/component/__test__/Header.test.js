import { render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import store from "../../utils/store";
import { Provider } from "react-redux";

// describe("should render all header components",()={

// })

test("should render logo components", () => {
  <BrowserRouter>
    <Provider store={store}>
      <Header />
    </Provider>
  </BrowserRouter>;
  const logo = screen.getByRole("image");
  expect(logo.length).toBe(1);
});
