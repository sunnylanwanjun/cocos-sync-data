import { CurveRange } from '../curve-range';

export enum ShapeType {
    Box,
    Circle,
    Cone,
    Sphere,
    Hemisphere,
};


export enum EmitLocation {
    Base,
    Edge,
    Shell,
    Volume,
};


export enum ArcMode {
    Random,
    Loop,
    PingPong,
};


export class ShapeData {
    shapeType = ShapeType.Cone;

    emitFrom = EmitLocation.Volume;
    alignToDirection = false;

    randomDirectionAmount = 0;
    sphericalDirectionAmount = 0;

    randomPositionAmount = 0;
    radius = 1;
    radiusThickness = 1;
    arcMode = ArcMode.Random;

    arcSpread = 0;
    arcSpeed = new CurveRange();

    length = 5;

    boxThickness: IVec3;
    position: IVec3;
    rotation: IVec3;

    scale: IVec3;
    arc = 0;
    angle = 0;
}
