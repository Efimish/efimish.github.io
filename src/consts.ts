export const firstname = "Efim";
export const lastname = "Ishenin";
export const username = "Efimish";
export const gender = "Male";
export const pronouns = "he/him";
export const fullname = `${firstname} ${lastname}`;

export const email = "me@efima.ru";
export const github = "https://github.com/Efimish";
export const telegram = "https://t.me/efimish";
export const vk = "https://vk.com/efim_ish";
export const linkedin = "https://www.linkedin.com/in/efima";

export const site = {
  name: `${firstname}'s corner`,
  description: `${fullname}'s personal website: programming, projects, and thoughts.`,
} as const;

export const blog = {
  name: `${fullname}'s Blog`,
  description: `Posts by ${fullname} on development, technology, and more.`,
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
