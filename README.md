# AI for Business & Leaders — The Friendly Field Guide

A self-paced, interactive course on AI for business professionals and leaders, delivered as a static web app with narrated voice-overs.

It brings together the themes of two Harvard Business School Online programmes — **AI Essentials for Business** (foundations) and **AI for Leaders** (adoption and scale) — into one learning path.

> **Note:** This is an independent, curated study guide written from public concepts and widely cited research. It is not official HBS Online course material.

---

## Features

- **16 lessons** across three parts, ~4–5 hours of material
- **Voice-over narration** for every lesson (~33 minutes total) with play/pause, seek, ±10s skip, 0.75x–2x speed and auto-play-next
- **23 exercises** (most with hidden sample answers) and **33 interactive quiz questions**, including a scored 20-question final quiz
- **Clickable left-side navigation** grouped by part, with sub-heading jump links for the active lesson
- **Topic search**, **progress tracking** (saved in the browser), **dark/light theme**
- Keyboard shortcuts: `←` / `→` to move between lessons, `Space` to play/pause narration
- Responsive layout (collapsible sidebar on small screens) and print-friendly styles
- No build step, no dependencies, no network calls — pure HTML, CSS and JavaScript

## Curriculum

| # | Part | Lesson |
|---|------|--------|
| 0 | Start Here | Welcome & How to Use |
| 1 | AI Essentials | What is AI, Really? |
| 2 | AI Essentials | How Machines Learn |
| 3 | AI Essentials | Generative AI & LLMs |
| 4 | AI Essentials | The AI Factory & Data as Fuel |
| 5 | AI Essentials | AI-First Operating Models |
| 6 | Leading with AI | AI-Native Firms & Agents as Teammates |
| 7 | Leading with AI | Finding & Prioritising AI Opportunities |
| 8 | Leading with AI | Experimentation & Measuring Impact |
| 9 | Leading with AI | Scaling AI: Readiness, Barriers & Change |
| 10 | Leading with AI | Responsible AI: Ethics, Risk & Governance |
| 11 | Leading with AI | Building Your AI Strategy & Roadmap |
| 12 | Practice & Mastery | Case Studies |
| 13 | Practice & Mastery | Capstone: Your AI Action Plan |
| 14 | Practice & Mastery | Final Quiz (20 Questions) |
| 15 | Practice & Mastery | Q&A, Glossary & Further Reading |

## Running locally

Open `index.html` directly in a browser — no server required.

Alternatively, serve the folder (recommended for some browsers' audio handling):

```bash
cd ai-leaders-course
python3 -m http.server 8000
# then open http://localhost:8000
```

## Project structure

```
ai-leaders-course/
├── index.html              # App shell: sidebar, top bar, content area, pager
├── css/
│   ├── style.css           # Layout, theme tokens (dark/light), sidebar, pager
│   ├── content.css         # Lesson components: hero, callouts, cards, tables, quizzes
│   └── audio.css           # Voice-over player bar
├── js/
│   ├── registry.js         # Section registry (addSection) and part labels
│   ├── audio.js            # Voice-over player; loads ./audio/<lesson-id>.m4a
│   ├── app.js              # Navigation, search, progress, quizzes, theme, routing
│   └── content/            # One file per lesson (00-welcome.js … 15-faq-glossary.js)
└── audio/
    └── <lesson-id>.m4a     # Narration per lesson (AAC, 64 kbps, ~16 MB total)
```

## Editing content

Each lesson is a single file in `js/content/` that calls:

```js
addSection({
  id: "lesson-id",          // also the audio file name: audio/lesson-id.m4a
  part: "p1",               // start | p1 | p2 | p3 (see registry.js)
  icon: "🧠",
  title: "Lesson title",
  minutes: 15,
  html: `...lesson HTML...`
});
```

- `<h2>` headings automatically become sidebar jump links.
- Available building blocks (see `css/content.css`): `.hero`, `.box.tip|example|warn|key|analogy`, `.grid > .card`, `.stats > .stat`, `.tbl-wrap > table`, `.flow > .step`, `.exercise`, `<details>` for reveal answers, and `.takeaways`.
- Quiz question markup:
  ```html
  <div class="quiz" data-answer="b">
    <p class="q">Question?</p>
    <div class="opts">
      <button class="opt" data-opt="a">A. ...</button>
      <button class="opt" data-opt="b">B. ...</button>
    </div>
    <div class="explain">Explanation shown after answering.</div>
  </div>
  ```
- To add a lesson, create a new file in `js/content/` and add a matching `<script>` tag in `index.html` (order of tags = order of lessons).

## Voice-overs

- Narration was generated with text-to-speech (voice: *Achird*), one script per lesson, then converted from WAV to AAC `.m4a`:
  ```bash
  afconvert -f m4af -d aac -b 64000 input.wav output.m4a
  ```
- The original `.wav` sources (~93 MB) are excluded via `.gitignore`.
- To replace a narration, drop a new `audio/<lesson-id>.m4a` in place; no code change needed. If a file is missing, the player shows "Voice-over unavailable for this lesson".

## Sources & further reading

- Iansiti & Lakhani, *Competing in the Age of AI* (HBR Press, 2020)
- Dell'Acqua et al., "Navigating the Jagged Technological Frontier", HBS Working Paper (2023)
- Brynjolfsson, Li & Raymond, "Generative AI at Work" (2023)
- Mollick, *Co-Intelligence* (2024)
- NIST AI Risk Management Framework; ISO/IEC 42001; EU AI Act
- HBS Online: [AI Essentials for Business](https://online.hbs.edu/courses/ai-essentials-for-business) · [AI for Leaders](https://online.hbs.edu/courses/ai-for-leaders)

Research figures are cited as commonly reported; verify against the original papers before external use. Case studies in Lesson 12 are illustrative composites, not descriptions of specific companies.

## Author

Sandip Dey — AiDP Customer Engagement, IS&T
