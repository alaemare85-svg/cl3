import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { createShader } from "https://esm.sh/shaders@4.0.7/js";

const translations = {
  ar: {
    description: "ابحث في الويب وتعرّف على ما أحب.",
    intro: "ابحث في الويب واكتشف ما تريد.",
    "search-label": "ما الذي تريد البحث عنه؟",
    "search-placeholder": "اكتب كلمات البحث هنا",
    "search-button": "بحث",
    "search-empty": "اكتب كلمات البحث أولًا.",
    "auth-heading": "حساب العميل",
    "auth-email": "البريد الإلكتروني",
    "auth-password": "كلمة المرور",
    "auth-create": "إنشاء حساب",
    "auth-login": "تسجيل الدخول",
    "auth-has-account": "لديك حساب؟ سجّل الدخول",
    "auth-no-account": "ليس لديك حساب؟ أنشئ حسابًا",
    "auth-signout": "تسجيل الخروج",
    "auth-not-configured": "يلزم إعداد مشروع Supabase لتفعيل الحسابات.",
    "auth-config-needed": "أضف رابط مشروع Supabase ومفتاحه العام في script.js لتفعيل الحسابات.",
    "auth-welcome": "مرحبًا",
    "auth-create-success": "تم إنشاء حسابك وتسجيل الدخول.",
    "auth-confirm-email": "تم إنشاء الحساب. تحقق من بريدك الإلكتروني لتأكيده.",
    "auth-login-success": "تم تسجيل الدخول بنجاح.",
    "auth-logout-success": "تم تسجيل الخروج.",
    "auth-operation-error": "تعذّر إتمام العملية:",
    "auth-restore-error": "تعذّر استعادة جلسة الدخول:",
    "auth-logout-error": "تعذّر تسجيل الخروج:",
    "auth-no-connection": "اتصال Supabase غير مُعدّ.",
    "favorites-heading": "إذا أردت أن تعرف ماذا أحب",
    "umm-name": "أم كلثوم",
    "umm-photo-alt": "أم كلثوم في فيلم فاطمة",
    "favorite-song": "أغنيتي المفضلة: بعيد عنك",
    "umm-image-credit": "صورة أم كلثوم: المجال العام عبر Wikimedia Commons",
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
    "settings-heading": "إعدادات اللغة والألوان",
    "language-label": "اللغة",
    "language-ar": "العربية",
    "language-en": "English",
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
    "auth-heading": "Customer account",
    "auth-email": "Email address",
    "auth-password": "Password",
    "auth-create": "Create account",
    "auth-login": "Sign in",
    "auth-has-account": "Already have an account? Sign in",
    "auth-no-account": "New here? Create an account",
    "auth-signout": "Sign out",
    "auth-not-configured": "A Supabase project must be configured to enable accounts.",
    "auth-config-needed": "Add the Supabase project URL and public key in script.js to enable accounts.",
    "auth-welcome": "Welcome",
    "auth-create-success": "Your account was created and you are signed in.",
    "auth-confirm-email": "Account created. Check your email to confirm it.",
    "auth-login-success": "You are signed in.",
    "auth-logout-success": "You are signed out.",
    "auth-operation-error": "Could not complete the request:",
    "auth-restore-error": "Could not restore the session:",
    "auth-logout-error": "Could not sign out:",
    "auth-no-connection": "Supabase is not configured.",
    "favorites-heading": "Want to know what I love?",
    "umm-name": "Umm Kulthum",
    "umm-photo-alt": "Umm Kulthum in the film Fatimah",
    "favorite-song": "My favorite song: Ba'eed Anak",
    "umm-image-credit": "Umm Kulthum photo: public domain via Wikimedia Commons",
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
    "settings-heading": "Language and color settings",
    "language-label": "Language",
    "language-ar": "Arabic",
    "language-en": "English",
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

const defaultPreferences = {
  language: "ar",
  backgroundColor: "#081629",
  textColor: "#ff4545",
};
const preferencesKey = "wcl3-preferences";

function isValidColor(value) {
  return typeof value === "string" && /^#[\da-f]{6}$/i.test(value);
}

function loadPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem(preferencesKey) || "{}");
    return {
      language: saved.language === "en" ? "en" : "ar",
      backgroundColor: isValidColor(saved.backgroundColor)
        ? saved.backgroundColor
        : defaultPreferences.backgroundColor,
      textColor: isValidColor(saved.textColor)
        ? saved.textColor
        : defaultPreferences.textColor,
    };
  } catch (error) {
    console.warn("Could not load local preferences.", error);
    return { ...defaultPreferences };
  }
}

let preferences = loadPreferences();

const SUPABASE_URL = "https://YOUR_PROJECT_ID.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";
const supabaseConfigured =
  !SUPABASE_URL.includes("YOUR_PROJECT_ID") &&
  !SUPABASE_PUBLISHABLE_KEY.includes("YOUR_");
const supabase = supabaseConfigured
  ? createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)
  : null;

const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchMessage = document.querySelector("#search-message");
const authForm = document.querySelector("#auth-form");
const authEmail = document.querySelector("#customer-email");
const authPassword = document.querySelector("#customer-password");
const authSubmit = document.querySelector("#auth-submit");
const authToggle = document.querySelector("#auth-toggle");
const authSession = document.querySelector("#auth-session");
const authWelcome = document.querySelector("#auth-welcome");
const authSignout = document.querySelector("#auth-signout");
const authMessage = document.querySelector("#auth-message");
const languageSelect = document.querySelector("#language-select");
const backgroundColorInput = document.querySelector("#background-color");
const textColorInput = document.querySelector("#text-color");
const resetSettingsButton = document.querySelector("#reset-settings");
const settingsMessage = document.querySelector("#settings-message");
const pageDescription = document.querySelector("#page-description");
let authMode = "signup";
let currentSession = null;
let authMessageKey = "";
let authMessageState = "info";
let authMessageDetail = "";

