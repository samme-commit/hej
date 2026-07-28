import en from "./locales/en";
import sv from "./locales/sv";

import type { Language } from "./types";


type TranslationValue =
    | string
    | {
        [key: string]: TranslationValue;
    };


const languages: Record<
    Language,
    Record<string, TranslationValue>
> = {
    en,
    sv
};


export const currentLanguage: Language = "en";


export function t(path: string) {

    const keys = path.split(".");

    let value: TranslationValue =
        languages[currentLanguage];


    for (const key of keys) {

        if (typeof value === "string" || !(key in value)) {

            return path;

        }

        value = value[key];
    }


    return typeof value === "string"
        ? value
        : path;
}
