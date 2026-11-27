addSection({
  id: "ai-factory", part: "p1", icon: "🏭", title: "The AI Factory & Data as Fuel", minutes: 25,
  html: `
<div class="hero"><div class="eyebrow">Lesson 4</div><h1>The AI Factory &amp; data as fuel</h1>
<p>Why the winners treat AI as a production system, not a one-off project, and why data is the raw material.</p></div>

<p class="lead">Harvard professors Marco Iansiti and Karim Lakhani, in <i>Competing in the Age of AI</i>, describe the core of a modern firm as an <b>AI Factory</b>: a scalable decision engine that turns data into predictions, insights and actions, again and again, at enormous scale.</p>

<h2>The four components of an AI Factory</h2>
<div class="flow">
  <div class="step"><b>1. Data pipeline</b>Collects, cleans, integrates and secures data continuously</div><div class="arrow">&rarr;</div>
  <div class="step"><b>2. Algorithm development</b>Builds models that predict, classify and recommend</div><div class="arrow">&rarr;</div>
  <div class="step"><b>3. Experimentation platform</b>Tests new ideas (A/B tests) to see what actually works</div><div class="arrow">&rarr;</div>
  <div class="step"><b>4. Software infrastructure</b>Delivers it all reliably, securely and at scale</div>
</div>
<p>Each turn of the loop produces more data (users react to the predictions), which improves the models, which improves the product, which attracts more users. That is the <b>virtuous cycle</b>.</p>

<div class="box example"><div class="box-title">Example · A streaming service</div>
<ul>
<li><b>Data pipeline:</b> every play, pause, skip and search is logged.</li>
<li><b>Algorithms:</b> predict what each viewer will enjoy and even which thumbnail they will click.</li>
<li><b>Experimentation:</b> constantly test homepage layouts and artwork on small groups.</li>
<li><b>Infrastructure:</b> serves personalised pages to hundreds of millions of people in milliseconds.</li>
</ul></div>

<h2>Data as fuel: quality beats quantity</h2>
<p>"Garbage in, garbage out" is truer for AI than for anything else. Good data has five qualities:</p>
<div class="grid">
  <div class="card"><div class="ic">🎯</div><h4>Accurate</h4><p>Correctly reflects reality.</p></div>
  <div class="card"><div class="ic">🧩</div><h4>Complete</h4><p>No big gaps or missing groups.</p></div>
  <div class="card"><div class="ic">⏱️</div><h4>Timely</h4><p>Fresh enough for the decision.</p></div>
  <div class="card"><div class="ic">🔗</div><h4>Consistent</h4><p>Same definitions across systems: what counts as an "active customer"?</p></div>
  <div class="card"><div class="ic">⚖️</div><h4>Representative</h4><p>Reflects everyone the model will affect, which is key to avoiding bias.</p></div>
</div>

<div class="box warn"><div class="box-title">The silo problem</div>
<p>In many traditional companies, sales data lives in one system, service data in another and product data in a third, each with different IDs and definitions. Before AI can help, someone has to connect them. Industry surveys regularly find data preparation takes most of the effort in AI projects. Leaders who invest early in shared, governed data platforms move faster later.</p></div>

<h2>Network effects and learning effects</h2>
<div class="tbl-wrap"><table>
<tr><th>Effect</th><th>What it means</th><th>Example</th></tr>
<tr><td><b>Network effect</b></td><td>The product gets more valuable as more people use it</td><td>A ride app: more riders attract more drivers, so waits get shorter</td></tr>
<tr><td><b>Learning effect</b></td><td>More usage means more data, which means better AI</td><td>A map app's traffic predictions improve with every journey</td></tr>
<tr><td><b>Combined</b></td><td>Each feeds the other, creating compounding advantage</td><td>Search engines, marketplaces, social platforms</td></tr>
</table></div>
<div class="box key"><div class="box-title">Leader's lens</div>
<p>Ask: <i>"Does our product get better every time a customer uses it?"</i> If not, you are likely missing the data feedback loop, and a competitor that has one may overtake you.</p></div>

<h2>Proprietary data: your moat</h2>
<p>When everyone can access the same powerful foundation models, what differentiates you? Increasingly it is <b>your unique data</b> (customer interactions, operational history, domain expertise) and <b>how well you plug it into AI</b>. A generic model plus your proprietary knowledge is something competitors cannot copy easily.</p>

<div class="exercise"><div class="ex-head"><span>EXERCISE 4.1</span> Sketch your data pipeline</div>
<p>Pick one important decision your team makes regularly (pricing, staffing, prioritising tickets). Sketch:</p>
<ol><li>What data feeds that decision today? Where does it live?</li>
<li>What data is <i>missing</i> that would make it better?</li>
<li>How quickly does feedback come back on whether the decision was right?</li>
<li>Which of the four AI Factory components is weakest for this decision?</li></ol>
<details><summary>Show a worked example</summary><div>
<b>Decision:</b> which customer support tickets to escalate. <b>Data today:</b> ticket text (helpdesk), customer tier (CRM), product version (telemetry), in three systems. <b>Missing:</b> past resolution outcomes linked to tickets; customer sentiment. <b>Feedback speed:</b> slow, as escalation quality is reviewed monthly. <b>Weakest link:</b> data pipeline, since systems are not joined, so no model can see the whole picture. First fix: a shared ticket ID across systems.</div></details></div>

<div class="quiz" data-answer="c"><p class="q">Which is NOT one of the four AI Factory components?</p><div class="opts">
<button class="opt" data-opt="a">A. Data pipeline</button>
<button class="opt" data-opt="b">B. Experimentation platform</button>
<button class="opt" data-opt="c">C. Marketing department</button>
<button class="opt" data-opt="d">D. Software infrastructure</button></div>
<div class="explain">Correct answer: C. The four are data pipeline, algorithm development, experimentation platform and software infrastructure.</div></div>

<div class="quiz" data-answer="a"><p class="q">A map app's predictions get better with each trip users take. This is an example of...</p><div class="opts">
<button class="opt" data-opt="a">A. A learning effect</button>
<button class="opt" data-opt="b">B. Overfitting</button>
<button class="opt" data-opt="c">C. A hallucination</button></div>
<div class="explain">Correct answer: A. More usage gives more data, which gives better predictions.</div></div>

<div class="takeaways"><h3>Key takeaways</h3><ul>
<li>Think of AI as a <b>factory</b>: data pipeline, algorithms, experimentation, infrastructure.</li>
<li>Data quality and integration are usually the real bottleneck.</li>
<li>Network and learning effects create compounding advantage.</li>
<li>Your proprietary data plus AI is your durable differentiator.</li></ul></div>
`});
