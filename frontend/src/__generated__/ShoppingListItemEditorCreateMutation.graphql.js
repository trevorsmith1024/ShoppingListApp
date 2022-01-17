/**
 * @generated SignedSource<<a9c9db09f63af153e5078c1b7ad7fe48>>
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
  purchased: boolean,
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
    +purchased: boolean,
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
    "cacheID": "49a22a715d36e49f1160e087d4298fab",
    "id": null,
    "metadata": {},
    "name": "ShoppingListItemEditorCreateMutation",
    "operationKind": "mutation",
    "text": "mutation ShoppingListItemEditorCreateMutation(\n  $input: CreateShoppingListItemInput\n) {\n  createShoppingListItem(input: $input) {\n    id\n    name\n    description\n    count\n    purchased\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "6542e8edfbe7673007147aaa736517a3";

module.exports = ((node/*: any*/)/*: Mutation<
  ShoppingListItemEditorCreateMutation$variables,
  ShoppingListItemEditorCreateMutation$data,
>*/);
