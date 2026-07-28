import en from "./locales/en";
import sv from "./locales/sv";

import type { Language } from "./types";


const languages = {
    en,
    sv
};


export const currentLanguage: Language = "en";


export function t(path: string) {

    const keys = path.split(".");

    let value: any =
        languages[currentLanguage];


    for (const key of keys) {
        value = value[key];
    }


    return value ?? path;
}