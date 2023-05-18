import Tabs from './components/tabs.js';
import Payment from './components/payment.js';

export default class App {
  init() {
    // const tabs = new Tabs(`.js_tabs-block`, `.js_tab`);
    // tabs.init();

    const payment = new Payment();
    payment.init();
  }
}