/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';


import { NodeCachedDataCleaner } from 'vs/code/electron-browser/contrib/nodeCachedDataCleaner';
import { IInstantiationService } from 'vs/platform/instantiation/common/instantiation';

export function createSharedProcessContributions(service: IInstantiationService): void {
	service.createInstance(NodeCachedDataCleaner);
}
