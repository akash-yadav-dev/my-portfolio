export function CodeSnippet() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
      {/* Copy */}
      <div>
        <h3
          className="font-display font-semibold tracking-tight leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(24px,3vw,32px)', letterSpacing: '-0.04em' }}
        >
          The schema is the contract.
        </h3>
        <p className="text-fg-muted leading-relaxed mb-4 max-w-[48ch]">
          I start almost every project by sketching the data model. If the types are wrong, no amount of clever UI can
          save the product. If the types are right, even mediocre UI tends to feel coherent.
        </p>
        <p className="text-fg-muted text-sm leading-relaxed max-w-[48ch]">
          Below is a condensed version of the type I sketched on a napkin before writing this site.
        </p>
      </div>

      {/* Code block */}
      <div className="code-block">
        <div className="code-head">
          <div className="flex items-center gap-3">
            <div className="code-dots">
              <span />
              <span />
              <span />
            </div>
            <span>portfolio.ts</span>
          </div>
          <span>typescript</span>
        </div>
        <div className="code-body">
          <pre>
            <span className="code-ln"> 1</span>
            <span className="syn-c">{'// Start with the data, not the design.'}</span>{'\n'}
            <span className="code-ln"> 2</span>
            <span className="syn-k">type </span>
            <span className="syn-f">Project</span>
            {' = {'}{'\n'}
            <span className="code-ln"> 3</span>
            {'  '}
            <span className="syn-f">name</span>
            {': '}
            <span className="syn-k">string</span>
            {';'}{'\n'}
            <span className="code-ln"> 4</span>
            {'  '}
            <span className="syn-f">year</span>
            {': '}
            <span className="syn-k">number</span>
            {';'}{'\n'}
            <span className="code-ln"> 5</span>
            {'  '}
            <span className="syn-f">stack</span>
            {': '}
            <span className="syn-k">readonly string</span>
            {'[];'}{'\n'}
            <span className="code-ln"> 6</span>
            {'  '}
            <span className="syn-f">live</span>
            {'?: '}
            <span className="syn-k">boolean</span>
            {';'}{'\n'}
            <span className="code-ln"> 7</span>
            {'};'}{'\n'}
            <span className="code-ln"> 8</span>
            {'\n'}
            <span className="code-ln"> 9</span>
            <span className="syn-k">export const </span>
            <span className="syn-f">projects</span>
            {': '}
            <span className="syn-f">Project</span>
            {'[] = ['}{'\n'}
            <span className="code-ln">10</span>
            {'  { '}
            <span className="syn-f">name</span>
            {': '}
            <span className="syn-s">&quot;Halcyon&quot;</span>
            {', '}
            <span className="syn-f">year</span>
            {': '}
            <span className="syn-n">2026</span>
            {', '}
            <span className="syn-f">live</span>
            {': '}
            <span className="syn-k">true</span>
            {' },'}{'\n'}
            <span className="code-ln">11</span>
            {'  { '}
            <span className="syn-f">name</span>
            {': '}
            <span className="syn-s">&quot;Drift&quot;</span>
            {'   , '}
            <span className="syn-f">year</span>
            {': '}
            <span className="syn-n">2025</span>
            {' },'}{'\n'}
            <span className="code-ln">12</span>
            {'];'}
          </pre>
        </div>
      </div>
    </div>
  )
}
