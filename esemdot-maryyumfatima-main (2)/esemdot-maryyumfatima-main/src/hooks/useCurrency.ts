import { useState, useEffect } from 'react';

interface CurrencyData {
  code: string;
  symbol: string;
  rate: number;
  country: string;
}

interface ExchangeRates {
  [key: string]: number;
}

export const useCurrency = () => {
  const [currency, setCurrency] = useState<CurrencyData>({
    code: 'USD',
    symbol: '$',
    rate: 1,
    country: 'United States'
  });
  const [loading, setLoading] = useState(true);

  // Currency mapping based on common countries
  const currencyMap: { [key: string]: { code: string; symbol: string } } = {
    'US': { code: 'USD', symbol: '$' },
    'CA': { code: 'CAD', symbol: 'C$' },
    'GB': { code: 'GBP', symbol: '£' },
    'AU': { code: 'AUD', symbol: 'A$' },
    'DE': { code: 'EUR', symbol: '€' },
    'FR': { code: 'EUR', symbol: '€' },
    'IT': { code: 'EUR', symbol: '€' },
    'ES': { code: 'EUR', symbol: '€' },
    'NL': { code: 'EUR', symbol: '€' },
    'JP': { code: 'JPY', symbol: '¥' },
    'KR': { code: 'KRW', symbol: '₩' },
    'CN': { code: 'CNY', symbol: '¥' },
    'IN': { code: 'INR', symbol: '₹' },
    'BR': { code: 'BRL', symbol: 'R$' },
    'MX': { code: 'MXN', symbol: '$' },
    'SG': { code: 'SGD', symbol: 'S$' },
    'HK': { code: 'HKD', symbol: 'HK$' },
    'CH': { code: 'CHF', symbol: 'CHF' },
    'SE': { code: 'SEK', symbol: 'kr' },
    'NO': { code: 'NOK', symbol: 'kr' },
    'DK': { code: 'DKK', symbol: 'kr' },
    'PL': { code: 'PLN', symbol: 'zł' },
    'CZ': { code: 'CZK', symbol: 'Kč' },
    'RU': { code: 'RUB', symbol: '₽' },
    'TR': { code: 'TRY', symbol: '₺' },
    'ZA': { code: 'ZAR', symbol: 'R' },
    'NZ': { code: 'NZD', symbol: 'NZ$' },
    'TH': { code: 'THB', symbol: '฿' },
    'MY': { code: 'MYR', symbol: 'RM' },
    'ID': { code: 'IDR', symbol: 'Rp' },
    'PH': { code: 'PHP', symbol: '₱' },
    'VN': { code: 'VND', symbol: '₫' },
    'AE': { code: 'AED', symbol: 'د.إ' },
    'SA': { code: 'SAR', symbol: '﷼' },
    'EG': { code: 'EGP', symbol: '£' },
    'NG': { code: 'NGN', symbol: '₦' },
    'KE': { code: 'KES', symbol: 'KSh' },
    'AR': { code: 'ARS', symbol: '$' },
    'CL': { code: 'CLP', symbol: '$' },
    'CO': { code: 'COP', symbol: '$' },
    'PE': { code: 'PEN', symbol: 'S/' },
    'PK': { code: 'PKR', symbol: '₨' },
    'BD': { code: 'BDT', symbol: '৳' },
    'LK': { code: 'LKR', symbol: 'Rs' },
    'IL': { code: 'ILS', symbol: '₪' },
  };

  const getCountryName = (countryCode: string): string => {
    const countryNames: { [key: string]: string } = {
      'US': 'United States', 'CA': 'Canada', 'GB': 'United Kingdom',
      'AU': 'Australia', 'DE': 'Germany', 'FR': 'France', 'IT': 'Italy',
      'ES': 'Spain', 'NL': 'Netherlands', 'JP': 'Japan', 'KR': 'South Korea',
      'CN': 'China', 'IN': 'India', 'BR': 'Brazil', 'MX': 'Mexico',
      'SG': 'Singapore', 'HK': 'Hong Kong', 'CH': 'Switzerland',
      'SE': 'Sweden', 'NO': 'Norway', 'DK': 'Denmark', 'PL': 'Poland',
      'CZ': 'Czech Republic', 'RU': 'Russia', 'TR': 'Turkey',
      'ZA': 'South Africa', 'NZ': 'New Zealand', 'TH': 'Thailand',
      'MY': 'Malaysia', 'ID': 'Indonesia', 'PH': 'Philippines',
      'VN': 'Vietnam', 'AE': 'UAE', 'SA': 'Saudi Arabia', 'EG': 'Egypt',
      'NG': 'Nigeria', 'KE': 'Kenya', 'AR': 'Argentina', 'CL': 'Chile',
      'CO': 'Colombia', 'PE': 'Peru', 'PK': 'Pakistan', 'BD': 'Bangladesh',
      'LK': 'Sri Lanka', 'IL': 'Israel'
    };
    return countryNames[countryCode] || countryCode;
  };

  useEffect(() => {
    const detectCurrency = async () => {
      try {
        // Try multiple geolocation services for better reliability
        let countryCode = '';
        
        try {
          const geoResponse = await fetch('https://get.geojs.io/v1/ip/geo.json');
          const geoData = await geoResponse.json();
          countryCode = geoData.country_code;
        } catch (error) {
          // Fallback to another service
          try {
            const fallbackResponse = await fetch('https://ipapi.co/json/');
            const fallbackData = await fallbackResponse.json();
            countryCode = fallbackData.country_code;
          } catch (fallbackError) {
            // If both fail, try to detect from timezone
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const timezoneToCountry: { [key: string]: string } = {
              'Asia/Karachi': 'PK',
              'Asia/Kolkata': 'IN',
              'Asia/Tokyo': 'JP',
              'Europe/London': 'GB',
              'America/New_York': 'US',
              'America/Los_Angeles': 'US',
              'Europe/Paris': 'FR',
              'Asia/Shanghai': 'CN',
              'Australia/Sydney': 'AU'
            };
            countryCode = timezoneToCountry[timezone] || 'US';
          }
        }
        const countryName = getCountryName(countryCode);
        const currencyInfo = currencyMap[countryCode] || { code: 'USD', symbol: '$' };

        // If it's USD, no need to convert
        if (currencyInfo.code === 'USD') {
          setCurrency({
            code: 'USD',
            symbol: '$',
            rate: 1,
            country: countryName
          });
          setLoading(false);
          return;
        }

        // Get exchange rate
        const exchangeResponse = await fetch(
          `https://api.exchangerate-api.com/v4/latest/USD`
        );
        const exchangeData = await exchangeResponse.json();
        const rate = exchangeData.rates[currencyInfo.code] || 1;

        setCurrency({
          code: currencyInfo.code,
          symbol: currencyInfo.symbol,
          rate,
          country: countryName
        });
      } catch (error) {
        console.log('Could not detect currency, using USD as default');
        // Fallback to USD
        setCurrency({
          code: 'USD',
          symbol: '$',
          rate: 1,
          country: 'United States'
        });
      } finally {
        setLoading(false);
      }
    };

    detectCurrency();
  }, []);

  const convertPrice = (usdPrice: number): string => {
    const convertedPrice = usdPrice * currency.rate;
    
    // Format based on currency
    if (currency.code === 'JPY' || currency.code === 'KRW' || currency.code === 'VND') {
      // No decimal places for these currencies
      return `${currency.symbol}${Math.round(convertedPrice).toLocaleString()}`;
    } else {
      // Two decimal places for most currencies
      return `${currency.symbol}${convertedPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    }
  };

  return {
    currency,
    loading,
    convertPrice
  };
};