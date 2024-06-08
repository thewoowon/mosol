import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

if (typeof window === "undefined") {
  // 서버 측에서 fs-backend를 사용
  const Backend = require("i18next-fs-backend").default;
  const path = require("path");

  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "ko",
      debug: true,
      backend: {
        loadPath: path.resolve("./public/locales/{{lng}}/{{ns}}.json"),
      },
      interpolation: {
        escapeValue: false,
      },
    });
} else {
  // 클라이언트 측에서 http-backend를 사용
  import("i18next-http-backend").then((HttpBackend) => {
    i18n
      .use(HttpBackend.default)
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        fallbackLng: "ko",
        debug: true,
        backend: {
          loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        interpolation: {
          escapeValue: false,
        },
      });
  });
}

export default i18n;
