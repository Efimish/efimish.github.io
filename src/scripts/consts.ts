export const firstname = "Efim";
export const lastname = "Ishenin";
export const username = "Efimish";
export const gender = "Male";
export const pronouns = "he/him";

export const author = `${firstname} ${lastname}`;
export const sitename = `${firstname}'s corner`;
export const blogname = `${author}'s Blog`;

export const email = "me@efima.ru";
export const github = "https://github.com/Efimish";
export const linkedin = "https://www.linkedin.com/in/efima";

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
