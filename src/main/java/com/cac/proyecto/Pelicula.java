package com.cac.proyecto;

public class Pelicula {
    private int id_pelicula;
    private String titulo;
    private String duracion;
    private String genero;
    private String imagen;


public Pelicula(){
}

public Pelicula(int id_pelicula, String titulo, String duracion, 
String genero, String imagen){
    this.id_pelicula = id_pelicula;
    this.titulo = titulo;
    this.duracion = duracion;
    this.genero = genero;
    this.imagen = imagen;
}

public int getId_pelicula() {
    return id_pelicula;
}

public String getTitulo() {
    return titulo;
}

public String getDuracion() {
    return duracion;
}

public String getGenero() {
    return genero;
}

public String getImagen() {
    return imagen;
}

public void setId_pelicula(int id_pelicula) {
    this.id_pelicula = id_pelicula;
}

public void setTitulo(String titulo) {
    this.titulo = titulo;
}

public void setDuracion(String duracion) {
    this.duracion = duracion;
}

public void setGenero(String genero) {
    this.genero = genero;
}

public void setImagen(String imagen) {
    this.imagen = imagen;
}


}