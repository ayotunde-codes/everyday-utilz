// utils 1
export const isEmptyString = (text: string): boolean => (text ? !`${text}`.trim() : true);
// util 2
export const isEmail = (email: string): boolean =>
  !(/[a-z0-9-.]+@+[a-z0-9-.]+\.+[a-z]{2,}/i.test(email) === false || /[^a-z0-9._@-]/i.test(email) === true);

// util 3
export const deleteIndex = (array: any[], index: number) => {
  array.splice(index, 1);
  return array;
};

// util 4
export const countries: string[] = [
  'afghanistan',
  'albania',
  'algeria',
  'andorra',
  'angola',
  'antigua and barbuda',
  'argentina',
  'armenia',
  'australia',
  'austria',
  'azerbaijan',
  'bahamas',
  'bahrain',
  'bangladesh',
  'barbados',
  'belarus',
  'belgium',
  'belize',
  'benin',
  'bhutan',
  'bolivia',
  'bosnia and herzegovina',
  'botswana',
  'brazil',
  'brunei',
  'bulgaria',
  'burkina faso',
  'burundi',
  'cote d ivoire',
  'cabo verde',
  'cambodia',
  'cameroon',
  'canada',
  'central african republic',
  'chad',
  'chile',
  'china',
  'colombia',
  'comoros',
  'congo',
  'costa rica',
  'croatia',
  'cuba',
  'cyprus',
  'czech republic',
  'democratic republic of the congo',
  'denmark',
  'djibouti',
  'dominica',
  'dominican republic',
  'ecuador',
  'egypt',
  'el salvador',
  'equatorial guinea',
  'eritrea',
  'estonia',
  'ethiopia',
  'fiji',
  'finland',
  'france',
  'gabon',
  'gambia',
  'georgia',
  'germany',
  'ghana',
  'greece',
  'grenada',
  'guatemala',
  'guinea',
  'guineabissau',
  'guyana',
  'haiti',
  'holy see',
  'honduras',
  'hungary',
  'iceland',
  'india',
  'indonesia',
  'iran',
  'iraq',
  'ireland',
  'israel',
  'italy',
  'jamaica',
  'japan',
  'jordan',
  'kazakhstan',
  'kenya',
  'kiribati',
  'kuwait',
  'kyrgyzstan',
  'laos',
  'latvia',
  'lebanon',
  'lesotho',
  'liberia',
  'libya',
  'liechtenstein',
  'lithuania',
  'luxembourg',
  'macedonia',
  'madagascar',
  'malawi',
  'malaysia',
  'maldives',
  'mali',
  'malta',
  'marshall islands',
  'mauritania',
  'mauritius',
  'mexico',
  'micronesia',
  'moldova',
  'monaco',
  'mongolia',
  'montenegro',
  'morocco',
  'mozambique',
  'myanmar',
  'namibia',
  'nauru',
  'nepal',
  'netherlands',
  'new zealand',
  'nicaragua',
  'niger',
  'nigeria',
  'north korea',
  'norway',
  'oman',
  'pakistan',
  'palau',
  'palestine state',
  'panama',
  'papua new guinea',
  'paraguay',
  'peru',
  'philippines',
  'poland',
  'portugal',
  'qatar',
  'romania',
  'russia',
  'rwanda',
  'saint kitts and nevis',
  'saint lucia',
  'saint vincent and the grenadines',
  'samoa',
  'san marino',
  'sao tome and principe',
  'saudi arabia',
  'senegal',
  'serbia',
  'seychelles',
  'sierra leone',
  'singapore',
  'slovakia',
  'slovenia',
  'solomon islands',
  'somalia',
  'south africa',
  'south korea',
  'south sudan',
  'spain',
  'sri lanka',
  'sudan',
  'suriname',
  'swaziland',
  'sweden',
  'switzerland',
  'syria',
  'tajikistan',
  'tanzania',
  'thailand',
  'timorleste',
  'togo',
  'tonga',
  'trinidad and tobago',
  'tunisia',
  'turkey',
  'turkmenistan',
  'tuvalu',
  'uganda',
  'ukraine',
  'united arab emirates',
  'united kingdom',
  'united states of america',
  'uruguay',
  'uzbekistan',
  'vanuatu',
  'venezuela',
  'viet nam',
  'yemen',
  'zambia',
  'zimbabwe',
];

// util 5
export const isCountry = (country: string): boolean => countries.indexOf(country) !== -1;

// util 5
export const stringToArray = (stringValue: string): string[] => {
  const array = [];
  for (const value of stringValue) {
    array.push(value);
  }

  return array;
};

// util 7
export const isUpperCase = (text: string): boolean =>
  !!(text.toUpperCase() !== text.toLowerCase() && text === text.toUpperCase());

// utlil 8
export const isLowerCase = (text: string): boolean =>
  !!(text.toUpperCase() !== text.toLowerCase() && text === text.toLowerCase());

// util 9

export const reverseString = (stringValue: string): string => {
  const arr = stringToArray(`${stringValue}`);
  return arr.reverse().join('');
};

// util 10
export const lowerCaseFirst = (value: string): string => {
  let newValue = '';
  for (let i = 0; i < value.length; i += 1) {
    if (i === 0) {
      newValue = value[0].toLowerCase();
    } else {
      newValue += value[i];
    }
  }
  return newValue;
};

// utils 11

export const upperCaseFirst = (text: string): string => {
  let newValue = '';
  for (let i = 0; i < text.length; i += 1) {
    if (i === 0) {
      newValue = text[0].toUpperCase();
    } else {
      newValue += text[i];
    }
  }
  return newValue;
};

// util 12

export const upperCaseAllFirst = (word: string, transformAll = true) => {
  if (!isEmptyString(word)) {
    const wordArr = word.split(' ');
    const newWord = wordArr.map((value) => {
      if (transformAll) {
        value = value.toLowerCase();
      }
      const chars = value.split('');
      if (chars[0]) chars[0] = chars[0].toUpperCase();
      return chars.join('');
    });
    return newWord.join(' ');
  }
  return word;
};

// util 13

export const isEven = (num: number) => num % 2 === 0;
