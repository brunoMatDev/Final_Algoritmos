
using System.ComponentModel.DataAnnotations;

namespace ATDapi.Models;
public class LoginModel
{
    [Required(ErrorMessage = "El nombre de usuario es requerido.")]
    public string Username { get; set; }

    [Required(ErrorMessage = "La contraseña es requerida.")]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [DataType(DataType.Password)]
    public string? rol { get; set; }
    public string CheckUser()
    {
        return string.Format("SELECT u.username, r.roles AS rol FROM users AS u INNER JOIN roles AS r ON u.rol = r.id WHERE username = '{0}' AND password = '{1}'", Username, Password);
    }
}