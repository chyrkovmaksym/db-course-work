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