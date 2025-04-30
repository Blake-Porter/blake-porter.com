// _data/guidesByRegion.js
// Precompute a nested hierarchy: region -> country -> subregion -> city
module.exports = function(collections) {
    // Get the pre-defined "guides" collection
    const guides = collections.guides || [];
    const hierarchy = {};
  
    guides.forEach(item => {
      const { region = "", country = "", subregion = "", city = "" } = item.data;
      if (!region) return;
      hierarchy[region] = hierarchy[region] || {};
      hierarchy[region][country] = hierarchy[region][country] || {};
      hierarchy[region][country][subregion] = hierarchy[region][country][subregion] || new Set();
      if (city) hierarchy[region][country][subregion].add(city);
    });
  
    // Convert Sets to sorted Arrays for templating
    const result = {};
    for (const [reg, countries] of Object.entries(hierarchy)) {
      result[reg] = {};
      for (const [ctry, subs] of Object.entries(countries)) {
        result[reg][ctry] = {};
        for (const [sub, cities] of Object.entries(subs)) {
          result[reg][ctry][sub] = Array.from(cities).sort();
        }
      }
    }
  
    return result;
  };
  