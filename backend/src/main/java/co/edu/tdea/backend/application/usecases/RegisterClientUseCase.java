package co.edu.tdea.backend.application.usecases;

import co.edu.tdea.backend.domain.Client;
import co.edu.tdea.backend.infrastructure.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class RegisterClientUseCase implements Function<Client, Client>{

  @Autowired
  private ClientRepository clientRepository;

  @Override
  public Client apply(Client client) {
    return clientRepository.save(client);
  }
}
