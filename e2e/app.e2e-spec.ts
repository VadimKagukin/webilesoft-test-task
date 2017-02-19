import { WebilesoftTestTaskPage } from './app.po';

describe('webilesoft-test-task App', function() {
  let page: WebilesoftTestTaskPage;

  beforeEach(() => {
    page = new WebilesoftTestTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
