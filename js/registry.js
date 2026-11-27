/* Section registry — every content file calls addSection({...}) */
window.COURSE = [];
window.addSection = function (s) { window.COURSE.push(s); };

/* Part labels shown as group headers in the sidebar */
window.PARTS = {
  start: "Start Here",
  p1: "Part 1 · AI Essentials for Business",
  p2: "Part 2 · Leading with AI",
  p3: "Part 3 · Practice & Mastery"
};
