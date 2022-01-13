/**
 * @generated SignedSource<<3a10228ee3639f9ea3f98b932c4587e6>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type ShoppingListItem_item$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type ShoppingList_list$fragmentType: FragmentType;
export type ShoppingList_list$ref = ShoppingList_list$fragmentType;
export type ShoppingList_list$data = {|
  +shoppingList: $ReadOnlyArray<{|
    +id: string,
    +$fragmentSpreads: ShoppingListItem_item$fragmentType,
  |}>,
  +$fragmentType: ShoppingList_list$fragmentType,
|};
export type ShoppingList_list = ShoppingList_list$data;
export type ShoppingList_list$key = {
  +$data?: ShoppingList_list$data,
  +$fragmentSpreads: ShoppingList_list$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShoppingList_list",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ShoppingListItem",
      "kind": "LinkedField",
      "name": "shoppingList",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ShoppingListItem_item"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};

(node/*: any*/).hash = "ef37aadaf0c05be958d77aa35e3f3c3b";

module.exports = ((node/*: any*/)/*: Fragment<
  ShoppingList_list$fragmentType,
  ShoppingList_list$data,
>*/);
