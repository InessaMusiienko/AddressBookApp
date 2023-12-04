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
        public ActionResult<List<Contact>> GetAllContacts()
        {
            var data = new Root();
                string url = "https://randomuser.me/api/?results=10";
                var json = new WebClient().DownloadString(url);
                data = JsonConvert.DeserializeObject<Root>(json);
            
            return data.results.Select(x => new Contact
            {
                Gender = x.gender,
                NameTitle = x.name.title,
                NameFirst = x.name.first,
                NameLast = x.name.last,
                StreetNumber = (x.location.street.number).ToString(),
                StreetName = x.location.street.name,
                City = x.location.city,
                State = x.location.state,
                Country = x.location.country,
                PostCode = x.location.postcode,
                Email = x.email,
                Phone = x.phone,
                Cell = x.cell,
                Picture = x.picture.medium,
                Nat = x.nat
            }).ToList();
        }
    }
}
