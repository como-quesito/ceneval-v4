package ceneval;

import java.util.ArrayList;

/**
 * Created by campitos on 21/08/15.
 */
public class Reactivo {
    String pregunta;
    String retroalimentacion;
    ArrayList<Opcion> opciones;

    public ArrayList<Opcion> getOpciones() {
        return opciones;
    }

    public void setOpciones(ArrayList<Opcion> opciones) {
        this.opciones = opciones;
    }

    public String getRetroalimentacion() {
        return retroalimentacion;
    }

    public void setRetroalimentacion(String retroalimentacion) {
        this.retroalimentacion = retroalimentacion;
    }

    public String getPregunta() {
        return pregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

    public Reactivo() {
    }
}
