import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Logic-First AI: A Hypothesis for Lightweight, High-Reasoning Systems',
  description:
    'Can we build AI systems that reason well without being large, by separating the logic of reasoning from the storage of knowledge?',
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-8 rounded-lg border border-line">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: 'var(--bg-sunken)', borderBottom: '1px solid var(--line)' }}>
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-fg-subtle font-medium"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              style={{
                borderBottom: i < rows.length - 1 ? '1px solid var(--line)' : undefined,
                background: i % 2 === 0 ? 'transparent' : 'var(--bg-sunken)',
              }}
            >
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-fg-muted leading-snug">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CodeBlock({ children }: { children: string }) {
  return (
    <div className="my-8 rounded-lg border border-line overflow-hidden">
      <div
        className="px-4 py-2 flex gap-1.5"
        style={{ background: 'var(--bg-elev)', borderBottom: '1px solid var(--line)' }}
      >
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--line-strong)' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--line-strong)' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'var(--line-strong)' }} />
      </div>
      <pre
        className="p-5 overflow-x-auto font-mono text-[12px] leading-relaxed text-fg-muted"
        style={{ background: 'var(--bg-sunken)' }}
      >
        {children}
      </pre>
    </div>
  )
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-6 pl-5 py-0.5 border-l-2 text-fg-muted text-lg leading-relaxed italic"
      style={{ borderColor: 'var(--accent)' }}
    >
      {children}
    </blockquote>
  )
}

function Challenge({
  n,
  title,
  children,
}: {
  n: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="my-10 rounded-lg border border-line overflow-hidden">
      <div
        className="px-6 py-4 flex items-center gap-4"
        style={{ background: 'var(--bg-elev)', borderBottom: '1px solid var(--line)' }}
      >
        <span className="font-mono text-[10px] text-fg-subtle uppercase tracking-wider">{n}</span>
        <h3 className="font-display font-semibold text-lg m-0">{title}</h3>
      </div>
      <div className="px-6 py-5 space-y-4">{children}</div>
    </div>
  )
}

function ChallengeBlock({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="font-mono text-[10px] text-accent uppercase tracking-wider mb-1">{label}</p>
      <div className="text-fg-muted leading-relaxed">{children}</div>
    </div>
  )
}

function SectionAnchor({ id, n, label }: { id: string; n: string; label: string }) {
  return (
    <div id={id} className="flex items-center gap-3 font-mono text-[11px] text-fg-subtle uppercase tracking-wider mt-20 mb-5">
      <span className="w-6 h-px" style={{ background: 'var(--accent)' }} />
      <span className="text-accent">{n}</span>
      <span>{label}</span>
    </div>
  )
}

