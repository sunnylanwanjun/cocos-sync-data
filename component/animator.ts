import { SyncComponentData } from "./component";

export class SyncAnimatorData extends SyncComponentData {
    __type__ = 'sync.AnimatorComponent';

    clips: string[] = [];
    avatarMap: string[] = [];
}
