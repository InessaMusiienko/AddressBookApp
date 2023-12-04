using AddressBookApp.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net;

namespace AddressBookApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class AddressBookController: Controller
    {
        [HttpGet]
        public ActionResult<Root> GetAllContacts()
        {
            var data = new Root();
            try
            {
                string url = "https://randomuser.me/api/?results=1";
                var json = new WebClient().DownloadString(url);
                data = JsonConvert.DeserializeObject<Root>(json);
            }
            catch(Exception ex)
            {

            }
            return data;
        }
    }
}
