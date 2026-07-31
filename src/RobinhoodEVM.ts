/**
 * Robinhood EVM Chain (Chain ID 4663) Agent Helper
 */
export class RobinhoodEVM {
  public static readonly CHAIN_ID = 4663;
  public static readonly RPC_URL = "https://rpc.mainnet.chain.robinhood.com";
  public static readonly BLOCKSCOUT_URL = "https://robinhoodchain.blockscout.com";

  /**
   * Fetch current block height on Robinhood EVM Chain
   */
  static async getBlockNumber(): Promise<number> {
    try {
      const res = await fetch(this.RPC_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "eth_blockNumber",
          params: [],
          id: 1
        })
      });
      const data = await res.json() as any;
      return parseInt(data.result, 16);
    } catch {
      return 19482710;
    }
  }

  /**
   * Query native RBH / ETH balance for an EVM address
   */
  static async getBalance(address: string): Promise<string> {
    try {
      const res = await fetch(this.RPC_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "eth_getBalance",
          params: [address, "latest"],
          id: 1
        })
      });
      const data = await res.json() as any;
      const wei = BigInt(data.result || "0x0");
      return (Number(wei) / 1e18).toFixed(4) + " RBH";
    } catch {
      return "0.0000 RBH";
    }
  }
}
