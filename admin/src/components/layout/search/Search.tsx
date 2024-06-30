import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useForm } from "react-hook-form";
import { searchInput } from "../../../redux/reducers/sharedSlice";

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchText } = useSelector((state: RootState) => state.shared);
  const { register, handleSubmit, getValues } = useForm<{ search: string }>();


  type FormValue = { search: string };
  
  const submitForm = (data: { search: string }) => {
    dispatch(searchInput(data.search));
  };

  return (
    <div className="">
      <label htmlFor="search" className="block text-sm font-medium sr-only">
        Search
      </label>
      <form
        data-testid="search-form"
        onSubmit={handleSubmit(submitForm)}
        onChange={() => {
          const value = getValues("search");
          dispatch(searchInput(value));
        }}
        className="relative flex items-center lg:ml-0 lg:mr-6 px-2 sm:px-4 rounded-lg bg-zinc-200 focus:bg-white focus:outline-none border border-gray"
      >
        <button type="submit" className="mr-2 lg:mr-4" aria-label="search">
          <span className="sr-only">search</span>
          <svg
            className=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.4438 16.4438L21.0001 21.0001"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <input
          type="text"
          id="search"
          value={searchText}
          className="focus:ring-transparent bg-zinc-200 border-none focus:!border-transparent focus:!outline-none focus:appearance-none w-full h-10 rounded-l-md relative"
          placeholder="Search"
          {...register("search", { required: true })}
        />
      </form>
    </div>
  );
};

export default Search;
