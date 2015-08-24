package ceneval;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

/**
 * Created by campitos on 21/08/15.
 */
@RestController
@RequestMapping("/")
public class ControladorReactivos {


    @RequestMapping(value="/reactivo", method= RequestMethod.GET, headers = {"Accept=application/json"})
    @ResponseBody
    ArrayList<Reactivo> obtenerReactivo()throws Exception{

        ArrayList<Reactivo> reactivos=new ArrayList<>();
        reactivos.add(BancoDeReactivos.obtenerReactivo());
        return reactivos;
    }




}
