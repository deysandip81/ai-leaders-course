addSection({
  id: "how-machines-learn", part: "p1", icon: "📚", title: "How Machines Learn", minutes: 20,
  html: `
<div class="hero"><div class="eyebrow">Lesson 2</div><h1>How machines learn</h1>
<p>Supervised, unsupervised and reinforcement learning, training vs inference, and why "accuracy" is never the whole story.</p></div>

<p class="lead">Think of a model as a student. It studies examples (training), sits an exam (testing), and then goes to work answering real questions (inference). How it studies depends on what kind of examples you give it.</p>

<h2>The three ways machines learn</h2>
<div class="grid">
  <div class="card"><div class="ic">🏷️</div><h4>Supervised learning</h4><p>Learning from labelled examples: "this email is spam", "this loan defaulted". The model learns to predict the label for new cases. Most business AI is this.</p></div>
  <div class="card"><div class="ic">🔍</div><h4>Unsupervised learning</h4><p>No labels. The model finds hidden structure, such as grouping customers into segments nobody defined in advance.</p></div>
  <div class="card"><div class="ic">🎮</div><h4>Reinforcement learning</h4><p>Learning by trial and reward, like training a dog. Used in games, robotics, ad bidding and to fine-tune chat assistants with human feedback.</p></div>
</div>

<div class="box example"><div class="box-title">Example · One retailer, three approaches</div>
<ul>
<li><b>Supervised:</b> predict which customers will cancel their membership next month (labels = past cancellations).</li>
<li><b>Unsupervised:</b> discover that shoppers naturally cluster into "weekend bulk buyers", "daily top-up shoppers" and "deal hunters".</li>
<li><b>Reinforcement:</b> learn which discount, shown at which time, maximises long-term spend without giving away margin.</li>
</ul></div>

<h2>Prediction vs classification vs generation</h2>
<div class="tbl-wrap"><table>
<tr><th>Task type</th><th>Question it answers</th><th>Business example</th></tr>
<tr><td>Regression (prediction)</td><td>How much? How many?</td><td>Forecast next quarter's demand for a product</td></tr>
<tr><td>Classification</td><td>Which category?</td><td>Is this transaction fraudulent: yes or no?</td></tr>
<tr><td>Clustering</td><td>What groups exist?</td><td>Customer segmentation</td></tr>
<tr><td>Recommendation</td><td>What next?</td><td>"You may also like..."</td></tr>
<tr><td>Generation</td><td>Can you create one?</td><td>Draft a product description or a reply to a customer</td></tr>
</table></div>

<h2>The learning loop: training, testing, inference</h2>
<div class="flow">
  <div class="step"><b>1. Collect data</b>Historical examples</div><div class="arrow">&rarr;</div>
  <div class="step"><b>2. Train</b>Model adjusts itself to fit patterns</div><div class="arrow">&rarr;</div>
  <div class="step"><b>3. Test</b>Check on data it has never seen</div><div class="arrow">&rarr;</div>
  <div class="step"><b>4. Deploy (inference)</b>Make real predictions</div><div class="arrow">&rarr;</div>
  <div class="step"><b>5. Monitor &amp; retrain</b>The world changes</div>
</div>
<div class="box warn"><div class="box-title">Watch out · Overfitting</div>
<p>A student who memorises last year's exam answers scores 100 percent in practice but fails the real exam. Models do this too, which is called <b>overfitting</b>. That is why we always test on data the model has not seen.</p></div>
<div class="box warn"><div class="box-title">Watch out · Drift</div>
<p>A model trained on pre-pandemic shopping data will be confused by post-pandemic behaviour. When the world changes, model performance quietly decays. This is <b>model drift</b>. Monitoring is not optional.</p></div>

<h2>Is the model any good? Beyond "accuracy"</h2>
<p>Imagine a fraud model on 1,000 transactions, of which 10 are actually fraud. A lazy model that says "not fraud" every time is <b>99 percent accurate</b> and completely useless. Leaders should ask better questions:</p>
<div class="tbl-wrap"><table>
<tr><th>Metric</th><th>Plain-English question</th><th>When it matters most</th></tr>
<tr><td><b>Precision</b></td><td>When it raises an alarm, how often is it right?</td><td>When false alarms are costly (blocking good customers)</td></tr>
<tr><td><b>Recall</b></td><td>Of all real cases, how many did it catch?</td><td>When misses are costly (cancer screening, fraud)</td></tr>
<tr><td><b>False positives</b></td><td>How many innocent cases did it flag?</td><td>Customer experience, workload for reviewers</td></tr>
<tr><td><b>False negatives</b></td><td>How many real cases did it miss?</td><td>Safety, losses, compliance</td></tr>
</table></div>
<div class="box key"><div class="box-title">Leader's lens</div>
<p>Choosing between precision and recall is a <b>business decision, not a technical one</b>. A data scientist can tune the model either way. You must decide which mistake is more expensive.</p></div>

<h2>Correlation is not causation</h2>
<p>ML finds patterns, not reasons. A model might learn that customers who buy umbrellas also buy soup, because both rise on rainy days. Do not run an umbrella promotion to sell soup. Use experiments (Lesson 8) to test cause and effect.</p>

<div class="exercise"><div class="ex-head"><span>EXERCISE 2.1</span> Match the method</div>
<p>Which learning type fits each problem?</p>
<ol><li>Group 50,000 support tickets into themes no one has named yet.</li>
<li>Predict which job applicants will accept an offer, using five years of hiring records.</li>
<li>Teach a warehouse robot the fastest picking route by trial and error.</li>
<li>Estimate house prices from size, location and age.</li></ol>
<details><summary>Show answers</summary><div>1. Unsupervised (clustering). 2. Supervised (classification, labels = accepted or declined). 3. Reinforcement learning. 4. Supervised (regression).</div></details></div>

<div class="exercise"><div class="ex-head"><span>EXERCISE 2.2</span> Which mistake is worse?</div>
<p>For each AI system, decide whether you would prioritise precision or recall, and why: (a) an airport security scanner; (b) a tool that auto-rejects job applications; (c) a marketing model choosing who gets a free sample.</p>
<details><summary>Show suggested answers</summary><div>
(a) <b>Recall</b>: missing a threat is catastrophic; humans can re-check false alarms.<br>
(b) <b>Precision</b> (and human review): wrongly rejecting a good candidate is unfair and costly, and may be illegal.<br>
(c) Either, depending on cost: if samples are cheap, favour recall to reach more likely buyers; if expensive, favour precision.</div></details></div>

<div class="quiz" data-answer="a"><p class="q">A model scores 99 percent on training data but 70 percent on new data. What is the most likely issue?</p><div class="opts">
<button class="opt" data-opt="a">A. Overfitting: it memorised rather than learned</button>
<button class="opt" data-opt="b">B. The model is too simple</button>
<button class="opt" data-opt="c">C. The computer is too slow</button></div>
<div class="explain">Correct answer: A. A big gap between training and test performance is the classic sign of overfitting.</div></div>

<div class="takeaways"><h3>Key takeaways</h3><ul>
<li>Most business AI is supervised learning: predicting a label from past examples.</li>
<li>Always test on unseen data, and monitor for drift after launch.</li>
<li>Accuracy alone can mislead. Ask about precision, recall and the cost of each mistake.</li>
<li>Models find correlations. Experiments prove causation.</li></ul></div>
`});
