import { makeNotification } from '@test/factories/notificationFactory';
import { InMemoryNotificationRepository } from '@test/repositories/inMemoryNotificationRepository';
import { UnreadNotification } from './unreadNotification';
import { NotificationNotFound } from './errors/notificationNotFound';

describe('Unread notification', () => {
  it('Should be able to unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationRepository);

    const notification = makeNotification({
      readAt: new Date(),
    });

    await notificationRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].readAt).toBeNull;
  });

  it('should not be able to unread a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationRepository);

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
