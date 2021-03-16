import { SyncComponentData } from "./component";

export abstract class SyncLightData extends SyncComponentData {
    intensity = 1;
    color: number[] = [];
}


export class SyncDirectionLightData extends SyncLightData {
    __type__ = 'cc.DirectionalLight'

    temperature = 6500;
    useTemperature = false;
}

export class SyncSphereLightData extends SyncLightData {
    __type__ = 'cc.SphereLight'

    range = 0;
    size = 0;
}

export class SyncSpotLightData extends SyncSphereLightData {
    __type__ = 'cc.SpotLight'

    spotAngle = 0;
}
