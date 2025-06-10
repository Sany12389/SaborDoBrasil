using Microsoft.EntityFrameworkCore;
using SaborDoBrasil.Models;

namespace SaborDoBrasil.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }

        // Adicione outros DbSets conforme necessário
    }
}