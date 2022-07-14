namespace LT_Academy.Models
{
    public class Cursos
    {
        public int? id_curso { get; set; }

        public int? id_profesor { get; set; }

        public string? nombre { get; set; }

        public string? descripcion { get; set; }

        public int? cant_max_estudiante { get; set; }

    }
}