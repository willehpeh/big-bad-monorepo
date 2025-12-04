export type PersistedEvent = {
  type: string;
  payload: unknown;
  stream: string;
  id: string;
  revision: number;
  positions: Record<string, number>;
  metadata: {
    timestamp: number;
    correlationId?: string;
    causationId?: string;
    [key: string]: unknown;
  }
};
