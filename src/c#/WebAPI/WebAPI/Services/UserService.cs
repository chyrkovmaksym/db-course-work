using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Services;

public class UserService : IUserService
{
    private readonly IUserRepository _userRepository;

    public UserService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public IQueryable<User> GetAllUsers()
    {
        return _userRepository.GetAllUsers();
    }

    public User GetUserById(int id)
    {
        return _userRepository.GetUserById(id);
    }

    public void AddUser(User user)
    {
        _userRepository.AddUser(user);
    }

    public void UpdateUser(User user)
    {
        _userRepository.UpdateUser(user);
    }

    public void DeleteUser(User user)
    {
        _userRepository.DeleteUser(user);
    }

    public int SaveChanges()
    {
        return _userRepository.SaveChanges();
    }
}