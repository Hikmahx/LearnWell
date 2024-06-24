import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Search from "./Search";
import { RootState } from "../../../redux/store";
import userEvent from "@testing-library/user-event";

const mockStore = configureStore<Partial<RootState>>([]);

describe("Testing Search Component", () => {
  let store: MockStoreEnhanced<unknown, {}>;
  const dispatch = jest.fn();

  beforeEach(() => {
    store = mockStore({
      shared: {
        showAside: false || true,
        searchText: "",
      },
    });
  });

  test("renders the Search component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByLabelText("Search")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  test("render form submission", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Search />
        </Provider>
      </BrowserRouter>
    );

    const searchElement = screen.getByPlaceholderText("Search");
    const formElement = screen.getByTestId("search-form");

    fireEvent.change(searchElement, { target: { value: "test" } });
    fireEvent.submit(formElement);

    const mockDispatch = {
      type: "shared/searchInput",
      payload: "test",
    };

    store.dispatch(mockDispatch);
  });
});
