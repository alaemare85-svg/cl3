import { createShader } from "https://esm.sh/shaders@4.0.7/js";

const translations = {
  ar: {
    description: "ابحث في الويب وتعرّف على ما أحب.",
    intro: "ابحث في الويب واكتشف ما تريد.",
    "search-label": "ما الذي تريد البحث عنه؟",
    "search-placeholder": "اكتب كلمات البحث هنا",
    "search-button": "بحث",
    "search-empty": "اكتب كلمات البحث أولًا.",
    "favorites-heading": "إذا أردت أن تعرف ماذا أحب",
    "umm-name": "أم كلثوم",
    "umm-photo-alt": "أم كلثوم في فيلم فاطمة",
    "favorite-song": "أغنيتي المفضلة: بعيد عنك",
    "mohammed-name": "محمد عبده",
    "mohammed-photo-alt": "الفنان محمد عبده",
    "mohammed-songs": "أغانٍ شهيرة لمحمد عبده",
    "song-places": "الأماكن",
    "song-thursday": "ليلة خميس",
    "song-voice": "صوتك يناديني",
    "club-link": "شعار ومعلومات نادي الاتحاد",
    "club-logo-alt": "شعار نادي الاتحاد",
    "club-name": "نادي الاتحاد",
    "club-motto": "الاتحاد منذ 1996 حتى نهاية العالم",
    "club-image-credit": "مصدر الشعار",
    "social-heading": "مواقع التواصل الاجتماعي",
    "social-links-aria": "روابط منصات التواصل الاجتماعي",
    "secure-preview-heading": "معاينة واجهة الوصول",
    "secure-preview-notice": "تصميم تجريبي فقط؛ الحقول والزر معطّلة. لا تُدخل بيانات حقيقية.",
    "secure-data-title": "بيانات تجريبية",
    "preview-username": "اسم المستخدم",
    "preview-access-key": "مفتاح الوصول",
    "preview-connect": "بدء الاتصال",
    "settings-heading": "إعدادات اللغة والألوان",
    "language-label": "اللغة",
    "language-ar": "العربية",
    "language-en": "English",
    "theme-label": "نمط الألوان الداكن",
    "theme-ocean": "المحيط الليلي",
    "theme-violet": "البنفسجي الداكن",
    "theme-forest": "الغابة الليلية",
    "theme-crimson": "الأحمر الداكن",
    "theme-custom": "مخصص",
    "background-color-label": "لون الخلفية",
    "text-color-label": "لون النص",
    "reset-settings": "استعادة الإعدادات",
    "privacy-note": "تُحفظ إعدادات اللغة والألوان على هذا الجهاز فقط.",
    "external-privacy": "لا توجد إعلانات أو أدوات تحليل في الموقع؛ الروابط والخدمات الخارجية تخضع لسياسات مزوّديها.",
    "settings-saved": "حُفظت الإعدادات على هذا الجهاز.",
    "settings-save-error": "تعذّر حفظ الإعدادات في هذا المتصفح.",
    "mohammed-image-credit": "الصورة: yahaycouture.com عبر Flickr، قُصّت للعرض",
    "mohammed-image-license": "CC BY 2.0",
  },
  en: {
    description: "Search the web and explore my favorites.",
    intro: "Search the web and discover what you are looking for.",
    "search-label": "What would you like to search for?",
    "search-placeholder": "Enter search terms",
    "search-button": "Search",
    "search-empty": "Enter search terms first.",
    "favorites-heading": "Want to know what I love?",
    "umm-name": "Umm Kulthum",
    "umm-photo-alt": "Umm Kulthum in the film Fatimah",
    "favorite-song": "My favorite song: Ba'eed Anak",
    "mohammed-name": "Mohammed Abdu",
    "mohammed-photo-alt": "Saudi singer Mohammed Abdu",
    "mohammed-songs": "Popular Mohammed Abdu songs",
    "song-places": "Al Amaken",
    "song-thursday": "Laylat Khamees",
    "song-voice": "Soutak Yenadiny",
    "club-link": "Al-Ittihad Club emblem and information",
    "club-logo-alt": "Al-Ittihad Club emblem",
    "club-name": "Al-Ittihad Club",
    "club-motto": "Al-Ittihad since 1996, forever",
    "club-image-credit": "Logo source",
    "social-heading": "Social media",
    "social-links-aria": "Social media platform links",
    "secure-preview-heading": "Access card preview",
    "secure-preview-notice": "Visual mockup only; the fields and button are disabled. Do not enter real information.",
    "secure-data-title": "DEMO_DATA",
    "preview-username": "USERNAME",
    "preview-access-key": "ACCESS_KEY",
    "preview-connect": "INITIATE_CONNECTION",
    "settings-heading": "Language and color settings",
    "language-label": "Language",
    "language-ar": "Arabic",
    "language-en": "English",
    "theme-label": "Dark color theme",
    "theme-ocean": "Midnight ocean",
    "theme-violet": "Deep violet",
    "theme-forest": "Forest night",
    "theme-crimson": "Dark crimson",
    "theme-custom": "Custom",
    "background-color-label": "Background color",
    "text-color-label": "Text color",
    "reset-settings": "Reset settings",
    "privacy-note": "Language and color settings are stored only on this device.",
    "external-privacy": "This site has no ads or analytics; external links and services follow their providers' policies.",
    "settings-saved": "Settings saved on this device.",
    "settings-save-error": "This browser could not save the settings.",
    "mohammed-image-credit": "Photo by yahaycouture.com via Flickr; cropped for display",
    "mohammed-image-license": "CC BY 2.0",
  },
};

