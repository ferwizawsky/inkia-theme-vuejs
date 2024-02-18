import { defineStore } from "pinia";
import { ref } from "vue";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";

export const useOption = defineStore("option", () => {
  const url = ref(import.meta.env.VITE_API_URL || "");
  const name = ref(import.meta.env.VITE_NAME || "");
  const token = ref("");
  const secretKey = import.meta.env.VITE_SECRET || "secret_123";

  const setEncryptedTokenCookie = (tokenValue) => {
    const encryptedToken = CryptoJS.AES.encrypt(
      tokenValue,
      secretKey
    ).toString();
    Cookies.set("encryptedToken", encryptedToken, { expires: 7 });
    token.value = tokenValue;
  };

  const getDecryptedTokenCookie = () => {
    const encryptedToken = Cookies.get("encryptedToken");
    if (encryptedToken) {
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedToken, secretKey);
      const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return decryptedToken;
    }
    return null;
  };

  token.value = getDecryptedTokenCookie() || "";

  const updateToken = (newToken) => {
    token.value = newToken;
    setEncryptedTokenCookie(newToken);
  };

  return { url, name, token, updateToken };
});
