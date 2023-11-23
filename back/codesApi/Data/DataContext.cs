using codesApi.Models;
using Microsoft.EntityFrameworkCore;

namespace codesApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Card> Cards { get; set; }

    }
}