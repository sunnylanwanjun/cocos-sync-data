import { SyncAssetData } from './asset';
import { SyncAsyncAssetData } from './async-asset';

export enum ImageDataFormat {
    RGBA,
    RGBE,
}

export enum TextureType {
    Texture,
    Cube,
}

export class SyncTextureMipmapDetail {
    width = 0;
    height = 0;
    datas: number[] = [];
    dataPath = '';
    rawDataPath = '';
}

export class SyncTextureDataDetail {
    format = ImageDataFormat.RGBA;
    scale = 1;
    mipmaps: SyncTextureMipmapDetail[] = [];
}

export class SyncTextureData extends SyncAsyncAssetData {
    __type__ = 'cc.Texture'

    type = TextureType.Texture;
    mipmapCount = 1;
    detail: SyncTextureDataDetail | undefined;
}
