using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models;

public class User
{
    [Column("id")]
    public int Id { get; set; }
    
    [Column("userName")]
    public string UserName { get; set; }
    
    [Column("mail")]
    public string Mail { get; set; }
}