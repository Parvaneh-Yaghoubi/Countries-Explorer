import CountryCard from "./CountryCard";

export default function CountryList({ countries, loading }) {
    if (loading) return null;

    return (
        <div className="row g-4">
            {countries.map((country, index) => (
                <div
                    className="col-12 col-sm-6 col-lg-4 col-xl-3"
                    key={country.cca3 || index}>
                    <CountryCard country={country} />
                </div>
            ))}
        </div>
    );
} 