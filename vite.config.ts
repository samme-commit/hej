import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig(({ command }) => ({

    // GitHub Pages serves project sites below /<repository-name>/.
    // Keep local development at the normal root URL.
    base: command === "build" ? "/ForgottenRoad/" : "/",

    plugins: [react()]

}));
