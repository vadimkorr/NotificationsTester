using System;
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
        PushService _pushService;
        
        [HttpPost]
        public void ReceiveNotification(PushDto dto)
        {
            _pushService = new PushService();
            _pushService.Send(dto);
        }

        [HttpGet]
        public string Test(string id)
        {
            return "Hello, " + id + "!";
        }
    }
}
