import { SyncAssetData } from "./asset";

export class SyncSkeletonData extends SyncAssetData {
    __type__ = 'cc.Skeleton';

    root: string;
    bones: string[] = [];
    bindposes: string[] = [];
}
