import { SyncAsyncAssetData } from './async-asset';

export enum ShaderType {
    Standard,
    ShaderGraph,
    Custom,
    Source,
}

export class SyncShaderData extends SyncAsyncAssetData {
    __type__ = 'cc.Shader';

    shaderType: ShaderType = ShaderType.Source;
    source = ''
}
