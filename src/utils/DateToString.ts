export default function(time: Date): string {
    const dateOnly = time.getUTCHours() === 0 && time.getUTCMinutes() === 0 && time.getUTCSeconds() === 0;
    const datetimeString = time.toLocaleString("zh-CN", {
      timeZone: "Asia/Shanghai",
      timeZoneName: "long",
    });
    const dateOnlyString = time.toLocaleDateString("zh-CN", {
      timeZone: "Asia/Shanghai",
      timeZoneName: "long",
    });
    return dateOnly ? dateOnlyString : datetimeString;
  }