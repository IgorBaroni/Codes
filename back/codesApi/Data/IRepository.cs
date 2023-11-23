using codesApi.Models;

namespace codesApi.Data
{
    public interface IRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();
        Task<Card[]> GetAll();
        Task<Card> GetById(int id);
    }
}