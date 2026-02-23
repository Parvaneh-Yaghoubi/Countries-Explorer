import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountryList from "./components/CountryList";

const BASE_URL = "https://restcountries.com/v3.1";

export default function App() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("all");

    useEffect(() => {
        const controller = new AbortController();

        async function fetchCountries() {
            try {
                setLoading(true);
                setError(null);

                // build URL safely
                let url = `${BASE_URL}/all?fields=name,flags,region,population,cca3`;

                const trimmedSearch = search.trim();

                // priority: search (>=2 chars) > region > all
                if (trimmedSearch.length >= 2) {
                    url = `${BASE_URL}/name/${encodeURIComponent(
                        trimmedSearch
                    )}?fields=name,flags,region,population,cca3`;
                } else if (region !== "all") {
                    url = `${BASE_URL}/region/${region}?fields=name,flags,region,population,cca3`;
                }

                const res = await fetch(url, { signal: controller.signal });

                if (res.status === 404) {
                    setCountries([]);
                    return;
                }

                if (!res.ok) throw new Error("Failed to fetch countries");

                const data = await res.json();
                setCountries(Array.isArray(data) ? data : []);
            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message || "Something went wrong");
                    setCountries([]);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchCountries();
        return () => controller.abort();
    }, [search, region]);

    function retry() {
        setSearch((s) => s + " ");
        setSearch((s) => s.trim());
    }

    function clearFilters() {
        setSearch("");
        setRegion("all");
    }

    return (
        <div className="app-bg min-vh-100 py-4 py-sm-5">
            <div className="container">
                {/* Header */}
                <div className="header-card p-4 mb-4">
                    <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="brand-icon">
                            <Globe size={22} />
                        </div>
                        <div>
                            <h1 className="h3 mb-0 fw-bold">Countries Explorer</h1>
                            <div className="text-muted small">
                                Discover countries around the world
                            </div>
                        </div>
                    </div>

                    <div className="row g-2">
                        <div className="col-md-6">
                            <SearchBar search={search} setSearch={setSearch} />
                        </div>
                        <div className="col-md-4">
                            <RegionFilter region={region} setRegion={setRegion} />
                        </div>
                        <div className="col-md-2 d-grid">
                            <button className="btn btn-gradient" onClick={clearFilters}>
                                Clear
                            </button>
                        </div>
                    </div>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="alert alert-info shadow-sm" role="alert">
                        Loading countries...
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="alert alert-danger shadow-sm" role="alert">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Error: {error}</span>
                            <button className="btn btn-sm btn-light" onClick={retry}>
                                Retry
                            </button>
                        </div>
                    </div>
                )}

                {/* No results */}
                {!loading && !error && countries.length === 0 && (
                    <div className="no-results p-4 mb-3 text-center">
                        <div className="h5 mb-1">No results found</div>
                        <div className="text-muted">Try another search.</div>
                    </div>
                )}

                <CountryList countries={countries} loading={loading} />
            </div>
        </div>
    );
}


