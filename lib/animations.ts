export function revealOnScroll(el: HTMLElement) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.animate(
          [
            { opacity: 0, transform: "translateY(30px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 700, easing: "ease-out", fill: "forwards" }
        );
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(el);
}
