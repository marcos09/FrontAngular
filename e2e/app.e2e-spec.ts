import { CarteleraFrontAngularPage } from './app.po';

describe('cartelera-front-angular App', function() {
  let page: CarteleraFrontAngularPage;

  beforeEach(() => {
    page = new CarteleraFrontAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
