import { InMemoryNotificationRepository } from '@test/repositories/inMemoryNotificationRepository';
import { SendNotification } from './sendNotification';

describe('Send notification', () => {
  it('Should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'exemple-recipient-id',
      content: 'Solicitação de amizade',
      category: 'social',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
