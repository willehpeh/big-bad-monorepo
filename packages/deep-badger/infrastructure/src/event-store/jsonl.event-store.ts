import { EventStore } from '@deep-badger/application';
import { DomainEvent } from '@deep-badger/domain';

export class JsonlEventStore implements EventStore {
  append(event: DomainEvent): void {
    return;
  }

  appendAll(events: DomainEvent[]): void {
    return;
  }

  stream(stream: string): DomainEvent[] {
    return [];
  }

}
