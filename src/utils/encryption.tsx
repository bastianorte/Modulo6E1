import CryptoJS from "crypto-js";

declare module 'crypto-js' {
  var cryptoJS: any;
  export = cryptoJS;
}

const SECRET_KEY = "safeapp_secret_key"; // Cambiar a un valor seguro y único

// Definir los tipos para los datos de entrada
export const encryptData = (data: Record<string, unknown>): string => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export const decryptData = (encryptedData: string): Record<string, unknown> | null => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) as Record<string, unknown>;
  } catch (error) {
    console.error("Error al desencriptar los datos", error);
    return null;
  }
};
