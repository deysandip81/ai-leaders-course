/* Voice-over player: one narration per lesson, files at ./audio/<lesson-id>.m4a */
(function () {
  const KEY_RATE = "aiFieldGuide.rate", KEY_AUTO = "aiFieldGuide.autoNext";
  const audio = new Audio();
  audio.preload = "metadata";
  let rate = parseFloat(localStorage.getItem(KEY_RATE) || "1");
  let autoNext = localStorage.getItem(KEY_AUTO) === "1";
  let wantPlay = false;

  const bar = document.createElement("div");
  bar.className = "vo-bar";
  bar.innerHTML =
    '<button class="vo-play" aria-label="Play voice-over">&#9654;</button>' +
    '<div class="vo-info"><div class="vo-title">&#127911; Listen to this lesson</div>' +
    '<div class="vo-track"><input class="vo-seek" type="range" min="0" max="1000" value="0" aria-label="Seek" />' +
    '<span class="vo-time">0:00 / 0:00</span></div></div>' +
    '<button class="vo-skip" data-d="-10" title="Back 10 seconds">&#8634; 10</button>' +
    '<button class="vo-skip" data-d="10" title="Forward 10 seconds">10 &#8635;</button>' +
    '<select class="vo-rate" aria-label="Playback speed">' +
    ["0.75", "1", "1.25", "1.5", "1.75", "2"].map((r) => '<option value="' + r + '">' + r + "x</option>").join("") +
    "</select>" +
    '<label class="vo-auto" title="Play the next lesson automatically"><input type="checkbox" /> Auto-play next</label>';

  const q = (s) => bar.querySelector(s);
  const playBtn = q(".vo-play"), seek = q(".vo-seek"), time = q(".vo-time"), rateSel = q(".vo-rate"), autoChk = q(".vo-auto input");
  rateSel.value = String(rate);
  autoChk.checked = autoNext;

  const fmt = (t) => (isFinite(t) ? Math.floor(t / 60) + ":" + String(Math.floor(t % 60)).padStart(2, "0") : "0:00");
  const sync = () => {
    playBtn.innerHTML = audio.paused ? "&#9654;" : "&#10074;&#10074;";
    playBtn.setAttribute("aria-label", audio.paused ? "Play voice-over" : "Pause voice-over");
    bar.classList.toggle("playing", !audio.paused);
  };

  playBtn.onclick = () => (audio.paused ? audio.play() : audio.pause());
  bar.querySelectorAll(".vo-skip").forEach((b) => (b.onclick = () => (audio.currentTime = Math.max(0, audio.currentTime + +b.dataset.d))));
  seek.oninput = () => { if (audio.duration) audio.currentTime = (seek.value / 1000) * audio.duration; };
  rateSel.onchange = () => { rate = +rateSel.value; audio.playbackRate = rate; localStorage.setItem(KEY_RATE, rate); };
  autoChk.onchange = () => { autoNext = autoChk.checked; localStorage.setItem(KEY_AUTO, autoNext ? "1" : "0"); };

  audio.addEventListener("play", sync);
  audio.addEventListener("pause", sync);
  audio.addEventListener("loadedmetadata", () => { audio.playbackRate = rate; time.textContent = "0:00 / " + fmt(audio.duration); });
  audio.addEventListener("timeupdate", () => {
    if (audio.duration) seek.value = Math.round((audio.currentTime / audio.duration) * 1000);
    time.textContent = fmt(audio.currentTime) + " / " + fmt(audio.duration);
  });
  audio.addEventListener("ended", () => {
    sync();
    if (autoNext) { wantPlay = true; document.getElementById("nextBtn").click(); }
  });
  audio.addEventListener("error", () => { q(".vo-title").textContent = "Voice-over unavailable for this lesson"; });

  // Space bar toggles play/pause (outside of inputs)
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !/INPUT|SELECT|TEXTAREA|BUTTON/.test(e.target.tagName)) { e.preventDefault(); playBtn.click(); }
  });

  // Called by app.js each time a lesson renders
  window.onLessonChange = function (s) {
    const main = document.querySelector(".main"), content = document.getElementById("content");
    if (!bar.isConnected) main.insertBefore(bar, content);
    const continuing = wantPlay || !audio.paused;
    wantPlay = false;
    audio.pause();
    audio.src = "./audio/" + s.id + ".m4a";
    audio.playbackRate = rate;
    seek.value = 0;
    q(".vo-title").innerHTML = "&#127911; Listen: " + s.title;
    sync();
    if (continuing && autoNext) audio.play().catch(() => {});
  };
})();
