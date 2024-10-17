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
public class productController : ControllerBase
{
    private IConfiguration _configuration;
    private Repository repository = new Repository();

    public productController(IConfiguration configuration)
    {
        this._configuration = configuration;
    }

    [HttpGet("ListaProductos")]
    public async Task<BaseResponse> ListaProductos()
    {
        try
        {
            string query = "SELECT nombre, precio from productos;";
            var result = await repository.GetListBy<productModel>(query);
            if (result != null)
                {
                    return new DataResponse<List<productModel>>(true, 200, "Lista de productos", result);
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

    
    
    [HttpPost("SelectByName")]
    public async Task<BaseResponse> SelectByName(string Name){
        try{
            string query = $"SELECT nombre, precio from productos where nombre = '{Name}'";
            var result = await repository.GetByQuery<productModel>(query);
            if (result != null)
                {
                    return new DataResponse<productModel>(true, 200, "Producto encontrado", result);
                }
                else
                {
                    return new BaseResponse(false, 204, "No hay usuarios cargados!");
                }

        }catch(Exception ex){
            return new BaseResponse(false, 500, ex.Message);

        }
    }
}