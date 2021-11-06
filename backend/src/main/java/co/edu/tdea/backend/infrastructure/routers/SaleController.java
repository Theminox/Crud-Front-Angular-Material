package co.edu.tdea.backend.infrastructure.routers;

import co.edu.tdea.backend.application.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.servlet.function.RouterFunction;
import org.springframework.web.servlet.function.ServerResponse;

import javax.transaction.Transactional;

import static org.springframework.web.servlet.function.RouterFunctions.route;
import static org.springframework.web.servlet.function.RequestPredicates.*;

@Configuration
public class SaleController {
  @Autowired
  SaleService saleService;

  @Bean
  public RouterFunction<ServerResponse> listHistorySales()
  {
    return route(GET("/sales"), request -> ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
      .body(saleService.listHistorySale().get()));
  }
}