function translate(key) {
  return translations[preferences.language][key] ?? translations.ar[key] ?? key;
}

function applyColors() {
  document.documentElement.style.setProperty(
    "--page-background",
    preferences.backgroundColor,
  );
  document.documentElement.style.setProperty("--page-text", preferences.textColor);
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

  authSubmit.textContent = translate(
    authMode === "signup" ? "auth-create" : "auth-login",
  );
  authToggle.textContent = translate(
    authMode === "signup" ? "auth-has-account" : "auth-no-account",
  );
  authPassword.autocomplete =
    authMode === "signup" ? "new-password" : "current-password";
  searchMessage.textContent = "";
  settingsMessage.textContent = translate("privacy-note");
  setAuthMessage(
    authMessageKey || (supabase ? "" : "auth-not-configured"),
    authMessageState,
    authMessageDetail,
  );
  renderSession(currentSession);
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
  preferences.backgroundColor = backgroundColorInput.value;
  applyColors();
});
backgroundColorInput.addEventListener("change", savePreferences);

textColorInput.addEventListener("input", () => {
  preferences.textColor = textColorInput.value;
  applyColors();
});
textColorInput.addEventListener("change", savePreferences);

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
    await createShader(shaderCanvas, {
      components: [
        {
          type: "ReflectivePlane",
          id: "idmwrysbk40m8w14zjr",
        },
        {
          type: "Godrays",
          id: "idmwrz8hjw93c6vns44",
          props: {
            density: 1,
            intensity: 1,
            rayColor: "#a60711",
            speed: 2,
            spotty: 0,
          },
        },
        {
          type: "Godrays",
          id: "idmwrz8xjeis4mtbgjz",
          props: {
            rayColor: "#fb42cab3",
          },
        },
        {
          type: "Glitch",
          id: "idmwrz9p0yj56iuob34",
        },
        {
          type: "TimeTrail",
          id: "idmwrz9vnyacntupd2v",
        },
        {
          type: "ChannelBlur",
          id: "idmwrza15cl8eb66j0q",
        },
        {
          type: "Bulge",
          id: "idmwrza8o9g8jkfv03r",
          props: {
            center: {
              x: 0.46,
              y: 0.41,
            },
          },
        },
        {
          type: "Text",
          id: "idmwrzakcfj5680usjy",
          props: {
            center: {
              x: 0.44,
              y: 0.39,
            },
            color: "#943a5985",
            text: "FAHAD",
          },
        },
        {
          type: "Group",
          id: "idmws4q4mf9pc9oqmsc",
          children: [
            {
              type: "ReflectivePlane",
              id: "idmwrzemkkd7vxetrbo",
            },
          ],
        },
      ],
    });
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

function setAuthMessage(key = "", state = "info", detail = "") {
  authMessageKey = key;
  authMessageState = state;
  authMessageDetail = detail;
  authMessage.textContent = key
    ? `${translate(key)}${detail ? ` ${detail}` : ""}`
    : "";
  authMessage.dataset.state = state;
}

function renderSession(session) {
  currentSession = session;
  const isSignedIn = Boolean(session?.user);
  authForm.hidden = isSignedIn;
  authSession.hidden = !isSignedIn;

  if (isSignedIn) {
    authWelcome.textContent = `${translate("auth-welcome")}، ${session.user.email}`;
  }
}

function updateAuthMode() {
  const isSignUp = authMode === "signup";
  authSubmit.textContent = translate(isSignUp ? "auth-create" : "auth-login");
  authToggle.textContent = translate(
    isSignUp ? "auth-has-account" : "auth-no-account",
  );
  authPassword.autocomplete = isSignUp ? "new-password" : "current-password";
  setAuthMessage(supabase ? "" : "auth-not-configured");
}

authToggle.addEventListener("click", () => {
  authMode = authMode === "signup" ? "login" : "signup";
  updateAuthMode();
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!supabase) {
    setAuthMessage("auth-config-needed", "error");
    return;
  }

  authSubmit.disabled = true;
  authToggle.disabled = true;
  const email = authEmail.value.trim();
  const password = authPassword.value;

  try {
    if (authMode === "signup") {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}${window.location.pathname}`,
        },
      });

      if (error) {
        throw error;
      }

      renderSession(data.session);
      setAuthMessage(
        data.session ? "auth-create-success" : "auth-confirm-email",
        "success",
      );
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      renderSession(data.session);
      setAuthMessage("auth-login-success", "success");
    }
  } catch (error) {
    setAuthMessage("auth-operation-error", "error", error.message);
  } finally {
    authSubmit.disabled = false;
    authToggle.disabled = false;
  }
});

authSignout.addEventListener("click", async () => {
  if (!supabase) {
    setAuthMessage("auth-no-connection", "error");
    return;
  }

  authSignout.disabled = true;

  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }

    renderSession(null);
    setAuthMessage("auth-logout-success", "success");
  } catch (error) {
    setAuthMessage("auth-logout-error", "error", error.message);
  } finally {
    authSignout.disabled = false;
  }
});

if (supabase) {
  authSubmit.disabled = false;
  supabase.auth.onAuthStateChange((_event, session) => renderSession(session));

  const { data, error } = await supabase.auth.getSession();
  if (error) {
    setAuthMessage("auth-restore-error", "error", error.message);
  } else {
    renderSession(data.session);
    setAuthMessage("");
  }
}
