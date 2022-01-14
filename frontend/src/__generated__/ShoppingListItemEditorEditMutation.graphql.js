/**
 * @generated SignedSource<<8c6267d69ec467c9b31d28a990ddf3b7>>
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
export type ShoppingListItemEditorEditMutation$variables = {|
  input: EditShoppingListItemInput,
|};
export type ShoppingListItemEditorEditMutationVariables = ShoppingListItemEditorEditMutation$variables;
export type ShoppingListItemEditorEditMutation$data = {|
  +editShoppingListItem: {|
    +name: string,
    +description: string,
    +count: number,
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
    "cacheID": "eb5d1433a23a1d0d0d138a9037ac1b71",
    "id": null,
    "metadata": {},
    "name": "ShoppingListItemEditorEditMutation",
    "operationKind": "mutation",
    "text": "mutation ShoppingListItemEditorEditMutation(\n  $input: EditShoppingListItemInput!\n) {\n  editShoppingListItem(input: $input) {\n    name\n    description\n    count\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "e75c63f1b9695447779bd0e88dc07db7";

module.exports = ((node/*: any*/)/*: Mutation<
  ShoppingListItemEditorEditMutation$variables,
  ShoppingListItemEditorEditMutation$data,
>*/);
