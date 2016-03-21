using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PushNotifications.Controllers
{
    public class PushController : ApiController
    {
        [HttpGet]
        public string Test()
        {
            return _accountService.Test();
        }
    }
}
