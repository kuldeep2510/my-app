import { defineCongig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
      plugin:[react()],
      base: "/kuldeepReact",
});