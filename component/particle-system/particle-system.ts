import { SyncComponentData } from '../component';
import { SimulationSpace } from './common';
import { CurveRange } from './curve-range';
import { GradientRange } from './gradient-range';

import { ColorOvertimeData } from './module/color-overtime';
import { EmissionData } from './module/emission';
import { ForceOvertimeData } from './module/force-overtime';
import { VelocityOvertimeData } from './module/velocity-overtime';
import { LimitVelocityOvertimeData } from './module/limit-velocity-overtime';
import { ShapeData } from './module/shape';
import { SizeOvertimeData } from './module/size-overtime';
import { RendererData } from './module/renderer';
import { RotationOvertimeData } from './module/rotation-overtime';

export class SyncParticleModules {
    colorOvertime: ColorOvertimeData | undefined;
    emission: EmissionData | undefined;
    forceOvertime: ForceOvertimeData | undefined;
    limitVelocityOvertime: LimitVelocityOvertimeData | undefined;
    renderer: RendererData | undefined;
    rotationOvertime: RotationOvertimeData | undefined;
    shape: ShapeData | undefined;
    sizeOvertime: SizeOvertimeData | undefined;
    velocityOvertime: VelocityOvertimeData | undefined;
}

export class MainData {
    duration = 5.0;
    loop = true;
    playOnAwake = true;
    capcity = 100;

    prewarm = false;

    simulationSpace = SimulationSpace.Local;
    simulationSpeed = 1.0;

    startDelay: CurveRange | undefined;
    startLifetime: CurveRange | undefined;

    startColor = new GradientRange();
    scaleSpace = SimulationSpace.Local;

    startSize3D = false;
    startSizeX = new CurveRange();
    startSizeY = new CurveRange();
    startSizeZ = new CurveRange();

    startSpeed = new CurveRange();

    startRotation3D = false;
    startRotationX = new CurveRange();
    startRotationY = new CurveRange();
    startRotationZ = new CurveRange();

    gravityModifier = new CurveRange();
}

export class SyncParticleSystemData extends SyncComponentData {
    __type__ = 'cc.ParticleSystem'

    main: MainData | undefined;
    modules = new SyncParticleModules();
}
