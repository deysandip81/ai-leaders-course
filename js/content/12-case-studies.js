addSection({
  id: "case-studies", part: "p3", icon: "📖", title: "Case Studies", minutes: 25,
  html: `
<div class="hero"><div class="eyebrow">Lesson 12</div><h1>Case studies: putting it all together</h1>
<p>Four illustrative scenarios that combine everything so far. Read each, think through the questions, then compare with the debrief.</p></div>

<p class="lead">These cases are illustrative composites based on common real-world patterns. They are not descriptions of specific companies. Each one stresses different lessons.</p>

<h2>Case A · The retailer's demand forecast</h2>
<p><b>Situation:</b> a mid-sized grocery chain with 300 stores throws away 8 percent of fresh produce while also running out of popular items on weekends. Store managers order based on experience. A data team builds a demand-forecasting model that is 20 percent more accurate than managers' orders in testing. Six months after launch, waste has not changed.</p>
<h3>Questions</h3>
<ol><li>Why might a better model produce no business impact?</li><li>Which barriers (cultural, structural, strategic) are at play?</li><li>What would you do next?</li></ol>
<details><summary>Show debrief</summary><div>
<b>Likely cause:</b> managers are overriding or ignoring the forecast. The model was delivered as a separate report, not built into the ordering screen, and managers were never involved in its design. <b>Barriers:</b> cultural (distrust, loss of autonomy), structural (not embedded in workflow), strategic (no target tied to waste). <b>Next steps:</b> embed the forecast as the default order quantity with an easy override and a reason code; show managers its track record versus theirs; run a randomised store-level experiment; set waste-reduction goals; learn from overrides, since managers often know about local events the model misses. <b>Lesson:</b> accuracy is not adoption (Lessons 2, 8 and 9).</div></details>

<h2>Case B · The bank's AI assistant for relationship managers</h2>
<p><b>Situation:</b> a bank gives its 600 relationship managers a generative-AI assistant that drafts client briefings from CRM data, market news and past meeting notes. Early users love it. Then one briefing includes a confidently wrong figure for a client's holdings, which the manager almost repeats to the client.</p>
<h3>Questions</h3>
<ol><li>What went wrong technically?</li><li>Should the bank pause the rollout?</li><li>What controls would you add?</li></ol>
<details><summary>Show debrief</summary><div>
<b>Technical:</b> a hallucination. The model may have combined numbers from different sources, or the retrieval step pulled stale data. <b>Pause?</b> Not necessarily the whole thing. Restrict use for numerical client data until fixed, and keep it for qualitative prep. <b>Controls:</b> ground all figures directly from system-of-record data (not model-generated); show citations next to every number; add a "verify figures" step; log and review errors; train managers on the jagged frontier; set a risk tier (customer-facing financial information is medium to high). <b>Lesson:</b> grounding, human in the loop and risk-based oversight (Lessons 3, 6 and 10).</div></details>

<h2>Case C · The software team's AI coding rollout</h2>
<p><b>Situation:</b> an engineering org of 200 developers adopts an AI coding assistant. Leadership celebrates "40 percent more code written". Three months later, review queues are longer, and incidents rise slightly.</p>
<h3>Questions</h3>
<ol><li>What is wrong with the success metric?</li><li>What should they measure instead?</li><li>How would you redesign the workflow?</li></ol>
<details><summary>Show debrief</summary><div>
<b>Metric problem:</b> "code written" is a vanity metric. More code means more to review and maintain. <b>Better metrics:</b> PR cycle time (open to merge), change failure rate, deployment frequency, time to restore, developer satisfaction, review wait time. <b>Redesign:</b> use AI on the bottleneck too (AI-assisted code review, test generation, PR summaries); set guidelines on AI-generated code (tests required, smaller PRs); experiment by team with clear baselines. <b>Lesson:</b> measure end-to-end outcomes and watch for spillovers (Lesson 8).</div></details>

<h2>Case D · The HR agent that went too far</h2>
<p><b>Situation:</b> an HR team builds an AI agent to answer employee policy questions and process simple requests. To be "helpful", it is given access to the full HR system. A curious employee asks it about a colleague's salary, and it answers.</p>
<h3>Questions</h3>
<ol><li>What principle was violated?</li><li>Who is accountable?</li><li>How should agents be designed?</li></ol>
<details><summary>Show debrief</summary><div>
<b>Principle:</b> least privilege. The agent should only access the requesting employee's own data. <b>Accountability:</b> the named business owner of the agent and the team that deployed it, not "the AI". <b>Design:</b> role-based access inherited from the user; human approval for consequential actions; red-team testing before launch (including adversarial questions); logging and monitoring; a clear incident process; privacy review. <b>Lesson:</b> manage agents like teammates with a clear role and the right access (Lessons 6 and 10).</div></details>

<div class="exercise"><div class="ex-head"><span>EXERCISE 12.1</span> Write your own case</div>
<p>Think of an AI initiative you have seen, at work or as a customer, that succeeded or failed. Write it up in the same format: situation, three questions, debrief. Share it with your team as a discussion starter.</p></div>

<div class="takeaways"><h3>Patterns across the cases</h3><ul>
<li>The model is rarely the problem. Workflow, trust and metrics usually are.</li>
<li>Ground facts, keep humans accountable, and match oversight to risk.</li>
<li>Measure outcomes, not activity.</li>
<li>Design agents with least privilege from day one.</li></ul></div>
`});
