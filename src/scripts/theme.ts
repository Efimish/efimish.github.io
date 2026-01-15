import { themes } from "@scripts/consts";

class ThemeColorManager {
  private metaThemeColorTags: HTMLMetaElement[];
  private initialMetaThemeColorTagsValues: string[];

  constructor() {
    this.metaThemeColorTags = Array.from(
      document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    );
    this.initialMetaThemeColorTagsValues = this.metaThemeColorTags.map(
      (meta) => meta.content
    );
  }

  setThemeColor(color: string) {
    this.metaThemeColorTags.forEach((meta) => {
      meta.content = color;
    });
  }

  resetThemeColor() {
    this.metaThemeColorTags.forEach((meta, i) => {
      meta.content = this.initialMetaThemeColorTagsValues[i];
    });
  }

  fixTheme(theme: string) {
    return theme in themes ? theme : "auto";
  }

  loadTheme() {
    const theme = this.fixTheme(localStorage.getItem("theme") ?? "auto");
    this.applyTheme(theme);
    return theme;
  }

  applyTheme(theme: string) {
    theme = this.fixTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
    if (theme in themes) {
      this.setThemeColor(themes[theme as keyof typeof themes].bgPrimary);
    } else {
      this.resetThemeColor();
    }
  }
}

const themeColorManager = new ThemeColorManager();
const theme = themeColorManager.loadTheme();

const selector = document.querySelector<HTMLSelectElement>("#theme-selector");

if (selector) {
  selector.value = theme;

  selector.addEventListener("change", () => {
    themeColorManager.applyTheme(selector.value);
  });
}
