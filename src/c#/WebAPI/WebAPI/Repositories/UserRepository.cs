using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Repositories;

public class UserRepository : IUserRepository
{
    private readonly ApplicationDbContext _dbContext;

    public UserRepository(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public IQueryable<User> GetAllUsers()
    {
        return _dbContext.Users;
    }

    public User GetUserById(int id)
    {
        return _dbContext.Users.FirstOrDefault(user => user.Id == id);
    }

    public void AddUser(User user)
    {
        _dbContext.Users.Add(user);
    }

    public void UpdateUser(User user)
    {
        _dbContext.Users.Update(user);
    }

    public void DeleteUser(User user)
    {
        _dbContext.Users.Remove(user);
    }

    public int SaveChanges()
    {
        return _dbContext.SaveChanges();
    }
}