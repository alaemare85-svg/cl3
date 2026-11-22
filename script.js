import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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
let authMode = "signup";

searchForm.addEventListener("submit", (event) => {
  const query = searchInput.value.trim();

  if (!query) {
    event.preventDefault();
    searchMessage.textContent = "اكتب كلمات البحث أولًا.";
    searchInput.focus();
    return;
  }

  searchInput.value = query;
  searchMessage.textContent = "";
});

function setAuthMessage(message, state = "info") {
  authMessage.textContent = message;
  authMessage.dataset.state = state;
}

function renderSession(session) {
  const isSignedIn = Boolean(session?.user);
  authForm.hidden = isSignedIn;
  authSession.hidden = !isSignedIn;

  if (isSignedIn) {
    authWelcome.textContent = `مرحبًا، ${session.user.email}`;
  }
}

function updateAuthMode() {
  const isSignUp = authMode === "signup";
  authSubmit.textContent = isSignUp ? "إنشاء حساب" : "تسجيل الدخول";
  authToggle.textContent = isSignUp
    ? "لديك حساب؟ سجّل الدخول"
    : "ليس لديك حساب؟ أنشئ حسابًا";
  authPassword.autocomplete = isSignUp ? "new-password" : "current-password";
  setAuthMessage("");
}

authToggle.addEventListener("click", () => {
  authMode = authMode === "signup" ? "login" : "signup";
  updateAuthMode();
});

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!supabase) {
    setAuthMessage("أضف رابط مشروع Supabase ومفتاحه العام في script.js لتفعيل الحسابات.", "error");
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
        data.session
          ? "تم إنشاء حسابك وتسجيل الدخول."
          : "تم إنشاء الحساب. تحقق من بريدك الإلكتروني لتأكيده.",
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
      setAuthMessage("تم تسجيل الدخول بنجاح.", "success");
    }
  } catch (error) {
    setAuthMessage(`تعذّر إتمام العملية: ${error.message}`, "error");
  } finally {
    authSubmit.disabled = false;
    authToggle.disabled = false;
  }
});

authSignout.addEventListener("click", async () => {
  if (!supabase) {
    setAuthMessage("اتصال Supabase غير مُعدّ.", "error");
    return;
  }

  authSignout.disabled = true;

  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }

    renderSession(null);
    setAuthMessage("تم تسجيل الخروج.", "success");
  } catch (error) {
    setAuthMessage(`تعذّر تسجيل الخروج: ${error.message}`, "error");
  } finally {
    authSignout.disabled = false;
  }
});

if (supabase) {
  authSubmit.disabled = false;
  supabase.auth.onAuthStateChange((_event, session) => renderSession(session));

  const { data, error } = await supabase.auth.getSession();
  if (error) {
    setAuthMessage(`تعذّر استعادة جلسة الدخول: ${error.message}`, "error");
  } else {
    renderSession(data.session);
    setAuthMessage("");
  }
}
