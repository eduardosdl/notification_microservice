import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';
import { KafkaConsumerService } from './kafka/kafkaCostumer.service';
import { SendNotification } from '@app/useCases/sendNotification';
import { NotificationController } from './kafka/controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationController],
})
export class MessagingModule {}
