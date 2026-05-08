export function CodeSnippet() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
      {/* Copy */}
      <div>
        <h3
          className="font-display font-semibold tracking-tight leading-[1.05] mb-4"
          style={{ fontSize: 'clamp(24px,3vw,32px)', letterSpacing: '-0.04em' }}
        >
          The component is the contract.
        </h3>
        <p className="text-fg-muted leading-relaxed mb-4 max-w-[48ch]">
          I design TypeScript interfaces before writing any implementation. If the shape is wrong, no amount of clever
          code can save the feature. If the shape is right, even a rough first pass tends to hold together.
        </p>
        <p className="text-fg-muted text-sm leading-relaxed max-w-[48ch]">
          Below is a condensed version of the post entity type from PostQueue, my multi-tenant publishing SaaS.
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
            <span>post.entity.ts</span>
          </div>
          <span>typescript</span>
        </div>
        <div className="code-body">
          <pre>
            <span className="code-ln"> 1</span>
            <span className="syn-c">{'// Shape first, implementation second.'}</span>{'\n'}
            <span className="code-ln"> 2</span>
            <span className="syn-k">interface </span>
            <span className="syn-f">Post</span>
            {' {'}{'\n'}
            <span className="code-ln"> 3</span>
            {'  '}
            <span className="syn-f">id</span>
            {': '}
            <span className="syn-k">string</span>
            {';'}{'\n'}
            <span className="code-ln"> 4</span>
            {'  '}
            <span className="syn-f">workspaceId</span>
            {': '}
            <span className="syn-k">string</span>
            {';'}{'\n'}
            <span className="code-ln"> 5</span>
            {'  '}
            <span className="syn-f">platforms</span>
            {': '}
            <span className="syn-f">Platform</span>
            {'[];'}{'\n'}
            <span className="code-ln"> 6</span>
            {'  '}
            <span className="syn-f">scheduledAt</span>
            {': '}
            <span className="syn-k">Date</span>
            {';'}{'\n'}
            <span className="code-ln"> 7</span>
            {'  '}
            <span className="syn-f">status</span>
            {': '}
            <span className="syn-s">&apos;draft&apos;</span>
            {' | '}
            <span className="syn-s">&apos;pending&apos;</span>
            {' | '}
            <span className="syn-s">&apos;live&apos;</span>
            {';'}{'\n'}
            <span className="code-ln"> 8</span>
            {'}'}{'\n'}
            <span className="code-ln"> 9</span>
            {'\n'}
            <span className="code-ln">10</span>
            <span className="syn-k">type </span>
            <span className="syn-f">Platform</span>
            {' ='}{'\n'}
            <span className="code-ln">11</span>
            {'  '}
            <span className="syn-s">&apos;twitter&apos;</span>
            {' | '}
            <span className="syn-s">&apos;instagram&apos;</span>
            {' | '}
            <span className="syn-s">&apos;linkedin&apos;</span>
            {'\n'}
            <span className="code-ln">12</span>
            {'  | '}
            <span className="syn-s">&apos;tiktok&apos;</span>
            {' | '}
            <span className="syn-s">&apos;youtube&apos;</span>
            {' | '}
            <span className="syn-s">&apos;bluesky&apos;</span>
            {';'}
          </pre>
        </div>
      </div>
    </div>
  )
}
