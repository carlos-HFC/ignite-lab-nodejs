import { Notification as RawNotification } from '@prisma/client';
import { Notification } from "@application/entities/notification";
import { Content } from "@application/entities/content";

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      id: notification.id
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification({
      category: raw.category,
      content: new Content(raw.content),
      recipientId: raw.recipientId,
      readAt: raw.readAt,
      canceledAt: raw.canceledAt,
      createdAt: raw.createdAt,
    }, raw.id);
  }
}