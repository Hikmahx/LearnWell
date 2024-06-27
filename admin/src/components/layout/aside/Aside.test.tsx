import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Aside from "./Aside";
import { RootState } from "../../../redux/store";
import userEvent from "@testing-library/user-event";
import { asideToggle } from "../../../redux/reducers/sharedSlice";

const mockStore = configureStore<Partial<RootState>>([]);

describe("Testing Aside Component", () => {
  let store: MockStoreEnhanced<unknown, {}>;

  beforeEach(() => {
    store = mockStore({
      shared: {
        showAside: false,
        searchText: "",
      },
    });

    jest.spyOn(store, "dispatch");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the Aside component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Aside />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("Subjects")).toBeInTheDocument();
    expect(screen.getByText("Quiz")).toBeInTheDocument();
    expect(screen.getByText("Users")).toBeInTheDocument();
  });

  test("toggle aside when clicking on link", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Aside />
        </Provider>
      </BrowserRouter>
    );

    const navLink = screen.getByRole("link", { name: "Subjects" });
    fireEvent.click(navLink);

    expect(store.dispatch).toHaveBeenCalledWith(asideToggle(false));
  });
});
