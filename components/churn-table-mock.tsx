export function ChurnTableMock() {
  const data = [
    { cohort: "Early Adopters", stake: "2.4M SOL", risk: "low" },
    { cohort: "Q4 Joiners", stake: "1.8M SOL", risk: "low" },
    { cohort: "Promo Wave", stake: "890K SOL", risk: "medium" },
    { cohort: "Recent Inflow", stake: "450K SOL", risk: "high" },
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "text-success"
      case "medium":
        return "text-warning"
      case "high":
        return "text-danger"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="w-full max-w-lg rounded-lg border border-border bg-surface p-6 shadow-xl glow-teal">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-foreground">Churn Risk Watchlist</h3>
        <p className="text-xs text-muted-foreground">Example dashboard visualization (placeholder data)</p>
      </div>

      <div className="overflow-hidden rounded border border-border/50">
        <table className="w-full text-xs">
          <thead className="bg-background/50">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-muted-foreground">Wallet Cohort</th>
              <th className="px-3 py-2 text-left font-medium text-muted-foreground">Stake Size</th>
              <th className="px-3 py-2 text-left font-medium text-muted-foreground">Risk Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-background/30">
                <td className="px-3 py-3 text-foreground">{row.cohort}</td>
                <td className="px-3 py-3 font-mono text-foreground">{row.stake}</td>
                <td className={`px-3 py-3 font-semibold capitalize ${getRiskColor(row.risk)}`}>{row.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
