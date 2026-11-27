(function () {
  const Q = [
    ["Generative AI is best described as a subset of...", ["Deep learning", "Spreadsheet automation", "Robotics only"], "a", "Generative AI is built on deep learning, which is part of ML, which is part of AI."],
    ["Most business AI applications today use which type of learning?", ["Reinforcement", "Supervised", "Unsupervised"], "b", "Predicting a known label from past examples (supervised) dominates business use."],
    ["A fraud model flags many innocent transactions. Which metric is low?", ["Recall", "Precision", "Training speed"], "b", "Low precision means many of its alarms are false."],
    ["What is model drift?", ["The model moving to another server", "Performance decaying as the real world changes", "A model getting bigger over time"], "b", "When conditions change, a model trained on old patterns degrades."],
    ["An LLM confidently cites a report that does not exist. This is...", ["A hallucination", "Overfitting", "A network effect"], "a", "Fluent but false output is called a hallucination."],
    ["RAG (Retrieval-Augmented Generation) means...", ["Training a new model from scratch", "Feeding the model trusted documents to answer from", "Randomly generating answers"], "b", "RAG grounds answers in retrieved, trusted sources."],
    ["Which is part of the AI Factory?", ["Experimentation platform", "Annual budgeting", "Office layout"], "a", "Data pipeline, algorithm development, experimentation platform and software infrastructure."],
    ["AI-first firms soften which three traditional constraints?", ["Price, place, promotion", "Scale, scope, learning", "Cost, time, quality"], "b", "Scale, scope and learning are the classic limits AI weakens."],
    ["Bolting AI onto an unchanged process usually...", ["Captures most of the value", "Captures only a fraction of the value", "Is illegal"], "b", "Workflow redesign unlocks far more value than bolt-ons."],
    ["In the HBS and BCG study, consultants using AI on a task outside the frontier...", ["Did better", "Did worse than those without AI", "Were unaffected"], "b", "Blind trust outside the frontier reduced correctness."],
    ["Which group gained most from AI assistance in the customer-support study?", ["Most experienced agents", "Novice and lower-skilled agents", "Managers"], "b", "Less experienced agents saw the biggest productivity gains."],
    ["A high-value, low-feasibility AI idea is best treated as a...", ["Quick win", "Big bet: invest in foundations", "Thing to avoid"], "b", "Worth pursuing, but plan and build foundations first."],
    ["Which is a vanity metric for an AI rollout?", ["PR cycle time", "Number of prompts sent", "Customer satisfaction"], "b", "Activity counts do not show value."],
    ["Why capture a baseline before launching AI?", ["To satisfy the vendor", "To be able to show real improvement", "It is not needed"], "b", "Without a before, you cannot prove an after."],
    ["Most AI scaling failures are caused by...", ["Weak algorithms", "People, process and organisational barriers", "Slow internet"], "b", "Adoption and workflow change are the usual bottlenecks."],
    ["A hub-and-spoke AI model means...", ["All AI work is done by one central team", "A central team sets platforms and standards; business teams own use cases", "Every team does whatever it wants"], "b", "It balances control with speed."],
    ["A model excludes gender as an input. Could it still be biased?", ["No", "Yes, via proxies and biased history", "Only on weekends"], "b", "Proxy variables and historical outcomes can carry bias."],
    ["The principle of giving an AI agent only the access it needs is called...", ["Least privilege", "Maximum helpfulness", "Open access"], "a", "Least privilege limits damage if the agent misbehaves or is tricked."],
    ["For a non-differentiating meeting-notes tool, the sensible default is to...", ["Build from scratch", "Buy an approved tool", "Ban it"], "b", "Buy commodity, build differentiators."],
    ["The newspaper test asks...", ["Would this AI make the news cheaper?", "Would I be comfortable if how this works were on the front page?", "Can AI write the newspaper?"], "b", "A simple ethical gut-check before launching."]
  ];
  const L = ["a", "b", "c"];
  const items = Q.map((q, i) =>
    '<div class="quiz" data-answer="' + q[2] + '"><p class="q">' + (i + 1) + ". " + q[0] + '</p><div class="opts">' +
    q[1].map((o, j) => '<button class="opt" data-opt="' + L[j] + '">' + L[j].toUpperCase() + ". " + o + "</button>").join("") +
    '</div><div class="explain">' + q[3] + "</div></div>"
  ).join("");

  addSection({
    id: "final-quiz", part: "p3", icon: "🏆", title: "Final Quiz (20 Questions)", minutes: 15,
    html:
      '<div class="hero"><div class="eyebrow">Lesson 14</div><h1>Final quiz</h1>' +
      "<p>Twenty questions across both parts. Your score updates as you go. Aim for 17 or more.</p></div>" +
      '<div class="score-card" id="quizScore"></div>' +
      "<h2>Questions</h2>" + items +
      '<div class="box tip"><div class="box-title">Want to retry?</div><p>Click another lesson and come back to reset the quiz.</p></div>'
  });
})();