export default function LogicFirstAI() {
  return (
    <article className="py-16 pb-32 max-w-[100ch]">
      {/* Back link */}
      <Link
        href="/writing"
        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-fg-muted mb-10 hover:text-accent transition-colors duration-100"
      >
        ← All writing
      </Link>

      {/* Meta */}
      <div className="flex items-center gap-4 font-mono text-[10px] text-fg-subtle uppercase tracking-[0.12em] mb-6">
        <span>May 2026</span>
        <span>·</span>
        <span>18 min read</span>
        <span>·</span>
        <span>Research hypothesis</span>
      </div>

      {/* Title */}
      <h1
        className="font-display font-semibold tracking-tight m-0 mb-6 leading-tight"
        style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
      >
        Logic-First AI: A Hypothesis for Lightweight, High-Reasoning Systems
      </h1>

      {/* Lead */}
      <Callout>
        A research hypothesis exploring whether separating reasoning logic from knowledge storage can
        produce AI systems that are smaller, cheaper, more explainable, and capable of running on
        consumer hardware.
      </Callout>

      {/* TOC */}
      <nav
        className="my-10 p-6 rounded-lg border border-line text-sm"
        style={{ background: 'var(--bg-sunken)' }}
      >
        <p className="font-mono text-[10px] text-fg-subtle uppercase tracking-wider mb-4">Contents</p>
        <ol className="space-y-1.5 list-none m-0 p-0">
          {[
            ['#background', '1. Background & Motivation'],
            ['#hypothesis', '2. Core Hypothesis'],
            ['#brain', '3. The Human Brain Analogy'],
            ['#challenges', '4. Key Challenges'],
            ['#prior-work', '5. Existing Work & Related Research'],
            ['#architecture', '6. Proposed System Architecture'],
            ['#novel', '7. What Makes This Novel'],
            ['#roadmap', '8. If You Want to Pursue This Field'],
            ['#glossary', '9. Glossary of Terms'],
          ].map(([href, label]) => (
            <li key={href}>
              <a
                href={href}
                className="text-fg-muted hover:text-accent transition-colors duration-100 font-mono text-[12px]"
              >
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ── Section 1 ── */}
      <SectionAnchor id="background" n="01" label="Background & Motivation" />
      <h2 className="font-display font-semibold text-2xl tracking-tight mt-0 mb-4">
        The Problem with Current AI
      </h2>
      <p className="text-fg-muted leading-relaxed mb-4">
        Large Language Models like GPT-4 and Claude are remarkably capable, but they are built on a
        fundamentally inefficient principle: <strong className="text-fg font-semibold">everything is stored together</strong>.
      </p>
      <ul className="text-fg-muted leading-relaxed mb-6 space-y-1 pl-5 list-disc">
        <li>Factual knowledge (Paris is the capital of France)</li>
        <li>Reasoning ability (how to solve a multi-step problem)</li>
        <li>Language patterns (how sentences are structured)</li>
        <li>Common sense (that fire is hot)</li>
      </ul>
      <p className="text-fg-muted leading-relaxed mb-6">
        All of these are compressed into billions of parameters inside a single neural network. To
        answer even a simple question, the entire model must activate — billions of calculations,
        requiring expensive GPUs, costing enormous amounts of power and money.
      </p>

      <h2 className="font-display font-semibold text-2xl tracking-tight mt-10 mb-4">
        The Scale Problem
      </h2>
      <Table
        headers={['Model', 'Parameters', 'Min. GPU VRAM', 'Est. Inference Cost']}
        rows={[
          ['GPT-3', '175B', '~350 GB', '~$0.002 / query'],
          ['GPT-4 (est.)', '~1.8T', '~3.6 TB', '~$0.06 / query'],
          ['Claude 3 Opus', 'Unknown', 'Unknown', '~$0.075 / query'],
          ['Phi-3 Mini', '3.8B', '~2.3 GB', '~$0.0001 / query'],
        ]}
      />
      <p className="text-fg-muted leading-relaxed">
        The gap between small and large models is not just cost — it is{' '}
        <strong className="text-fg font-semibold">access</strong>. When reasoning requires a
        trillion-parameter model, only large corporations can afford to run it.
      </p>

      <Callout>
        Can we build AI systems that <strong>reason well</strong> without being{' '}
        <strong>large</strong>, by separating the logic of reasoning from the storage of knowledge?
      </Callout>

      {/* ── Section 2 ── */}
      <SectionAnchor id="hypothesis" n="02" label="Core Hypothesis" />
      <div
        className="p-6 rounded-lg border border-line mb-8"
        style={{ background: 'var(--bg-elev)' }}
      >
        <p className="font-mono text-[10px] text-fg-subtle uppercase tracking-wider mb-3">Statement</p>
        <p className="text-fg leading-relaxed text-base">
          A modular AI system that encodes reasoning as explicit logic rules — and uses small neural
          models only for knowledge retrieval — can match or exceed the reasoning quality of large
          monolithic LLMs, at a fraction of the compute cost.
        </p>
      </div>

      <h2 className="font-display font-semibold text-2xl tracking-tight mt-10 mb-6">
        Three Sub-Hypotheses
      </h2>
      <div className="space-y-5">
        {[
          {
            tag: 'H1 — Separation of concerns reduces size',
            body: 'If reasoning logic is encoded symbolically (as rules, graphs, or formal constraints) rather than learned implicitly through data, the neural component only needs to store facts — not reasoning patterns. This dramatically reduces the required model size.',
          },
          {
            tag: 'H2 — Logic-first enables self-evaluation',
            body: 'A system that reasons through explicit steps can check its own work without a separate verifier model. If a conclusion violates a rule it derived itself, it can detect and correct the error before outputting — reducing hallucination.',
          },
          {
            tag: 'H3 — Domain specialisation multiplies both effects',
            body: 'A system focused on one domain (e.g. personal schedule management, medical diagnosis, legal reasoning) requires far fewer rules and far less factual knowledge than a general system. Narrowing the domain makes both the logic engine and the knowledge model dramatically smaller.',
          },
        ].map(({ tag, body }) => (
          <div key={tag} className="flex gap-4">
            <div
              className="w-1 flex-shrink-0 rounded-full mt-1"
              style={{ background: 'var(--accent)' }}
            />
            <div>
              <p className="font-semibold text-fg mb-1">{tag}</p>
              <p className="text-fg-muted leading-relaxed">{body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Section 3 ── */}
      <SectionAnchor id="brain" n="03" label="The Human Brain Analogy" />
      <p className="text-fg-muted leading-relaxed mb-6">
        The human brain already implements this separation. It did not evolve a single giant region
        that handles everything — it evolved specialised modules that cooperate.
      </p>
      <CodeBlock>{`┌─────────────────────────────────────────────────────────────────┐
│                        Human Brain                              │
│                                                                 │
│  ┌─────────────────────┐      ┌──────────────────────────────┐  │
│  │  Prefrontal Cortex  │      │       Hippocampus            │  │
│  │  (Logic Engine)     │◄────►│       (Memory Store)         │  │
│  │                     │      │                              │  │
│  │  Plans, reasons,    │      │  Stores and fetches          │  │
│  │  evaluates options. │      │  episodic memories           │  │
│  │  Does NOT store     │      │  on demand. Does NOT         │  │
│  │  memories itself.   │      │  reason by itself.           │  │
│  └─────────┬───────────┘      └──────────────────────────────┘  │
│            │                                                     │
│            ▼                                                     │
│  ┌─────────────────────┐                                         │
│  │   Basal Ganglia     │                                         │
│  │   (Pattern Shortcuts│                                         │
│  │                     │                                         │
│  │  Handles automatic  │                                         │
│  │  responses without  │                                         │
│  │  engaging full PFC. │                                         │
│  └─────────────────────┘                                         │
└─────────────────────────────────────────────────────────────────┘`}</CodeBlock>

      <Table
        headers={['Brain Region', 'Function', 'AI Equivalent']}
        rows={[
          ['Prefrontal Cortex', 'Logic, planning, evaluation', 'Rule/logic engine (tiny, CPU-based)'],
          ['Hippocampus', 'Memory retrieval on demand', 'Cluster-indexed vector database'],
          ['Basal Ganglia', 'Fast automatic pattern responses', 'Small fine-tuned LLM (1B–3B params)'],
          ['Dopamine signals', 'Reward/penalty for self-correction', 'Self-evaluation feedback loop'],
        ]}
      />
        <Callout>
          The brain&apos;s intelligence does not come from a single massive region. It comes from
        specialised modules working together with clear boundaries. Current LLMs ignore this lesson
        entirely.
      </Callout>

      {/* ── Section 4 ── */}
      <SectionAnchor id="challenges" n="04" label="Key Challenges" />

      <Challenge n="Challenge 1" title="The Rule Encoding Problem">
        <ChallengeBlock label="What it is">
          <p>
            Logic rules must come from somewhere. Hand-crafting them for a domain is feasible but
            slow. Automatically learning them from data is an unsolved research problem.
          </p>
        </ChallengeBlock>
        <ChallengeBlock label="Why it is hard">
          <ul className="list-disc pl-5 space-y-1">
              <li>Human knowledge is often implicit (&quot;I just know this feels wrong&quot;)</li>
            <li>Rules interact — one rule can contradict another</li>
            <li>Rare edge cases require special rules that are hard to anticipate</li>
            <li>Rules learned from data may inherit biases in the data</li>
          </ul>
        </ChallengeBlock>
        <ChallengeBlock label="Current partial solutions">
          <ul className="list-disc pl-5 space-y-1">
            <li>Domain experts manually write rules (works for narrow domains)</li>
            <li>Inductive Logic Programming (ILP) — learns rules from examples automatically</li>
            <li>LLM-generated rules — prompt a large LLM to generate rules, then compile them</li>
          </ul>
        </ChallengeBlock>
        <ChallengeBlock label="Open problem">
          <p>
            Automatically learning high-quality rules that generalise well, from a small number of
            examples, without human supervision.
          </p>
        </ChallengeBlock>
      </Challenge>

      <Challenge n="Challenge 2" title="The Cluster Boundary Problem">
        <ChallengeBlock label="What it is">
          <p>
            When personal memories or knowledge are stored in clusters, many items belong to multiple
              clusters simultaneously. A memory about &quot;buying flowers on my birthday for my mother&quot;
            belongs to: birthday cluster, shopping cluster, and family cluster.
          </p>
        </ChallengeBlock>
        <ChallengeBlock label="Why it is hard">
          <ul className="list-disc pl-5 space-y-1">
            <li>Hard boundaries lose information and cause wrong routing</li>
            <li>Soft boundaries (overlapping clusters) are correct but expensive to search</li>
            <li>As data grows, clusters drift and need periodic re-clustering</li>
            <li>The right granularity (how many clusters?) changes over time</li>
          </ul>
        </ChallengeBlock>
        <ChallengeBlock label="Current partial solutions">
          <ul className="list-disc pl-5 space-y-1">
            <li>Gaussian Mixture Models (GMM) for probabilistic cluster membership</li>
            <li>HDBSCAN for automatic cluster count discovery</li>
            <li>Hierarchical clustering to allow zoom in/out on granularity</li>
          </ul>
        </ChallengeBlock>
        <ChallengeBlock label="Open problem">
          <p>
            Dynamic cluster management that re-organises automatically as new data arrives, without
            expensive full re-clustering.
          </p>
        </ChallengeBlock>
      </Challenge>

      <Challenge n="Challenge 3" title="The Self-Evaluation Loop">
        <ChallengeBlock label="What it is">
          <p>
              For a system to &quot;conclude by itself based on probability,&quot; it needs a reliable way to
            know when its own conclusions are wrong — before being told by a human.
          </p>
        </ChallengeBlock>
        <ChallengeBlock label="Why it is hard">
          <ul className="list-disc pl-5 space-y-1">
            <li>The system cannot know what it does not know (unknown unknowns)</li>
            <li>Confidence scores are not the same as correctness</li>
            <li>A system can be consistently wrong in a systematic way and never detect it</li>
            <li>Self-referential checking can create circular reasoning</li>
          </ul>
        </ChallengeBlock>
        <ChallengeBlock label="Current partial solutions">
          <ul className="list-disc pl-5 space-y-1">
            <li>Process Reward Models (PRM) — a separate model checks each reasoning step</li>
            <li>Constitutional AI — model critiques its own outputs against a set of principles</li>
            <li>Formal verification — mathematical proof that a conclusion follows from premises</li>
            <li>Uncertainty quantification — explicit modelling of what the system does not know</li>
          </ul>
        </ChallengeBlock>
        <ChallengeBlock label="Open problem">
          <p>
              Reliable self-evaluation that works even when the system&apos;s rules themselves are incorrect
            or incomplete.
          </p>
        </ChallengeBlock>
      </Challenge>

      <Challenge n="Challenge 4" title="The Cold Start Problem">
        <ChallengeBlock label="What it is">
          <p>
            A system that learns from personal data starts with no data. Before it has enough
            information to form meaningful clusters, it cannot route queries correctly.
          </p>
        </ChallengeBlock>
        <ChallengeBlock label="Why it is hard">
          <ul className="list-disc pl-5 space-y-1">
            <li>The system is least useful precisely when the user most needs to build trust in it</li>
            <li>Early errors can corrupt the initial clusters, causing compounding mistakes</li>
            <li>The system cannot know whether its patterns are from real signal or noise</li>
          </ul>
        </ChallengeBlock>
        <ChallengeBlock label="Current partial solutions">
          <ul className="list-disc pl-5 space-y-1">
            <li>Temporal bootstrapping — start with simple date-based clusters, refine later</li>
            <li>Transfer from generic models — borrow patterns from a general model initially</li>
            <li>Active querying — ask the user targeted questions to rapidly build early clusters</li>
          </ul>
        </ChallengeBlock>
        <ChallengeBlock label="Open problem">
          <p>
            Graceful cold start that provides useful output from day one while progressively building
            better personalised patterns.
          </p>
        </ChallengeBlock>
      </Challenge>

      <Challenge n="Challenge 5" title="Composing Logic with Probability">
        <ChallengeBlock label="What it is">
          <p>
            Traditional logic is binary — something is true or false. But real-world reasoning
              requires probability. &quot;It will probably rain tomorrow&quot; is not a logical statement in the
            classical sense, but it is how humans and AI must reason.
          </p>
        </ChallengeBlock>
        <ChallengeBlock label="Why it is hard">
          <ul className="list-disc pl-5 space-y-1">
            <li>Probabilistic logic is computationally expensive</li>
            <li>Combining uncertain conclusions compounds uncertainty quickly</li>
              <li>The right probability threshold for &quot;confident enough to act&quot; is domain-specific</li>
          </ul>
        </ChallengeBlock>
        <ChallengeBlock label="Current partial solutions">
          <ul className="list-disc pl-5 space-y-1">
            <li>Bayesian networks — encode probabilistic dependencies between variables</li>
            <li>Markov Logic Networks — extend first-order logic with probability weights</li>
            <li>Fuzzy logic — allows truth values between 0 and 1</li>
          </ul>
        </ChallengeBlock>
        <ChallengeBlock label="Open problem">
          <p>
            Efficient probabilistic reasoning that scales to large rule graphs without requiring
            exponential compute.
          </p>
        </ChallengeBlock>
      </Challenge>

      {/* ── Section 5 ── */}
      <SectionAnchor id="prior-work" n="05" label="Existing Work & Related Research" />

      <div className="space-y-6 mb-10">
        {[
          {
            title: 'AlphaGeometry',
            meta: 'Google DeepMind, 2024',
            body: 'Combines a symbolic deduction engine with a small language model. The logic engine handles 99% of reasoning; the LLM only suggests new constructs. Solved International Mathematical Olympiad geometry problems at gold-medal level.',
            sig: 'Proves that logic-first with a small neural component works at world-class level in a narrow domain.',
          },
          {
            title: 'AlphaProof',
            meta: 'Google DeepMind, 2024',
            body: 'Extends the same approach to formal mathematical proofs. Uses a proof assistant (Lean 4) as the logic layer.',
            sig: 'Shows the approach generalises beyond geometry.',
          },
          {
            title: 'Neurosymbolic AI',
            meta: 'MIT, IBM Research',
            body: "Formal research field combining neural perception with symbolic reasoning. IBM's Neuro-Symbolic Concept Learner learns visual concepts from 10x fewer examples.",
            sig: 'Shows data efficiency gains when logic is made explicit.',
          },
          {
            title: 'Chain-of-Thought + Process Reward Models',
            meta: 'OpenAI o1/o3',
            body: 'Forces models to externalise reasoning steps before answering. A separate model checks each step for correctness.',
            sig: 'Proves that self-evaluation improves reasoning — but still runs inside a large neural network rather than a dedicated logic engine.',
          },
          {
            title: 'Retrieval-Augmented Generation (RAG)',
            meta: '',
            body: 'Separates factual knowledge (external database) from reasoning (LLM). The LLM retrieves relevant facts on demand rather than storing everything.',
            sig: 'Early proof that separation of knowledge from model reduces required model size without losing capability.',
          },
        ].map(({ title, meta, body, sig }) => (
          <div key={title} className="rounded-lg border border-line overflow-hidden">
            <div
              className="px-5 py-3 flex items-center justify-between"
              style={{ background: 'var(--bg-elev)', borderBottom: '1px solid var(--line)' }}
            >
              <span className="font-semibold text-fg">{title}</span>
              {meta && <span className="font-mono text-[10px] text-fg-subtle">{meta}</span>}
            </div>
            <div className="px-5 py-4">
              <p className="text-fg-muted leading-relaxed mb-3">{body}</p>
              <p className="font-mono text-[11px] text-accent">→ {sig}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display font-semibold text-xl tracking-tight mb-4">
        Adjacent Research Fields
      </h2>
      <Table
        headers={['Field', 'What It Offers', 'Key Papers to Find']}
        rows={[
          ['Inductive Logic Programming (ILP)', 'Automatically learning rules from examples', 'Muggleton & De Raedt, 1994'],
          ['Probabilistic Programming', 'Combining probability with explicit programs', 'Goodman et al., Church language'],
          ['Formal Verification', 'Proving logical correctness of reasoning chains', 'Clarke et al., Model Checking'],
          ['Knowledge Graphs', 'Structured storage of facts and their relationships', 'Ehrlinger & Wöß, 2016'],
          ['Mixture of Experts (MoE)', 'Routing queries to specialist sub-models', 'Shazeer et al., 2017'],
          ['Episodic Memory in AI', 'Storing and retrieving personal event memories', "Tulving's episodic memory model"],
        ]}
      />

      {/* ── Section 6 ── */}
      <SectionAnchor id="architecture" n="06" label="Proposed System Architecture" />

      <CodeBlock>{`                     ┌──────────────┐
                     │  User query  │
                     └──────┬───────┘
                            │
                            ▼
           ┌────────────────────────────────┐
           │         Query Encoder          │
           │  (sentence-transformers, CPU)  │
           └────────────────┬───────────────┘
                            │  vector
                            ▼
           ┌────────────────────────────────┐
           │       Cluster Router           │
           │  (cosine similarity vs index)  │
           └────────────────┬───────────────┘
                            │  matched cluster ID
                ┌───────────┴──────────────┐
                │                          │
                ▼                          ▼
   ┌────────────────────┐    ┌─────────────────────────┐
   │   Logic Engine     │    │   Knowledge Model       │
   │                    │    │                         │
   │  Rule graph with   │◄──►│  Small LLM (1B-3B)      │
   │  IF-THEN chains    │    │  answers factual        │
   │  and probability   │    │  sub-questions only     │
   │  weights           │    │                         │
   └────────┬───────────┘    └─────────────────────────┘
            │
            ▼
   ┌────────────────────┐
   │  Self-Evaluator    │
   │                    │
   │  Checks conclusion │
   │  against own rules │
   │  Flags if conflict │
   └────────┬───────────┘
            │
 ┌──────────┴──────────┐
 │                     │
 ▼                     ▼
┌─────────┐     ┌───────────────┐
│ Output  │     │ Error signal  │
│         │     │               │
│ Answer  │     │ Re-route to   │
│ +       │     │ logic engine  │
│ score   │     │ with context  │
└─────────┘     └───────────────┘`}</CodeBlock>

      <h2 className="font-display font-semibold text-xl tracking-tight mb-4">
        Component Specifications (Minimal Viable Build)
      </h2>
      <Table
        headers={['Component', 'Technology', 'RAM Required', 'Runs on']}
        rows={[
          ['Query encoder', 'all-MiniLM-L6-v2', '~90 MB', 'CPU'],
          ['Cluster index', 'ChromaDB or Qdrant', '~200 MB', 'CPU'],
          ['Logic engine', 'Python dict / JSON graph', '~10 MB', 'CPU'],
          ['Knowledge model', 'Phi-3 Mini (4-bit)', '~2.3 GB', 'CPU / GPU'],
          ['Self-evaluator', 'Rule consistency checker', '~5 MB', 'CPU'],
          ['Total', '', '~2.6 GB', '8 GB laptop'],
        ]}
      />

      {/* ── Section 7 ── */}
      <SectionAnchor id="novel" n="07" label="What Makes This Novel" />
      <p className="text-fg-muted leading-relaxed mb-6">
        Current research has explored pieces of this idea. What is genuinely novel is the{' '}
        <strong className="text-fg font-semibold">combination</strong> of all of the following in a
        single personal system:
      </p>
      <div className="space-y-4 mb-8">
        {[
          ['Personal behavioral data', 'Not the internet, not books, but one person\'s own actions, memories, and patterns as the knowledge source.'],
          ['Domain-specific logic engine', 'Not a general reasoner, but one designed deeply for a single domain (personal scheduling, health, finance, etc.)'],
          ['Cluster-based episodic memory', 'Knowledge organised the way humans naturally store memories: by event type and context, not by keyword.'],
          ['Probabilistic self-evaluation', 'The system tracks its own confidence and triggers re-reasoning when confidence drops below a threshold.'],
          ['Consumer hardware target', 'Explicitly designed to run on a laptop or phone, not a server cluster.'],
        ].map(([title, desc], i) => (
          <div key={title} className="flex gap-4 items-start">
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full font-mono text-[11px] font-medium flex items-center justify-center mt-0.5"
              style={{ background: 'var(--accent-soft)', color: 'var(--accent-fg)' }}
            >
              {i + 1}
            </span>
            <div>
              <span className="font-semibold text-fg">{title}</span>
              <span className="text-fg-muted"> — {desc}</span>
            </div>
          </div>
        ))}
      </div>
      <div
        className="p-5 rounded-lg border border-line text-sm text-fg-muted leading-relaxed"
        style={{ background: 'var(--bg-sunken)' }}
      >
        No published system combines all five. AlphaGeometry has 1, 2, and 4 in a narrow math
        domain. RAG has parts of 1 and 3. MemGPT has parts of 1 and 3. The full combination is an
        open research opportunity.
      </div>

      {/* ── Section 8 ── */}
      <SectionAnchor id="roadmap" n="08" label="If You Want to Pursue This Field" />

      <div className="space-y-10">
        {[
          {
            stage: 'Stage 1',
            label: 'Build foundational knowledge',
            timeline: '3–6 months',
            items: [
              { heading: 'Mathematics (essential basics only)', bullets: ['Linear algebra — vectors, matrices, dot products (Khan Academy: free)', 'Probability — Bayes\' theorem, conditional probability (Khan Academy: free)', 'Logic — propositional logic, IF-THEN rules (any introductory logic textbook)'] },
              { heading: 'Programming', bullets: ['Python — the universal language of AI research', 'Focus on: lists, dictionaries, functions, and classes', 'Libraries to learn early: numpy, pandas, sklearn'] },
              { heading: 'AI Concepts', bullets: ['What is a neural network? (3Blue1Brown YouTube: free, visual, excellent)', "What is a transformer? (Andrej Karpathy's \"Let's build GPT\" on YouTube)", 'What is a vector embedding? (Jay Alammar\'s blog: jalammar.github.io)'] },
            ],
          },
          {
            stage: 'Stage 2',
            label: 'Build your first prototype',
            timeline: 'Months 4–9',
            items: [
              { heading: 'Project 1: Personal memory system', bullets: ['Log your own activities as text for 2 weeks', 'Embed them using sentence-transformers', 'Store in ChromaDB', 'Build a simple search: "what did I do last Tuesday?"'] },
              { heading: 'Project 2: Simple rule engine', bullets: ['Write 10 IF-THEN rules about your own life in plain Python', 'Example: if time == "morning" and day == "weekday": suggest("check email")', 'Connect it to your memory system from Project 1'] },
              { heading: 'Project 3: Add a small LLM', bullets: ['Install ollama and run gemma:2b locally', 'Connect it to your rule engine for questions your rules cannot answer', 'This teaches: LLM integration, prompt design, and where rules break down'] },
            ],
          },
          {
            stage: 'Stage 3',
            label: 'Go deeper into the research',
            timeline: 'Months 8–18',
            items: [
              { heading: 'Key papers to read (in this order)', bullets: ['Attention Is All You Need (Vaswani et al., 2017) — the transformer paper', 'Retrieval-Augmented Generation (Lewis et al., 2020)', 'Chain-of-Thought Prompting (Wei et al., 2022)', 'AlphaGeometry (Trinh et al., 2024) — the closest existing work to this hypothesis', 'Neurosymbolic Concept Learner (Mao et al., 2019)'] },
              { heading: 'Communities to join', bullets: ['Hugging Face forums (huggingface.co/forums)', 'r/MachineLearning and r/LocalLLaMA on Reddit', 'EleutherAI Discord (open AI research community)', 'Papers With Code (paperswithcode.com)'] },
            ],
          },
          {
            stage: 'Stage 4',
            label: 'Formalise your hypothesis',
            timeline: 'Months 12–24',
            items: [
              { heading: 'Write a technical report', bullets: ['State your hypothesis clearly (one sentence)', 'Describe what exists (prior work)', 'Describe what is missing (your contribution)', 'Describe your system design and show results'] },
              { heading: 'Consider publishing', bullets: ['arXiv preprint — free, no peer review, immediate visibility', 'Workshop papers at NeurIPS, ICML, or ACL — lower bar than full conference papers', 'Blog posts on Hugging Face or Substack — builds audience before formal publication'] },
            ],
          },
        ].map(({ stage, label, timeline, items }) => (
          <div key={stage} className="border-l-2 pl-6" style={{ borderColor: 'var(--line-strong)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full"
                style={{ background: 'var(--accent-soft)', color: 'var(--accent-fg)' }}
              >
                {stage}
              </span>
              <span className="font-semibold text-fg">{label}</span>
              <span className="font-mono text-[11px] text-fg-subtle">{timeline}</span>
            </div>
            <div className="space-y-4">
              {items.map(({ heading, bullets }) => (
                <div key={heading}>
                  <p className="font-semibold text-fg-muted mb-1.5">{heading}</p>
                  <ul className="list-disc pl-5 space-y-1 text-fg-muted text-sm leading-relaxed">
                    {bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display font-semibold text-xl tracking-tight mt-12 mb-5">
        Realistic Timeline Summary
      </h2>
      <Table
        headers={['Month', 'Milestone']}
        rows={[
          ['1–2', 'Learn Python basics + linear algebra basics'],
          ['3–4', 'Understand embeddings and vector search'],
          ['5–6', 'Build personal memory prototype (Project 1)'],
          ['7–8', 'Add rule engine (Project 2)'],
          ['9–10', 'Integrate small LLM (Project 3)'],
          ['11–12', 'Read 3–5 key papers, understand prior work'],
          ['13–18', 'Formalise hypothesis, run experiments, write report'],
          ['18+', 'Publish, collaborate, specialise'],
        ]}
      />

      <Callout>
        Start building before you feel ready. A broken prototype you learn from is worth more than a
        perfect plan you never execute. The field rewards people who ship and iterate, not people who
        wait to be qualified.
      </Callout>

      {/* ── Section 9 ── */}
      <SectionAnchor id="glossary" n="09" label="Glossary of Terms" />
      <Table
        headers={['Term', 'Plain English Definition']}
        rows={[
          ['LLM', 'Large Language Model — an AI trained on text to predict and generate language'],
          ['Parameter', 'A number inside a neural network that is adjusted during training'],
          ['Embedding', 'A list of numbers that represents the meaning of a word or sentence'],
          ['Vector', 'A list of numbers — in AI, used to represent meaning in a geometric space'],
          ['Cosine similarity', 'A way to measure how similar two vectors are (1.0 = identical, 0.0 = unrelated)'],
          ['Cluster', 'A group of similar items automatically discovered in data'],
          ['Neurosymbolic AI', 'AI that combines neural networks with symbolic logic for reasoning'],
          ['Inference', 'The process of running an AI model to get an output (separate from training)'],
          ['Hallucination', 'When an AI confidently outputs something that is false'],
          ['Bayesian reasoning', 'Updating beliefs based on new evidence using probability theory'],
          ['Rule engine', 'A system that applies IF-THEN logic rules to inputs to produce outputs'],
          ['RAG', 'Retrieval-Augmented Generation — fetching relevant facts from a database before generating an answer'],
          ['Fine-tuning', 'Further training a pre-trained model on specific data to specialise it'],
          ['Quantisation', 'Reducing the precision of model weights to make the model smaller and faster'],
          ['Transformer', 'The neural network architecture used by most modern LLMs'],
        ]}
      />

      {/* Footer note */}
      <div
        className="mt-16 pt-8 border-t border-line font-mono text-[11px] text-fg-subtle leading-relaxed"
      >
        <p>
          Document prepared based on independent research exploring logic-first AI architecture as
          an alternative to data-heavy monolithic LLMs. The hypothesis is original formulation;
          existing systems cited are real published research.
        </p>
      </div>
    </article>
  )
}
