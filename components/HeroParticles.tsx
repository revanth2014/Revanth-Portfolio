"use client";

import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import type { Engine } from "tsparticles-engine";
import { useCallback } from "react";

export default function HeroParticles() {
  const init = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        preset: "links",
        particles: {
            duration: 1100,
easing: "cubic-bezier(0.22, 1, 0.36, 1)",

          number: { value: 50 },
          opacity: { value: 0.08 },
          size: { value: 1 },
          move: {
            speed: 0.8,
          },
        },
        links: {
          opacity: 0.08,
          distance: 140,
        },
      }}
      className="absolute inset-0"
      
    />
  );
}
