import { SyncAsyncAssetData } from './async-asset';

export class SyncSkeletonData extends SyncAsyncAssetData {
    __type__ = 'cc.Skeleton';

    root: string;
    bones: string[] = [];
    bindposes: string[] = [];
}
