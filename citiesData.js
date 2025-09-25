const citiesData = {
  status: "success",
  message: "Cities fetched successfully",
  data: [
    {
      id: 1,
      name: "Pune",
      state: "Maharashtra",
      country: "India",
      population: 3100000,
      coordinates: { lat: 18.5204, lon: 73.8567 },
    },
    {
      id: 2,
      name: "Mumbai",
      state: "Maharashtra",
      country: "India",
      population: 12400000,
      coordinates: { lat: 19.076, lon: 72.8777 },
    },
    {
      id: 3,
      name: "Bangalore",
      state: "Karnataka",
      country: "India",
      population: 8440000,
      coordinates: { lat: 12.9716, lon: 77.5946 },
    },
    {
      id: 4,
      name: "Delhi",
      state: "Delhi",
      country: "India",
      population: 16787941,
      coordinates: { lat: 28.6139, lon: 77.209 },
    },
    {
      id: 5,
      name: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      population: 7090000,
      coordinates: { lat: 13.0827, lon: 80.2707 },
    },
  ],
};

module.exports = citiesData;
