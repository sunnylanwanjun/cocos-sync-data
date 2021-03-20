import { SyncAssetData } from './asset';

export enum ShaderType {
    Standard,
    ShaderGraph,
    Custom,
    Source,
}

export class SyncShaderData extends SyncAssetData {
    __type__ = 'cc.Shader';

    shaderType: ShaderType = ShaderType.Source;
    source = ''
}
