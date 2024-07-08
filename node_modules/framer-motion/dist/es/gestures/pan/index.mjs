import { PanSession } from './PanSession.mjs';
import { addPointerEvent } from '../../events/add-pointer-event.mjs';
import { Feature } from '../../motion/features/Feature.mjs';
import { noop } from '../../utils/noop.mjs';

class PanGesture extends Feature {
    constructor() {
        super(...arguments);
        this.removePointerDownListener = noop;
    }
    onPointerDown(pointerDownEvent) {
        this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
    }
    createPanHandlers() {
        const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
        return {
            onSessionStart: onPanSessionStart,
            onStart: onPanStart,
            onMove: onPan,
            onEnd: (event, info) => {
                delete this.session;
                onPanEnd && onPanEnd(event, info);
            },
        };
    }
    mount() {
        this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener();
        this.session && this.session.end();
    }
}

export { PanGesture };
