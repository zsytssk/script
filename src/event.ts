/** 每一个event的数据 */
export type EventData = Set<{
    caller: any;
    callback: Func<any>;
    once?: boolean;
    off?: () => void;
}>;

/**
 * 事件订阅发布构造函数
 */
export default class Observer {
    protected events: Map<string, EventData> = new Map();

    /**
     * 注册监听
     * @param event
     * @param callback
     * @param caller
     */
    public on(
        event: string,
        callback: Func<any>,
        caller?: any,
        once?: boolean,
    ) {
        let events: EventData = new Set();
        if (this.events.has(event)) {
            events = this.events.get(event) as EventData;
        } else {
            this.events.set(event, events);
        }

        for (const temp of events) {
            if (caller === temp.caller && callback === temp.callback) {
                return;
            }
        }
        const off = () => {
            this.off(event, callback, caller);
        };

        events.add({ caller, callback, once, off });
    }
    public getBind(event: string) {
        return this.events.get(event);
    }

    /**
     * 取消监听，如果没有传 callback 或 caller，那么就删除所对应的所有监听
     * @param event
     * @param callback
     * @param caller
     */
    public off(event: string, callback?: Func<any>, caller?: any) {
        if (!this.events.has(event)) {
            return;
        }
        const events = this.events.get(event) as EventData;
        for (const item of events) {
            if (item.callback === callback && item.caller === caller) {
                events.delete(item);
                break;
            }
        }
    }
    public offAllCaller(caller: any) {
        for (const events_item of this.events.values()) {
            for (const item of events_item) {
                if (item.caller === caller) {
                    events_item.delete(item);
                }
            }
        }
    }
    /**
     * 发布消息
     * @param event
     * @param data
     */
    public emit(event: string, ...params: any[]) {
        if (this.events.has(event)) {
            const events = this.events.get(event) as EventData;
            for (const event_data of events) {
                const { callback, once, off } = event_data;
                if (typeof callback === 'function') {
                    callback.apply(event_data.caller, [...params]);
                }
                if (once && off) {
                    off();
                }
            }
        }
    }
    public clear() {
        this.events = new Map();
    }
}
