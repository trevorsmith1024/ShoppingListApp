/**
 * @generated SignedSource<<b6c5aeae8274f9087180873aa7eef575>>
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
export type ShoppingListItemEditorEditMutation$variables = {|
  input: EditShoppingListItemInput,
|};
export type ShoppingListItemEditorEditMutationVariables = ShoppingListItemEditorEditMutation$variables;
export type ShoppingListItemEditorEditMutation$data = {|
  +editShoppingListItem: {|
    +name: string,
    +description: string,
    +count: number,
    +purchased: boolean,
  |},
|};
export type ShoppingListItemEditorEditMutationResponse = ShoppingListItemEditorEditMutation$data;
export type ShoppingListItemEditorEditMutation = {|
  variables: ShoppingListItemEditorEditMutationVariables,
  response: ShoppingListItemEditorEditMutation$data,
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "purchased",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShoppingListItemEditorEditMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ShoppingListItem",
        "kind": "LinkedField",
        "name": "editShoppingListItem",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ShoppingListItemEditorEditMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ShoppingListItem",
        "kind": "LinkedField",
        "name": "editShoppingListItem",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "3143d130c4d2f0bc8a4523736901c81a",
    "id": null,
    "metadata": {},
    "name": "ShoppingListItemEditorEditMutation",
    "operationKind": "mutation",
    "text": "mutation ShoppingListItemEditorEditMutation(\n  $input: EditShoppingListItemInput!\n) {\n  editShoppingListItem(input: $input) {\n    name\n    description\n    count\n    purchased\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "6ccca22d2f22398b7d32d799067b1212";

module.exports = ((node/*: any*/)/*: Mutation<
  ShoppingListItemEditorEditMutation$variables,
  ShoppingListItemEditorEditMutation$data,
>*/);
