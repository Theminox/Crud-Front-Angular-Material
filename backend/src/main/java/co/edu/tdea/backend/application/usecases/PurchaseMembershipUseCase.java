package co.edu.tdea.backend.application.usecases;

import co.edu.tdea.backend.domain.Membership;
import co.edu.tdea.backend.domain.Sale;
import co.edu.tdea.backend.infrastructure.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PurchaseMembershipUseCase {
  @Autowired
  private SaleRepository saleRepository;

  private final ViewClientUseCase viewClientUseCase;

  public PurchaseMembershipUseCase(ViewClientUseCase viewClientUseCase) {
    this.viewClientUseCase = viewClientUseCase;
  }

  public Membership apply(String clientId, String plan, String value) {
    var client = viewClientUseCase.apply(clientId);
    var membership = new Membership();
    membership.setExpiration_date(
      plan.equalsIgnoreCase(Sale.MONTHLY)?membership.getPurchased_date()
        .plusMonths(1):membership.getPurchased_date().plusDays(15)
    );

    var sale = new Sale(client, membership, plan, value);
    return saleRepository.save(sale).getMembership();
  }
}
