using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using LT_Academy.Models;
using Microsoft.EntityFrameworkCore;

namespace LT_Academy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {

        protected readonly IConfiguration Configuration;

        public LoginController(IConfiguration configuration)
        {
            Configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select *
                            from dbo.Contenido
                            ";

            DataTable table = new();
            string sqlDataSource = Configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new(sqlDataSource))
            {
                myCon.Open();
                using SqlCommand myCommand = new(query, myCon);
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post([FromBody] Credenciales credenciales)
        {
            DataTable table = new();
            string sqlDataSource = Configuration.GetConnectionString("Default");
            SqlDataReader myReader;
            using (SqlConnection myCon = new(sqlDataSource))
            {
                myCon.Open();
                using SqlCommand myCommand = new("Check_Credenciales", myCon);
                {
                    myCommand.CommandType = CommandType.StoredProcedure;
                    myCommand.Parameters.AddWithValue("@correo", credenciales.correo);
                    myCommand.Parameters.AddWithValue("@contrase�a", credenciales.password);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
    }
}