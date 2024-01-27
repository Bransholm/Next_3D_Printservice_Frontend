//Creating class for customers
class Customers {
  constructor(customersObject) {
    this.id = customersObject.Id;
    this.firstName = customersObject.FirstName;
    this.lastName = customersObject.LastName;
    this.adress = customersObject.Adress;
    this.zipCode = customersObject.ZipCode;
    this.city = customersObject.City;
    this.email = customersObject.Email;
    this.timeDate = this.formatDateTime(customersObject.TimeDate);
  }

  // Changeing customersObject.TimeDate format
  formatDateTime(dateTimeString) {
    const originalDateTime = new Date(dateTimeString);
    const formattedDate = originalDateTime.toLocaleDateString("da-DK", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const formattedTime = originalDateTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} kl. ${formattedTime}`;
  }

// The dom manipulatuion
  render() {
    const customerHTML =
      /*html*/
      `
            <article>
                <div id="customers_customer_id_headLine">Kunde id:${this.id}</div>
                <div>Fornavn: ${this.firstName}</div>
                <div>Efternavn: ${this.lastName}</div>
                <div>Adresse: ${this.adress}</div>
                <div>Postnummer: ${this.zipCode}</div>
                <div>By: ${this.city}</div>
                <div>E-mail: ${this.email}</div>
                <div>Oprettet: ${this.timeDate}</div>
            </article>
        
            `;
    return customerHTML;
  }
}


const yourObject = {
  TimeDate: "2024-01-03T11:40:55.000Z",
};

const originalDateTime = new Date(yourObject.TimeDate);

const formattedDate = originalDateTime.toLocaleDateString("da-DK");
const formattedTime = originalDateTime.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});

const formattedDateTime = `${formattedDate} ${formattedTime}`;

console.log(formattedDateTime);











export { Customers }