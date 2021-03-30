
export enum Mode {
    Blend,
    Fixed,
};

export class ColorKey {
    public color: IColor;
    public time = 0;
}

export class AlphaKey {
    public alpha = 1;
    public time = 0;
}

export class Gradient {
    public mode = Mode.Blend;

    public colorKeys = new Array<ColorKey>();
    public alphaKeys = new Array<AlphaKey>();
}
