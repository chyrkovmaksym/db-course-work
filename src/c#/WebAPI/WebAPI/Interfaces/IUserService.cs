using WebAPI.Models;

namespace WebAPI.Interfaces;

public interface IUserService
{
    public IQueryable<User> GetAllUsers();
    public User GetUserById(int id);
    public void AddUser(User user);
    public void UpdateUser(User user);
    public void DeleteUser(User user);
    public int SaveChanges();
}