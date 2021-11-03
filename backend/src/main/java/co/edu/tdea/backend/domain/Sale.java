package co.edu.tdea.backend.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sale")
public class Sale {
  private final String BIWEEKLY = "BIWEEKLY";
  private final String MONTHLY = "MONTHLY";

  @Id
  private String id;
  private Client client;
  private Membership membership;
  private String plan;
  private String value;

  public void takeBiweeklyPlan()
  {
    this.plan = BIWEEKLY;
  }
  public void takeMonthlyPlan()
  {
    this.plan = MONTHLY;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public Client getClient() {
    return client;
  }

  public void setClient(Client client) {
    this.client = client;
  }

  public Membership getMembership() {
    return membership;
  }

  public void setMembership(Membership membership) {
    this.membership = membership;
  }

  public String getPlan() {
    return plan;
  }

  public void setPlan(String plan) {
    this.plan = plan;
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }
}
