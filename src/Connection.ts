/**
 * OpenFlare Autonomous Agent SDK - Connection Interface
 */

export interface Connection {
  /** Unique ID of the client WebSocket or Session connection */
  id: string;
  
  /** User account wallet address or email session key */
  userId?: string;

  /** Send UTF-8 text string or binary data to client */
  send(data: string | ArrayBuffer | Uint8Array): void;

  /** Terminate connection gracefully with optional close code & reason */
  close(code?: number, reason?: string): void;
}

export type WSMessage = string | ArrayBuffer | Blob;

export interface AgentEnv {
  AI: any;
  DB?: any;
  ROBINHOOD_RPC_URL?: string;
  SOLANA_MCP_ENDPOINT?: string;
  [key: string]: any;
}
