# Gliding Club CRM

## Adding a service

Structure the code as following:

```
/ src
    / services
        / my-service
            - index.ts  // export default class MyService...
            / __tests__
                - MyService.test.ts
```

### Test the service
We write tests using the `mocha` + `chai` + `sinon` stack.

Here is a template for a spec:

```typescript
import * as chai from "chai";
import * as sinon from "sinon";
import { expect } from "chai";

chai.use(sinonChai)

describe("MyService", function () {
    let sandbox: sinon.SinonSandbox;
    let someStub : sinon.SinonStub;

    before(function () {
        sandbox = sinon.createSandbox()
    })

    beforeEach(function () {
        someStub = sandbox.stub(Class, "method").resolves(something)
    })

    describe("#myMethod", function () {
        it("Should do some stuff", async function () {
            expect(something).to.be(correct)
        })
    })
})

```
