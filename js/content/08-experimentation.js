addSection({
  id: "experimentation", part: "p2", icon: "🧪", title: "Experimentation & Measuring Impact", minutes: 20,
  html: `
<div class="hero"><div class="eyebrow">Lesson 8</div><h1>Experimentation &amp; measuring AI impact</h1>
<p>How to prove an AI initiative actually works, and avoid fooling yourself with vanity metrics.</p></div>

<p class="lead">"It feels faster" is not evidence. The best AI-first companies run thousands of experiments a year because they know that most ideas, even good-sounding ones, do not move the numbers. Measuring well is a leadership skill.</p>

<h2>A/B testing in plain English</h2>
<p>Split people (or tickets, or stores) randomly into two groups. Group A keeps the current way; Group B gets the AI version. Compare outcomes. Because the split is random, any difference is very likely caused by the AI, not by luck or other factors.</p>
<div class="flow">
  <div class="step"><b>Hypothesis</b>"AI-suggested replies will cut handling time 20 percent without hurting satisfaction"</div><div class="arrow">&rarr;</div>
  <div class="step"><b>Random split</b>Half of agents get AI, half do not</div><div class="arrow">&rarr;</div>
  <div class="step"><b>Run</b>Long enough for a reliable sample</div><div class="arrow">&rarr;</div>
  <div class="step"><b>Measure</b>Primary metric + guardrails</div><div class="arrow">&rarr;</div>
  <div class="step"><b>Decide</b>Scale, iterate or stop</div>
</div>

<div class="box example"><div class="box-title">Real-world evidence · AI in customer support</div>
<p>A widely cited 2023 study (Brynjolfsson, Li and Raymond) of over 5,000 customer-support agents found an AI assistant raised issues resolved per hour by about <b>14 percent</b> on average, and by around <b>34 percent</b> for novice and lower-skilled agents, with little effect on the most experienced. This kind of rollout comparison is how you prove impact.</p></div>

<h2>Choosing the right metrics</h2>
<div class="tbl-wrap"><table>
<tr><th>Metric type</th><th>Purpose</th><th>Example</th></tr>
<tr><td><b>Primary (north star)</b></td><td>The one outcome you are trying to move</td><td>Tickets resolved per hour</td></tr>
<tr><td><b>Guardrail</b></td><td>Things that must not get worse</td><td>Customer satisfaction, error rate, escalations</td></tr>
<tr><td><b>Leading indicator</b></td><td>Early signal of success</td><td>Percentage of AI suggestions accepted</td></tr>
<tr><td><b>Adoption</b></td><td>Are people actually using it?</td><td>Weekly active users / eligible users</td></tr>
</table></div>
<div class="box warn"><div class="box-title">Vanity metrics to avoid</div>
<ul><li>"Number of prompts sent" (activity is not value)</li><li>"Licences purchased" (spend is not adoption)</li><li>"Lines of code generated" (more code is not better software)</li><li>Self-reported "hours saved" without checking what the hours were used for</li></ul></div>

<h2>Measuring efficiency vs effectiveness</h2>
<ul>
<li><b>Efficiency:</b> doing the same thing faster or cheaper (cycle time, cost per unit, throughput).</li>
<li><b>Effectiveness:</b> doing it better (quality, accuracy, customer outcomes, revenue).</li>
<li><b>Capacity redeployed:</b> what did people do with the time saved? This is where value is truly captured, or lost.</li>
</ul>
<div class="box key"><div class="box-title">Leader's lens · The baseline</div>
<p>You cannot show improvement without a "before". Capture baseline metrics <b>before</b> rolling out AI. Teams that skip this end up arguing about anecdotes.</p></div>

<h2>Common experimentation traps</h2>
<div class="tbl-wrap"><table>
<tr><th>Trap</th><th>What happens</th><th>Fix</th></tr>
<tr><td>Novelty effect</td><td>People use it enthusiastically for two weeks, then drop off</td><td>Run longer; track retention</td></tr>
<tr><td>Self-selection</td><td>Only keen volunteers try AI, so results look great</td><td>Randomise who gets it</td></tr>
<tr><td>Peeking</td><td>Stopping the test the moment results look good</td><td>Fix sample size and duration up front</td></tr>
<tr><td>Too many metrics</td><td>Something always looks significant by chance</td><td>One primary metric, decided in advance</td></tr>
<tr><td>Ignoring spillovers</td><td>AI group's speed creates more work for another team</td><td>Measure end-to-end outcomes</td></tr>
</table></div>

<div class="exercise"><div class="ex-head"><span>EXERCISE 8.1</span> Design an experiment</div>
<p>Your engineering org is rolling out an AI code-review assistant. Design the experiment: hypothesis, unit of randomisation, primary metric, two guardrails, duration and decision rule.</p>
<details><summary>Show a sample design</summary><div>
<b>Hypothesis:</b> AI review cuts pull-request cycle time by 25 percent without increasing production defects.<br>
<b>Unit:</b> randomise by team (not individual) to avoid cross-contamination.<br>
<b>Primary metric:</b> median PR open-to-merge time.<br>
<b>Guardrails:</b> post-release defect rate; reviewer-reported quality score.<br>
<b>Duration:</b> 8 weeks (covers sprint cycles and novelty fade).<br>
<b>Decision rule:</b> scale if cycle time improves at least 15 percent and defects do not rise; otherwise iterate on configuration.</div></details></div>

<div class="exercise"><div class="ex-head"><span>EXERCISE 8.2</span> Fix the claim</div>
<p>A vendor says: <i>"Teams using our AI saved 10 hours a week."</i> What would you ask before believing it?</p>
<details><summary>Show suggested questions</summary><div>Compared to what baseline? How was time measured: self-reported or logged? Were teams randomly chosen or volunteers? What happened to quality? What were the saved hours used for? Over how long?</div></details></div>

<div class="quiz" data-answer="b"><p class="q">Why randomise who receives the AI tool in a pilot?</p><div class="opts">
<button class="opt" data-opt="a">A. To make it fair to the vendor</button>
<button class="opt" data-opt="b">B. So differences in results can be attributed to the AI, not to who chose to use it</button>
<button class="opt" data-opt="c">C. To save money on licences</button></div>
<div class="explain">Correct answer: B. Randomisation removes self-selection bias, so you measure cause, not coincidence.</div></div>

<div class="takeaways"><h3>Key takeaways</h3><ul>
<li>Test AI like any investment: hypothesis, control group, measurement.</li>
<li>One primary metric, plus guardrails that must not get worse.</li>
<li>Capture a baseline before launch.</li>
<li>Value is captured only when saved capacity is redeployed to something useful.</li></ul></div>
`});
