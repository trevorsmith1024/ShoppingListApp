/**
 * @generated SignedSource<<2dea002915e17193eb2075d41659dc40>>
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
|};
export type ShoppingListItemEditorMutation$variables = {|
  input: EditShoppingListItemInput,
|};
export type ShoppingListItemEditorMutationVariables = ShoppingListItemEditorMutation$variables;
export type ShoppingListItemEditorMutation$data = {|
  +editShoppingListItem: {|
    +name: string,
    +description: string,
    +count: number,
  |},
|};
export type ShoppingListItemEditorMutationResponse = ShoppingListItemEditorMutation$data;
export type ShoppingListItemEditorMutation = {|
  variables: ShoppingListItemEditorMutationVariables,
  response: ShoppingListItemEditorMutation$data,
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ShoppingListItemEditorMutation",
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
          (v4/*: any*/)
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
    "name": "ShoppingListItemEditorMutation",
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
    "cacheID": "fd7309f58be9512021f05992621a158e",
    "id": null,
    "metadata": {},
    "name": "ShoppingListItemEditorMutation",
    "operationKind": "mutation",
    "text": "mutation ShoppingListItemEditorMutation(\n  $input: EditShoppingListItemInput!\n) {\n  editShoppingListItem(input: $input) {\n    name\n    description\n    count\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "7f33996761a6fa66423cfc02141e5276";

module.exports = ((node/*: any*/)/*: Mutation<
  ShoppingListItemEditorMutation$variables,
  ShoppingListItemEditorMutation$data,
>*/);
