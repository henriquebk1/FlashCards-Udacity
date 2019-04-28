import {Notifications, Permissions} from 'expo';
import {AsyncStorage} from 'react-native';

const NOTIFICATION_KEY = 'FlashCards:notification';

const notificationProps = {
    title: 'Udacity Flashcards',
    body: "👋 Don't forget to train more!",
    ios: {
        vibrate: true,
    },
    android: {
        priority: 'high',
        vibrate: true,
    }
};

export function setDailyNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let dt = new Date();
                            dt.setDate(dt.getDate() + 1);
                            dt.setHours(20);
                            dt.setMinutes(30);

                            Notifications.scheduleLocalNotificationAsync(
                                notificationProps,
                                {
                                    time: dt,
                                    repeat: 'day',
                                }
                            );

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                        }
                    })
            }
        })
}
