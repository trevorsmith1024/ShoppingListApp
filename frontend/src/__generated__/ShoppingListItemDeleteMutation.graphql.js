/**
 * @generated SignedSource<<e0af5c627beae0b175e71495efea42fa>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type ShoppingListItemDeleteMutation$variables = {|
  input: string,
|};
export type ShoppingListItemDeleteMutationVariables = ShoppingListItemDeleteMutation$variables;
export type ShoppingListItemDeleteMutation$data = {|
  +deleteShoppingListItem: {|
    +id: string,
  |},
|};
export type ShoppingListItemDeleteMutationResponse = ShoppingListItemDeleteMutation$data;
export type ShoppingListItemDeleteMutation = {|
  variables: ShoppingListItemDeleteMutationVariables,
  response: ShoppingListItemDeleteMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ShoppingListItem",
    "kind": "LinkedField",
    "name": "deleteShoppingListItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShoppingListItemDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShoppingListItemDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dd67b5e9e0b96f67b85aaf37e57d4055",
    "id": null,
    "metadata": {},
    "name": "ShoppingListItemDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ShoppingListItemDeleteMutation(\n  $input: ID!\n) {\n  deleteShoppingListItem(input: $input) {\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "53450b3f47d5c5ebb2a9571c89010a4f";

module.exports = ((node/*: any*/)/*: Mutation<
  ShoppingListItemDeleteMutation$variables,
  ShoppingListItemDeleteMutation$data,
>*/);
