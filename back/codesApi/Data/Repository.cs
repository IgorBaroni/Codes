using codesApi.Models;
using Microsoft.EntityFrameworkCore;

namespace codesApi.Data
{
    public class Repository : IRepository
    {
        private readonly DataContext _context;
        public Repository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Card[]> GetAll()
        {
            IQueryable<Card> query = _context.Cards;
            query = query.AsNoTracking().OrderBy(c => c.Id);
            
            return await query.ToArrayAsync();
        }

        public async Task<Card> GetById(int id)
        {
            IQueryable<Card> query = _context.Cards;
            query = query.AsNoTracking().OrderBy(card => card.Id).Where(card => card.Id == id);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

    }
}