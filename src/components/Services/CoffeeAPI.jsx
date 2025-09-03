class CoffeeAPI {
  path = "https://raw.githubusercontent.com/macidli/gloriaDb/refs/heads/main";

  async getMenuData() {
    const res = await fetch(`${this.path}/MenuData.json`);
    if (!res.ok) throw new Error("Menu data yüklənmədi");
    return res.json();
  }

  async getAllProducts() {
    const res = await fetch(`${this.path}/ProductsData.json`);
    if (!res.ok) throw new Error("Products data yüklənmədi");
    return res.json();
  }

  async getAllReviews() {
    const res = await fetch(`${this.path}/CustomerReviews.json`);
    if (!res.ok) throw new Error("Reviews data yüklənmədi");
    return res.json();
  }

  async getAllOfferings() {
    const res = await fetch(`${this.path}/OfferingsData.json`);
    if (!res.ok) throw new Error("Offerings data yüklənmədi");
    return res.json();
  }

  async getAllCountries() {
    const res = await fetch(`${this.path}/CountriesData.json`);
    if (!res.ok) throw new Error("Countries data yüklənmədi");
    return res.json();
  }

  async getProductBySlug(slug) {
    const products = await this.getAllProducts();
    return products.find((p) => p.slug === slug) || null;
  }

  async getPopularProducts() {
    const products = await this.getAllProducts();
    return products.filter((p) => p.is_popular);
  }

  async getSliderData() {
    const res = await fetch(`${this.path}/DataSwiper.json`);
    if (!res.ok) throw new Error("Slider data yüklənmədi");
    return res.json();
  }

  async getSectionsData() {
    const res = await fetch(`${this.path}/SectionData.json`);
    if (!res.ok) throw new Error("Sections data yüklənmədi");
    return res.json();
  }

  async getAllFeedbacks() {
    const res = await fetch(`${this.path}/Feedbacks.json`);
    if (!res.ok) throw new Error("Feedbacks data yüklənmədi");
    return res.json();
  }

  async getCheckoutData() {
    const res = await fetch(`${this.path}/CheckoutData.json`);
    if (!res.ok) throw new Error("CheckoutData.json yüklənmədi");
    return res.json();
  }
}

export default CoffeeAPI;
