addSection({
  id: "genai-llms", part: "p1", icon: "✨", title: "Generative AI & LLMs", minutes: 25,
  html: `
<div class="hero"><div class="eyebrow">Lesson 3</div><h1>Generative AI &amp; large language models</h1>
<p>How chat assistants actually work, why they sometimes make things up, and how to get great results from them.</p></div>

<p class="lead">A large language model (LLM) is, at heart, an extraordinarily well-read autocomplete. It has read a huge slice of human text and learned to predict, one piece at a time, what comes next. Do that billions of times with enough skill and you get something that can draft a strategy memo, explain tax law or write code.</p>

<h2>How an LLM works, in five ideas</h2>
<div class="grid">
  <div class="card"><div class="ic">🧩</div><h4>Tokens</h4><p>Text is chopped into pieces (roughly three-quarters of a word each). Models read and write tokens, and are often priced per token.</p></div>
  <div class="card"><div class="ic">🎯</div><h4>Next-token prediction</h4><p>The model picks a likely next token, adds it, and repeats. Fluency comes from patterns, not from looking things up.</p></div>
  <div class="card"><div class="ic">🏋️</div><h4>Pre-training + fine-tuning</h4><p>First trained on massive text, then refined with human feedback to be helpful, honest and safe.</p></div>
  <div class="card"><div class="ic">🪟</div><h4>Context window</h4><p>How much text it can "hold in mind" at once: your prompt, documents and the conversation so far.</p></div>
  <div class="card"><div class="ic">🖼️</div><h4>Multimodal</h4><p>Modern models handle images, audio, video and documents as well as text.</p></div>
</div>

<h2>Hallucinations: the confident mistake</h2>
<p>Because an LLM generates what <i>sounds</i> right, it can produce a fluent, confident and completely false answer: a made-up statistic, a fake citation, a non-existent policy. This is called a <b>hallucination</b>.</p>
<div class="box warn"><div class="box-title">Real-world cautionary tale</div>
<p>In 2023 lawyers in a US case were sanctioned after filing a brief citing court cases that a chatbot had invented. The cases sounded real. They did not exist. Lesson: <b>verification is a human job</b>.</p></div>
<h3>How to reduce hallucinations</h3>
<ul>
<li><b>Grounding / RAG</b> (Retrieval-Augmented Generation): give the model your trusted documents and ask it to answer only from them, with citations.</li>
<li>Ask it to say "I don't know" when unsure, and to show its sources.</li>
<li>Use it for drafting and thinking, and keep humans as the final check for facts that matter.</li>
<li>Lower the "temperature" (creativity setting) for factual tasks.</li>
</ul>

<h2>Prompting: talking to AI well</h2>
<p>The quality of what you get depends heavily on what you ask. A useful framework is <b>R-T-C-F-E</b>:</p>
<div class="tbl-wrap"><table>
<tr><th>Element</th><th>What to include</th><th>Example</th></tr>
<tr><td><b>R</b>ole</td><td>Who should the AI act as?</td><td>"You are an experienced HR business partner..."</td></tr>
<tr><td><b>T</b>ask</td><td>What exactly do you want?</td><td>"...draft a 200-word announcement of our new hybrid policy"</td></tr>
<tr><td><b>C</b>ontext</td><td>Background, audience, constraints</td><td>"Audience: 300 engineers, some sceptical. Policy: 3 office days."</td></tr>
<tr><td><b>F</b>ormat</td><td>Shape of the output</td><td>"Subject line, 3 short paragraphs, 1 FAQ"</td></tr>
<tr><td><b>E</b>xamples</td><td>Show what good looks like</td><td>"Match the tone of this previous announcement: ..."</td></tr>
</table></div>

<div class="box example"><div class="box-title">Before and after</div>
<p><b>Weak prompt:</b> "Write about our sales."</p>
<p><b>Strong prompt:</b> "You are a sales operations analyst. Using the table below, write a one-page summary for the VP of Sales covering: top 3 regions by growth, 2 risks, and 3 recommended actions. Use bullet points, keep it under 250 words, and flag any figure you are unsure about."</p></div>

<h3>Power techniques</h3>
<ul>
<li><b>Ask for step-by-step reasoning</b> on complex problems ("think through the options before recommending one").</li>
<li><b>Iterate</b>: treat the first answer as a draft and say "make it shorter", "more formal", "add a counter-argument".</li>
<li><b>Role-play the critic</b>: "Now act as a sceptical CFO and poke holes in this plan."</li>
<li><b>Break big tasks into steps</b>: outline first, then each section.</li>
</ul>

<h2>Where generative AI creates business value</h2>
<div class="tbl-wrap"><table>
<tr><th>Function</th><th>Typical uses</th></tr>
<tr><td>Marketing</td><td>Campaign drafts, personalised copy, image variations, audience insights</td></tr>
<tr><td>Customer service</td><td>Suggested replies, chat assistants, call summaries, sentiment tagging</td></tr>
<tr><td>Software engineering</td><td>Code completion, test generation, code review, documentation</td></tr>
<tr><td>Sales</td><td>Account research, proposal drafts, CRM note-taking</td></tr>
<tr><td>HR and Learning</td><td>Job descriptions, onboarding assistants, training content</td></tr>
<tr><td>Finance and Legal</td><td>Contract review, variance commentary, policy Q&amp;A</td></tr>
</table></div>

<div class="exercise"><div class="ex-head"><span>EXERCISE 3.1</span> Upgrade the prompt</div>
<p>Rewrite this weak prompt using R-T-C-F-E: <i>"Help me with my presentation."</i></p>
<details><summary>Show a sample answer</summary><div>
"You are an executive communications coach (<b>R</b>). Help me restructure my 10-slide presentation into a clear story (<b>T</b>). The audience is a visiting director with 20 minutes who cares about priorities, efficiency and AI adoption (<b>C</b>). Give me a slide-by-slide outline with a headline and 3 bullets each (<b>F</b>). Here is an example of a headline style I like: 'Cycle time down 30 percent with AI code review' (<b>E</b>)."</div></details></div>

<div class="exercise"><div class="ex-head"><span>EXERCISE 3.2</span> Spot the risk</div>
<p>A colleague pastes a confidential customer list into a free public chatbot to "clean it up". List three risks.</p>
<details><summary>Show answer</summary><div>(1) Data leakage: confidential data leaves company control and may be stored or used for training. (2) Privacy and compliance breach under data-protection law. (3) Errors: the AI may silently alter or invent records. Use only company-approved tools for sensitive data.</div></details></div>

<div class="quiz" data-answer="b"><p class="q">What is the most effective way to reduce hallucinations on company-policy questions?</p><div class="opts">
<button class="opt" data-opt="a">A. Ask the model to be more confident</button>
<button class="opt" data-opt="b">B. Ground it in the actual policy documents (RAG) and require citations</button>
<button class="opt" data-opt="c">C. Use a longer prompt with more adjectives</button></div>
<div class="explain">Correct answer: B. Grounding answers in trusted sources, with citations you can check, is the most reliable fix.</div></div>

<div class="takeaways"><h3>Key takeaways</h3><ul>
<li>LLMs predict likely text, which makes them fluent but not inherently factual.</li>
<li>Ground them in trusted data and verify anything that matters.</li>
<li>Better prompts give better results: Role, Task, Context, Format, Examples.</li>
<li>Never put sensitive data into unapproved tools.</li></ul></div>
`});
