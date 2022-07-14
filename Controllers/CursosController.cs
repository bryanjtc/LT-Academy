using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using LT_Academy.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace LT_Academy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CursosController : ControllerBase
    {

        protected readonly IConfiguration Configuration;

        public CursosController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        [HttpPost]
        public string Post([FromBody] Credenciales credenciales)
        {
            DataTable table = new();
            string sqlDataSource = Configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new(sqlDataSource))
            {
                myCon.Open();
                using SqlCommand myCommand = new("Get_Cursos_Profesor", myCon);
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@id_credencial", credenciales.id_credencial);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return JsonConvert.SerializeObject(table);
        }
    }
}