const darkThemes = {
  ocean: {
    backgroundColor: "#06101c",
    textColor: "#49d6ff",
  },
  violet: {
    backgroundColor: "#10091d",
    textColor: "#d4a3ff",
  },
  forest: {
    backgroundColor: "#071810",
    textColor: "#60e0ae",
  },
  crimson: {
    backgroundColor: "#19080d",
    textColor: "#ff7185",
  },
};

const defaultPreferences = {
  language: "ar",
  themePreset: "ocean",
  ...darkThemes.ocean,
};
const preferencesKey = "wcl3-preferences";

function isValidColor(value) {
  return typeof value === "string" && /^#[\da-f]{6}$/i.test(value);
}

function loadPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem(preferencesKey) || "{}");
    const hasSavedColors =
      isValidColor(saved.backgroundColor) || isValidColor(saved.textColor);
    const savedThemeIsValid =
      saved.themePreset === "custom" ||
      Object.prototype.hasOwnProperty.call(darkThemes, saved.themePreset);
    const themePreset = savedThemeIsValid
      ? saved.themePreset
      : hasSavedColors
        ? "custom"
        : defaultPreferences.themePreset;
    const presetColors = darkThemes[themePreset] || defaultPreferences;

    return {
      language: saved.language === "en" ? "en" : "ar",
      themePreset,
      backgroundColor:
        themePreset === "custom" && isValidColor(saved.backgroundColor)
          ? saved.backgroundColor
          : presetColors.backgroundColor,
      textColor:
        themePreset === "custom" && isValidColor(saved.textColor)
          ? saved.textColor
          : presetColors.textColor,
    };
  } catch (error) {
    console.warn("Could not load local preferences.", error);
    return { ...defaultPreferences };
  }
}

let preferences = loadPreferences();

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchMessage = document.querySelector("#search-message");
const languageSelect = document.querySelector("#language-select");
const themePresetSelect = document.querySelector("#theme-preset");
const backgroundColorInput = document.querySelector("#background-color");
const textColorInput = document.querySelector("#text-color");
const resetSettingsButton = document.querySelector("#reset-settings");
const settingsMessage = document.querySelector("#settings-message");
const pageDescription = document.querySelector("#page-description");

function translate(key) {
  return translations[preferences.language][key] ?? translations.ar[key] ?? key;
}

function applyColors() {
  document.documentElement.style.setProperty(
    "--page-background",
    preferences.backgroundColor,
  );
  document.documentElement.style.setProperty("--page-text", preferences.textColor);
  themePresetSelect.value = preferences.themePreset;
  backgroundColorInput.value = preferences.backgroundColor;
  textColorInput.value = preferences.textColor;
}

function applyLanguage() {
  document.documentElement.lang = preferences.language;
  document.documentElement.dir = preferences.language === "ar" ? "rtl" : "ltr";
  pageDescription.content = translate("description");
  languageSelect.value = preferences.language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAria));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = translate(element.dataset.i18nAlt);
  });

  searchMessage.textContent = "";
  settingsMessage.textContent = translate("privacy-note");
}

