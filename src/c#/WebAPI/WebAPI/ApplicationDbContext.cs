using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI;

public class ApplicationDbContext : DbContext
{
    public DbSet<User> Users { get; set; }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> dbContext) : base(dbContext)
    {
    }
}