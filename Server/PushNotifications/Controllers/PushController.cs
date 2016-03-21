﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PushNotifications.DTO;
using PushNotifications.Services;

namespace PushNotifications.Controllers
{
    public class PushController : ApiController
    {
        PushService _pushService = new PushService();
        
        [HttpPost]
        public void ReceiveNotification(PushDto dto)
        {
            _pushService.Send(dto);
        }

        [HttpGet]
        public string Test(string id)
        {
            return "Hi, " + id + "!";
        }
    }
}
