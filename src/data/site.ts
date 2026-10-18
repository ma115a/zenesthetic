// Placeholder content for the Zen site. Every name, duration, price and photo
// below is a stand-in until the client supplies the real material.
// Photos: Unsplash (Unsplash License), catalogued in ../../../placeholders/index.html.

export const unsplash = (id: string, w: number, h?: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}${h ? `&h=${h}&fit=crop` : ''}&q=75&auto=format`;

export const studio = {
  name: 'Zen',
  owner: 'Ime Prezime',
  instagram: 'https://www.instagram.com/',
  instagramHandle: '@zen',
  phone: '+387 00 000 000',
  email: 'info@primjer.ba',
  address: 'Ulica i broj, Grad',
  hours: [
    ['Ponedjeljak – petak', '00:00 – 00:00'],
    ['Subota', '00:00 – 00:00'],
  ],
};

export const nav = [
  { label: 'Tretmani', href: '/tretmani' },
  { label: 'Galerija', href: '/galerija' },
  { label: 'Proizvodi', href: '/proizvodi' },
  { label: 'O meni', href: '/o-meni' },
  { label: 'Kontakt', href: '/kontakt' },
];

export type Area = 'lice' | 'tijelo';
export const areaLabel: Record<Area, string> = { lice: 'Lice', tijelo: 'Tijelo' };

export type Treatment = {
  slug: string;
  area: Area;
  name: string;
  duration: string;
  sessions: string;
  interval: string;
  device: string;
  summary: string;
  photo: string;
};

const lorem = {
  intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
export { lorem };

export const treatmentList: Treatment[] = [
  { slug: 'lorem-ipsum', area: 'lice', name: 'Lorem ipsum', duration: '60 min', sessions: '4–6 tretmana', interval: 'svakih 14 dana', device: 'Lorem uređaj', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', photo: '1782159981479-5e90597f284a' },
  { slug: 'dolor-sit', area: 'lice', name: 'Dolor sit amet', duration: '45 min', sessions: '1 tretman', interval: 'po potrebi', device: 'Dolor uređaj', summary: 'Sed do eiusmod tempor incididunt ut labore et dolore.', photo: '1570172619644-dfd03ed5d881' },
  { slug: 'consectetur', area: 'lice', name: 'Consectetur', duration: '75 min', sessions: '3–5 tretmana', interval: 'svakih 21 dan', device: 'Lorem uređaj', summary: 'Ut enim ad minim veniam, quis nostrud exercitation.', photo: '1552693673-1bf958298935' },
  { slug: 'adipiscing', area: 'lice', name: 'Adipiscing elit', duration: '30 min', sessions: '6 tretmana', interval: 'jednom sedmično', device: 'Dolor uređaj', summary: 'Duis aute irure dolor in reprehenderit in voluptate.', photo: '1616394584738-fc6e612e71b9' },
  { slug: 'tempor', area: 'lice', name: 'Tempor incididunt', duration: '50 min', sessions: '1–3 tretmana', interval: 'svakih 30 dana', device: 'Lorem uređaj', summary: 'Excepteur sint occaecat cupidatat non proident.', photo: '1643684460412-76908d8e5a25' },
  { slug: 'labore', area: 'tijelo', name: 'Labore et dolore', duration: '60 min', sessions: '8–10 tretmana', interval: 'dva puta sedmično', device: 'Ipsum uređaj', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', photo: '1700760933574-9f0f4ea9aa3b' },
  { slug: 'magna', area: 'tijelo', name: 'Magna aliqua', duration: '45 min', sessions: '6–8 tretmana', interval: 'jednom sedmično', device: 'Ipsum uređaj', summary: 'Sed do eiusmod tempor incididunt ut labore et dolore.', photo: '1519823551278-64ac92734fb1' },
  { slug: 'veniam', area: 'tijelo', name: 'Quis nostrud', duration: '90 min', sessions: '1 tretman', interval: 'po potrebi', device: 'Dolor uređaj', summary: 'Ut enim ad minim veniam, quis nostrud exercitation.', photo: '1519824145371-296894a0daa9' },
  { slug: 'ullamco', area: 'tijelo', name: 'Ullamco laboris', duration: '40 min', sessions: '5 tretmana', interval: 'svakih 10 dana', device: 'Ipsum uređaj', summary: 'Duis aute irure dolor in reprehenderit in voluptate.', photo: '1639162906614-0603b0ae95fd' },
];

export const treatments = {
  face: treatmentList.filter((t) => t.area === 'lice'),
  body: treatmentList.filter((t) => t.area === 'tijelo'),
};

// What happens on every visit. The order is the real sequence, so it is numbered.
export const visitSteps = [
  { title: 'Razgovor i analiza kože', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Plan tretmana', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { title: 'Tretman', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
  { title: 'Njega kod kuće', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
];

export const faq = [
  { q: 'Lorem ipsum dolor sit amet?', a: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { q: 'Ut enim ad minim veniam?', a: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { q: 'Duis aute irure dolor?', a: 'In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  { q: 'Excepteur sint occaecat?', a: 'Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
];

export const devices = [
  { name: 'Lorem uređaj', area: 'Lice', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { name: 'Ipsum uređaj', area: 'Tijelo', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { name: 'Dolor uređaj', area: 'Lice i tijelo', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
];

export type GalleryItem = { photo: string; alt: string; area: Area; treatment: string };
export const galleryItems: GalleryItem[] = [
  { photo: '1609542334025-778f9093a234', alt: 'Njega kože ramena', area: 'tijelo', treatment: 'Labore et dolore' },
  { photo: '1561228987-8e7379dde477', alt: 'Njega kože vrata', area: 'lice', treatment: 'Lorem ipsum' },
  { photo: '1675773051474-55c4b7d2cf53', alt: 'Koža lica izbliza', area: 'lice', treatment: 'Consectetur' },
  { photo: '1544717304-a2db4a7b16ee', alt: 'Klijentica nakon tretmana', area: 'lice', treatment: 'Dolor sit amet' },
  { photo: '1761718210089-ba3bb5ccb54f', alt: 'Tretman lica u toku', area: 'lice', treatment: 'Adipiscing elit' },
  { photo: '1745327883508-b6cd32e5dde5', alt: 'Tretman tijela u toku', area: 'tijelo', treatment: 'Magna aliqua' },
  { photo: '1771688221238-06ded2ea59c7', alt: 'Koža izbliza', area: 'tijelo', treatment: 'Ullamco laboris' },
  { photo: '1643684460412-76908d8e5a25', alt: 'Masaža lica', area: 'lice', treatment: 'Tempor incididunt' },
  { photo: '1605553703411-73938914721b', alt: 'Koža leđa izbliza', area: 'tijelo', treatment: 'Quis nostrud' },
  { photo: '1761718209708-9ab9ba1c7252', alt: 'Čišćenje lica', area: 'lice', treatment: 'Lorem ipsum' },
];
export const gallery = galleryItems.slice(0, 4);

export const testimonials = [
  { quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', name: 'Ime P.', treatment: 'Lorem ipsum' },
  { quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.', name: 'Ime P.', treatment: 'Labore et dolore' },
  { quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.', name: 'Ime P.', treatment: 'Consectetur' },
];

export type Product = { slug: string; area: Area; name: string; size: string; price: string; photo: string; summary: string };
export const products: Product[] = [
  { slug: 'lorem-serum', area: 'lice', name: 'Lorem serum', size: '30 ml', price: '00,00 KM', photo: '1620916566398-39f1143ab7be', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { slug: 'ipsum-krema', area: 'lice', name: 'Ipsum krema', size: '50 ml', price: '00,00 KM', photo: '1608068811588-3a67006b7489', summary: 'Sed do eiusmod tempor incididunt ut labore et dolore.' },
  { slug: 'dolor-tonik', area: 'lice', name: 'Dolor tonik', size: '200 ml', price: '00,00 KM', photo: '1580870069867-74c57ee1bb07', summary: 'Ut enim ad minim veniam, quis nostrud exercitation.' },
  { slug: 'amet-ulje', area: 'tijelo', name: 'Amet ulje', size: '100 ml', price: '00,00 KM', photo: '1665763630810-e6251bdd392d', summary: 'Duis aute irure dolor in reprehenderit in voluptate.' },
  { slug: 'sit-fluid', area: 'lice', name: 'Sit fluid', size: '40 ml', price: '00,00 KM', photo: '1710410815589-dd83514104d0', summary: 'Excepteur sint occaecat cupidatat non proident.' },
  { slug: 'elit-balzam', area: 'tijelo', name: 'Elit balzam', size: '150 ml', price: '00,00 KM', photo: '1585945037805-5fd82c2e60b1', summary: 'Sunt in culpa qui officia deserunt mollit anim.' },
  { slug: 'magna-kapi', area: 'lice', name: 'Magna kapi', size: '15 ml', price: '00,00 KM', photo: '1781344116880-029945a42b75', summary: 'Nisi ut aliquip ex ea commodo consequat.' },
  { slug: 'veniam-losion', area: 'tijelo', name: 'Veniam losion', size: '250 ml', price: '00,00 KM', photo: '1785581778868-79100f7fe56c', summary: 'Quis autem vel eum iure reprehenderit qui in ea.' },
];

export const photos = {
  hero: '1761718209708-9ab9ba1c7252',
  portrait: '1759262151080-e05ba1c6294f',
  device: '1700760933941-3a06a28fbf47',
  studio: '1665231795856-769fb08a90bc',
  studio2: '1648775507324-b48dd3791fa5',
};

// Before/after pairs. Publish only with the client's written consent.
// Until real pairs exist, both sides use the same placeholder photo and the
// component shows a visible "placeholder" caption.
export type BeforeAfter = { before: string; after: string; treatment: string; area: Area; sessions: string; placeholder: boolean };
export const beforeAfter: BeforeAfter[] = [
  { before: '1675773051474-55c4b7d2cf53', after: '1675773051474-55c4b7d2cf53', treatment: 'Lorem ipsum', area: 'lice', sessions: 'nakon 4 tretmana', placeholder: true },
  { before: '1561228987-8e7379dde477', after: '1561228987-8e7379dde477', treatment: 'Consectetur', area: 'lice', sessions: 'nakon 3 tretmana', placeholder: true },
  { before: '1609542334025-778f9093a234', after: '1609542334025-778f9093a234', treatment: 'Labore et dolore', area: 'tijelo', sessions: 'nakon 8 tretmana', placeholder: true },
];

// Certificates and courses, newest first. `image` is an optional path under
// /public (e.g. '/certifikati/hydrafacial.jpg'); with one, the row opens the scan.
export type Certificate = { title: string; issuer: string; year: string; image?: string };
export const certificates: Certificate[] = [
  { title: 'Lorem ipsum napredni tretmani lica', issuer: 'Akademija Lorem', year: '2025' },
  { title: 'Dolor sit radiofrekvencija', issuer: 'Ipsum Institut', year: '2024' },
  { title: 'Consectetur mikroiglanje', issuer: 'Dolor Academy', year: '2024' },
  { title: 'Adipiscing kemijski piling', issuer: 'Akademija Lorem', year: '2023' },
  { title: 'Sed do eiusmod oblikovanje tijela', issuer: 'Amet Edukacija', year: '2022' },
  { title: 'Tempor incididunt limfna drenaža', issuer: 'Ipsum Institut', year: '2021' },
  { title: 'Labore et dolore njega problematične kože', issuer: 'Dolor Academy', year: '2019' },
  { title: 'Magna aliqua kozmetičarka', issuer: 'Srednja škola Lorem', year: '2015' },
];
