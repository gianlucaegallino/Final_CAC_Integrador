CREATE DATABASE IF NOT EXIST peliculas_cac_java;

USE peliculas_cac_java;

CREATE TABLE Peliculas (
  id_pelicula int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  titulo varchar(255) NOT NULL,
  duracion varchar(6) NOT NULL,
  genero varchar(255) NOT NULL,
  imagen varchar(255) NOT NULL
);

INSERT INTO Peliculas (titulo, duracion, genero, imagen) 
VALUES
('The shawshank Redemption', '3h 2m', 'Suspenso/Crimen', 'aclamada_1.jpg'),
('The Godfather', '3h 2m', 'Crimen', 'aclamada_2.jpg'),
('The Godfather 2', '3h 2m', 'Crimen', 'aclamada_3.jpg'),
('Schindler List', '3h 50m', 'Drama', 'aclamada_4.jpg'),
('12 angry man', '4h 50m', 'Drama', 'aclamada_5.jpg'),
('Batman', '2h 50m', 'Fantasia', 'aclamada_7.jpg'),
('Spirited away', '2h 5m', 'Fantasia/Aventura ', 'aclamada_6.jpg'),
('The Lord of the Rings', '3h 55m', 'Aventura', 'aclamada_12.jpg');
