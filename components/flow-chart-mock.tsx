export function FlowChartMock() {
  return (
    <div className="w-full max-w-lg rounded-lg border border-border bg-surface p-6 shadow-xl glow-purple">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground">Capital Flow Analysis</h3>
        <p className="text-xs text-muted-foreground">Example dashboard visualization (placeholder data)</p>
      </div>

      <div className="relative h-64">
        {/* Source nodes */}
        <div className="absolute left-0 top-8 space-y-4">
          <div className="rounded border border-border/50 bg-background/50 px-3 py-2 text-xs text-muted-foreground">
            Bridge Inflow
          </div>
          <div className="rounded border border-border/50 bg-background/50 px-3 py-2 text-xs text-muted-foreground">
            Direct Deposits
          </div>
          <div className="rounded border border-border/50 bg-background/50 px-3 py-2 text-xs text-muted-foreground">
            Protocol Swaps
          </div>
        </div>

        {/* Flow lines */}
        <svg className="absolute inset-0 h-full w-full" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00E6B0" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path d="M 120 40 Q 200 40 280 100" fill="none" stroke="url(#flowGradient)" strokeWidth="3" />
          <path d="M 120 90 Q 200 90 280 100" fill="none" stroke="url(#flowGradient)" strokeWidth="4" />
          <path d="M 120 140 Q 200 140 280 100" fill="none" stroke="url(#flowGradient)" strokeWidth="2" />
        </svg>

        {/* Destination node */}
        <div className="absolute right-0 top-20">
          <div className="rounded-lg border border-marinade-teal/50 bg-marinade-teal/10 px-4 py-3 text-sm font-semibold text-marinade-teal">
            Marinade
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-flipside-purple" />
          <span className="text-muted-foreground">Source</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-marinade-teal" />
          <span className="text-muted-foreground">Destination</span>
        </div>
      </div>
    </div>
  )
}
