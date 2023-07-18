import { Equal, Expect } from "./helpers/type-utils";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

interface MyType extends User {
  id: never;
}

type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
