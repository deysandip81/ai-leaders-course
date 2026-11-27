addSection({
  id: "opportunities", part: "p2", icon: "🔭", title: "Finding & Prioritising AI Opportunities", minutes: 20,
  html: `
<div class="hero"><div class="eyebrow">Lesson 7</div><h1>Finding &amp; prioritising AI opportunities</h1>
<p>A practical method to go from "we should do something with AI" to a ranked list of use cases worth funding.</p></div>

<p class="lead">The most common AI mistake is not choosing the wrong model. It is choosing the wrong problem. Start with business pain, not technology.</p>

<h2>Where to look: five opportunity lenses</h2>
<div class="grid">
  <div class="card"><div class="ic">🔁</div><h4>Repetitive work</h4><p>High-volume tasks people do the same way every day: data entry, triage, routine replies.</p></div>
  <div class="card"><div class="ic">📄</div><h4>Text-heavy work</h4><p>Reading, summarising, comparing or drafting documents, emails and reports.</p></div>
  <div class="card"><div class="ic">🎲</div><h4>Prediction gaps</h4><p>Decisions made on gut feel that data could improve: demand, churn, risk.</p></div>
  <div class="card"><div class="ic">⏳</div><h4>Bottlenecks</h4><p>Where work waits for an expert: approvals, reviews, specialist questions.</p></div>
  <div class="card"><div class="ic">💡</div><h4>Personalisation</h4><p>Where one-size-fits-all leaves value on the table: offers, learning, support.</p></div>
</div>

<h2>The value vs feasibility matrix</h2>
<p>Plot every idea on two axes:</p>
<div class="tbl-wrap"><table>
<tr><th></th><th>Low feasibility</th><th>High feasibility</th></tr>
<tr><td><b>High value</b></td><td>🚀 <b>Big bets</b>: plan carefully, invest in data and foundations first</td><td>⭐ <b>Quick wins</b>: do these first to build momentum and credibility</td></tr>
<tr><td><b>Low value</b></td><td>🛑 <b>Avoid</b>: hard and not worth it</td><td>🧪 <b>Nice-to-haves</b>: good for learning, do not over-invest</td></tr>
</table></div>

<h3>Scoring value</h3>
<ul><li>Revenue impact, cost saving or time saved (in hours per month times cost)</li>
<li>Customer or employee experience improvement</li><li>Strategic importance and risk reduction</li></ul>
<h3>Scoring feasibility</h3>
<ul><li><b>Data:</b> does the needed data exist, and is it accessible and good quality?</li>
<li><b>Technology:</b> can existing tools or models do it?</li>
<li><b>Risk:</b> what happens when it is wrong? Is a human in the loop?</li>
<li><b>Adoption:</b> will people actually use it? Is there a willing owner?</li></ul>

<div class="box example"><div class="box-title">Worked example · A marketing team's shortlist</div>
<div class="tbl-wrap"><table>
<tr><th>Idea</th><th>Value (1–5)</th><th>Feasibility (1–5)</th><th>Verdict</th></tr>
<tr><td>AI drafts first versions of campaign emails</td><td>3</td><td>5</td><td>⭐ Quick win</td></tr>
<tr><td>Predict which leads will convert</td><td>5</td><td>3</td><td>🚀 Big bet (needs clean CRM data)</td></tr>
<tr><td>Summarise survey verbatims into themes</td><td>4</td><td>5</td><td>⭐ Quick win</td></tr>
<tr><td>Fully autonomous campaign agent</td><td>4</td><td>1</td><td>🚀 Later, once foundations are in place</td></tr>
<tr><td>AI-generated office playlist</td><td>1</td><td>5</td><td>🧪 Fun, not a priority</td></tr>
</table></div></div>

<h2>Write a one-page use-case brief</h2>
<p>Before funding anything, fill this in. If you cannot, the idea is not ready.</p>
<div class="tbl-wrap"><table>
<tr><th>Section</th><th>Prompt</th></tr>
<tr><td>Problem</td><td>What pain, for whom, and how big (in numbers)?</td></tr>
<tr><td>Solution</td><td>What will AI do? What will humans still do?</td></tr>
<tr><td>Success metric</td><td>What number will move, from what to what, by when?</td></tr>
<tr><td>Data</td><td>What data is needed, and do we have it?</td></tr>
<tr><td>Risks</td><td>What could go wrong, and how will we catch it?</td></tr>
<tr><td>Owner</td><td>Which named business leader is accountable?</td></tr>
<tr><td>Pilot plan</td><td>Smallest test to prove value in 6–8 weeks?</td></tr>
</table></div>

<div class="box warn"><div class="box-title">Avoid "pilot purgatory"</div>
<p>Many organisations run dozens of pilots and scale almost none. The usual causes: no business owner, no clear metric, or a pilot that was never designed to plug into real workflows. Design every pilot with the scaled version in mind.</p></div>

<div class="exercise"><div class="ex-head"><span>EXERCISE 7.1</span> Build your opportunity map</div>
<p>Brainstorm 8–10 AI ideas for your area using the five lenses. Score each on value and feasibility. Place them in the matrix. Pick your top two quick wins and one big bet.</p></div>

<div class="exercise"><div class="ex-head"><span>EXERCISE 7.2</span> Spot the weak brief</div>
<p>A colleague proposes: <i>"Let's use AI to improve customer experience."</i> What three questions would you ask?</p>
<details><summary>Show suggested questions</summary><div>(1) Which specific customer pain point, and how do we measure it today? (2) What will the AI actually do, and what data will it use? (3) What number should change, by how much and by when, and who owns it?</div></details></div>

<div class="quiz" data-answer="a"><p class="q">An idea scores high value but low feasibility because data is scattered. Best next step?</p><div class="opts">
<button class="opt" data-opt="a">A. Treat it as a big bet: invest in the data foundation while running quick wins</button>
<button class="opt" data-opt="b">B. Launch it immediately anyway</button>
<button class="opt" data-opt="c">C. Drop it permanently</button></div>
<div class="explain">Correct answer: A. High-value ideas are worth unblocking. Fix the foundations while delivering quick wins in parallel.</div></div>

<div class="takeaways"><h3>Key takeaways</h3><ul>
<li>Start from business pain, not technology.</li>
<li>Rank ideas by value and feasibility; deliver quick wins while preparing big bets.</li>
<li>Every use case needs an owner, a metric and a path to scale.</li></ul></div>
`});
