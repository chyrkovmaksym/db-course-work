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