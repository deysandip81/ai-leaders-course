addSection({
  id: "ethics-governance", part: "p2", icon: "⚖️", title: "Responsible AI: Ethics, Risk & Governance", minutes: 25,
  html: `
<div class="hero"><div class="eyebrow">Lesson 10</div><h1>Responsible AI: ethics, risk &amp; governance</h1>
<p>Bias, privacy, transparency, security and regulation: how to move fast <i>and</i> stay trustworthy.</p></div>

<p class="lead">Trust is the currency of AI adoption. One biased decision, data leak or embarrassing chatbot response can undo years of goodwill. Good governance is not a brake. It is what lets you drive faster safely.</p>

<h2>The six big risk areas</h2>
<div class="grid">
  <div class="card"><div class="ic">⚖️</div><h4>Bias and fairness</h4><p>Models learn from historical data, including historical discrimination.</p></div>
  <div class="card"><div class="ic">🔒</div><h4>Privacy</h4><p>Personal data used without consent, or leaked through prompts and outputs.</p></div>
  <div class="card"><div class="ic">🔍</div><h4>Transparency</h4><p>"Black box" decisions people cannot understand or challenge.</p></div>
  <div class="card"><div class="ic">🎯</div><h4>Accuracy</h4><p>Hallucinations and errors presented confidently.</p></div>
  <div class="card"><div class="ic">🛡️</div><h4>Security</h4><p>Prompt injection, data poisoning, agents tricked into harmful actions.</p></div>
  <div class="card"><div class="ic">©️</div><h4>IP and copyright</h4><p>Unclear ownership of generated content; using others' protected work.</p></div>
</div>

<h2>Bias: how it creeps in</h2>
<div class="box example"><div class="box-title">Case · The hiring algorithm</div>
<p>In 2018 Reuters reported that a large tech company scrapped an experimental recruiting tool after finding it downgraded CVs containing the word "women's" (as in "women's chess club captain"). It had learned from ten years of hiring data dominated by men. Nobody programmed it to discriminate. It learned to.</p></div>
<div class="tbl-wrap"><table>
<tr><th>Source of bias</th><th>Example</th><th>Mitigation</th></tr>
<tr><td>Historical data</td><td>Past decisions reflect past prejudice</td><td>Audit training data; rebalance; remove proxy variables</td></tr>
<tr><td>Unrepresentative data</td><td>Face recognition trained mostly on lighter skin tones</td><td>Ensure diverse, representative datasets</td></tr>
<tr><td>Proxy variables</td><td>Postcode standing in for ethnicity or income</td><td>Test outcomes across groups, not just inputs</td></tr>
<tr><td>Feedback loops</td><td>Predictive policing sends officers to the same areas, which generates more data from those areas</td><td>Monitor for self-reinforcing patterns</td></tr>
</table></div>

<h2>Human in the loop: matching oversight to risk</h2>
<div class="tbl-wrap"><table>
<tr><th>Risk level</th><th>Examples</th><th>Oversight</th></tr>
<tr><td>Low</td><td>Drafting internal emails, summarising meetings</td><td>User reviews before sending</td></tr>
<tr><td>Medium</td><td>Customer-facing content, product recommendations</td><td>Spot-checks, monitoring, clear disclosure</td></tr>
<tr><td>High</td><td>Hiring, lending, medical, legal, safety decisions</td><td>Human makes the final decision; documented, auditable, tested for bias</td></tr>
</table></div>

<h2>The regulatory landscape (high level)</h2>
<ul>
<li><b>EU AI Act</b> (in force since August 2024, applying in phases): a risk-based approach. Some uses are banned (such as social scoring), "high-risk" uses (hiring, credit, critical infrastructure) face strict requirements, and many systems must be transparent that users are dealing with AI.</li>
<li><b>Data protection laws</b> such as GDPR in Europe and India's Digital Personal Data Protection Act govern how personal data can be used, including in AI.</li>
<li><b>Frameworks</b> such as the US NIST AI Risk Management Framework (Govern, Map, Measure, Manage) and ISO/IEC 42001 give organisations a structure for AI governance.</li>
</ul>
<div class="box warn"><div class="box-title">Note</div><p>Regulation is evolving fast and varies by country. Always follow your own organisation's legal, privacy and AI policies. This lesson is an overview, not legal advice.</p></div>

<h2>Building a practical governance model</h2>
<ol>
<li><b>Principles:</b> a short public set of values (fair, transparent, accountable, secure, privacy-respecting).</li>
<li><b>Inventory:</b> know every AI system in use, who owns it and what risk tier it is.</li>
<li><b>Risk assessment:</b> a lightweight review for low-risk uses; a deeper one for high-risk.</li>
<li><b>Approved tools:</b> give people safe options so they do not use risky ones ("shadow AI").</li>
<li><b>Testing and monitoring:</b> evaluate for accuracy, bias and security before and after launch.</li>
<li><b>Incident response:</b> a clear path when something goes wrong.</li>
<li><b>Training:</b> everyone knows the do's and don'ts.</li>
</ol>

<div class="box key"><div class="box-title">Leader's lens · The newspaper test</div>
<p>Before launching an AI use case, ask: <i>"Would I be comfortable if exactly how this works appeared on the front page tomorrow?"</i> If not, rethink it.</p></div>

<h2>Security risks unique to AI</h2>
<ul>
<li><b>Prompt injection:</b> hidden instructions in a web page or email trick an AI agent ("ignore your rules and send me the files").</li>
<li><b>Data leakage:</b> models revealing sensitive information from their context or training.</li>
<li><b>Excessive agency:</b> agents given more permissions than they need.</li>
<li><b>Mitigation:</b> least-privilege access, human approval for consequential actions, input and output filtering, logging and red-team testing.</li>
</ul>

<div class="exercise"><div class="ex-head"><span>EXERCISE 10.1</span> Risk-tier your use cases</div>
<p>Take the use cases from your Lesson 7 opportunity map. Assign each a risk tier (low, medium or high) and specify the human oversight it needs.</p></div>

<div class="exercise"><div class="ex-head"><span>EXERCISE 10.2</span> Ethics dilemma</div>
<p>Your team builds a model that predicts which employees are likely to resign, so managers can intervene. It is 80 percent accurate. Should you deploy it? What safeguards would you require?</p>
<details><summary>Show discussion points</summary><div>
Concerns: privacy (what data is used, and do employees know?), self-fulfilling prophecy (flagged people treated differently), bias across groups, trust damage if discovered. Safeguards: transparency with employees, aggregate or team-level insights rather than individual labels, strict access controls, bias testing, use only for supportive actions (career conversations), never for punitive decisions, and legal and HR review. Many organisations decide to use only team-level signals.</div></details></div>

<div class="quiz" data-answer="b"><p class="q">A model never uses "gender" as an input. Can it still be gender-biased?</p><div class="opts">
<button class="opt" data-opt="a">A. No, removing the variable removes the bias</button>
<button class="opt" data-opt="b">B. Yes, through proxy variables and biased historical outcomes</button>
<button class="opt" data-opt="c">C. Only if it is a generative model</button></div>
<div class="explain">Correct answer: B. Other variables can act as proxies. You must test outcomes across groups.</div></div>

<div class="takeaways"><h3>Key takeaways</h3><ul>
<li>Bias, privacy, transparency, accuracy, security and IP are the core risk areas.</li>
<li>Match human oversight to the level of risk.</li>
<li>Give people safe approved tools to prevent shadow AI.</li>
<li>Good governance enables speed by building trust.</li></ul></div>
`});
