using Microsoft.AspNetCore.Mvc.Rendering;

namespace AddressBookApp.Server.Models
{
    public class Address
    {
        public string Gender { get; set; } = null!;
        public string NameTitle { get; set; } = null!;
        public string NameFirst { get; set; } = null!;
        public string NameLast { get; set; } = null!;
        public string StreetNumber { get; set; } = null!;
        public string StreetName { get; set; } = null!;
        public string City { get; set; } = null!;
        public string State { get; set; } = null!;
        public string Country { get; set; } = null!;
        public string PostCode { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Cell { get; set; } = null!;
        public string Picture { get; set; } = null!;
        public string Nat { get; set; } = null!;
    }
}
