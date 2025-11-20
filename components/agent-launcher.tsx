'use client'

import { useState } from 'react'
import { GitCompare, Trophy, Shield, ArrowRight, Plus, ChevronDown } from 'lucide-react'

// TODO: Replace these example workflows with your own workflows
// TODO: Update iconColor and iconBg with your brand colors (currently using placeholder gray #6B7280)
const workflows = [
  {
    title: "[EXAMPLE] Compare EVM Users & Quality",
    description:
      "Analyzes network address activity over 90 days, categorizing addresses as new or returning based on nonce patterns and enriching with quality scores (0-15) binned into tiers, then optionally generates a visual report with executive summary and charts showing daily trends by user type and quality.",
    icon: GitCompare,
    // TODO: Replace #6B7280 (placeholder gray) with your brand's primary color
    iconColor: "text-[#6B7280]",
    iconBg: "bg-[#6B7280]/10",
    input: "Two EVM chains to compare",
    output: "Analytics & Optional Visualizations",
    prompt:
      "use planning agent to run workflow 0db1acc0-c3ee-4155-a346-1bc7287f5344 but modify it to compare {chain1} with {chain2}, keeping going if you get stuck, then make a simple artifact with an executive summary and a total of 4 plots: 1 -- side-by-side vertical bar charts showing new vs returning for each chain, with staggered/dodged bars, and 2 -- side-by-side vertical bar charts showing daily activity by score bucket for each chain with stacked bars. The charts should look exactly the same but with {chain1} on the left and {chain2} on the right",
    requiresChainComparison: true,
  },
  {
    title: "[EXAMPLE] On-Chain Application Stickiness Ranking",
    description:
      "Identifies the highest-quality and 'stickiest' protocols on EVM chains by analyzing which protocols attract high-scoring users (score 8+) and which are associated with user score improvements over 45 days, then ranks them using a weighted formula combining both dimensions.",
    icon: Trophy,
    // TODO: Replace #6B7280 (placeholder gray) with your brand's primary color
    iconColor: "text-[#6B7280]",
    iconBg: "bg-[#6B7280]/10",
    input: "An EVM chain [from the provided list]",
    output: "Analytics and Optional Artifact",
    link: "http://flipsidecrypto.com/chat?m=run%20%5B%40EVM%20Protocol%20Quality%20%26%20Stickiness%20Analysis%5D%28workflow:d67a14e8-de55-4c56-95d6-5f1c7472e10c%29",
    requiresChainSelection: true,
  },
  {
    title: "[EXAMPLE] Sybil/Bot Risk Analysis",
    description:
      "Analyzes the 500 largest recently-active holders of the native token on major EVMs to assess their bot/farmer/sybil risk profiles and corresponding cross-chain DeFi behavior patterns.",
    icon: Shield,
    // TODO: Replace #6B7280 (placeholder gray) with your brand's primary color
    iconColor: "text-[#6B7280]",
    iconBg: "bg-[#6B7280]/10",
    input: "Select a Chain/Token pair to analyze that chain's top active holders",
    output: "Analysis and optional report",
    prompt: "use the planning agent to run workflow 965e0aaa-54de-4f6d-9623-9d4d577c60e7",
    requiresChainTokenSelection: true,
  },
]

// TODO: Update this list with the chains your workflows support
// These are example chains - replace with your actual supported chains
const evmChains = [
  { id: "arbitrum", name: "Arbitrum" },
  { id: "avalanche", name: "Avalanche" },
  { id: "base", name: "Base" },
  { id: "bob", name: "BOB" },
  { id: "boba", name: "Boba" },
  { id: "bsc", name: "BSC" },
  { id: "ethereum", name: "Ethereum" },
  { id: "flow_evm", name: "Flow EVM" },
  { id: "gnosis", name: "Gnosis" },
  { id: "ink", name: "Ink" },
  { id: "optimism", name: "Optimism" },
  { id: "polygon", name: "Polygon" },
]

// TODO: Update this list with the chain/token pairs your workflows support
// These are example pairs - replace with your actual chain/token combinations
const chainTokenPairs = [
  { id: "arbitrum/ETH", name: "Arbitrum / ETH" },
  { id: "avalanche/AVAX", name: "Avalanche / AVAX" },
  { id: "base/ETH", name: "Base / ETH" },
  { id: "bob/ETH", name: "BOB / ETH" },
  { id: "boba/ETH", name: "Boba / ETH" },
  { id: "bsc/BNB", name: "BSC / BNB" },
  { id: "ethereum/ETH", name: "Ethereum / ETH" },
  { id: "gnosis/xDAI", name: "Gnosis / xDAI" },
  { id: "ink/ETH", name: "Ink / ETH" },
  { id: "optimism/ETH", name: "Optimism / ETH" },
  { id: "polygon/POL", name: "Polygon / POL" },
]

