
const apiClientCountryCases = fetch(
  "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key":
        "84660ad37emshfca869ae254ae73p16b922jsnf01c1ebb19a6"
    }
  }
);

export default {
  getCountryCases() {
    return apiClientCountryCases;
  }
}