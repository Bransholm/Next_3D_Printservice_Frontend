class Customers {
    constructor(customersObject) {
        this.id = customersObject.Id;
        this.firstName = customersObject.FirstName;
        this.lastName = customersObject.LastName;
        this.adress = customersObject.Adress;
        this.zipCode = customersObject.ZipCode;
        this.city = customersObject.City;
        this.email = customersObject.Email;
        this.timeDate = customersObject.TimeDate;
    }
    
    render() {
        const customerHTML =
          /*html*/
          `
            <article>
                <div>Kunde id:${this.id}</div>
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

export { Customers }