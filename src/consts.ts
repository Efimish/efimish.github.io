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
  light: {
    bgPrimary: "#f0f0f0",
    bgSecondary: "#e0e0e0",
    textPrimary: "#101010",
    textAccent: "#007aff",
  },
  dark: {
    bgPrimary: "#101010",
    bgSecondary: "#282828",
    textPrimary: "#f0f0f0",
    textAccent: "#0a84ff",
  },
} as const;
