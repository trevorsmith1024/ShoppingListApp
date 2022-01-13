/**
 * @generated SignedSource<<2f2ad99eae19a42c02670dcb3b4f3dd8>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type ShoppingListItem_item$fragmentType: FragmentType;
export type ShoppingListItem_item$ref = ShoppingListItem_item$fragmentType;
export type ShoppingListItem_item$data = {|
  +name: ?string,
  +description: ?string,
  +count: ?number,
  +$fragmentType: ShoppingListItem_item$fragmentType,
|};
export type ShoppingListItem_item = ShoppingListItem_item$data;
export type ShoppingListItem_item$key = {
  +$data?: ShoppingListItem_item$data,
  +$fragmentSpreads: ShoppingListItem_item$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ShoppingListItem_item",
  "selections": [
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
  "type": "ShoppingListItem",
  "abstractKey": null
};

(node/*: any*/).hash = "40a6689f80fa7558ab919baa713ea855";

module.exports = ((node/*: any*/)/*: Fragment<
  ShoppingListItem_item$fragmentType,
  ShoppingListItem_item$data,
>*/);
