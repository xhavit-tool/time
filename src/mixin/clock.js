import urijs from 'urijs';
import { time, getWindowSize } from '../util';

export default {
    data() {
        const { color, bgcolor } = urijs(window.location.href).query(true);

        return {
            window: getWindowSize(),
            color: color ? `#${color}` : '#000000',
            backgroundColor: bgcolor ? `#${bgcolor}` : '#ffffff',
        };
    },
    beforeCreate() {
        this.$$clock = {
            getWindowSize: () => {
                this.window = getWindowSize();
            },
            cancelTimer: time({
                step: 1000,
                callbackEvery: () => {
                    this.setClock && this.setClock();
                },
            }),
        };

        // 获取窗口大小
        this.$$clock.getWindowSize();
        window.addEventListener('resize', this.$$clock.getWindowSize);
    },
    beforeDestroy() {
        this.$$clock.cancelTimer();
        window.removeEventListener('resize', this.$$clock.getWindowSize);
        this.$$clock = null;
    },
    methods: {
        setClock() {
            this.clock = this.getClock();
        },
    },
};
