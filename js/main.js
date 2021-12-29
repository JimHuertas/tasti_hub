$(document).ready(function() {
var user_id, opcion;
opcion = 5;

tablaUsuarios = $('#tablaUsuarios').DataTable({  
    "ajax":{            
        "url": "bd/crud.php", 
        "method": 'POST', //usamos el metodo POST
        "data":{opcion:4}, //enviamos opcion 4 para que haga un SELECT
        "dataSrc":""
    },
    "columns":[
        {"data": "user_id"},
        {"data": "cui"},
        //{"data": "username"},
        {"data": "first_name"},
        {"data": "last_name"},
        {"data": "telefono"},
        //{"data": "gender"},
        {"data": "password"},
        {"data": "email"},
        //{"data": "status"},
        {"data": "anio"},
        //{"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>delete</i></button></div></div>"}
        {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>delete</i></button><button class='btn btn-primary btn-sm btnResponder'>Responder</i></button></div></div>"}
    ]
});

tablaRespuesta = $('#tablaRespuesta').DataTable({  
    "ajax":{            
        "url": "../bd/crud.php", 
        "method": 'POST', //usamos el metodo POST
        "data":{opcion: 11}, //enviamos opcion 5 para que haga un SELECT
        "dataSrc":""
    },
    "columns":[
        {"data": "id_ct"},
        {"data": "cui_tutor"},
        {"data": "id_consulta"},
        {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>delete</i></button><button class='btn btn-primary btn-sm btnResponder'>Responder</i></button></div></div>"}
    ]
});

tablaConsulta = $('#tablaConsulta').DataTable({  
    "ajax":{            
        "url": "../bd/crud.php", 
        "method": 'POST', //usamos el metodo POST
        "data":{opcion: 5}, //enviamos opcion 5 para que haga un SELECT
        "dataSrc":""
    },
    "columns":[
        {"data": "id"},
        {"data": "usuario"},
        {"data": "titulo"},
        {"data": "descripcion"},
        {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>delete</i></button><button class='btn btn-primary btn-sm btnResponder'>Responder</i></button></div></div>"}
    ]
});   


var fila; //captura la fila, para editar , eliminar o responder
//submit para el Alta y Actualización
$('#formUsuarios').submit(function(e){                        
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
    cui = $.trim($('#cui').val());    
    first_name = $.trim($('#first_name').val());
    last_name = $.trim($('#last_name').val());    
    //gender = $.trim($('#gender').val());    
    telefono = $.trim($('#telefono').val()); 
    password = $.trim($('#password').val());
    email = $.trim($('#email').val());
    anio = $.trim($('#anio').val());                            
        $.ajax({
          url: "../bd/crud.php",
          type: "POST",
          datatype:"json",    
          data:  {user_id:user_id, cui:cui, first_name:first_name, last_name:last_name, telefono:telefono, password:password , email:email ,anio:anio ,opcion:opcion},    
          success: function(data) {
            tablaUsuarios.ajax.reload(null, false);
           }
        });			        
    $('#ayuto').modal('hide');											     			
});

$('#formRespuesta').submit(function(e){                        
    e.preventDefault(); 
    cui_tutor = $.trim($('#cui_tutor').val());                        
        $.ajax({
          url: "../bd/crud.php",
          type: "POST",
          datatype:"json",    
          data:  {id_ct:id_ct, cui_tutor:cui_tutor, id_consulta:id_consulta, opcion:opcion},    
          success: function(data) {
            //tablaUsuarios.ajax.reload(null, false);
           }
        });                 
    $('#modal-respuesta').modal('hide');                                                          
});

$('#formConsulta').submit(function(e){                        
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
    
    usuario = $.trim($('#usuario').val()); 
    titulo = $.trim($('#titulo').val());    
    descripcion = $.trim($('#descripcion').val());    
        $.ajax({
          url: "../bd/crud.php",
          type: "POST",
          datatype:"json",    
          data:  {id:id, usuario:usuario, titulo:titulo, descripcion:descripcion, opcion:opcion},    
          success: function(data) {
            tablaConsulta.ajax.reload(null, false);
        }
        });		        
    $('#modalCRUD').modal('hide');											     			
});


//para limpiar los campos antes de dar de Alta una Persona
/*$("#btnNuevo").click(function(){
    opcion = 7; //alta           
    user_id=null;
    $("#formUsuarios").trigger("reset");
    $(".modal-header").css( "background-color", "#17a2b8");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Alta de usuario");
    $('#modalCRUD').modal('show');	    
});*/

$("#btnRegister").click(function(){
    opcion = 1; //alta           
    user_id=null;
    $("#formUsuarios").trigger("reset");
    $(".modal-header").css( "background-color", "#17a2b8");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Nueva Usuario");
    $('#ayuto').modal('show');     
});

$("#btnNuevaConsulta").click(function(){
    opcion = 7; //alta           
    id=null;
    $("#formConsulta").trigger("reset");
    $(".modal-header").css( "background-color", "#17a2b8");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Nueva Consulta");
    $('#modalCRUD').modal('show');	    
});

//Editar        
$(document).on("click", ".btnEditar", function(){		        
    opcion = 6;//editar
    fila = $(this).closest("tr");	        
    id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID		            
    titulo = fila.find('td:eq(2)').text();
    usuario = fila.find('td:eq(1)').text();
    descripcion = fila.find('td:eq(3)').text();
    $("#id").val(id);
    $("#usuario").val(usuario);
    $("#titulo").val(titulo);
    $("#descripcion").val(descripcion);

    $(".modal-header").css("background-color", "#007bff");
    $(".modal-header").css("color", "white" );
    $(".modal-title").text("Editar Consulta");		
    $('#modalCRUD').modal('show');		   
});

//Borrar
$(document).on("click", ".btnBorrar", function(){
    fila = $(this);           
    id = parseInt($(this).closest('tr').find('td:eq(0)').text()) ;		
    opcion = 9; //eliminar    
    var respuesta = confirm("¿Está seguro de borrar el registro "+id+"?");                
    if (respuesta) {            
        $.ajax({
            url: "../bd/crud.php",
            type: "POST",
            datatype:"json",    
            data:  {opcion:opcion, id:id},    
            success: function() {
                tablaConsulta.row(fila.parents('tr')).remove().draw();                  
            }
        });	
    }
    });
});

//Responder
$(document).on("click", ".btnResponder", function(){                    
    fila = $(this);    
    //id = parseInt(fila.find('td:eq(0)').text()); //capturo el ID     
    id_consulta = parseInt($(this).closest('tr').find('td:eq(0)').text()) ;      
    opcion = 11;//responder   
    id_ct=null;
    $("#formRespuesta").trigger("reset");
    $(".modal-header").css("background-color", "#007bff");
    $(".modal-header").css("color", "white" );
    $(".modal-title").text("Responder a la pregunta");      
    $('#modal-respuesta').modal('show');         
});

$("#btnRegister").click(function(){
    opcion = 1; //alta           
    user_id=null;
    $("#formUsuarios").trigger("reset");
    $(".modal-header").css( "background-color", "#17a2b8");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Nueva Usuario");
    $('#ayuto').modal('show');     
});

