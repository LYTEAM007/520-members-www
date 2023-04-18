export const getUrlParams = (url = location.href) => {
  let Params = {}
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    Params[key] = value
  })
  return Params
}

export const setUrlParams = (oldUrl = location.href, data) => {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  url = url.substring(1) || ''
  oldUrl += (oldUrl.indexOf('?') < 0 ? '?' : '&')
  return oldUrl + url
}

export const getQueryString = (name, url = location.href) => {
  name = name.replace(/[\\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export const _getQueryString = (name, url = location.href) => {
  let queryJson = {}
  let search = url.match(/\?[^#/]+/)
  search = search
    ? search[0].replace('?', '')
    : ''
  if (search) {
    let queryArr = search.split('&')
    queryArr.forEach(item => {
      let eachQuery = item.split('=')
      queryJson[eachQuery[0]] = eachQuery[1]
    })
  }
  if (typeof name === 'string' && name.trim() !== '') {
    return queryJson[name]
  }
  return queryJson
}

// js处理css浏览器前缀
export const prefixStyle = (attr) => {
  let elementStyle = document.createElement("div").style;
  let vendorList = [
    `webkit${abcToAbc(attr)}`,
    `Moz${abcToAbc(attr)}`,
    `O${abcToAbc(attr)}`,
    `ms${abcToAbc(attr)}`,
    attr
  ];
  for (let i = 0, len = vendorList.length; i < len; i++) {
    let vendorKey = vendorList[i];
    //如果浏览器支持该属性，则返回改属性
    if (elementStyle[vendorKey] !== undefined) {
      return vendorKey;
    }
  }
}
// 首字母转大写
export const abcToAbc = (str) => {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

export function _debounce(func, delay) {

  let delayTime = delay || 1000;
  let timer
  return function () {
    let _ = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(function () {
      timer = null;
      func.apply(_, args)
    }, delayTime);
  }
}

export function countDownFun(time) {
  let nowTime = new Date().getTime(); //现在时间
  if (nowTime < time) {
    //获取时间差
    let timeDiff = Math.round((time - nowTime) / 1000);
    //获取还剩多少天
    let day = parseInt(timeDiff / 3600 / 24);
    //获取还剩多少小时
    let hour = parseInt((timeDiff / 3600) % 24);
    //获取还剩多少分钟
    let minute = parseInt((timeDiff / 60) % 60);
    //获取还剩多少秒
    let second = timeDiff % 60;
    return day + "天" + hour + "时" + minute + "分" + second + "秒";
  } else {
    return "00:00:00";
  }
}

export function formatMoney(money) {
  const val = String(money).split('.')[1]
  if (val === '00') {
    return Number(money)
  }
  return money
}

export function dateFormat(fmt, date) {
  let ret;
  if (!date) {
    date = new Date()
  }
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g, '/'))
  }
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}

// 获取分页数据
export function getPaginationContents (sourceList, size, pageIndex) {
  if (sourceList.length) {
    const startNum = (pageIndex - 1) * size
    const endNum = startNum + size
    return sourceList.slice(startNum, endNum)
  }
  return []
}

// 数字千位数加,
export function toThousands (num) {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}
