package co.edu.tdea.backend.infrastructure.routers;

import co.edu.tdea.backend.application.services.ClientService;
import co.edu.tdea.backend.domain.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.function.RouterFunction;
import org.springframework.web.servlet.function.ServerResponse;

import java.util.Map;


import static org.springframework.web.servlet.function.RouterFunctions.route;
import static org.springframework.web.servlet.function.RequestPredicates.*;

@Configuration
public class ClientController {
  @Autowired
  private ClientService clientService;

  @Bean
  public RouterFunction<ServerResponse> registerClient()
  {
    return route(POST("/clients").and(accept(MediaType.APPLICATION_JSON)),
      request -> ServerResponse.created(request.uri()).contentType(MediaType.APPLICATION_JSON)
        .body(clientService.registerClient().apply(request.body(Client.class))));
  }

  @Bean
  public RouterFunction<ServerResponse> viewClient()
  {
    return route(GET("/clients/{id}"),
      request -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
        .body(clientService.viewClient().apply(request.pathVariable("id"))));
  }

  @Bean
  public RouterFunction<ServerResponse> purchaseMembership()
  {
    return route(POST("/clients/purchase").and(accept(MediaType.APPLICATION_JSON)),
      request -> {
        var data = request.body(Map.class);
        return  ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
          .body(clientService.purchaseMembership(data.get("clientId").toString(),
            data.get("plan").toString(), data.get("value").toString()));
      });
  }

  @Bean
  public RouterFunction<ServerResponse> checkMembership()
  {
    return route(GET("/clients/{id}/check-membership"),
      request -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
        .body(clientService.checkMembership().apply(request.pathVariable("id"))));
  }

}
