using Microsoft.EntityFrameworkCore;
using sn_backend_dotnet6.Models;

string policyName = "allowCors";
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<NoteContext>(opt => opt.UseNpgsql());
builder.Services.AddCors(options =>
{
  options.AddPolicy(name: policyName,
  builder =>
    {
      builder
        .WithOrigins("http://localhost:3000")
        .WithMethods("GET", "DELETE", "POST");
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(policyName);

app.UseAuthorization();

app.MapControllers();

app.Run();
