package co.edu.tdea.backend.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "sale")
public class Sale implements Serializable {
  public static final String BIWEEKLY = "BIWEEKLY";
  public static final String MONTHLY = "MONTHLY";

  @Id
  private String id;

  @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @JoinColumn(name = "client_id")
  private Client client;

  @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @JoinColumn(name = "membership_id")
  private Membership membership;

  private String plan;
  private String value;

  public Sale(Client client, Membership membership, String plan, String value) {
    this.id = UUID.randomUUID().toString();
    this.client = client;
    this.membership = membership;
    this.plan = plan;
    this.value = value;
  }

  public Sale(){}

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
