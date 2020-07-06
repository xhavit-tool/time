/**
 * 计时
 * @param {Object} param0 step: 步进毫秒数，callbackEvery：每一个步进执行一次的回调函数
 */
export function time({ step, callbackEvery }) {
    const startTime = new Date().getTime();
    let times = 0;
    let timer = null;

    loop();

    function loop() {
        const rightTime = step * times;
        const nowTime = new Date().getTime() - startTime;
        // 修复误差后的步进时间
        let fixedStep = Math.max(0, step - (nowTime - rightTime));

        console.log(times, nowTime, fixedStep);

        timer = setTimeout(() => {
            times++;
            callbackEvery && callbackEvery();
            loop();
        }, fixedStep);
    }

    return () => {
        clearTimeout(timer);
    };
}

/**
 * 获取当前浏览器尺寸
 */
export function getWindowSize() {
    const win = window;
    const docEle = document.documentElement;
    const body = document.body;
    const width = win.innerWidth || docEle.clientWidth || body.clientWidth;
    const height = win.innerHeight || docEle.clientHeight || body.clientHeight;

    return { width, height };
}
