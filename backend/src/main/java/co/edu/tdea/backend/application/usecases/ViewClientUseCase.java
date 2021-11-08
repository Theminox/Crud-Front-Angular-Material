package co.edu.tdea.backend.application.usecases;

import co.edu.tdea.backend.domain.Client;
import co.edu.tdea.backend.infrastructure.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class ViewClientUseCase implements Function<String, Client>{

  @Autowired
  private ClientRepository clientRepository;

  @Override
  public Client apply(String id) {
    return clientRepository.findById(id).orElseThrow(
      ()->new IllegalArgumentException("User not found")
    );
  }
}
