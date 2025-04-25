module.exports = async function() {
    // Fetch the latest JPY→USD rates
    const res = await fetch("https://api.exchangerate-api.com/v4/latest/JPY");
    if (!res.ok) {
      throw new Error(`Exchange rate fetch failed: ${res.status} ${res.statusText}`);
    }
  
    const data = await res.json();
    // Return the USD rate
    return data.rates.USD;
  };