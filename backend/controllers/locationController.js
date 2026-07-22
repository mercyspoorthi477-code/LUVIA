const axios = require("axios");

const API_KEY = process.env.GEOAPIFY_API_KEY;

// Haversine Formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

const searchPlaces = async (req, res, category) => {
  try {
    const { lat, lng } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({
        message: "Latitude and longitude are required",
      });
    }

    const url = `https://api.geoapify.com/v2/places`;

    const response = await axios.get(url, {
      params: {
        categories: category,
        filter: `circle:${lng},${lat},5000`,
        limit: 20,
        apiKey: API_KEY,
      },
    });

    const places = response.data.features.map((item) => ({
      name: item.properties.name || "Unknown",
      address: item.properties.formatted || "Address unavailable",
      latitude: item.properties.lat,
      longitude: item.properties.lon,
      distance: `${calculateDistance(
        Number(lat),
        Number(lng),
        item.properties.lat,
        item.properties.lon
      ).toFixed(2)} km`,
      googleMapLink: `https://www.google.com/maps?q=${item.properties.lat},${item.properties.lon}`,
    }));

    res.status(200).json(places);
  } catch (err) {
    console.log(err.response?.data || err.message);

    res.status(500).json({
      message: err.response?.data || err.message,
    });
  }
};

exports.getHospitals = (req, res) => {
  searchPlaces(req, res, "healthcare.hospital");
};

exports.getMedicalStores = (req, res) => {
  searchPlaces(req, res, "healthcare.pharmacy");
};

exports.getWashrooms = (req, res) => {
  searchPlaces(req, res, "amenity.toilet");
};