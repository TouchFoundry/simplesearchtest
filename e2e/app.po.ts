export class SimpleSearchTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ss-app-root h1')).getText();
  }
}
