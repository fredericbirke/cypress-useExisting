import {AppComponent} from "./app.component";
import {SomeService} from "./some.service";

describe('app component', () => {
  it('should mount with useExisting provider', () => {
    // Setup
    const someService = new SomeService();

    cy.mount(`
        <app-root></app-root>
`, {
      declarations: [AppComponent],
      providers: [{provide: SomeService, useExisting: someService}]
    })
  });
});
