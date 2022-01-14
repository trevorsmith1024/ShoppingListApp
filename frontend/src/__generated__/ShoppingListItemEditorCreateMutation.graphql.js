/**
 * @generated SignedSource<<1d76eb863f35ccc214cc17dae5cf4bb8>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateShoppingListItemInput = {|
  name: string,
  description: string,
  count: number,
|};
export type ShoppingListItemEditorCreateMutation$variables = {|
  input?: ?CreateShoppingListItemInput,
|};
export type ShoppingListItemEditorCreateMutationVariables = ShoppingListItemEditorCreateMutation$variables;
export type ShoppingListItemEditorCreateMutation$data = {|
  +createShoppingListItem: {|
    +id: string,
    +name: string,
    +description: string,
    +count: number,
  |},
|};
export type ShoppingListItemEditorCreateMutationResponse = ShoppingListItemEditorCreateMutation$data;
export type ShoppingListItemEditorCreateMutation = {|
  variables: ShoppingListItemEditorCreateMutationVariables,
  response: ShoppingListItemEditorCreateMutation$data,
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
    "name": "createShoppingListItem",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "count",
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
    "name": "ShoppingListItemEditorCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShoppingListItemEditorCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "12b551d828e89336953220bc9132ded8",
    "id": null,
    "metadata": {},
    "name": "ShoppingListItemEditorCreateMutation",
    "operationKind": "mutation",
    "text": "mutation ShoppingListItemEditorCreateMutation(\n  $input: CreateShoppingListItemInput\n) {\n  createShoppingListItem(input: $input) {\n    id\n    name\n    description\n    count\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "0ba462c17e3891f6c8e8a11eb30ed180";

module.exports = ((node/*: any*/)/*: Mutation<
  ShoppingListItemEditorCreateMutation$variables,
  ShoppingListItemEditorCreateMutation$data,
>*/);
