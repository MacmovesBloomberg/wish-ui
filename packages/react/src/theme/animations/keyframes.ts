import { insertKeyframes } from "../../system/styleRegistry";

// 🔹 Fade In
insertKeyframes(
  "fade-in",
  `
@keyframes wish-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
`
);

// 🔹 Scale In
insertKeyframes(
  "scale-in",
  `
@keyframes wish-scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
`
);