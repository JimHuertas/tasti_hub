<?php
include_once '../bd/conexion.php';
$objeto = new Conexion();
$conexion = $objeto->Conectar();

#$username = (isset($_POST['username'])) ? $_POST['username'] : '';
$cui = (isset($_POST['cui'])) ? $_POST['cui'] : '';
$first_name = (isset($_POST['first_name'])) ? $_POST['first_name'] : '';
$last_name = (isset($_POST['last_name'])) ? $_POST['last_name'] : '';
#$gender = (isset($_POST['gender'])) ? $_POST['gender'] : '';
$telefono = (isset($_POST['telefono'])) ? $_POST['telefono'] : '';
$password = (isset($_POST['password'])) ? $_POST['password'] : '';
$email = (isset($_POST['email'])) ? $_POST['email'] : '';
#$status = (isset($_POST['status'])) ? $_POST['status'] : '';
$anio = (isset($_POST['anio'])) ? $_POST['anio'] : '';


$id = (isset($_POST['id'])) ? $_POST['id'] : '';
$usuario = (isset($_POST['usuario'])) ? $_POST['usuario'] : '';
$titulo = (isset($_POST['titulo'])) ? $_POST['titulo'] : '';
$descripcion = (isset($_POST['descripcion'])) ? $_POST['descripcion'] : '';


$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$user_id = (isset($_POST['user_id'])) ? $_POST['user_id'] : '';


switch($opcion){
    case 0:
        break;
    case 1:
        $consulta = "INSERT INTO usuarios (cui, first_name, last_name, telefono, password, email, anio) VALUES('$cui', '$first_name', '$last_name', '$telefono', '$password', '$email','$anio') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 
        
        $consulta = "SELECT * FROM usuarios ORDER BY user_id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
        break;    
    case 2:        
        $consulta = "UPDATE usuarios SET cui='$cui', first_name='$first_name', last_name='$last_name', telefono='$telefono', password='$password', email='$email', anio='$anio' WHERE user_id='$user_id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        
        $consulta = "SELECT * FROM usuarios WHERE user_id='$user_id' ";       
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 3:        
        $consulta = "DELETE FROM usuarios WHERE user_id='$user_id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;
    case 4:    
        $consulta = "SELECT * FROM usuarios";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 5:
        $consulta = "SELECT * FROM consulta";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 6:        
        $consulta = "UPDATE consulta SET usuario='$usuario', titulo='$titulo', descripcion='$descripcion' WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
            
        $consulta = "SELECT * FROM usuarios WHERE user_id='$user_id' ";       
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 7:
        $consulta = "INSERT INTO consulta (usuario, titulo, descripcion) VALUES('$usuario', '$titulo', '$descripcion') ";			
        $resultado = $conexion->prepare($consulta);
        $resultado->execute(); 
        
        $consulta = "SELECT * FROM consulta ORDER BY id DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);       
        break; 
    case 8:
        $consulta = "SELECT * FROM consulta";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();        
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
        break;
    case 9:        
        $consulta = "DELETE FROM consulta WHERE id='$id' ";		
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();                           
        break;

}

print json_encode($data, JSON_UNESCAPED_UNICODE);//envio el array final el formato json a AJAX
$conexion=null;