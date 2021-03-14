import { SyncAssetData } from "./asset";


export class SyncAnimationCurveData {
    name = '';
    values: number[] = [];
    path = '';
    key = 0;
}

export class SyncAnimationClipDetail {
    curves: SyncAnimationCurveData[] = [];
    keys: (number[])[] = [];
}

export class SyncAnimationClipData extends SyncAssetData {
    __type__ = 'SyncAnimationClip';

    clipName = '';
    isHuman = false;
    sample = 0;
    duration = 0;
    animName = '';
    folderName = '';
    detail: SyncAnimationClipDetail | undefined;
}
