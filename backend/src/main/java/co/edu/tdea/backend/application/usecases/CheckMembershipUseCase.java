package co.edu.tdea.backend.application.usecases;

import co.edu.tdea.backend.domain.Membership;
import co.edu.tdea.backend.infrastructure.repository.MembershipRepository;
import co.edu.tdea.backend.infrastructure.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class CheckMembershipUseCase implements Function<String, Membership> {
  @Autowired
  private SaleRepository saleRepository;
  @Autowired
  private MembershipRepository membershipRepository;

  private final ViewClientUseCase viewClientUseCase;

  public CheckMembershipUseCase(ViewClientUseCase viewClientUseCase) {
    this.viewClientUseCase = viewClientUseCase;
  }

  @Override
  public Membership apply(String clientId) throws IllegalArgumentException{
    var memberships = saleRepository.findByClient(viewClientUseCase.apply(clientId)).stream()
      .map(sale -> {
        var membership = sale.getMembership();
        checkActivesMemberships(membership);

        return membership;
      }).collect(Collectors.toList());

    return memberships.stream().filter(membership -> membership.getStatus()
      .equalsIgnoreCase(Membership.ACTIVE)).findFirst()
      .orElseThrow(IllegalArgumentException::new);
  }

  private void checkActivesMemberships(Membership membership) {
    if (LocalDate.now().isAfter(membership.getExpiration_date())
      && membership.getStatus().equalsIgnoreCase(Membership.ACTIVE)) {
        membership.setStatus(Membership.EXPIRATED);
        membershipRepository.save(membership);
    }
  }
}
