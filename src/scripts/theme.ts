const theme = localStorage.getItem("theme") ?? "auto";
document.documentElement.dataset.theme = theme;

const selector = document.querySelector<HTMLSelectElement>("#theme-selector");

if (selector) {
  selector.value = theme;

  selector.addEventListener("change", () => {
    const value = selector.value;
    localStorage.setItem("theme", value);
    document.documentElement.dataset.theme = value;
  });
}
