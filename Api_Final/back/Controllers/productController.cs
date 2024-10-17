using Microsoft.AspNetCore.Mvc;
using ATDapi.Responses;
using ATDapi.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using ATDapi.Repositories;
using Microsoft.AspNetCore.Authorization;

[ApiController]
[Route("/api/")]
public class AuthController : ControllerBase
{
    private IConfiguration _configuration;
    private Repository repository = new Repository();

    public AuthController(IConfiguration configuration)
    {
        this._configuration = configuration;
    }

    [HttpGet("ListaProductos")]
    public async Task<BaseResponse> ListaProductos()
    {
        try
        {
            string query = "SELECT nombre, precio from productos;";
            var result = await repository.GetListBy<dynamic>(query);
            if (result != null)
                {
                    return new DataResponse<List<dynamic>>(true, 200, "Lista de usuarios", result);
                }
                else
                {
                    return new BaseResponse(false, 204, "No hay usuarios cargados!");
                }
        }
        catch (Exception ex)
        {
            return new BaseResponse(false, 500, ex.Message);
        }
    }

    

    [HttpPost("SelectById")]
    public async Task<BaseResponse> SelectById(){
        
    }
}