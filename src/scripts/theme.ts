const theme = localStorage.getItem("theme") ?? "system";
document.documentElement.dataset.theme = theme;

const selector = document.querySelector(
  "select#theme-selector"
) as HTMLSelectElement | null;

selector?.addEventListener("change", () => {
  const value = selector.value;
  localStorage.setItem("theme", value);
  document.documentElement.dataset.theme = value;
});
