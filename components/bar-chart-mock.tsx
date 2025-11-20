export function BarChartMock() {
  const data = [
    { label: "Organic", value: 85, highlight: true },
    { label: "Referral", value: 78, highlight: true },
    { label: "Partner Collab", value: 62, highlight: false },
    { label: "Promo Campaign", value: 34, highlight: false },
  ]

  return (
    <div className="w-full max-w-lg rounded-lg border border-border bg-surface p-6 shadow-xl glow-teal">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground">Source Quality by Net Retention</h3>
        <p className="text-xs text-muted-foreground">Example dashboard visualization (placeholder data)</p>
      </div>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index}>
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-mono text-foreground">{item.value}%</span>
            </div>
            <div className="h-8 w-full rounded bg-background/50">
              <div
                className={`h-full rounded transition-all ${
                  item.highlight ? "bg-marinade-teal" : "bg-muted-foreground/30"
                }`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
