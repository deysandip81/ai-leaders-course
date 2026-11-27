addSection({
  id: "what-is-ai", part: "p1", icon: "🧠", title: "What is AI, Really?", minutes: 15,
  html: `
<div class="hero"><div class="eyebrow">Lesson 1</div><h1>What is AI, really?</h1>
<p>Cutting through the buzzwords: AI, machine learning, deep learning, generative AI and agents, and how they fit together.</p></div>

<p class="lead">Artificial Intelligence is software that performs tasks we used to think needed human intelligence: recognising a face, understanding a sentence, spotting fraud, writing an email. That is it. No robots with feelings, no magic, just very powerful pattern-finding.</p>

<h2>The Russian-doll picture</h2>
<p>The terms you hear are nested inside each other, like Russian dolls:</p>
<div class="flow">
  <div class="step"><b>Artificial Intelligence</b>Any technique that makes machines act "smart", including old rule-based systems.</div><div class="arrow">&#8835;</div>
  <div class="step"><b>Machine Learning</b>Systems that <i>learn rules from data</i> instead of being hand-coded.</div><div class="arrow">&#8835;</div>
  <div class="step"><b>Deep Learning</b>ML using large neural networks with many layers.</div><div class="arrow">&#8835;</div>
  <div class="step"><b>Generative AI</b>Deep learning models that <i>create</i> new text, images, code, audio.</div>
</div>
<p><b>Agentic AI</b> sits on top: generative models given goals, tools and memory so they can plan and take multi-step actions, not just answer one question.</p>

<div class="box analogy"><div class="box-title">Analogy · The chef</div>
<p><b>Traditional software</b> is a cook following a recipe card exactly. <b>Machine learning</b> is a cook who tasted 10,000 dishes and worked out the recipe themselves. <b>Generative AI</b> is a cook who can invent a new dish on request. <b>An AI agent</b> is a cook who can also go shopping, check the pantry, plan the menu and clean up, with you approving the big decisions.</p></div>

<h2>Rules vs learning: the key shift</h2>
<div class="tbl-wrap"><table>
<tr><th></th><th>Traditional software</th><th>Machine learning</th></tr>
<tr><td>How it works</td><td>Humans write explicit rules (if X then Y)</td><td>The system finds patterns in examples</td></tr>
<tr><td>Spam filter example</td><td>"Block emails containing FREE MONEY"</td><td>Learns from millions of emails marked spam / not spam</td></tr>
<tr><td>Strength</td><td>Predictable, explainable</td><td>Handles messy, complex, changing patterns</td></tr>
<tr><td>Weakness</td><td>Breaks when the world changes</td><td>Needs good data, can be wrong in surprising ways</td></tr>
<tr><td>Gets better by</td><td>Programmers rewriting code</td><td>Feeding it more and better data</td></tr>
</table></div>

<h2>A very short history</h2>
<div class="tbl-wrap"><table>
<tr><th>Era</th><th>What happened</th><th>Why it matters to you</th></tr>
<tr><td>1950s–1980s</td><td>Term "AI" coined (1956). Rule-based "expert systems".</td><td>Promised a lot, delivered narrowly. Two "AI winters" followed.</td></tr>
<tr><td>1990s–2000s</td><td>Statistical ML: recommendation engines, spam filters, credit scoring.</td><td>AI quietly entered everyday products.</td></tr>
<tr><td>2012–2017</td><td>Deep learning breakthroughs in image and speech recognition, driven by GPUs and big data.</td><td>Phones understood voice, photos sorted themselves.</td></tr>
<tr><td>2017</td><td>The "Transformer" architecture published.</td><td>The engine behind today's large language models.</td></tr>
<tr><td>Late 2022 onward</td><td>ChatGPT and other chat assistants reach the public.</td><td>AI became something anyone could use by typing.</td></tr>
<tr><td>2024 onward</td><td>Agents, multimodal models, AI built into everyday work tools.</td><td>Shift from "AI answers" to "AI does tasks".</td></tr>
</table></div>

<h2>Narrow AI vs general AI</h2>
<p>Every AI you can use today is <b>narrow</b> (or at best "broad but uneven"): extremely good at some tasks, surprisingly bad at others. <b>Artificial General Intelligence</b> (AGI), AI that matches humans across almost everything, is debated and not here in any reliable business sense. Plan for the AI that exists, not the AI in films.</p>

<h2>What AI is good and bad at (today)</h2>
<div class="grid">
  <div class="card"><div class="ic">✅</div><h4>Great at</h4><p>Spotting patterns in large data, summarising, drafting, translating, classifying, predicting, generating options, answering from documents.</p></div>
  <div class="card"><div class="ic">⚠️</div><h4>Unreliable at</h4><p>Precise facts without sources, novel reasoning in unfamiliar situations, knowing when it is wrong, judging values and context.</p></div>
  <div class="card"><div class="ic">🙋</div><h4>Still needs humans</h4><p>Accountability, ethics, relationships, setting goals, deciding what "good" looks like.</p></div>
</div>

<div class="box example"><div class="box-title">Everyday examples you already use</div>
<ul><li>Your phone unlocking with your face (computer vision)</li><li>Maps predicting your arrival time (prediction from traffic data)</li><li>Streaming apps suggesting your next show (recommendation)</li><li>Your bank texting you about an odd transaction (anomaly detection)</li><li>Autocomplete in email (language modelling)</li></ul></div>

<div class="exercise"><div class="ex-head"><span>EXERCISE 1.1</span> AI spotting</div>
<p>List five products or services you used in the last 24 hours. For each, guess: is there AI inside? What is it predicting or generating?</p>
<details><summary>Show a sample answer</summary><div>
<b>Email app:</b> spam filtering (classification), smart replies (generation). <b>Ride-hailing:</b> price and ETA (prediction), driver matching (optimisation). <b>Music app:</b> playlists (recommendation). <b>Camera:</b> portrait blur (vision). <b>Online shop:</b> "customers also bought" (recommendation) and fraud checks at checkout (anomaly detection).</div></details></div>

<h2>Quick check</h2>
<div class="quiz" data-answer="b"><p class="q">Which statement best describes machine learning?</p><div class="opts">
<button class="opt" data-opt="a">A. Programmers write every rule by hand</button>
<button class="opt" data-opt="b">B. The system learns patterns from examples (data)</button>
<button class="opt" data-opt="c">C. A robot that thinks like a human</button></div>
<div class="explain">Correct answer: B. ML learns the rules from data rather than having humans code them.</div></div>

<div class="quiz" data-answer="c"><p class="q">What makes AI "agentic"?</p><div class="opts">
<button class="opt" data-opt="a">A. It produces images instead of text</button>
<button class="opt" data-opt="b">B. It runs on a bigger computer</button>
<button class="opt" data-opt="c">C. It can plan and take multi-step actions using tools towards a goal</button></div>
<div class="explain">Correct answer: C. Agents combine a model with goals, tools and memory to act, not just respond.</div></div>

<div class="takeaways"><h3>Key takeaways</h3><ul>
<li>AI, ML, deep learning and generative AI are nested ideas, not competing ones.</li>
<li>The big shift is from <b>writing rules</b> to <b>learning from data</b>.</li>
<li>Today's AI is powerful but uneven. Know where it shines and where it stumbles.</li>
<li>Agents move AI from answering to doing. That is why leaders now need to care.</li></ul></div>
`});
