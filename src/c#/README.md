# Реалізація доступу до бази даних

В цьому розділі розміщені програмні коди для доступу до бази даних (в прикдаді - c#).

# Файл ApplicationDbContext.cs
```
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
```

# Файл UserRepository.cs
```
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
```

# Файл UserService.cs
```
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
```

# Файл UserController.cs
```
using Microsoft.AspNetCore.Mvc;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;

    public UserController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    [Route("[action]")]
    public ActionResult<IEnumerable<User>> GetAll()
    {
        IEnumerable<User> users = _userService.GetAllUsers();
        if (users is null) return NotFound("Users not found");
        return Ok(users);
    }

    [HttpGet("{id}")]
    public ActionResult<User> Get(int id)
    {
        User user = _userService.GetUserById(id);
        if (user is null) return NotFound("User not found.");
        return Ok(user);
    }

    [HttpDelete]
    public ActionResult Delete(User user)
    {
        try
        {
            _userService.DeleteUser(user);
            _userService.SaveChanges();
        }
        catch (Exception)
        {
            return BadRequest("Bad request.");
        }
        
        return Ok("User was deleted.");
    }

    [HttpPost]
    public ActionResult Post(User user)
    {
        try
        {
            _userService.AddUser(user);
            _userService.SaveChanges();
        }
        catch (Exception)
        {
            return BadRequest("Bad request.");
        }

        return Ok("User was added.");
    }
    
    [HttpPut]
    public ActionResult Put(User user)
    {
        try
        {
            _userService.UpdateUser(user);
            _userService.SaveChanges();
        }
        catch (Exception)
        {
            return BadRequest("Bad request.");
        }

        return Ok("User was updated.");
    }
}
```

# Файл Program.cs
```
using Microsoft.EntityFrameworkCore;
using WebAPI;
using WebAPI.Interfaces;
using WebAPI.Repositories;
using WebAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    string connectionString = builder.Configuration.GetConnectionString("DatabaseCS");
    MySqlServerVersion serverVersion = new MySqlServerVersion(new Version(5, 7, 32));
    options.UseMySql(connectionString, serverVersion);
});

builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();

    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseStatusCodePages();
app.MapDefaultControllerRoute();

app.Run();
```