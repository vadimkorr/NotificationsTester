using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using PushNotifications.DTO;
using PushNotifications.Helpers;
using PushSharp;
using PushSharp.Core;
using PushSharp.Google;

namespace PushNotifications.Services
{
    public class PushService
    {
        public string SendNotification()
        {
            return "";
        }

        private static readonly string gcmSenderId = AppSettingsHelper.GetString("GCM-SENDER-ID");
        private static readonly string authToken = AppSettingsHelper.GetString("AUTH-TOKEN");
        // Configuration
        GcmConfiguration _config;

        // Create a new broker
        GcmServiceBroker _broker;

        public PushService()
        {
            _config = new GcmConfiguration(gcmSenderId, authToken, null);
            _broker = new GcmServiceBroker(_config);

            // Wire up events
            _broker.OnNotificationSucceeded += (notification) => {
                Console.WriteLine("Notification Sent!");
            };
            _broker.Start();
        }

        public void Send(PushDto dto)
        {
            // Queue a notification to send
            _broker.QueueNotification(new GcmNotification
            {
                RegistrationIds = new List<string>
                {
                    dto.DeviceToken
                },
                Notification = JObject.Parse("{ \"body\" : \"This is body of notification\", \"title\" : \"This is title\" }")
            });
        }
    }
}