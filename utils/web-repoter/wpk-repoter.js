import wpkReporter from 'wpk-reporter' // 导入基础sdk
export function initWpkReporter() {
  const __wpk = new wpkReporter({
    bid: 'f4lk9dwi-liptdp1w', // 新建应用时确定
    spa: true,  // 单页应用开启后，可更准确地采集PV
    plugins: []
  })
  __wpk.installAll() // 初始化sdk 必须调用
}



