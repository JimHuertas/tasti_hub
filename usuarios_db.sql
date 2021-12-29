CREATE DATABASE usuario;
USE usuarios_db;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `consulta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) DEFAULT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;


INSERT INTO `consulta` (`id`, `usuario`, `titulo`, `descripcion`) VALUES
(1, 'noobmaster69', 'ADA', 'Algoritmos de ordenamiento');
INSERT INTO `consulta` (`id`, `usuario`, `titulo`, `descripcion`) VALUES
(2, 'elhacker', 'MAC', 'Espacios vectoriales');
INSERT INTO `consulta` (`id`, `usuario`, `titulo`, `descripcion`) VALUES
(3, 'ironmax', 'SO', 'Algoritmos de ordenamiento');



CREATE TABLE IF NOT EXISTS `usuarios` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `cui` varchar(10) DEFAULT NULL,
  --`username` varchar(255) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  --`gender` varchar(10) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL, 
  `anio` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`user_id`, `cui`, `first_name`, `last_name`, `telefono`, `password`,`email` , `anio`) VALUES
(1, 'rogers63', 'david', 'john', '987654321','e6a33eee180b07e563d74fee8c2c66b8','david123@gmail.com' , 'quinto'),
(2, 'mike28', 'rogers', 'paul', '4567891233', '2e7dc6b8a1598f4f75c3eaa47958ee2f','rogers123@gmail.com','cuarto'),
(3, 'rivera92', 'david', 'john', '3245167895', '1c3a8e03f448d211904161a6f5849b68','john123@gmail.com' , 'tercero');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
