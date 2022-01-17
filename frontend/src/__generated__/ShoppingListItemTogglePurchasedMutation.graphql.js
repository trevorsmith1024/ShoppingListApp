/**
 * @generated SignedSource<<49ffdcdd07c629f0e4601197c049f4a8>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type EditShoppingListItemInput = {|
  id: string,
  name: string,
  description: string,
  count: number,
  purchased: boolean,
|};
export type ShoppingListItemTogglePurchasedMutation$variables = {|
  input: EditShoppingListItemInput,
|};
export type ShoppingListItemTogglePurchasedMutationVariables = ShoppingListItemTogglePurchasedMutation$variables;
export type ShoppingListItemTogglePurchasedMutation$data = {|
  +editShoppingListItem: {|
    +id: string,
    +purchased: boolean,
  |},
|};
export type ShoppingListItemTogglePurchasedMutationResponse = ShoppingListItemTogglePurchasedMutation$data;
export type ShoppingListItemTogglePurchasedMutation = {|
  variables: ShoppingListItemTogglePurchasedMutationVariables,
  response: ShoppingListItemTogglePurchasedMutation$data,
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
    "name": "editShoppingListItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "purchased",
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
    "name": "ShoppingListItemTogglePurchasedMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShoppingListItemTogglePurchasedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4e9c018a5d63afe8ab3f3556d9c303c3",
    "id": null,
    "metadata": {},
    "name": "ShoppingListItemTogglePurchasedMutation",
    "operationKind": "mutation",
    "text": "mutation ShoppingListItemTogglePurchasedMutation(\n  $input: EditShoppingListItemInput!\n) {\n  editShoppingListItem(input: $input) {\n    id\n    purchased\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "b5f6956019cd18170febc44d6a6c5a31";

module.exports = ((node/*: any*/)/*: Mutation<
  ShoppingListItemTogglePurchasedMutation$variables,
  ShoppingListItemTogglePurchasedMutation$data,
>*/);
