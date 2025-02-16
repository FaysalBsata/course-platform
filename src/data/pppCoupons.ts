import { env } from './env/server';

export const pppCoupons = [
  {
    stripeCouponId: env.STRIPE_PPP_50_COUPON_ID,
    discountPercentage: 0.5,
    countryCodes: [
      'AF',
      'EG',
      'IR',
      'KG',
      'LK',
      'BT',
      'LA',
      'LB',
      'LY',
      'MM',
      'PK',
      'SL',
      'TJ',
      'NP',
      'UZ',
      'SD',
      'IN',
      'MG',
      'TR',
      'AL',
      'BA',
      'CM',
      'BD',
      'BF',
      'BJ',
      'JO',
      'BI',
      'CO',
      'CI',
      'FJ',
      'ET',
      'GE',
      'KM',
      'LS',
      'KH',
      'AM',
      'BO',
      'BY',
      'DZ',
      'ER',
      'GH',
      'GM',
      'GW',
      'ID',
      'KE',
      'KZ',
      'MD',
      'MK',
      'ML',
      'MW',
      'MY',
      'MZ',
      'NG',
      'NI',
      'PH',
      'PY',
      'RW',
      'TH',
      'TZ',
      'UA',
      'UG',
      'VN',
      'MN',
      'MR',
      'MU',
      'SO',
      'TN',
      'ZM',
      'ME',
      'RO',
      'RS',
      'SN',
      'MA',
      'NE',
      'SR',
      'SZ',
      'TG',
      'EC',
      'BG',
      'HR',
      'BW',
      'AO',
      'AZ',
      'CF',
      'CV',
      'GY',
      'HU',
      'GQ',
      'HN',
      'BH',
      'CD',
      'DO',
      'GN',
      'LR',
      'PA',
      'NA',
      'PE',
      'PL',
      'SC',
      'SV',
      'TW',
      'MV',
      'TD',
      'YE',
      'ZA',
      'RU',
    ],
  },
  {
    stripeCouponId: env.STRIPE_PPP_40_COUPON_ID,
    discountPercentage: 0.4,
    countryCodes: [
      'GR',
      'KN',
      'AR',
      'BR',
      'CN',
      'DJ',
      'IQ',
      'JM',
      'GT',
      'LT',
      'CL',
      'CR',
      'CZ',
      'GA',
      'GD',
      'HT',
      'LV',
      'ST',
      'VC',
      'PT',
      'MX',
      'SA',
      'SI',
      'SK',
      'TM',
      'BN',
      'MO',
      'TL',
    ],
  },
  {
    stripeCouponId: env.STRIPE_PPP_30_COUPON_ID,
    discountPercentage: 0.3,
    countryCodes: [
      'AE',
      'ES',
      'AW',
      'CY',
      'EE',
      'IT',
      'KR',
      'BZ',
      'CG',
      'MT',
      'SG',
      'DM',
      'TO',
      'VE',
      'WS',
      'OM',
      'ZW',
    ],
  },
  {
    stripeCouponId: env.STRIPE_PPP_20_COUPON_ID,
    discountPercentage: 0.2,
    countryCodes: [
      'AT',
      'JP',
      'BE',
      'BS',
      'DE',
      'FR',
      'KI',
      'KW',
      'HK',
      'LC',
      'AG',
      'QA',
      'PG',
      'TT',
      'UY',
    ],
  },
];
