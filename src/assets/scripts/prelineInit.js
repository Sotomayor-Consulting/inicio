import "preline";

const initPreline = () => {
  if (typeof window !== "undefined") {
    window.HSStaticMethods?.autoInit();
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPreline, { once: true });
} else {
  initPreline();
}

document.addEventListener("astro:page-load", initPreline);
