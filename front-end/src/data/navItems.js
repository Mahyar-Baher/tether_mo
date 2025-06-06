const navItems = [
  { label: 'پیشخوان', icon: 'mdi:home', path: '/dashboard' },
  {
    label: 'کیف پول', icon: 'mdi:wallet', path: '/wallet',
    children: [
      { label: 'دارایی کل', icon: 'fa6-solid:coins', path: '/wallet' },
      { label: 'واریز وجه', icon: 'fa6-solid:download', path: '/income' },
      { label: 'برداشت وجه', icon: 'fa6-solid:upload', path: '/outcome' },
    ]
  },
  {
    label: 'تاریخچه', icon: 'mdi:history', path: '/history',
    children: [
      { label: 'تاریخچه واریز و برداشت', icon: 'mdi:history', path: '/history' },
      { label: 'تاریخچه معاملات تتر', icon: 'mdi:history', path: '/history_tether' },
      { label: 'تاریخچه معاملات تومان', icon: 'mdi:history', path: '/history_toman' }
    ]
  },
  {
    label: 'مدیریت حساب کاربری', icon: 'mdi:account', path: '/user',
    children: [
      { label: 'مشخصات کاربری', icon: 'mdi:account-circle', path: '/user_information' },
      { label: 'حساب های بانکی', icon: 'mdi:credit-card', path: '/credits' },
      { label: 'هشدار قیمت', icon: 'mdi:bell-alert-outline', path: '/alert_price' },
      { label: 'مدیریت پیام ها', icon: 'mdi:email-outline', path: '/manage_message' },
      { label: 'مدیریت آدرس ها', icon: 'mdi:map-marker-outline', path: '/manage_addresses' },
      { label: 'تنظیمات', icon: 'mdi:cog-outline', path: '/settings' },
      { label: 'امنیت', icon: 'mdi:shield-outline', path: '/security' }
    ]
  },
  { label: 'معامله آسان تتر', icon: 'mdi:currency-usd', path: '/trade' },
  { label: 'خروج از حساب', icon: 'token-branded:catgirl', path: '/logout' },
];

export default navItems;
