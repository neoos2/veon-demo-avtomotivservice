export const PHONE_TEL = "tel:0800337779";
export const PHONE_TEXT = "0800 33 77 79";
export const TG = "https://t.me/AVTOMOTIV_SERVICE_chat_bot";
export const ADDRESS = "вул. Хлібна, 4";
export const HOURS = "щодня з 8:00 до 19:00";
export const NOTE = "Розділ у розробці";
export const SOCIALS = [
  { name: "Instagram", url: "https://www.instagram.com/avtomotivservice/" },
  { name: "Facebook", url: "https://www.facebook.com/avtomotivservice" },
  { name: "TikTok", url: "https://www.tiktok.com/@avtomotivservice" },
  { name: "YouTube", url: "https://www.youtube.com/@avtomotivservice5070" },
];
export const NAV = [
  { href: "#services", label: "Послуги" },
  { href: "#brands", label: "Марки" },
  { href: "#conditions", label: "Умови" },
  { href: "#network", label: "Мережа" },
  { href: "#contacts", label: "Контакти" },
];
export interface Brand { id: string; name: string; vag: boolean; software?: string; warranty: string; }
const WARR_ORIG = "Оригінальні запчастини, куплені в сервісі: 1 рік або 10 000 км.";
const WARR_OTHER = "Інші запчастини: 6 міс. або 10 000 км.";
export const BRANDS: Brand[] = [
  { id: "audi", name: "Audi", vag: true, software: "ODIS, VCDS, LAUNCH", warranty: WARR_ORIG },
  { id: "vw", name: "Volkswagen", vag: true, software: "ODIS, VCDS, LAUNCH", warranty: WARR_ORIG },
  { id: "skoda", name: "Skoda", vag: true, software: "ODIS, VCDS, LAUNCH", warranty: WARR_ORIG },
  { id: "porsche", name: "Porsche", vag: true, software: "PIWIS", warranty: WARR_ORIG },
  { id: "bmw", name: "BMW", vag: false, software: "ISTA", warranty: WARR_ORIG },
  { id: "mercedes", name: "Mercedes-Benz", vag: false, software: "XENTRY", warranty: WARR_ORIG },
  { id: "landrover", name: "Land Rover", vag: false, software: "JLR Pathfinder", warranty: WARR_ORIG },
  { id: "toyota", name: "Toyota", vag: false, warranty: WARR_OTHER },
  { id: "lexus", name: "Lexus", vag: false, warranty: WARR_OTHER },
];
