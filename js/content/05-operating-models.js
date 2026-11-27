addSection({
  id: "operating-models", part: "p1", icon: "⚙️", title: "AI-First Operating Models", minutes: 25,
  html: `
<div class="hero"><div class="eyebrow">Lesson 5</div><h1>AI-first operating &amp; business models</h1>
<p>How AI removes the old limits on scale, scope and learning, and how to measure where your organisation stands.</p></div>

<p class="lead">A <b>business model</b> is how a company creates and captures value. An <b>operating model</b> is how it actually delivers that value: its people, processes and technology. AI changes both, but the deepest change is to the operating model.</p>

<h2>Breaking the old constraints</h2>
<p>For a century, traditional firms hit three natural limits. AI-first firms soften all three:</p>
<div class="tbl-wrap"><table>
<tr><th>Constraint</th><th>Traditional firm</th><th>AI-first firm</th></tr>
<tr><td><b>Scale</b></td><td>Serving more customers needs proportionally more people. Complexity grows and value per customer eventually falls.</td><td>Software and AI serve the next million customers at almost no extra cost.</td></tr>
<tr><td><b>Scope</b></td><td>Entering a new market means building new capabilities from scratch.</td><td>Same data and algorithms can be reused across products (payments to lending to insurance).</td></tr>
<tr><td><b>Learning</b></td><td>Improvements depend on people slowly learning and sharing.</td><td>Every interaction feeds data back, so the system improves automatically.</td></tr>
</table></div>

<div class="box example"><div class="box-title">Case · Ant Group</div>
<p>Ant Group (affiliate of Alibaba), a frequently cited example from <i>Competing in the Age of AI</i>, grew a payments app into lending, wealth management and insurance, serving over a billion users with a small fraction of the staff a traditional bank would need. Its loans are approved in minutes by algorithms drawing on payment behaviour. The lesson is not "fire everyone": it is that the <b>digital operating core</b> scales and expands scope in ways human-centred processes cannot.</p></div>

<h2>The collision: when AI-first meets traditional</h2>
<p>When an AI-first competitor enters a traditional industry, it often looks small and unimpressive at first, then improves rapidly. Think of how online travel platforms reshaped travel agencies, or streaming reshaped video rental. The traditional firm's value curve flattens with scale; the AI-first firm's keeps rising. By the time the gap is obvious, it is hard to close.</p>

<h2>Value creation vs value capture</h2>
<ul>
<li><b>Value creation:</b> AI can make products more personalised, services faster and decisions better.</li>
<li><b>Value capture:</b> but who keeps the money? If AI makes your service a commodity, prices fall. Leaders must think about how to monetise the extra value: premium tiers, usage pricing, new services, lower cost-to-serve.</li>
</ul>
<div class="box key"><div class="box-title">Leader's lens · Three questions</div>
<ol><li>Where does AI let us do something <b>better</b> (quality)?</li><li>Where does AI let us do it <b>cheaper or faster</b> (efficiency)?</li><li>Where does AI let us do something <b>new</b> that was impossible before (innovation)?</li></ol></div>

<h2>Weaving AI into the operating model</h2>
<p>Bolting an AI tool onto an old process captures only a fraction of the value. Real gains come from <b>redesigning the workflow</b> around what AI does well.</p>
<div class="box example"><div class="box-title">Example · Insurance claims</div>
<p><b>Bolt-on:</b> an adjuster uses a chatbot to write claim letters faster. Saves about 10 percent of time.<br>
<b>Redesigned:</b> customer uploads photos; AI assesses damage, checks policy and flags fraud risk; simple claims are paid same-day automatically; adjusters focus only on complex or disputed claims. Cycle time drops from weeks to hours and customer satisfaction jumps.</p></div>

<h2>The AI maturity scorecard</h2>
<p>Use this self-assessment (inspired by the "AI-first scorecard" idea) to locate your team or company. Score each from 1 (not at all) to 5 (fully):</p>
<div class="tbl-wrap"><table>
<tr><th>Dimension</th><th>Question</th><th>1 looks like...</th><th>5 looks like...</th></tr>
<tr><td>Strategy</td><td>Is AI central to how we plan to compete?</td><td>Side experiments</td><td>Core to strategy and investment</td></tr>
<tr><td>Data</td><td>Is our data integrated, clean and accessible?</td><td>Silos and spreadsheets</td><td>Shared governed platform</td></tr>
<tr><td>Technology</td><td>Can we build and deploy models reliably?</td><td>One-off scripts</td><td>Reusable platforms, MLOps</td></tr>
<tr><td>Experimentation</td><td>Do we test changes rigorously?</td><td>Decide by opinion</td><td>Continuous A/B testing</td></tr>
<tr><td>Talent and skills</td><td>Do people know how to use AI?</td><td>Few specialists</td><td>Broad AI fluency, every role</td></tr>
<tr><td>Culture</td><td>Do we trust data over hierarchy?</td><td>HiPPO (highest-paid person's opinion)</td><td>Evidence-led decisions</td></tr>
<tr><td>Governance</td><td>Do we manage AI risk responsibly?</td><td>No policy</td><td>Clear, enabling guardrails</td></tr>
</table></div>
<p class="muted">Total 7–14: Exploring · 15–24: Experimenting · 25–31: Scaling · 32–35: AI-first</p>

<div class="exercise"><div class="ex-head"><span>EXERCISE 5.1</span> Score yourself</div>
<p>Score your own team on the seven dimensions. Then answer: which <b>one</b> dimension, if raised by two points, would unlock the most value? Why?</p>
<details><summary>Show how to interpret</summary><div>Look for the <b>lowest score that blocks others</b>. Data is often the blocker: you cannot experiment or build models without it. Culture is the silent blocker: great tools fail if people do not trust or use them. Pick one, and make it the focus of your next 90 days.</div></details></div>

<div class="exercise"><div class="ex-head"><span>EXERCISE 5.2</span> Bolt-on or redesign?</div>
<p>Take one process you own. Describe (a) a bolt-on AI improvement and (b) a full redesign. Estimate the impact of each.</p></div>

<div class="quiz" data-answer="b"><p class="q">Why can AI-first firms often expand into new product lines faster?</p><div class="opts">
<button class="opt" data-opt="a">A. They have bigger offices</button>
<button class="opt" data-opt="b">B. Their data and algorithms can be reused across products (scope)</button>
<button class="opt" data-opt="c">C. They avoid all regulation</button></div>
<div class="explain">Correct answer: B. A shared digital core lets them extend into adjacent markets with little new capability.</div></div>

<div class="takeaways"><h3>Key takeaways</h3><ul>
<li>AI weakens the traditional limits of scale, scope and learning.</li>
<li>Redesign workflows. Bolting AI onto old processes leaves most value on the table.</li>
<li>Think about value capture, not just value creation.</li>
<li>Use a maturity scorecard to find your biggest blocker.</li></ul></div>
`});
