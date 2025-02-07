import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({query}: {query?: string}) => {
    return (
        <Form action='/' className="search-form">
            <input
                name="query"
                defaultValue={query}
                className="search-input"
                placeholder="Search Startups"
            />

            <div className="flex gap-2"></div>
            {query && <SearchFormReset />}
            <button type="submit" className="search-btn text-white">
                <Search className="size-5" />
            </button>
        </Form>
    )
}

export default SearchForm
