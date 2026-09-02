import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to every [data-reveal] element within
 * the returned ref's subtree, adding "is-visible" the first time each one
 * enters the viewport. One observer per section, not per element.
 */
export function useReveal() {
  const scopeRef = useRef(null);

  useEffect(() => {
    const root = scopeRef.current;
    if (!root) return;
    const targets = root.matches("[data-reveal]") ? [root] : root.querySelectorAll("[data-reveal]");

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return scopeRef;
}
