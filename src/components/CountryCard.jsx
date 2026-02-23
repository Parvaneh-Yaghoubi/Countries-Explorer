export default function CountryCard({ country }) {
    const name = country?.name?.common || "Unknown";
    const flag = country?.flags?.png;
    const region = country?.region || "N/A";
    const population = country?.population
        ? country.population.toLocaleString()
        : "N/A";

    return (
        <div className="card country-card h-100 border-0 shadow-sm">
            {flag && (
                <img
                    src={flag}
                    className="card-img-top"
                    alt={name}
                    style={{ height: 150, objectFit: "cover" }}/>
            )}
            
            <div className="card-body">
                <h5 className="card-title fw-bold">{name}</h5>
                <p className="card-text mb-1">
                    <span className="text-muted">Region:</span> {region}
                </p>
                <p className="card-text">
                    <span className="text-muted">Population:</span> {population}
                </p>
            </div>
        </div>
    );
}