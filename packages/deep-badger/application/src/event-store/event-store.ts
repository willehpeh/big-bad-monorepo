import { DomainEvent } from '@deep-badger/domain';

export abstract class EventStore {
  abstract append(event: DomainEvent): void;
  abstract appendAll(events: DomainEvent[]): void;
  abstract stream(stream: string): DomainEvent[];
}
