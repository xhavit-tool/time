<template>
    <div class="clock" :style="{ color, backgroundColor }">
        <div class="clock-main">
            <div class="clock-time" :style="{ fontSize: timeFontSize }">
                {{ clock.hourStr
                }}<span class="clock-colon" :style="{ visibility: showColon }"
                    >:</span
                >{{ clock.minuteStr }}
            </div>
            <div class="clock-date" :style="{ fontSize: dateFontSize }">
                {{ clock.dateStr }}
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs';
import clock from '../mixin/clock';

export default {
    mixins: [clock],
    data() {
        return {
            clock: this.getClock(),
        };
    },
    computed: {
        timeFontSize() {
            return this.calcFontSize(1);
        },
        dateFontSize() {
            return this.calcFontSize(0.2);
        },
        showColon() {
            return this.clock.second % 2 ? 'hidden' : 'visible';
        },
    },
    methods: {
        getClock() {
            const now = dayjs();
            return {
                second: now.second(),
                hourStr: now.format('HH'),
                minuteStr: now.format('mm'),
                dateStr: now.format('dddd, MMMM DD, YYYY'),
            };
        },
        calcFontSize(ratio) {
            return `${this.window.height * 0.6 * ratio}px`;
        },
    },
};
</script>

<style>
.clock {
    position: fixed;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 1;
    white-space: nowrap;
}
.clock-main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.clock-colon {
    position: relative;
    top: -0.08em;
}
.clock-date {
    position: relative;
    margin-top: 0.6em;
}
</style>
