const firstname = "Efim";
const lastname = "Ishenin";

export const person = {
  firstname,
  lastname,
  fullname: `${firstname} ${lastname}`,
  username: "Efimish",
  gender: "Male",
  pronouns: "he/him",
  email: "me@efima.ru",
  github: "https://github.com/Efimish",
  telegram: "https://t.me/efimish",
  vk: "https://vk.com/efim_ish",
  linkedin: "https://www.linkedin.com/in/efima",
} as const;

export const site = {
  name: `${person.firstname}'s corner`,
  description: `${person.fullname}'s personal website: programming, projects, and thoughts.`,
} as const;

export const blog = {
  name: `${person.fullname}'s Blog`,
  description: `Posts by ${person.fullname} on development, technology, and more.`,
} as const;

export const themes = {
  light: "oklch(97% 0 0)",
  dark: "oklch(20.5% 0 0)",
} as const;
