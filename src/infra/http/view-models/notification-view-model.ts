import { Notification } from "@application/entities/notification";

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      id: notification.id
    }
  }
}