import { themes } from "@scripts/consts";

type Theme = keyof typeof themes | "auto";

class ThemeColorManager {
  private metaTags: HTMLMetaElement[];
  private initialMetaTagsValues: string[];

  constructor() {
    this.metaTags = Array.from(
      document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    );
    this.initialMetaTagsValues = this.metaTags.map((meta) => meta.content);
  }

  setThemeColor(color: string) {
    this.metaTags.forEach((meta) => {
      meta.content = color;
    });
  }

  resetThemeColor() {
    this.metaTags.forEach((meta, i) => {
      meta.content = this.initialMetaTagsValues[i];
    });
  }

  loadTheme() {
    const theme = (localStorage.getItem("theme") ?? "auto") as Theme;
    this.applyTheme(theme);
    return theme;
  }

  applyTheme(theme: Theme) {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
    if (theme === "auto") {
      this.resetThemeColor();
    } else {
      this.setThemeColor(themes[theme].bgPrimary);
    }
  }
}

const themeColorManager = new ThemeColorManager();
const theme = themeColorManager.loadTheme();

const selector = document.querySelector<HTMLSelectElement>("#theme-selector");

if (selector) {
  selector.value = theme;

  selector.addEventListener("change", () => {
    themeColorManager.applyTheme(selector.value as Theme);
  });
}
