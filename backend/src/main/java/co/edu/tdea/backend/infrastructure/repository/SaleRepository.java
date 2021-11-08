package co.edu.tdea.backend.infrastructure.repository;

import co.edu.tdea.backend.domain.Client;
import co.edu.tdea.backend.domain.Sale;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SaleRepository extends CrudRepository<Sale, String> {
  List<Sale> findByClient(Client client);
}
