namespace SaborDoBrasil.Models
{
    public class CadastroModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Telefone { get; set; }
        public DateTime DataNascimento { get; set; }
        public bool IsAdmin { get; set; } = false;
    }
}
