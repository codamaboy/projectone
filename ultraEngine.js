class UltraEngine {
  constructor() {
    this.orders = [];
  }
  submit(order) {
    this.orders.push(order);
    return { status: "ok" };
  }
}
module.exports = UltraEngine;
