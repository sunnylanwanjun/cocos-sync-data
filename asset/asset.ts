import { SyncDataBase } from '../data-base';

export abstract class SyncAssetData extends SyncDataBase {
    abstract __type__ = '';
    __uuid__ = '';

    path = '';
    srcPath = ''; // absolute path

    shouldCheckSrc = true;
    virtualAsset = false;
    virtualAssetPath = '';

    // only in creator
    asset: /*Asset |*/ undefined | null;

    dstPath = '';
    dstUrl = '';
};
