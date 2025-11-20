import { Navbar } from "@/components/navbar"
import { AgentLauncher } from "@/components/agent-launcher"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AgentLauncher />
    </main>
  )
}
