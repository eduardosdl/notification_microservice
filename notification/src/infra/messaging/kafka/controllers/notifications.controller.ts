import { SendNotification } from '@app/useCases/sendNotification';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationController {
  constructor(private sendNotifications: SendNotification) {}

  @EventPattern('notification')
  async handleSendNotification(
    @Payload() { category, content, recipientId }: SendNotificationPayload,
  ) {
    console.log({ category, content, recipientId });

    await this.sendNotifications.execute({
      content,
      category,
      recipientId,
    });
  }
}
