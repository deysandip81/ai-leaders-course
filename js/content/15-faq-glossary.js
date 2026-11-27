addSection({
  id: "faq-glossary", part: "p3", icon: "📘", title: "Q&A, Glossary & Further Reading", minutes: 15,
  html: `
<div class="hero"><div class="eyebrow">Lesson 15</div><h1>Q&amp;A, glossary &amp; further reading</h1>
<p>Answers to the questions people actually ask, a plain-English dictionary, and where to go next.</p></div>

<h2>Frequently asked questions</h2>
<details><summary>Will AI take my job?</summary><div>AI mostly changes <i>tasks</i>, not whole jobs. Roles that are mainly routine information processing will shift the most. Research so far suggests people who learn to work well with AI tend to become more productive and valuable. The real risk is less "AI replaces you" and more "someone using AI well outperforms you".</div></details>
<details><summary>Do I need to learn to code to lead AI work?</summary><div>No. You need to understand what AI can and cannot do, how to frame problems, how to measure impact and how to manage risk. Those are leadership skills. Basic hands-on use of AI tools is highly recommended, because it builds intuition fast.</div></details>
<details><summary>How do I know if an AI output is trustworthy?</summary><div>Ask: is it grounded in a source I can check? Is this task inside or outside the frontier? What is the cost if it is wrong? For anything factual, numerical, legal or customer-facing, verify before you use it.</div></details>
<details><summary>How much data do I need to start?</summary><div>For generative AI use cases, often very little of your own. You can start with documents and knowledge you already have. For predictive models, you typically need hundreds to thousands of quality historical examples. Data quality matters more than volume.</div></details>
<details><summary>What is the difference between a chatbot and an agent?</summary><div>A chatbot answers questions. An agent pursues a goal: it plans, uses tools, takes actions across systems and checks its own work, ideally with human approval for important steps.</div></details>
<details><summary>How do I measure the ROI of AI tools like coding assistants?</summary><div>Measure outcomes end-to-end against a baseline: cycle time, throughput, quality (defects, rework), and what freed-up capacity is used for. Avoid activity metrics like prompts sent or lines generated.</div></details>
<details><summary>What is "shadow AI" and how do I prevent it?</summary><div>Employees using unapproved AI tools, often with company data. Banning rarely works. Provide good approved tools, clear simple guidelines, and training on why it matters.</div></details>
<details><summary>Should we wait for the technology to mature?</summary><div>Waiting has a cost: competitors build data, skills and workflows that compound. Start with low-risk, high-feasibility use cases now while building foundations, and keep architecture flexible so you can swap models as they improve.</div></details>
<details><summary>How do I get sceptical team members on board?</summary><div>Involve them in redesigning their own workflows, start with tasks they dislike, share honest results (including failures), and let peers (champions) demonstrate real wins. Never mandate without support.</div></details>
<details><summary>Who is accountable when AI makes a mistake?</summary><div>A named human owner, always. AI systems do not carry accountability. Design processes so that responsibility for each AI system and its decisions is clear.</div></details>

<h2>Glossary</h2>
<div class="tbl-wrap"><table>
<tr><th>Term</th><th>Plain-English meaning</th></tr>
<tr><td>A/B test</td><td>Randomly split users into two groups to compare a change against the current version</td></tr>
<tr><td>Agent (agentic AI)</td><td>AI that plans and takes multi-step actions with tools to reach a goal</td></tr>
<tr><td>AGI</td><td>Artificial General Intelligence: hypothetical AI matching humans across most tasks</td></tr>
<tr><td>AI Factory</td><td>The data, algorithms, experimentation and infrastructure that turn data into decisions at scale</td></tr>
<tr><td>Algorithm</td><td>A set of steps for solving a problem; in ML, the method a model uses to learn</td></tr>
<tr><td>Bias (algorithmic)</td><td>Systematic unfairness in AI outcomes towards certain groups</td></tr>
<tr><td>Context window</td><td>How much text an LLM can consider at once</td></tr>
<tr><td>Deep learning</td><td>ML using large multi-layer neural networks</td></tr>
<tr><td>Drift</td><td>Model performance degrading as the real world changes</td></tr>
<tr><td>Fine-tuning</td><td>Further training a pre-trained model on specific data</td></tr>
<tr><td>Foundation model</td><td>A large general-purpose model adaptable to many tasks</td></tr>
<tr><td>Grounding</td><td>Anchoring AI answers in trusted, verifiable sources</td></tr>
<tr><td>Hallucination</td><td>A fluent but false AI output</td></tr>
<tr><td>Human in the loop</td><td>A person reviews or approves AI decisions</td></tr>
<tr><td>Inference</td><td>Using a trained model to make predictions on new data</td></tr>
<tr><td>Jagged frontier</td><td>The uneven, invisible boundary of what AI does well</td></tr>
<tr><td>LLM</td><td>Large language model, trained on vast text to predict and generate language</td></tr>
<tr><td>MLOps</td><td>Practices for deploying, monitoring and maintaining ML in production</td></tr>
<tr><td>Multimodal</td><td>AI handling multiple input types: text, images, audio, video</td></tr>
<tr><td>Network effect</td><td>A product becomes more valuable as more people use it</td></tr>
<tr><td>Overfitting</td><td>A model memorising training data instead of learning general patterns</td></tr>
<tr><td>Precision / Recall</td><td>How often alarms are right / how many real cases are caught</td></tr>
<tr><td>Prompt</td><td>The instruction or question you give an AI model</td></tr>
<tr><td>Prompt injection</td><td>Hidden malicious instructions that trick an AI into misbehaving</td></tr>
<tr><td>RAG</td><td>Retrieval-Augmented Generation: fetching relevant documents for the model to answer from</td></tr>
<tr><td>Reinforcement learning</td><td>Learning by trial, error and reward</td></tr>
<tr><td>Supervised learning</td><td>Learning from labelled examples</td></tr>
<tr><td>Token</td><td>A chunk of text (roughly part of a word) that models process</td></tr>
<tr><td>Training data</td><td>The examples a model learns from</td></tr>
<tr><td>Unsupervised learning</td><td>Finding structure in unlabelled data</td></tr>
</table></div>

<h2>Further reading and next steps</h2>
<ul>
<li><b>Books:</b> <i>Competing in the Age of AI</i> (Iansiti and Lakhani); <i>Co-Intelligence</i> (Ethan Mollick); <i>Prediction Machines</i> (Agrawal, Gans and Goldfarb); <i>Human + Machine</i> (Daugherty and Wilson).</li>
<li><b>Research:</b> "Navigating the Jagged Technological Frontier" (Dell'Acqua et al., HBS Working Paper, 2023); "Generative AI at Work" (Brynjolfsson, Li and Raymond, 2023).</li>
<li><b>Frameworks:</b> NIST AI Risk Management Framework; ISO/IEC 42001; the EU AI Act overview.</li>
<li><b>Courses:</b> HBS Online <a href="https://online.hbs.edu/courses/ai-essentials-for-business" target="_blank">AI Essentials for Business</a> and <a href="https://online.hbs.edu/courses/ai-for-leaders" target="_blank">AI for Leaders</a> for the official, faculty-led experience.</li>
</ul>

<div class="box key"><div class="box-title">Your 30-day challenge</div>
<ol><li><b>Week 1:</b> use an approved AI tool every working day for one real task.</li>
<li><b>Week 2:</b> run the frontier test (Exercise 6.2) with your team.</li>
<li><b>Week 3:</b> build your opportunity map and pick one quick win.</li>
<li><b>Week 4:</b> launch a measured pilot with a baseline and a named owner.</li></ol></div>

<div class="quote">The best time to start learning AI was a few years ago. The second-best time is today. Congratulations on completing the guide.</div>
`});
