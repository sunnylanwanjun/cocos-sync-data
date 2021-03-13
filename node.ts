import { SyncComponentData } from './component/component';
import { SyncDataBase } from './data-base';

export class SyncNodeData extends SyncDataBase {
    __type__ = 'cc.Node';

    name = '';
    uuid = '';

    position: IVec3 | undefined;
    scale: IVec3 | undefined;
    eulerAngles: IVec3 | undefined;
    rotation: IQuat | undefined;

    children: (SyncNodeData | string)[] = [];
    components: (SyncComponentData | string)[] = [];

    needMerge: boolean = false;

    // only in creator
    parentIndex = -1;
    node: /*Node |*/ undefined;

    mergeToNodeIndex = -1;
    matrix: IMat4 | undefined;
}
