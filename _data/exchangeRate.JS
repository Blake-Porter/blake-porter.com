const fetch = require('node-fetch');

module.exports = async function() {
  // Using exchangerate-api.com (free tier)
  const res = await fetch('https://api.exchangerate-api.com/v4/latest/JPY');
  if (!res.ok) throw new Error("Failed to fetch exchange rates");
  const json = await res.json();
  return json.rates.USD;
};