export class catalogueItem {
  constructor(catalogueObject) {
    this.id = catalogueObject.Id;
    this.title = catalogueObject.Title;
    this.standardSize = catalogueObject.StandardSize;
    this.standardWeight = catalogueObject.StandardWeight;
    this.itemDescription = catalogueObject.ItemDescription;
    this.imageLink = catalogueObject.ImageLink;
    this.category = catalogueObject.Category;
  }

 // contains the DOM for the admin site  
  adminRender() {
    const adminCatalogueHTML =
      /*html*/
      `
    <article>
    <h3>Produkt Navn: ${this.title}</h3>
    <img src="../images/${this.imageLink}" alt="Produktbillede ${this.title}"/>
    <p>Kategori: ${this.category}</p>
    <p>Standard Størrelse: ${this.standardSize} cm</p>
    <p>Standard Vægt: ${this.standardWeight} gram</p>
    <p>Produkt Beskrivelse: ${this.itemDescription} </p>
    <button class="btn_update_product" >Opdater produkt</button>
    <button class="btn_delete_product" >Slet produkt</button>

    </article>
    `;
    return adminCatalogueHTML;
  }
}
