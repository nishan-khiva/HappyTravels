import { useState } from "react";

export default function LocationInput({ placeholder, onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchLocation = async (text) => {
    setQuery(text);

    if (text.length < 3) {
      setResults([]);
      return;
    }

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${text}`
    );
    const data = await res.json();
    setResults(data.slice(0, 5));
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => searchLocation(e.target.value)}
        placeholder={placeholder}
        className="w-full border rounded-xl px-4 py-3"
      />

      {results.length > 0 && (
        <ul className="absolute z-50 bg-white border w-full rounded-xl mt-1 shadow">
          {results.map((place) => (
            <li
              key={place.place_id}
              onClick={() => {
                setQuery(place.display_name);
                setResults([]);
                onSelect(place);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
            >
              {place.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
