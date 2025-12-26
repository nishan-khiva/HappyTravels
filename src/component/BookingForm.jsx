import React, { useState } from "react";
import LocationInput from "../component/LocationInput";


const cars = [
  {
    id: "dzire",
    name: "Swift Dzire",
    seats: "4 Seater",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExMTFRUVFRcSFxYYGBcWFhgWFRgXFhgVFRUeHSggGBomIBgVITEhJyktLi4uFx8zODMtNygtLisBCgoKDg0NFQ8PFSsZFR0tNzcrLysrKy0tLTAsLS0tLSsrNystKy0rLS0sNy03Kys3KzgyMC0rLDc0NzcrLTErLf/AABEIAL8BCAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABIEAACAQIDBQUFBAYHBgcAAAABAgADEQQSIQUGMUFREyJhcZEHMoGhsUJicsEUI1KCktEkM0NTY6KyFTTC0uHwc4OTo7PD4v/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMFBP/EAB0RAQEBAQEAAgMAAAAAAAAAAAARAQIDITETFDL/2gAMAwEAAhEDEQA/AO4xEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERBMBE162Npr7zqPMgfWazbaof3lP+Nf5xBIxIz/AGuh4FT5azw+1wOvpLEqWiV9t4l4LdyNNLWvzBbgD4cZjO3XvYAX6ak+g1iFWSJW6m2qwFyAB4jL/qImpU3uVferYdfOrRH/ANkQq3xK1U3gdQS4VQLXJKKNdBqXtx085mw28Obgqt+F1b/TeIVPxI1Nsp9oMn4gQPnab1KsraqQZFZIiICIiAiIgIiICIiAiIgIiICIiAiIgJ5q1AoLMQoGpJNgB1J5TDicUF0AzN0vYDxZvsj59AZW9o7XAN7io41B4U0PVF6/eNzxtppAlcbtaw07i/tuDmP4KfH4tblowlV2ljs97jMP2qhzfEKe6v7oEjtobXFySczdT+UrW0NtE85qM1I7SxtOkL93jayhV+dvyldbbCOctrmxN7j6W8ZqYnHEyJ2hi8qm1gToD9T8Bc/CBix+LVmYhVIBsLgf98j8pbdyt1qtdUr1HrUqLHu00ZkasDwAAIshF9eYvwHenv2f7i9plxWKQ5CQaNAjVydQzqeWminkLtYDWU343uKlsNhm11StXU6D9qhQbj+KpxvoOHdKmNpbfRGNGgEqOt1b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",
  },
  {
    id: "ertiga",
    name: "Ertiga",
    seats: "7 Seater",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: "innova",
    name: "Innova",
    seats: "8 Seater",
    image:
      "data:image/jpeg;base64,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",
  },
];


export const BookingForm = () => {
  const [tripType, setTripType] = useState("oneway");
  const [pickup, setPickup] = useState(null);
  const [drop, setDrop] = useState(null);
  const [car, setCar] = useState(null);

  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="
        max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden
        grid grid-cols-1 lg:grid-cols-2
      ">

        {/* LEFT SIDE – FORM */}
        <div className="p-6 lg:p-8">
          <h2 className="text-3xl font-bold mb-2">
            Book Your Cab
          </h2>
          <p className="text-gray-600 mb-6">
            Safe, Reliable & Affordable Taxi Service
          </p>

          {/* Trip Type */}
          <div className="flex gap-6 mb-5">
            <label className="flex items-center gap-2 cursor-pointer font-medium">
              <input
                type="radio"
                checked={tripType === "oneway"}
                onChange={() => setTripType("oneway")}
              />
              One Way
            </label>

            <label className="flex items-center gap-2 cursor-pointer font-medium">
              <input
                type="radio"
                checked={tripType === "round"}
                onChange={() => setTripType("round")}
              />
              Round Trip
            </label>
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <LocationInput
              placeholder="Pickup Location"
              onSelect={(place) => setPickup(place)}
            />

            <LocationInput
              placeholder="Drop Location"
              onSelect={(place) => setDrop(place)}
            />

            {/* Select Car */}
            <div className="mt-6">
              <h3 className="font-bold mb-3">Select Car</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cars.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setCar(c)}
                    className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center text-center transition
          ${car?.id === c.id
                        ? "border-yellow-400 bg-yellow-50 shadow-md"
                        : "hover:shadow-md"
                      }
        `}
                  >
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-20 h-14 object-contain mb-2"
                    />
                    <h4 className="font-semibold">{c.name}</h4>
                    <p className="text-sm text-gray-600">{c.seats}</p>
                  </div>
                ))}
              </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="date" className="p-4 border rounded-xl" />
              <input type="time" className="p-4 border rounded-xl" />
            </div>
          </div>

          {/* Button */}
          <button className="w-full mt-6 bg-[#fdc700] text-white py-4 rounded-xl font-bold text-lg hover:bg-yellow-500 transition">
            Search Cabs
          </button>

          {/* Contact */}
          <div className="mt-5 flex items-center gap-3 text-sm text-gray-600">
            <span className="font-semibold">24×7 Support</span>
            <span className="w-px h-4 bg-gray-400"></span>
            <span className="font-medium">+91 8077424137</span>
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE (Desktop only) */}
        <div className="hidden lg:block relative">
          <img
            src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023"
            alt="Taxi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>
    </section>
  );
};
