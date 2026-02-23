import { Search } from "lucide-react";

export default function SearchBar({ search, setSearch }) {
    return (
        <div className="input-group search-box">
            <span className="input-group-text bg-white">
                <Search size={16} />
            </span>
            <input
                type="text"
                className="form-control"
                placeholder="Search country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}