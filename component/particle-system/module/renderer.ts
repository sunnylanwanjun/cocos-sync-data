
export enum RenderMode {
    Billboard,
    StrecthedBillboard,
    HorizontalBillboard,
    VerticalBillboard,
    Mesh,
};

export class RendererData {
    renderMode = RenderMode.Billboard;
    velocityScale = 1;
    lengthScale = 1;

    meshUuid = '';
    materialUuid = '';
}
