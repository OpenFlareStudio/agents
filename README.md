<div align="center">

<img src="https://app.openflare.fun/logo.png" width="110" alt="OpenFlareStudio Logo" style="border-radius: 18px; box-shadow: 0 0 30px rgba(204,255,0,0.3);" />

# ⚡ OpenFlareStudio Studio

### Next-Gen Web3 AI Agentic Platform & Cloudflare One MCP Portals

[![GitHub Repo](https://img.shields.io/badge/GitHub-OpenFlareStudio%2Fagents-CCFF00?style=for-the-badge&logo=github)](https://github.com/OpenFlareStudio/agents)
[![License: MIT](https://img.shields.io/badge/License-MIT-4285F4.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Robinhood Chain](https://img.shields.io/badge/Robinhood-EVM%204663-CCFF00?style=for-the-badge&logo=ethereum)](https://app.OpenFlareStudio.fun)
[![Solana Network](https://img.shields.io/badge/Solana-MCP%20Autofixer-dc1fff?style=for-the-badge&logo=solana)](https://app.OpenFlareStudio.fun)
[![Cloudflare Edge](https://img.shields.io/badge/Cloudflare-MCP%20Portals-F38020?style=for-the-badge&logo=cloudflare)](https://app.OpenFlareStudio.fun)

[🌐 Live Studio App](https://app.OpenFlareStudio.fun) • [📖 Developer Docs](https://app.OpenFlareStudio.fun/docs) • [🐙 GitHub](https://github.com/OpenFlareStudio/agents) • [𝕏 Twitter](https://x.com/ComingSoon) • [✈️ Telegram](https://t.me/ComingSoon)

</div>

---

## 🚀 Overview

**OpenFlareStudio Studio** is the premier Web3 AI development platform designed for autonomous smart contract engineering, stateful AI agent execution, and Model Context Protocol (MCP) server portals running natively on Cloudflare Workers Edge.

```
                     ┌───────────────────────────────────────────────┐
                     │          OpenFlareStudio AI Engine Core       │
                     │       (16 Frontier AI Models Suite)           │
                     └───────────────────────┬───────────────────────┘
                                             │
            ┌────────────────────────────────┼────────────────────────────────┐
            ▼                                ▼                                ▼
┌─────────────────────────┐     ┌─────────────────────────┐     ┌─────────────────────────┐
│   Robinhood EVM Chain   │     │  Solana MCP Autofixer   │     │  Cloudflare One MCP     │
│   Solidity Compiler     │     │   Anchor & Pinocchio    │     │  5x Token Savings       │
│   Chain ID 4663         │     │   Rust Program Repair   │     │  Workers Codemode       │
└─────────────────────────┘     └─────────────────────────┘     └─────────────────────────┘
```

---

## ✨ Core Features

* **🤖 Autonomous Agent SDK (`@OpenFlareStudio/agents`)**: Event-driven agent base class with edge state persistence via Durable Objects and real-time WebSocket fibers.
* **🟢 Robinhood EVM Chain (Chain ID 4663)**: Native Solidity compilation, static vulnerability auditing via Blockscout API, and gas estimation.
* **🟣 Solana MCP Program Autofixer**: Anchor & Pinocchio Rust smart contract error parsing, IDL generation, and automated code repair.
* **⚡ Cloudflare One MCP Server Portals**: 5x Token Savings optimization via `minimize_tools()` & `search_and_execute()`, reducing context window usage by up to 80%.
* **𝗤 Cloudflare D1 SQL Vault**: Serverless SQL storage for user configurations, API key vaults, and rate limits.

---

## 📦 Installation

Since `@OpenFlareStudio/agents` is hosted directly on GitHub, install it directly using npm, yarn, or pnpm:

```bash
# Install directly from GitHub Repository
npm install github:OpenFlareStudio/agents

# Using yarn
yarn add OpenFlareStudio/agents

# Using pnpm
pnpm add github:OpenFlareStudio/agents
```

Or clone and build from source:

```bash
git clone https://github.com/OpenFlareStudio/agents.git
cd agents
npm install && npm run build
```

---

## ⚡ Quick Start

Create an autonomous Web3 AI agent in TypeScript:

```typescript
import { Agent, AgentContext, Message } from "@OpenFlareStudio/agents";

export class Web3AuditorAgent extends Agent {
  async onStart(ctx: AgentContext): Promise<void> {
    console.log("⚡ OpenFlareStudio Agent booted on Robinhood EVM Chain ID 4663");
    await ctx.state.set("audits_count", 0);
  }

  async onMessage(msg: Message, ctx: AgentContext): Promise<void> {
    if (msg.content.includes("audit")) {
      const count = (await ctx.state.get<number>("audits_count")) || 0;
      await ctx.state.set("audits_count", count + 1);

      ctx.send({
        role: "assistant",
        content: `Audit initiated for contract on Robinhood EVM. Total audits: ${count + 1}`,
      });
    }
  }
}
```

---

## 📖 SDK Reference (`@OpenFlareStudio/agents`)

### Agent Base Class

```typescript
import { Agent, AgentContext, Request, Response } from "@OpenFlareStudio/agents";

export class CustomAgent extends Agent {
  // Boots up agent context
  async onStart(ctx: AgentContext): Promise<void> {}

  // Handles chat and WebSocket events
  async onMessage(msg: any, ctx: AgentContext): Promise<void> {}

  // Handles HTTP REST API calls
  async onRequest(req: Request, ctx: AgentContext): Promise<Response> {
    return new Response(JSON.stringify({ status: "online", agent: this.name }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
```

### Edge Durable State Storage

```typescript
// Set state
await ctx.state.set("user_wallet", "0x46633e21a4168923058b71b93f21");

// Get state
const wallet = await ctx.state.get<string>("user_wallet");

// Delete state key
await ctx.state.delete("session_id");
```

---

## ⛓️ Robinhood EVM Chain Integration (Chain ID 4663)

```typescript
import { RobinhoodEVM } from "@OpenFlareStudio/agents";

const evm = new RobinhoodEVM({
  rpcUrl: "https://rpc.robinhood.OpenFlareStudio.fun",
  chainId: 4663,
});

const auditResult = await evm.auditContract(`
  pragma solidity ^0.8.20;
  contract OpenFlareStudioToken {
      mapping(address => uint256) public balances;
      function transfer(address to, uint256 amount) public {
          balances[msg.sender] -= amount;
          balances[to] += amount;
      }
  }
`);

console.log("Audit Status:", auditResult.status);
console.log("Vulnerabilities:", auditResult.issues);
```

---

## ☀️ Solana MCP Program Autofixer

```typescript
import { SolanaMCP } from "@OpenFlareStudio/agents";

const solana = new SolanaMCP();

const fixResult = await solana.autofixProgram({
  sourceCode: rustProgramCode,
  errorMessage: "Error: AccountDiscriminatorMismatch",
});

console.log("Repaired Rust Code:", fixResult.repairedCode);
```

---

## 🌐 Official Channels & Resources

* 🌐 **Live Application**: [https://app.OpenFlareStudio.fun](https://app.OpenFlareStudio.fun)
* 📖 **Developer Documentation**: [https://app.OpenFlareStudio.fun/docs](https://app.OpenFlareStudio.fun/docs)
* 🐙 **GitHub Repository**: [https://github.com/OpenFlareStudio/agents](https://github.com/OpenFlareStudio/agents)
* 𝕏 **Twitter**: [https://x.com/ComingSoon](https://x.com/ComingSoon)
* ✈️ **Telegram Community**: [https://t.me/ComingSoon](https://t.me/ComingSoon)

---

<div align="center">
  <sub>MIT License © 2026 OpenFlareStudio Foundation</sub>
</div>
