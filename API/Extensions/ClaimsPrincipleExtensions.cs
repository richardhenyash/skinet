using System.Security.Claims;

namespace API.Extensions;

public static class ClaimsPrincipleExtensions
{
    public static string RetrieveEmailFromPrinciple(this ClaimsPrincipal user)
    {
        return user?.FindFirstValue(ClaimTypes.Email);
    }
}