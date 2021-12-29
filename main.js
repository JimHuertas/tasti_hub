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
        {"data": "username"},
        {"data": "first_name"},
        {"data": "last_name"},
        {"data": "gender"},
        {"data": "password"},
        {"data": "status"},
        {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>delete</i></button></div></div>"}
    ]
});

tablaConsulta = $('#tablaConsulta').DataTable({  
    "ajax":{            
        "url": "bd/crud.php", 
        "method": 'POST', //usamos el metodo POST
        "data":{opcion: 5}, //enviamos opcion 5 para que haga un SELECT
        "dataSrc":""
    },
    "columns":[
        {"data": "id"},
        {"data": "usuario"},
        {"data": "titulo"},
        {"data": "descripcion"},
        {"defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-primary btn-sm btnEditar'><i class='material-icons'>edit</i></button><button class='btn btn-danger btn-sm btnBorrar'><i class='material-icons'>delete</i></button></div></div>"}
    ]
});   

var fila; //captura la fila, para editar o eliminar
//submit para el Alta y Actualización
/*$('#formUsuarios').submit(function(e){                         
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
    username = $.trim($('#username').val());    
    first_name = $.trim($('#first_name').val());
    last_name = $.trim($('#last_name').val());    
    gender = $.trim($('#gender').val());    
    password = $.trim($('#password').val());
    status = $.trim($('#status').val());                            
        $.ajax({
          url: "bd/crud.php",
          type: "POST",
          datatype:"json",    
          data:  {user_id:user_id, username:username, first_name:first_name, last_name:last_name, gender:gender, password:password ,status:status ,opcion:opcion},    
          success: function(data) {
            tablaUsuarios.ajax.reload(null, false);
           }
        });			        
    $('#modalCRUD').modal('hide');											     			
});*/

$('#formUsuarios').submit(function(e){                        
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
    username = $.trim($('#username').val());    
    first_name = $.trim($('#first_name').val());
    last_name = $.trim($('#last_name').val());    
    gender = $.trim($('#gender').val());    
    password = $.trim($('#password').val());
    status = $.trim($('#status').val());                            
        $.ajax({
          url: "bd/crud.php",
          type: "POST",
          datatype:"json",    
          data:  {user_id:user_id, username:username, first_name:first_name, last_name:last_name, gender:gender, password:password ,status:status ,opcion:opcion},    
          success: function(data) {
            tablaUsuarios.ajax.reload(null, false);
           }
        });			        
    $('#ayuto').modal('hide');											     			
});

$("#btnRegister").click(function(){
    opcion = 7; //alta           
    user_id=null;
    $("#formUsuarios").trigger("reset");
    $(".modal-header").css( "background-color", "#17a2b8");
    $(".modal-header").css( "color", "white" );
    $(".modal-title").text("Nueva Usuario");
    $('#ayuto').modal('show');	   
});

$('#formConsulta').submit(function(e){                        
    e.preventDefault(); //evita el comportambiento normal del submit, es decir, recarga total de la página
    usuario = $.trim($('#usuario').val()); 
    titulo = $.trim($('#titulo').val());    
    descripcion = $.trim($('#descripcion').val());    
        $.ajax({
          url: "bd/crud.php",
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

$("#btnNuevaConsulta").click(function(){
    opcion = 7; //alta           
    user_id=null;
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
    titulo = fila.find('td:eq(1)').text();
    usuario = fila.find('td:eq(2)').text();
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
    user_id = parseInt($(this).closest('tr').find('td:eq(0)').text()) ;		
    opcion = 3; //eliminar        
    var respuesta = confirm("¿Está seguro de borrar el registro "+user_id+"?");                
    if (respuesta) {            
        $.ajax({
          url: "bd/crud.php",
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