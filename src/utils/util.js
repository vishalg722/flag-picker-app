export const continentsData = [
  {
    continent: "Africa",

    countries: [
      {
        name: "Nigeria",

        flag: "🇳🇬",
      },

      {
        name: "Ethiopia",

        flag: "🇪🇹",
      },

      {
        name: "Egypt",

        flag: "🇪🇬",
      },

      {
        name: "DR Congo",

        flag: "🇨🇩",
      },

      {
        name: "South Africa",

        flag: "🇿🇦",
      },
    ],
  },

  {
    continent: "America",

    countries: [
      {
        name: "USA",

        flag: "🇺🇸",
      },

      {
        name: "Brazil",

        flag: "🇧🇷",
      },

      {
        name: "Mexico",

        flag: "🇲🇽",
      },

      {
        name: "Colombia",

        flag: "🇨🇴",
      },

      {
        name: "Argentina",

        flag: "🇦🇷",
      },
    ],
  },

  {
    continent: "Asia",

    countries: [
      {
        name: "China",

        flag: "🇨🇳",
      },

      {
        name: "India",

        flag: "🇮🇳",
      },

      {
        name: "Indonesia",

        flag: "🇮🇩",
      },

      {
        name: "Pakistan",

        flag: "🇵🇰",
      },

      {
        name: "Bangladesh",

        flag: "🇧🇩",
      },
    ],
  },

  {
    continent: "Europe",

    countries: [
      {
        name: "Russia",

        flag: "🇷🇺",
      },

      {
        name: "Germany",

        flag: "🇩🇪",
      },

      {
        name: "UK",

        flag: "🇬🇧",
      },

      {
        name: "France",

        flag: "🇫🇷",
      },

      {
        name: "Italy",

        flag: "🇮🇹",
      },
    ],
  },

  {
    continent: "Oceania",

    countries: [
      {
        name: "Australia",

        flag: "🇦🇺",
      },

      {
        name: "Papua New Guinea",

        flag: "🇵🇬",
      },

      {
        name: "New Zealand",

        flag: "🇳🇿",
      },

      {
        name: "Fiji",

        flag: "🇫🇯",
      },

      {
        name: "Solomon Islands",

        flag: "🇸🇧",
      },
    ],
  },
];


export const getListOfContinnets = (continents) => {
	let response = [];
	if(continents.length > 0) {
		continents.forEach(continentsData => { 
			response.push(continentsData.continent);
		});
	}
	return response
}

export const getCountries = (continent) => {
	let countryList = [];
	if(continent){
		countryList  = continentsData.filter((continentName => continentName.continent === continent))
									.map( (continentCountries) => continentCountries.countries );
	}
	return countryList;
}

export const getSelectedFlagList = (coutries,selectedCountry) => {
	let flagList = [];
	if(coutries.length > 0){
		coutries[0].forEach((country)=>{
			if(selectedCountry.indexOf(country.name) > -1) {
				flagList.push(country.flag)
			}
		})
	}
	return flagList;
}
