import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notification-consumer',
        brokers: ['localhost:9092'],
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
