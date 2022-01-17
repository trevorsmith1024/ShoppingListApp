/**
 * @generated SignedSource<<513e9b2b8caa6f6968dc32ed5f69cb80>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type ShoppingListItemEditor_item$fragmentType = any;
import type { FragmentType } from "relay-runtime";
declare export opaque type ShoppingListItem_item$fragmentType: FragmentType;
export type ShoppingListItem_item$ref = ShoppingListItem_item$fragmentType;
export type ShoppingListItem_item$data = {|
  +name: string,
  +description: string,
  +$fragmentSpreads: ShoppingListItemEditor_item$fragmentType,
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ShoppingListItemEditor_item"
    }
  ],
  "type": "ShoppingListItem",
  "abstractKey": null
};

(node/*: any*/).hash = "24dcbb670db7f636739fbb4525e7053f";

module.exports = ((node/*: any*/)/*: Fragment<
  ShoppingListItem_item$fragmentType,
  ShoppingListItem_item$data,
>*/);
