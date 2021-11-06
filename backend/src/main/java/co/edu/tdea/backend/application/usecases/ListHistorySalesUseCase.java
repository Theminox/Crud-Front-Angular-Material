package co.edu.tdea.backend.application.usecases;

import co.edu.tdea.backend.domain.Sale;
import co.edu.tdea.backend.infrastructure.repository.SaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.util.List;
import java.util.function.Supplier;

@Component
public class ListHistorySalesUseCase implements Supplier<List<Sale>> {
  @Autowired
  private SaleRepository saleRepository;

  @Override
  public List<Sale> get() {
    return (List<Sale>) saleRepository.findAll();
  }
}
