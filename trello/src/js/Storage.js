export const storage = {
   
   getDataByKey: function (key) {
     if (localStorage.getItem(key) !== null) {
       return JSON.parse(localStorage.getItem(key));
     } else {
       return [];
     }
   },
   
   pushDataByKey: function (key, data) {
     let dataByKey = this.getDataByKey(key);
     dataByKey.push(data);
     localStorage.setItem(key, JSON.stringify(dataByKey));
   },
 };