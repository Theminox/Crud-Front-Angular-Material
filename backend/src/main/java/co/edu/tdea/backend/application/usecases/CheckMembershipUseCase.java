package co.edu.tdea.backend.application.usecases;

import co.edu.tdea.backend.domain.Membership;
import co.edu.tdea.backend.infrastructure.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class CheckMembershipUseCase implements Function<String, Membership> {
  @Autowired
  private SaleRepository saleRepository;

  private final ViewClientUseCase viewClientUseCase;

  public CheckMembershipUseCase(ViewClientUseCase viewClientUseCase) {
    this.viewClientUseCase = viewClientUseCase;
  }

  @Override
  public Membership apply(String clientId) throws IllegalArgumentException{
    return saleRepository.findByClient(viewClientUseCase.apply(clientId))
      .stream().filter(sale -> sale.getMembership().getStatus()
        .equalsIgnoreCase(Membership.ACTIVE)).findFirst()
      .orElseThrow(IllegalArgumentException::new).getMembership();
  }
}
