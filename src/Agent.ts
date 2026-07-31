import { Connection, WSMessage, AgentEnv } from "./Connection";

/**
 * Abstract Base Class for OpenFlare Autonomous Agents
 */
export abstract class Agent {
  public env: AgentEnv;
  public state: Record<string, any> = {};

  constructor(env: AgentEnv) {
    this.env = env;
  }

  /**
   * 1. Triggered when client establishes WebSocket / Session connection
   */
  abstract onConnect(connection: Connection): Promise<void> | void;

  /**
   * 2. Triggered when user or subagent sends a message/tool command
   */
  abstract onMessage(connection: Connection, message: WSMessage): Promise<void> | void;

  /**
   * 3. Triggered when client disconnects
   */
  abstract onClose(connection: Connection): Promise<void> | void;

  /**
   * Set durable state for current agent session
   */
  async setState(newState: Record<string, any>): Promise<Record<string, any>> {
    this.state = { ...this.state, ...newState };
    return this.state;
  }

  /**
   * Retrieve current agent state
   */
  async getState(): Promise<Record<string, any>> {
    return this.state;
  }
}
