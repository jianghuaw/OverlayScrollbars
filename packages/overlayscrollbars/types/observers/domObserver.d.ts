declare type TruthyOrFalsy = boolean | '' | 0 | null | undefined;
declare type StringNullUndefined = string | null | undefined;
export declare type DOMObserverEventContentChange = Array<[StringNullUndefined, ((elms: Node[]) => string) | StringNullUndefined] | null | undefined> | false | '' | null | undefined;
export declare type DOMObserverIgnoreContentChange = (mutation: MutationRecord, isNestedTarget: TruthyOrFalsy, domObserverTarget: HTMLElement, domObserverOptions: DOMObserverOptions | undefined) => TruthyOrFalsy;
export declare type DOMObserverIgnoreTargetAttrChange = (target: Node, attributeName: string, oldAttributeValue: string | null, newAttributeValue: string | null) => TruthyOrFalsy;
export interface DOMObserverOptions {
    _observeContent?: boolean;
    _attributes?: string[];
    _styleChangingAttributes?: string[];
    _eventContentChange?: DOMObserverEventContentChange;
    _nestedTargetSelector?: string;
    _ignoreTargetAttrChange?: DOMObserverIgnoreTargetAttrChange;
    _ignoreContentChange?: DOMObserverIgnoreContentChange;
}
export interface DOMObserver {
    _disconnect: () => void;
    _updateEventContentChange: (newEventContentChange?: DOMObserverEventContentChange) => void;
    _update: () => void;
}
export declare const createDOMObserver: (target: HTMLElement, callback: (targetChangedAttrs: string[], targetStyleChanged: boolean, contentChanged: boolean) => any, options?: DOMObserverOptions | undefined) => DOMObserver;
export {};
