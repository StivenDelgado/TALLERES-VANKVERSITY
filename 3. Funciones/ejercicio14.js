function permitirEntrada(edad, estatura, permisoParental) {
    if (edad >= 18 && estatura > 150) {
        return "Acceso permitido: Eres mayor de edad y cumples con la estatura.";
    } else if (edad < 18 && permisoParental && estatura > 150) {
        return "Acceso permitido: Eres menor de edad pero tienes permiso parental.";
    } else {
        return "Acceso denegado: No cumples con los requisitos para entrar.";
    }
}
console.log(permitirEntrada(17, 151, true));
