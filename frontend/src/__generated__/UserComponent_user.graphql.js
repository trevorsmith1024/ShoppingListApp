/**
 * @generated SignedSource<<12ea146bff16d2fa0064f95b522be819>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type UserComponent_user$fragmentType: FragmentType;
export type UserComponent_user$ref = UserComponent_user$fragmentType;
export type UserComponent_user$data = {|
  +name: ?string,
  +$fragmentType: UserComponent_user$fragmentType,
|};
export type UserComponent_user = UserComponent_user$data;
export type UserComponent_user$key = {
  +$data?: UserComponent_user$data,
  +$fragmentSpreads: UserComponent_user$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserComponent_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node/*: any*/).hash = "17634a4bf39242530775953e424d103b";

module.exports = ((node/*: any*/)/*: Fragment<
  UserComponent_user$fragmentType,
  UserComponent_user$data,
>*/);
