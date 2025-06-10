using Microsoft.EntityFrameworkCore;
using SaborDoBrasil.Data;

var builder = WebApplication.CreateBuilder(args);

// Adiciona o serviço do DbContext para conexão com o banco MySQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(builder.Configuration.GetConnectionString("DefaultConnection"))
    )
);

var app = builder.Build();

app.UseDefaultFiles(); // Serve index.html por padrão
app.UseStaticFiles(); // Permite servir arquivos da pasta wwwroot

app.MapGet("/index", async context =>
{
    await context.Response.SendFileAsync("wwwroot/index.html");
});

// app.MapGet("/", () => "Hello World!");

app.Run();