export function AgentLauncher() {
  const [selectedChain, setSelectedChain] = useState<string | null>(null)
  const [showChainDropdown, setShowChainDropdown] = useState<number | null>(null)
  const [comparisonChain1, setComparisonChain1] = useState<string | null>(null)
  const [comparisonChain2, setComparisonChain2] = useState<string | null>(null)
  const [comparisonStep, setComparisonStep] = useState<'chain1' | 'chain2' | null>(null)

  const handleRunWorkflow = (workflow: typeof workflows[0], index: number) => {
    if (workflow.requiresChainComparison) {
      setShowChainDropdown(index)
      setComparisonStep('chain1')
      return
    }
    
    if (workflow.requiresChainTokenSelection) {
      setShowChainDropdown(index)
      return
    }
    
    if (workflow.requiresChainSelection && !selectedChain) {
      setShowChainDropdown(index)
    } else {
      let chatUrl = workflow.link || `https://flipsidecrypto.com/chat?m=${encodeURIComponent(workflow.prompt || '')}`
      
      if (workflow.requiresChainSelection && selectedChain) {
        chatUrl = `${chatUrl}%20for%20${encodeURIComponent(selectedChain)}`
      }
      
      window.open(chatUrl, '_blank', 'noopener,noreferrer')
      setShowChainDropdown(null)
      setSelectedChain(null)
    }
  }

  const handleChainSelect = (chainId: string, workflow: typeof workflows[0]) => {
    setSelectedChain(chainId)
    setShowChainDropdown(null)
    
    let chatUrl = workflow.link || `https://flipsidecrypto.com/chat?m=${encodeURIComponent(workflow.prompt || '')}`
    chatUrl = `${chatUrl}%20for%20${encodeURIComponent(chainId)}`
    window.open(chatUrl, '_blank', 'noopener,noreferrer')
    setSelectedChain(null)
  }

  const handleChainTokenSelect = (pairId: string, workflow: typeof workflows[0]) => {
    setShowChainDropdown(null)
    
    let chatUrl = `https://flipsidecrypto.com/chat?m=${encodeURIComponent(workflow.prompt || '')}`
    chatUrl = `${chatUrl}%20for%20${encodeURIComponent(pairId)}`
    window.open(chatUrl, '_blank', 'noopener,noreferrer')
  }

  const handleComparisonChainSelect = (chainId: string, workflow: typeof workflows[0]) => {
    if (comparisonStep === 'chain1') {
      setComparisonChain1(chainId)
      setComparisonStep('chain2')
    } else if (comparisonStep === 'chain2') {
      setComparisonChain2(chainId)
      
      // Both chains selected, launch workflow
      const prompt = workflow.prompt
        ?.replace('{chain1}', comparisonChain1!)
        .replace('{chain2}', chainId)
        .replace('{chain1}', comparisonChain1!)
        .replace('{chain2}', chainId)
      
      const chatUrl = `https://flipsidecrypto.com/chat?m=${encodeURIComponent(prompt || '')}`
      window.open(chatUrl, '_blank', 'noopener,noreferrer')
      
      // Reset state
      setShowChainDropdown(null)
      setComparisonChain1(null)
      setComparisonChain2(null)
      setComparisonStep(null)
    }
  }

  const handleCancelComparison = () => {
    setShowChainDropdown(null)
    setComparisonChain1(null)
    setComparisonChain2(null)
    setComparisonStep(null)
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12 max-w-2xl">
        {/* TODO: Replace "YOUR_BRAND_NAME" with your actual brand name */}
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">Example Workflows for YOUR_BRAND_NAME</h1>
        <p className="mb-3 text-lg leading-relaxed text-gray-600">
          Workflows are quasi-deterministic, reusable analysis pipelines powered by data-science-trained agents. Each workflow
          encodes the right queries, prompts, and validations, so you can trigger complex on-chain analysis with a
          single prompt and a few parameters — run one below or talk to Flipside about adding more.
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-sm font-medium uppercase tracking-wide text-gray-500">Custom Workflows</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workflows.map((workflow, index) => {
          const Icon = workflow.icon

          return (
            <div
              key={index}
              className="group flex flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
            >
              <div className="mb-3 flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${workflow.iconBg}`}
                  aria-hidden="true"
                >
                  <Icon className={`h-5 w-5 ${workflow.iconColor}`} strokeWidth={2} />
                </div>
              </div>
              <h3 className="mb-2 text-base font-semibold leading-snug text-gray-900">{workflow.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">{workflow.description}</p>

              <div className="mb-4 space-y-1 text-xs text-gray-500">
                <div>
                  <span className="font-medium text-gray-700">Input:</span> {workflow.input}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Output:</span> {workflow.output}
                </div>
              </div>

              {workflow.requiresChainComparison && showChainDropdown === index ? (
                <div className="mt-auto space-y-2">
                  <div className="text-xs font-medium text-gray-700">
                    {comparisonStep === 'chain1' && 'Select First Chain:'}
                    {comparisonStep === 'chain2' && `Comparing ${comparisonChain1} with...`}
                  </div>
                  {/* TODO: Replace #6B7280 (placeholder gray) in hover colors below with your brand's primary color */}
                  <div className="max-h-48 overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg">
                    {evmChains
                      .filter((chain) => comparisonStep === 'chain1' || chain.id !== comparisonChain1)
                      .map((chain) => (
                        <button
                          key={chain.id}
                          onClick={() => handleComparisonChainSelect(chain.id, workflow)}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-900 hover:bg-[#6B7280]/10 transition-colors"
                        >
                          {chain.name}
                        </button>
                      ))}
                  </div>
                  <button
                    onClick={handleCancelComparison}
                    className="w-full text-center text-xs text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              ) : workflow.requiresChainSelection && showChainDropdown === index ? (
                <div className="mt-auto space-y-2">
                  <div className="text-xs font-medium text-gray-700">Select Chain:</div>
                  {/* TODO: Replace #6B7280 (placeholder gray) in hover colors below with your brand's primary color */}
                  <div className="max-h-48 overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg">
                    {evmChains.map((chain) => (
                      <button
                        key={chain.id}
                        onClick={() => handleChainSelect(chain.id, workflow)}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-900 hover:bg-[#6B7280]/10 transition-colors"
                      >
                        {chain.name}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowChainDropdown(null)}
                    className="w-full text-center text-xs text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              ) : workflow.requiresChainTokenSelection && showChainDropdown === index ? (
                <div className="mt-auto space-y-2">
                  <div className="text-xs font-medium text-gray-700">Select Chain/Token Pair:</div>
                  {/* TODO: Replace #6B7280 (placeholder gray) in hover colors below with your brand's primary color */}
                  <div className="max-h-48 overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg">
                    {chainTokenPairs.map((pair) => (
                      <button
                        key={pair.id}
                        onClick={() => handleChainTokenSelect(pair.id, workflow)}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-900 hover:bg-[#6B7280]/10 transition-colors"
                      >
                        {pair.name}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setShowChainDropdown(null)}
                    className="w-full text-center text-xs text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  {/* TODO: Replace #6B7280 and #4B5563 (placeholder grays) with your brand's primary colors */}
                  <button
                    onClick={() => handleRunWorkflow(workflow, index)}
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-md bg-[#6B7280] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4B5563]"
                  >
                    Run Workflow
                    {(workflow.requiresChainSelection || workflow.requiresChainComparison || workflow.requiresChainTokenSelection) && <ChevronDown className="h-4 w-4" />}
                    {!workflow.requiresChainSelection && !workflow.requiresChainComparison && !workflow.requiresChainTokenSelection && <ArrowRight className="h-4 w-4" />}
                  </button>
                </>
              )}
            </div>
          )
        })}

        <div className="group flex flex-col rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-5 transition-all hover:border-gray-400 hover:bg-gray-100">
          <div className="mb-3 flex items-start gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200"
              aria-hidden="true"
            >
              <Plus className="h-5 w-5 text-gray-600" strokeWidth={2} />
            </div>
          </div>
          <h3 className="mb-2 text-base font-semibold leading-snug text-gray-900">Create Custom Workflow</h3>
          <p className="mb-4 text-sm leading-relaxed text-gray-600">
            Reach out to Flipside's Data Science Team in Slack at{" "}
            {/* TODO: Replace "#flipside-YOUR_BRAND_SLUG" with your brand's Slack channel */}
            <span className="font-medium text-gray-900">#flipside-YOUR_BRAND_SLUG</span> and we'll create your next workflow with
            you.
          </p>
        </div>
      </div>
    </div>
  )
}
