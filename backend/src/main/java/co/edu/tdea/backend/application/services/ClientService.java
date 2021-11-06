package co.edu.tdea.backend.application.services;

import co.edu.tdea.backend.application.usecases.CheckMembershipUseCase;
import co.edu.tdea.backend.application.usecases.PurchaseMembershipUseCase;
import co.edu.tdea.backend.application.usecases.RegisterClientUseCase;
import co.edu.tdea.backend.application.usecases.ViewClientUseCase;
import co.edu.tdea.backend.domain.Client;
import co.edu.tdea.backend.domain.Membership;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class ClientService{
  private final RegisterClientUseCase registerClientUseCase;
  private final ViewClientUseCase viewClientUseCase;
  private final PurchaseMembershipUseCase purchaseMembershipUseCase;
  private final CheckMembershipUseCase checkMembershipUseCase;

  public ClientService(RegisterClientUseCase registerClientUseCase, ViewClientUseCase viewClientUseCase
                       ,PurchaseMembershipUseCase purchaseMembershipUseCase,CheckMembershipUseCase checkMembershipUseCase)
  {
    this.registerClientUseCase = registerClientUseCase;
    this.viewClientUseCase = viewClientUseCase;
    this.purchaseMembershipUseCase = purchaseMembershipUseCase;
    this.checkMembershipUseCase = checkMembershipUseCase;
  }

  public Function<Client, Client> registerClient()
  {
      return registerClientUseCase;
  }

  public Function<String, Client> viewClient()
  {
    return viewClientUseCase;
  }

  public Membership purchaseMembership(String clientId, String plan, String value)
  {
    return purchaseMembershipUseCase.apply(clientId, plan, value);
  }

  public Function<String, Membership> checkMembership()
  {
      return checkMembershipUseCase;
  }
}
