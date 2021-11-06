package co.edu.tdea.backend.application.services;

import co.edu.tdea.backend.application.usecases.ListHistorySalesUseCase;
import co.edu.tdea.backend.domain.Sale;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Supplier;

@Service
public class SaleService {
  private final ListHistorySalesUseCase listHistorySalesUseCase;

  public SaleService(ListHistorySalesUseCase listHistorySalesUseCase) {
    this.listHistorySalesUseCase = listHistorySalesUseCase;
  }

  public Supplier<List<Sale>> listHistorySale()
  {
    return listHistorySalesUseCase;
  }
}
