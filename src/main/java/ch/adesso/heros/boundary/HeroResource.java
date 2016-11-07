package ch.adesso.heros.boundary;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("heros")
public class HeroResource {

    @GET
    public String getHeros() {
        return "Black Panther, Spiderman, Ironman, Aquaman";
    }

}
