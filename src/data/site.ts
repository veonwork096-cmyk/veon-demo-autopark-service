// Facts for the homepage: only from veon/client.json (ids in comments). Nothing here is invented.
export const contacts = {
  phoneHref: "tel:+380914819004", // company.contacts.phones[0], I-006: only the site number
  phoneText: "+380 91 481 9004",
  email: "autopark.service.ua@gmail.com",
  emailHref: "mailto:autopark.service.ua@gmail.com",
  telegram: "https://t.me/Autopark_Service_bot",
  maps: "https://maps.app.goo.gl/baJMEB6MSEaCXt83A",
  street: "Кільцева, 60",
  district: "Солонка, Львів",
  facebook: "https://www.facebook.com/autoparkservice/", // confirmed
  instagram: "https://www.instagram.com/autopark.service/", // confirmed
} as const;

export const note = "Розділ у розробці";

export type Group = {
  id: string;
  title: string;
  lead: string;
  items: string[];
  photo?: "mechanics" | "tyres" | "body";
  type?: string[]; // typographic panel instead of a photo
  typeCaption?: string;
};

// company.products_services (19), grouped as in ux/demo-home.md §5; B2B service lives in #business
export const groups: Group[] = [
  {
    id: "mechanics",
    title: "Механіка і ТО",
    lead: "Планове обслуговування, діагностика і ремонт вузлів.",
    items: ["ТО і діагностика", "Ремонт двигуна", "Ремонт коробки передач", "Ремонт ходової", "Автоелектрик", "Ремонт автокондиціонера", "Дизель Сервіс", "Чіп-тюнінг"],
    photo: "mechanics",
  },
  {
    id: "tyres",
    title: "Шини",
    lead: "Сезонна заміна, балансування і кути коліс.",
    items: ["Шиномонтаж", "Розвал-сходження"],
    photo: "tyres",
  },
  {
    id: "body",
    title: "Кузов і догляд",
    lead: "Від вм'ятини до повного відновлення і догляду.",
    items: ["Кузовний ремонт", "Малярні роботи", "Хімчистка та полірування"],
    photo: "body",
  },
  {
    id: "ev",
    title: "Електро і гібриди",
    lead: "Діагностика високовольтної батареї, електросистем і залишкового ресурсу АКБ, ремонт домашніх і публічних зарядних станцій.", // C-010
    items: ["Ремонт електромобілів", "Ремонт гібридних авто"],
    type: ["Nissan Leaf", "BMW i3", "VW ID.4", "Audi e-tron", "Hyundai Kona Electric", "Kia Soul EV", "Jaguar I-PACE", "Mercedes EQC"],
    typeCaption: "Tesla наразі не обслуговуємо",
  },
  {
    id: "special",
    title: "Спецроботи",
    lead: "Токарні роботи за кресленням, зразком або фото; перегін авто евакуатором або водієм у Західну Україну та Європу. Вартість — за телефоном.", // C-013, C-014
    items: ["Токарні роботи для авто", "Токарні роботи для аграрної техніки", "Перегін авто в Західну Україну та Європу"],
    type: ["Т-25", "МТЗ", "ЮМЗ", "верстат 16К20"],
    typeCaption: "Вали жаток, косарок, сівалок, шестерні, втулки",
  },
];

// C-012 (published price lists, UAH)
export const prices = [
  { name: "Комп'ютерна діагностика", from: false, value: "1 200" },
  { name: "Заміна масла з фільтром", from: false, value: "850" },
  { name: "Діагностика двигуна", from: true, value: "1 200" },
  { name: "Кузовний ремонт", from: true, value: "15 000" },
  { name: "Капітальний ремонт двигуна", from: true, value: "85 000" },
];

// C-007 (warranty term not stated, I-004)
export const terms = [
  { head: "Гарантія", text: "на виконані роботи та запчастини" },
  { head: "Виконання у зазначений термін", text: "строк узгоджуємо до початку робіт" },
  { head: "Персональний менеджер", text: "веде ваше замовлення" },
  { head: "Безпечне зберігання авто", text: "поки триває ремонт" },
  { head: "Зв'язок протягом 30 хвилин", text: "менеджер телефонує після заявки" },
];

// C-009
export const brands = ["Audi", "BMW", "Subaru", "Toyota", "Mazda", "Honda", "Mercedes", "Daewoo", "Mitsubishi", "Volvo", "KIA", "Lexus", "Chevrolet", "Fiat", "Nissan", "Citroen", "Opel", "Peugeot", "Porsche", "Renault", "Seat", "Skoda", "Suzuki", "Alfa Romeo"];
// C-010
export const evModels = ["Nissan Leaf", "BMW i3", "VW ID.4", "Audi e-tron", "Hyundai Kona Electric", "Kia Soul EV", "Jaguar I-PACE", "Mercedes EQC"];
