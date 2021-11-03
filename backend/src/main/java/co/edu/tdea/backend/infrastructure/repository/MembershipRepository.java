package co.edu.tdea.backend.infrastructure.repository;

import co.edu.tdea.backend.domain.Membership;
import org.springframework.data.repository.CrudRepository;

public interface MembershipRepository extends CrudRepository<Membership, String> {
}
