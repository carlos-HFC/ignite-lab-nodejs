import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications.repository";
import { CountRecipientNotification } from "./count-recipient-notifications";
import { makeNotification } from "@test/factories/notification-factory";

describe("Count recipient notifications", () => {
  it("should be able to count recipient notifications", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(notificationsRepository);

    await notificationsRepository.create(makeNotification({
      recipientId: "recipient-one"
    }));
    await notificationsRepository.create(makeNotification({
      recipientId: "recipient-one"
    }));
    await notificationsRepository.create(makeNotification({
      recipientId: "recipient-two"
    }));

    const { count } = await countRecipientNotification.execute({
      recipientId: "recipient-one"
    });

    expect(count).toEqual(2);
  });
});