function savePreferences() {
  try {
    localStorage.setItem(preferencesKey, JSON.stringify(preferences));
    settingsMessage.textContent = translate("settings-saved");
  } catch (error) {
    console.error("Could not save local preferences.", error);
    settingsMessage.textContent = translate("settings-save-error");
  }
}

applyColors();
applyLanguage();

languageSelect.addEventListener("change", () => {
  preferences.language = languageSelect.value;
  applyLanguage();
  savePreferences();
});

backgroundColorInput.addEventListener("input", () => {
  preferences.themePreset = "custom";
  preferences.backgroundColor = backgroundColorInput.value;
  applyColors();
});
backgroundColorInput.addEventListener("change", savePreferences);

textColorInput.addEventListener("input", () => {
  preferences.themePreset = "custom";
  preferences.textColor = textColorInput.value;
  applyColors();
});
textColorInput.addEventListener("change", savePreferences);

themePresetSelect.addEventListener("change", () => {
  const themePreset = themePresetSelect.value;
  if (themePreset === "custom") {
    preferences.themePreset = "custom";
    savePreferences();
    return;
  }

  const theme = darkThemes[themePreset];
  if (!theme) {
    return;
  }

  preferences.themePreset = themePreset;
  preferences.backgroundColor = theme.backgroundColor;
  preferences.textColor = theme.textColor;
  applyColors();
  savePreferences();
});

resetSettingsButton.addEventListener("click", () => {
  preferences = { ...defaultPreferences };
  applyColors();
  applyLanguage();
  savePreferences();
});

const shaderCanvas = document.querySelector("#canvas");
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  shaderCanvas.hidden = true;
} else {
  try {
    await createShader(
      shaderCanvas,
      {
        components: [
          {
            type: "Godrays",
            id: "idmws72rbqrk3rryohr",
            props: {
              blendMode: "normal-oklch",
              density: 0.5,
              intensity: 1,
              rayColor: "#700404",
              speed: 2,
            },
          },
          {
            type: "Godrays",
            id: "idmws73s0obfxpa27m0",
            props: {
              rayColor: "#204d9e",
            },
          },
          {
            type: "Godrays",
            id: "idmws73zikjcgdhjbxj",
            props: {
              rayColor: "#9b46a6",
            },
          },
          {
            type: "SineWave",
            id: "idmws74qq4361wqzx2z",
            props: {
              amplitude: 1,
              color: "#6e3975",
              frequency: 20,
              position: {
                x: 0.54,
                y: 0.83,
              },
              softness: 1,
              speed: 5,
              thickness: 0.1,
            },
          },
          {
            type: "Godrays",
            id: "idmws75lakirrkxwr0x",
            props: {
              rayColor: "#ff00e5",
            },
          },
          {
            type: "Glitch",
            id: "idmws75z0yedv979l3i",
          },
          {
            type: "Beam",
            id: "idmws7c4jmcynqmjk1d",
            props: {
              boundingBox: {
                x: {
                  unit: "uv",
                  value: 0.2491,
                },
                y: {
                  unit: "uv",
                  value: 0.1123,
                },
                width: {
                  unit: "uv",
                  value: 0.5163,
                },
                height: {
                  unit: "uv",
                  value: 0.7755,
                },
              },
              insideColor: "#1a0000",
            },
          },
          {
            type: "Star",
            id: "idmws7dbgeozwh5vdck",
            props: {
              center: {
                x: 0.52,
                y: 0.35,
              },
              color: "#04043d",
              radius: 0.0606,
              rotation: 341,
            },
          },
          {
            type: "Text",
            id: "idmws7feqvcelxl0fw7",
            props: {
              center: {
                x: 0.52,
                y: 0.5,
              },
              color: "#00e5ff",
              fontSize: 0.0414,
              text: "البحث ",
            },
          },
        ],
      },
      {
        colorSpace: "srgb",
        toneMapping: "reinhard",
      },
    );
  } catch (error) {
    shaderCanvas.hidden = true;
    console.error("Shader effects could not be initialized.", error);
  }
}

searchForm.addEventListener("submit", (event) => {
  const query = searchInput.value.trim();

  if (!query) {
    event.preventDefault();
    searchMessage.textContent = translate("search-empty");
    searchInput.focus();
    return;
  }

  searchInput.value = query;
  searchMessage.textContent = "";
});
