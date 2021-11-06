package co.edu.tdea.backend.infrastructure.repository;

import co.edu.tdea.backend.domain.Client;
import org.springframework.data.repository.CrudRepository;

public interface ClientRepository extends CrudRepository<Client, String> {
}
