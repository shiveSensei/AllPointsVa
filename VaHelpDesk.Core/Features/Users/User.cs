using VaHelpDesk.Core.Features.Shared;

namespace VaHelpDesk.Core.Features.Users
{
    public class User
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Role { get; set; }
    }
}