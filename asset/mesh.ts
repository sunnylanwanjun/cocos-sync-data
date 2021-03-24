import { SyncAssetData } from './asset';
import { SyncAsyncAssetData } from './async-asset';


export class SyncSubMeshData {
    vertices: number[] = [];
    uv: number[] = [];
    uv1: number[] = [];
    normals: number[] = [];
    colors: number[] = [];
    boneWeights: number[] = [];
    tangents: number[] = [];
    joints: number[] = [];

    indices: number[] = [];
}

export class SyncMeshData extends SyncAsyncAssetData {
    __type__ = 'cc.Mesh';

    meshName = '';

    min: IVec3 | undefined;
    max: IVec3 | undefined;

    detail: SyncMeshDataDetail | undefined;
}

export class SyncMeshDataDetail {
    min: IVec3 | undefined;
    max: IVec3 | undefined;

    subMeshes: SyncSubMeshData[] = [];
}
