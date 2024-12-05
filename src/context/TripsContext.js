import React, { createContext, useState, useContext } from "react";

const TripContext = createContext();

// Provider component
export const TripsProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);

  // Function to add a new accommodation
  const addTrip = (newTrip) => {
    setTrips((prev) => [...prev, newTrip]);
  };

  // Function to update an accommodation
  const updateTrip = (id, updatedTrip) => {
    setTrips((prev) =>
      prev.map((trip) => (trip.id === id ? updatedTrip : trip))
    );
  };

  // Function to remove an accommodation
  const removeTrip = (id) => {
    setTrips((prev) => prev.filter((trip) => trip.id !== id));
  };

  return (
    <TripContext.Provider
      value={{
        trips,
        addTrip,
        updateTrip,
        removeTrip,
      }}
    >
      {children}
    </TripContext.Provider>
  );
};

export const useTrip = () => {
  return useContext(TripContext);
};
