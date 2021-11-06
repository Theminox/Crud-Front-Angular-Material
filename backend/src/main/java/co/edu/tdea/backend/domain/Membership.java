package co.edu.tdea.backend.domain;

import org.apache.tomcat.jni.Local;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "membership")
public class Membership implements Serializable {
  public static final String ACTIVE = "ACTIVE";
  public static final String EXPIRATED = "EXPIRATED";

  @Id
  private String id;
  private String status;
  LocalDate purchased_date;
  LocalDate expiration_date;

  public Membership() {
    this.id = UUID.randomUUID().toString();
    activateMembership();
    this.purchased_date = LocalDate.now();
  }

  public void activateMembership()
  {
    this.status = ACTIVE;
  }
  public void expirateMembership()
  {
    this.status = EXPIRATED;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public LocalDate getPurchased_date() {
    return purchased_date;
  }

  public void setPurchased_date(LocalDate purchased_date) {
    this.purchased_date = purchased_date;
  }

  public LocalDate getExpiration_date() {
    return expiration_date;
  }

  public void setExpiration_date(LocalDate expiration_date) {
    this.expiration_date = expiration_date;
  }

}
