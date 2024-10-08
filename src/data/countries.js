const countryList = [
  { value: "Afghanistan", label: "🇦🇫 Afghanistan", continent: "Asia" },
  { value: "Albania", label: "🇦🇱 Albania", continent: "Europe" },
  { value: "Algeria", label: "🇩🇿 Algeria", continent: "Africa" },
  { value: "Andorra", label: "🇦🇩 Andorra", continent: "Europe" },
  { value: "Angola", label: "🇦🇴 Angola", continent: "Africa" },
  {
    value: "Antigua and Barbuda",
    label: "🇦🇬 Antigua and Barbuda",
    continent: "North America",
  },
  { value: "Argentina", label: "🇦🇷 Argentina", continent: "South America" },
  { value: "Armenia", label: "🇦🇲 Armenia", continent: "Asia" },
  { value: "Australia", label: "🇦🇺 Australia", continent: "Australia" },
  { value: "Austria", label: "🇦🇹 Austria", continent: "Europe" },
  { value: "Azerbaijan", label: "🇦🇿 Azerbaijan", continent: "Asia" },
  { value: "Bahamas", label: "🇧🇸 Bahamas", continent: "North America" },
  { value: "Bahrain", label: "🇧🇭 Bahrain", continent: "Asia" },
  { value: "Bangladesh", label: "🇧🇩 Bangladesh", continent: "Asia" },
  { value: "Barbados", label: "🇧🇧 Barbados", continent: "North America" },
  { value: "Belarus", label: "🇧🇾 Belarus", continent: "Europe" },
  { value: "Belgium", label: "🇧🇪 Belgium", continent: "Europe" },
  { value: "Belize", label: "🇧🇿 Belize", continent: "North America" },
  { value: "Benin", label: "🇧🇯 Benin", continent: "Africa" },
  { value: "Bhutan", label: "🇧🇹 Bhutan", continent: "Asia" },
  { value: "Bolivia", label: "🇧🇴 Bolivia", continent: "South America" },
  {
    value: "Bosnia and Herzegovina",
    label: "🇧🇦 Bosnia and Herzegovina",
    continent: "Europe",
  },
  { value: "Botswana", label: "🇧🇼 Botswana", continent: "Africa" },
  { value: "Brazil", label: "🇧🇷 Brazil", continent: "South America" },
  { value: "Brunei", label: "🇧🇳 Brunei", continent: "Asia" },
  { value: "Bulgaria", label: "🇧🇬 Bulgaria", continent: "Europe" },
  { value: "Burkina Faso", label: "🇧🇫 Burkina Faso", continent: "Africa" },
  { value: "Burundi", label: "🇧🇮 Burundi", continent: "Africa" },
  { value: "Cambodia", label: "🇰🇭 Cambodia", continent: "Asia" },
  { value: "Cameroon", label: "🇨🇲 Cameroon", continent: "Africa" },
  { value: "Canada", label: "🇨🇦 Canada", continent: "North America" },
  { value: "Cape Verde", label: "🇨🇻 Cape Verde", continent: "Africa" },
  {
    value: "Central African Republic",
    label: "🇨🇫 Central African Republic",
    continent: "Africa",
  },
  { value: "Chad", label: "🇹🇩 Chad", continent: "Africa" },
  { value: "Chile", label: "🇨🇱 Chile", continent: "South America" },
  { value: "China", label: "🇨🇳 China", continent: "Asia" },
  { value: "Colombia", label: "🇨🇴 Colombia", continent: "South America" },
  { value: "Comoros", label: "🇰🇲 Comoros", continent: "Africa" },
  { value: "Congo", label: "🇨🇬 Congo", continent: "Africa" },
  {
    value: "Congo, Democratic Republic of the",
    label: "🇨🇩 Congo, Democratic Republic of the",
    continent: "Africa",
  },
  { value: "Costa Rica", label: "🇨🇷 Costa Rica", continent: "North America" },
  { value: "Côte d'Ivoire", label: "🇨🇮 Côte d'Ivoire", continent: "Africa" },
  { value: "Croatia", label: "🇭🇷 Croatia", continent: "Europe" },
  { value: "Cuba", label: "🇨🇺 Cuba", continent: "North America" },
  { value: "Cyprus", label: "🇨🇾 Cyprus", continent: "Europe" },
  { value: "Czech Republic", label: "🇨🇿 Czech Republic", continent: "Europe" },
  { value: "Denmark", label: "🇩🇰 Denmark", continent: "Europe" },
  { value: "Djibouti", label: "🇩🇯 Djibouti", continent: "Africa" },
  { value: "Dominica", label: "🇩🇲 Dominica", continent: "North America" },
  {
    value: "Dominican Republic",
    label: "🇩🇴 Dominican Republic",
    continent: "North America",
  },
  { value: "Ecuador", label: "🇪🇨 Ecuador", continent: "South America" },
  { value: "Egypt", label: "🇪🇬 Egypt", continent: "Africa" },
  { value: "El Salvador", label: "🇸🇻 El Salvador", continent: "North America" },
  {
    value: "Equatorial Guinea",
    label: "🇬🇶 Equatorial Guinea",
    continent: "Africa",
  },
  { value: "Eritrea", label: "🇪🇷 Eritrea", continent: "Africa" },
  { value: "Estonia", label: "🇪🇪 Estonia", continent: "Europe" },
  { value: "Ethiopia", label: "🇪🇹 Ethiopia", continent: "Africa" },
  { value: "Fiji", label: "🇫🇯 Fiji", continent: "Australia" },
  { value: "Finland", label: "🇫🇮 Finland", continent: "Europe" },
  { value: "France", label: "🇫🇷 France", continent: "Europe" },
  { value: "Gabon", label: "🇬🇦 Gabon", continent: "Africa" },
  { value: "Gambia", label: "🇬🇲 Gambia", continent: "Africa" },
  { value: "Georgia", label: "🇬🇪 Georgia", continent: "Asia" },
  { value: "Germany", label: "🇩🇪 Germany", continent: "Europe" },
  { value: "Ghana", label: "🇬🇭 Ghana", continent: "Africa" },
  { value: "Greece", label: "🇬🇷 Greece", continent: "Europe" },
  { value: "Grenada", label: "🇬🇩 Grenada", continent: "North America" },
  { value: "Guatemala", label: "🇬🇹 Guatemala", continent: "North America" },
  { value: "Guinea", label: "🇬🇳 Guinea", continent: "Africa" },
  { value: "Guinea-Bissau", label: "🇬🇼 Guinea-Bissau", continent: "Africa" },
  { value: "Guyana", label: "🇬🇾 Guyana", continent: "South America" },
  { value: "Haiti", label: "🇭🇹 Haiti", continent: "North America" },
  { value: "Honduras", label: "🇭🇳 Honduras", continent: "North America" },
  { value: "Hungary", label: "🇭🇺 Hungary", continent: "Europe" },
  { value: "Iceland", label: "🇮🇸 Iceland", continent: "Europe" },
  { value: "India", label: "🇮🇳 India", continent: "Asia" },
  { value: "Indonesia", label: "🇮🇩 Indonesia", continent: "Asia" },
  { value: "Iran", label: "🇮🇷 Iran", continent: "Asia" },
  { value: "Iraq", label: "🇮🇶 Iraq", continent: "Asia" },
  { value: "Ireland", label: "🇮🇪 Ireland", continent: "Europe" },
  { value: "Israel", label: "🇮🇱 Israel", continent: "Asia" },
  { value: "Italy", label: "🇮🇹 Italy", continent: "Europe" },
  { value: "Jamaica", label: "🇯🇲 Jamaica", continent: "North America" },
  { value: "Japan", label: "🇯🇵 Japan", continent: "Asia" },
  { value: "Jordan", label: "🇯🇴 Jordan", continent: "Asia" },
  { value: "Kazakhstan", label: "🇰🇿 Kazakhstan", continent: "Asia" },
  { value: "Kenya", label: "🇰🇪 Kenya", continent: "Africa" },
  { value: "Kiribati", label: "🇰🇮 Kiribati", continent: "Australia" },
  { value: "North Korea", label: "🇰🇵 North Korea", continent: "Asia" },
  { value: "South Korea", label: "🇰🇷 South Korea", continent: "Asia" },
  { value: "Kuwait", label: "🇰🇼 Kuwait", continent: "Asia" },
  { value: "Kyrgyzstan", label: "🇰🇬 Kyrgyzstan", continent: "Asia" },
  { value: "Laos", label: "🇱🇦 Laos", continent: "Asia" },
  { value: "Latvia", label: "🇱🇻 Latvia", continent: "Europe" },
  { value: "Lebanon", label: "🇱🇧 Lebanon", continent: "Asia" },
  { value: "Lesotho", label: "🇱🇸 Lesotho", continent: "Africa" },
  { value: "Liberia", label: "🇱🇷 Liberia", continent: "Africa" },
  { value: "Libya", label: "🇱🇾 Libya", continent: "Africa" },
  { value: "Liechtenstein", label: "🇱🇮 Liechtenstein", continent: "Europe" },
  { value: "Lithuania", label: "🇱🇹 Lithuania", continent: "Europe" },
  { value: "Luxembourg", label: "🇱🇺 Luxembourg", continent: "Europe" },
  { value: "Madagascar", label: "🇲🇬 Madagascar", continent: "Africa" },
  { value: "Malawi", label: "🇲🇼 Malawi", continent: "Africa" },
  { value: "Malaysia", label: "🇲🇾 Malaysia", continent: "Asia" },
  { value: "Maldives", label: "🇲🇻 Maldives", continent: "Asia" },
  { value: "Mali", label: "🇲🇱 Mali", continent: "Africa" },
  { value: "Malta", label: "🇲🇹 Malta", continent: "Europe" },
  {
    value: "Marshall Islands",
    label: "🇲🇭 Marshall Islands",
    continent: "Australia",
  },
  { value: "Mauritania", label: "🇲🇷 Mauritania", continent: "Africa" },
  { value: "Mauritius", label: "🇲🇺 Mauritius", continent: "Africa" },
  { value: "Mexico", label: "🇲🇽 Mexico", continent: "North America" },
  { value: "Micronesia", label: "🇫🇲 Micronesia", continent: "Australia" },
  { value: "Moldova", label: "🇲🇩 Moldova", continent: "Europe" },
  { value: "Monaco", label: "🇲🇨 Monaco", continent: "Europe" },
  { value: "Mongolia", label: "🇲🇳 Mongolia", continent: "Asia" },
  { value: "Montenegro", label: "🇲🇪 Montenegro", continent: "Europe" },
  { value: "Morocco", label: "🇲🇦 Morocco", continent: "Africa" },
  { value: "Mozambique", label: "🇲🇿 Mozambique", continent: "Africa" },
  { value: "Myanmar", label: "🇲🇲 Myanmar", continent: "Asia" },
  { value: "Namibia", label: "🇳🇦 Namibia", continent: "Africa" },
  { value: "Nauru", label: "🇳🇷 Nauru", continent: "Australia" },
  { value: "Nepal", label: "🇳🇵 Nepal", continent: "Asia" },
  { value: "Netherlands", label: "🇳🇱 Netherlands", continent: "Europe" },
  { value: "New Zealand", label: "🇳🇿 New Zealand", continent: "Australia" },
  { value: "Nicaragua", label: "🇳🇮 Nicaragua", continent: "North America" },
  { value: "Niger", label: "🇳🇪 Niger", continent: "Africa" },
  { value: "Nigeria", label: "🇳🇬 Nigeria", continent: "Africa" },
  {
    value: "North Macedonia",
    label: "🇲🇰 North Macedonia",
    continent: "Europe",
  },
  { value: "Norway", label: "🇳🇴 Norway", continent: "Europe" },
  { value: "Oman", label: "🇴🇲 Oman", continent: "Asia" },
  { value: "Pakistan", label: "🇵🇰 Pakistan", continent: "Asia" },
  { value: "Palau", label: "🇵🇼 Palau", continent: "Australia" },
  { value: "Panama", label: "🇵🇦 Panama", continent: "North America" },
  {
    value: "Papua New Guinea",
    label: "🇵🇬 Papua New Guinea",
    continent: "Australia",
  },
  { value: "Paraguay", label: "🇵🇾 Paraguay", continent: "South America" },
  { value: "Peru", label: "🇵🇪 Peru", continent: "South America" },
  { value: "Philippines", label: "🇵🇭 Philippines", continent: "Asia" },
  { value: "Poland", label: "🇵🇱 Poland", continent: "Europe" },
  { value: "Portugal", label: "🇵🇹 Portugal", continent: "Europe" },
  { value: "Qatar", label: "🇶🇦 Qatar", continent: "Asia" },
  { value: "Romania", label: "🇷🇴 Romania", continent: "Europe" },
  { value: "Russia", label: "🇷🇺 Russia", continent: "Europe" },
  { value: "Rwanda", label: "🇷🇼 Rwanda", continent: "Africa" },
  {
    value: "Saint Kitts and Nevis",
    label: "🇰🇳 Saint Kitts and Nevis",
    continent: "North America",
  },
  { value: "Saint Lucia", label: "🇱🇨 Saint Lucia", continent: "North America" },
  {
    value: "Saint Vincent and the Grenadines",
    label: "🇻🇨 Saint Vincent and the Grenadines",
    continent: "North America",
  },
  { value: "Samoa", label: "🇼🇸 Samoa", continent: "Australia" },
  { value: "San Marino", label: "🇸🇲 San Marino", continent: "Europe" },
  {
    value: "Sao Tome and Principe",
    label: "🇸🇹 Sao Tome and Principe",
    continent: "Africa",
  },
  { value: "Saudi Arabia", label: "🇸🇦 Saudi Arabia", continent: "Asia" },
  { value: "Senegal", label: "🇸🇳 Senegal", continent: "Africa" },
  { value: "Serbia", label: "🇷🇸 Serbia", continent: "Europe" },
  { value: "Seychelles", label: "🇸🇨 Seychelles", continent: "Africa" },
  { value: "Sierra Leone", label: "🇸🇱 Sierra Leone", continent: "Africa" },
  { value: "Singapore", label: "🇸🇬 Singapore", continent: "Asia" },
  { value: "Slovakia", label: "🇸🇰 Slovakia", continent: "Europe" },
  { value: "Slovenia", label: "🇸🇮 Slovenia", continent: "Europe" },
  {
    value: "Solomon Islands",
    label: "🇸🇧 Solomon Islands",
    continent: "Australia",
  },
  { value: "Somalia", label: "🇸🇴 Somalia", continent: "Africa" },
  { value: "South Africa", label: "🇿🇦 South Africa", continent: "Africa" },
  { value: "South Sudan", label: "🇸🇸 South Sudan", continent: "Africa" },
  { value: "Spain", label: "🇪🇸 Spain", continent: "Europe" },
  { value: "Sri Lanka", label: "🇱🇰 Sri Lanka", continent: "Asia" },
  { value: "Sudan", label: "🇸🇩 Sudan", continent: "Africa" },
  { value: "Suriname", label: "🇸🇷 Suriname", continent: "South America" },
  { value: "Sweden", label: "🇸🇪 Sweden", continent: "Europe" },
  { value: "Switzerland", label: "🇨🇭 Switzerland", continent: "Europe" },
  { value: "Syria", label: "🇸🇾 Syria", continent: "Asia" },
  { value: "Taiwan", label: "🇹🇼 Taiwan", continent: "Asia" },
  { value: "Tajikistan", label: "🇹🇯 Tajikistan", continent: "Asia" },
  { value: "Tanzania", label: "🇹🇿 Tanzania", continent: "Africa" },
  { value: "Thailand", label: "🇹🇭 Thailand", continent: "Asia" },
  { value: "Timor-Leste", label: "🇹🇱 Timor-Leste", continent: "Asia" },
  { value: "Togo", label: "🇹🇬 Togo", continent: "Africa" },
  { value: "Tonga", label: "🇹🇴 Tonga", continent: "Australia" },
  {
    value: "Trinidad and Tobago",
    label: "🇹🇹 Trinidad and Tobago",
    continent: "North America",
  },
  { value: "Tunisia", label: "🇹🇳 Tunisia", continent: "Africa" },
  { value: "Turkey", label: "🇹🇷 Turkey", continent: "Asia" },
  { value: "Turkmenistan", label: "🇹🇲 Turkmenistan", continent: "Asia" },
  { value: "Tuvalu", label: "🇹🇻 Tuvalu", continent: "Australia" },
  { value: "Uganda", label: "🇺🇬 Uganda", continent: "Africa" },
  { value: "Ukraine", label: "🇺🇦 Ukraine", continent: "Europe" },
  {
    value: "United Arab Emirates",
    label: "🇦🇪 United Arab Emirates",
    continent: "Asia",
  },
  { value: "United Kingdom", label: "🇬🇧 United Kingdom", continent: "Europe" },
  {
    value: "United States",
    label: "🇺🇸 United States",
    continent: "North America",
  },
  { value: "Uruguay", label: "🇺🇾 Uruguay", continent: "South America" },
  { value: "Uzbekistan", label: "🇺🇿 Uzbekistan", continent: "Asia" },
  { value: "Vanuatu", label: "🇻🇺 Vanuatu", continent: "Australia" },
  { value: "Vatican City", label: "🇻🇦 Vatican City", continent: "Europe" },
  { value: "Venezuela", label: "🇻🇪 Venezuela", continent: "South America" },
  { value: "Vietnam", label: "🇻🇳 Vietnam", continent: "Asia" },
  { value: "Yemen", label: "🇾🇪 Yemen", continent: "Asia" },
  { value: "Zambia", label: "🇿🇲 Zambia", continent: "Africa" },
  { value: "Zimbabwe", label: "🇿🇼 Zimbabwe", continent: "Africa" },
];

export default countryList;
