
export enum Mode {
    Constant,
    Curve,
    TwoCurves,
    TwoConstants,
};

export class Keyframe {
    time = 0;
    value = 0;
    inTangent = 0;
    outTangent = 0;
}

export class AnimationCurve {
    keyFrames: Keyframe[] | null;
}

export class CurveRange {
    mode = Mode.Constant;

    curve: AnimationCurve | undefined;
    curveMin = new AnimationCurve();
    curveMax = new AnimationCurve();

    constant = 0;
    constantMin = 0;
    constantMax = 0;
    multiplier = 1;
}
