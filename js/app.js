(function () {
  const S = window.COURSE;
  const $ = (q) => document.querySelector(q);
  const nav = $("#nav"), content = $("#content");
  const KEY = "aiFieldGuide.done", THEME = "aiFieldGuide.theme";
  let done = new Set(JSON.parse(localStorage.getItem(KEY) || "[]"));
  let current = 0;

  // Pre-parse each section to discover its h2 sub-headings
  S.forEach((s) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = s.html;
    s.subs = [...tmp.querySelectorAll("h2")].map((h, i) => ({ id: s.id + "-h" + i, text: h.textContent }));
    s.plain = (s.title + " " + tmp.textContent).toLowerCase();
  });

  function buildNav(filter) {
    nav.innerHTML = "";
    const f = (filter || "").trim().toLowerCase();
    Object.keys(window.PARTS).forEach((p) => {
      const items = S.map((s, i) => ({ s, i })).filter(({ s }) => s.part === p && (!f || s.plain.includes(f)));
      if (!items.length) return;
      const g = document.createElement("div");
      g.className = "nav-group";
      g.innerHTML = `<div class="nav-group-title">${window.PARTS[p]}</div>`;
      items.forEach(({ s, i }) => {
        const b = document.createElement("button");
        b.className = "nav-item" + (i === current ? " active" : "") + (done.has(s.id) ? " done" : "");
        b.innerHTML = `<span class="nav-num">${done.has(s.id) ? "&#10003;" : i}</span><span>${s.icon || ""} ${s.title}</span>`;
        b.onclick = () => go(i);
        g.appendChild(b);
        const sub = document.createElement("div");
        sub.className = "nav-sub";
        s.subs.forEach((h) => {
          const a = document.createElement("a");
          a.href = "#" + h.id;
          a.textContent = h.text;
          a.onclick = (e) => { e.preventDefault(); scrollToId(h.id); closeMenu(); };
          sub.appendChild(a);
        });
        g.appendChild(sub);
      });
      nav.appendChild(g);
    });
    if (!nav.children.length) nav.innerHTML = '<p class="muted" style="padding:10px;font-size:13px">No topics match your search.</p>';
  }

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function render() {
    const s = S[current];
    content.innerHTML = s.html;
    content.querySelectorAll("h2").forEach((h, i) => (h.id = s.id + "-h" + i));
    content.scrollTop = 0;
    $("#crumbs").innerHTML = `${window.PARTS[s.part]} &nbsp;/&nbsp; <b>${s.title}</b>`;
    $("#topMeta").innerHTML = `<span>&#9201; ${s.minutes || 10} min</span><span>${current + 1} of ${S.length}</span>`;
    const prev = $("#prevBtn"), next = $("#nextBtn");
    prev.disabled = current === 0;
    next.disabled = current === S.length - 1;
    prev.querySelector("span").textContent = current > 0 ? S[current - 1].title : "Previous";
    next.querySelector("span").textContent = current < S.length - 1 ? S[current + 1].title : "Next";
    const db = $("#doneBtn");
    db.textContent = done.has(s.id) ? "✓ Completed" : "Mark as complete";
    db.classList.toggle("is-done", done.has(s.id));
    wireQuizzes();
    buildNav($("#search").value);
    updateProgress();
    history.replaceState(null, "", "#" + s.id);
    if (window.onLessonChange) window.onLessonChange(s);
  }

  function go(i) { current = Math.max(0, Math.min(S.length - 1, i)); render(); closeMenu(); }

  function updateProgress() {
    const pct = Math.round((done.size / S.length) * 100);
    $("#progressFill").style.width = pct + "%";
    $("#progressText").textContent = pct + "%";
  }

  function wireQuizzes() {
    const quizzes = content.querySelectorAll(".quiz");
    const scoreEl = content.querySelector("#quizScore");
    let right = 0, answered = 0;
    const refresh = () => {
      if (!scoreEl) return;
      const pct = answered ? Math.round((right / quizzes.length) * 100) : 0;
      let msg = "Answer the questions to see your score.";
      if (answered === quizzes.length) {
        msg = pct >= 85 ? "Outstanding — you are ready to lead AI conversations." :
              pct >= 60 ? "Solid grasp. Revisit the sections where you slipped." :
              "Good start. Re-read Parts 1 and 2 and try again.";
      }
      scoreEl.innerHTML = `<div class="big">${right} / ${quizzes.length}</div><div class="muted">${answered} answered · ${msg}</div>`;
    };
    quizzes.forEach((qz) => {
      const ans = qz.dataset.answer;
      qz.querySelectorAll("button.opt").forEach((b) => {
        b.onclick = () => {
          if (qz.classList.contains("answered")) return;
          qz.classList.add("answered");
          answered++;
          qz.querySelectorAll("button.opt").forEach((o) => {
            o.disabled = true;
            if (o.dataset.opt === ans) o.classList.add("right");
          });
          if (b.dataset.opt === ans) right++; else b.classList.add("wrong");
          refresh();
        };
      });
    });
    refresh();
  }

  // Events
  $("#prevBtn").onclick = () => go(current - 1);
  $("#nextBtn").onclick = () => go(current + 1);
  $("#doneBtn").onclick = () => {
    const id = S[current].id;
    done.has(id) ? done.delete(id) : done.add(id);
    localStorage.setItem(KEY, JSON.stringify([...done]));
    render();
  };
  $("#resetProgress").onclick = () => {
    if (!confirm("Reset all progress?")) return;
    done = new Set(); localStorage.removeItem(KEY); render();
  };
  $("#search").oninput = (e) => buildNav(e.target.value);
  $("#menuBtn").onclick = () => $("#sidebar").classList.toggle("open");
  function closeMenu() { $("#sidebar").classList.remove("open"); }
  const root = document.documentElement;
  root.dataset.theme = localStorage.getItem(THEME) || "dark";
  $("#themeToggle").onclick = () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME, root.dataset.theme);
  };
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    if (e.key === "ArrowRight") go(current + 1);
    if (e.key === "ArrowLeft") go(current - 1);
  });
  // Delegate internal links like <a data-go="section-id">
  content.addEventListener("click", (e) => {
    const a = e.target.closest("[data-go]");
    if (!a) return;
    e.preventDefault();
    const i = S.findIndex((s) => s.id === a.dataset.go);
    if (i >= 0) go(i);
  });

  const start = S.findIndex((s) => "#" + s.id === location.hash);
  go(start >= 0 ? start : 0);
})();
