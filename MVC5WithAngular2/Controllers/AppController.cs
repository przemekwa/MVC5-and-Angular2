using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC5WithAngular2.Controllers
{
    using System.Web.Mvc;

    public class AppController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}