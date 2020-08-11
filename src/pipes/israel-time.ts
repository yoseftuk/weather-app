// gives time in israel timezone

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const pad = (n: number) => String(n).padStart(2, '0');
export const israelTime = (timezoneOffset: number)  => {
   const d = new Date();
   d.setSeconds(d.getMinutes() + d.getTimezoneOffset() * 60 + timezoneOffset);
   return `${days[d.getDay()]}, ${pad(d.getHours())}:${pad(d.getMinutes())}`;
} ;
