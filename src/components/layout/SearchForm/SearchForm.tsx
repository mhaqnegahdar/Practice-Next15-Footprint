import React from "react";
import Form from "next/form";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ResetButton from "./ResetButton";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action={"/"}
      scroll={false}
      className="mx-auto max-w-[90%] search-form flex-center peer relative z-10 block w-full lg:max-w-5xl rounded-md border border-gray-200 bg-input py-2.5 pl-5 text-sm font-medium shadow-lg focus:border-black focus:outline-none focus:ring-0"
    >
      <div className="flex w-full items-center px-2.5 py-1.5 focus-within:border-blue-500">
        {/* <SearchIcon className="mr-2.5 h-4 w-4" /> */}
        <Input
          type="search"
          placeholder="Search fot the Footprint..."
          className="w-full border-0 shadow-none"
          name="query"
          defaultValue={query}
        />

        {query && <ResetButton />}
        <Button className="ml-2" type="submit">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
