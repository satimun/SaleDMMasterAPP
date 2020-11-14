import Vue from 'vue'
import swal from 'sweetalert'

//------- Dialog -------//
/* export function AlertMessage(type, msg = '') {
  return new Promise((resolve, reject) => {
    msg = msg ? msg : ' ';
    swal(type, msg, type.toLowerCase()).then((ok) => {
      resolve(ok);
    });
  })
}; */

export function AlertMessage (type, msg = '') {
    let time = 5000;
    if (type == 'S' || type.toLowerCase() == 'success') {
        type = 'success';
    } else if (type == 'F' || type.toLowerCase() == 'error') {
        type = 'error';
        time = 60000;
    }
    Vue.notify({
        type: type,
        title: type.toUpperCase(),
        duration: time,
        text: msg
    })
};

export function ConfirmDialog (title, msg, dangerMode) {
    return new Promise((resolve, reject) => {
        swal({
            title: title,
            text: msg,
            icon: "warning",
            buttons: true,
            dangerMode: dangerMode
        })
            .then((ok) => {
                resolve(ok);
            });
    })
};

//------- Object -------//
export function Copy (src) {
    return JSON.parse(JSON.stringify(src));
}

export function ObjCopy (src) {
    return JSON.parse(JSON.stringify(src));
};

export function ObjArrDel (obj, indexDel) {
    for (var i = indexDel.length - 1; i >= 0; i--) {
        obj.splice(indexDel[i], 1);
    }
};
export function ObjArrSort (objArr, key, direction = 'asc') {
    direction = direction == 'asc' ? '>' : '<';
    let sort = "a.".concat(key, ' ', direction, ' ', 'b.', key, ' ? ', '1', ' : ', 'a.', key, ' == ', 'b.', key, ' ? ', '0', ' : ', '-1');
    sort = eval("(a, b) => { return " + sort + " }");
    return objArr.sort(sort);
}

export function ObjResetValue (obj) {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            obj[key] = {};
        } else {
            obj[key] = null;
        }
    });
};

export function ObjClearValue (obj) {
    if (typeof obj === 'object' && obj !== null) {
        Object.keys(obj).forEach(key => {
            if (!ObjClearValue(obj[key])) {
                obj[key] = null;
            }
        });
        return true;
    }
    return false;
};

/*export function GetObjVal(keys, obj) { //keys ex : 'a.b.c'
  let objtmp = Copy(obj);
  keys.split('.').forEach((t) => {
    if (objtmp) {
      objtmp = objtmp[t];
    } else { objtmp = null; }
  });
  return objtmp;
}*/

export function GetObjVal (object, path, defaultValue) {
    /* path = path + ''; */
    defaultValue = typeof defaultValue === "undefined" ? null : defaultValue;
    let obj = object ? object : {};
    if (path.trim() != "") {
        let keys = path.split(".");
        keys.forEach(function (key) {
            if (
                obj !== null &&
                typeof obj[key] !== "undefined" &&
                obj[key] !== null
            ) {
                obj = obj[key];
            } else {
                obj = defaultValue;
                return;
            }
        });
    }
    return obj;
}

export function SetObjVal (obj, keys, value) { // set(['a', 'b', 'c'], 1)  =  { a: { b: { c: 1 } } }
    obj = obj || {};
    keys = typeof keys === 'string' ? keys.match(/\w+/g) : Array.prototype.slice.apply(keys);
    keys.reduce((obj, key, index) => {
        obj[key] = index === keys.length - 1 ? value : typeof obj[key] === 'object' && obj !== null ? obj[key] : {};
        return obj[key];
    }, obj);
    return obj;
}

//------- date time -------//
export function addZero (i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};

export function CreateDateTime (str) {
    if (!str) {
        return null;
    } else {
        return new Date(str);
    }
};

export function GetDateView (str) {
    let d = CreateDateTime(str);
    if (d !== null) {
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    }
    return "";
}

export function GetDateTimeFormat (str, _format) {
    let d;


    //console.log(str);

    if (str == null) {
        d = new Date();
    } else {
        d = CreateDateTime(str);
    }


    if (d !== null) {

        let yyyy = d.getFullYear();
        let VALUES = yyyy.toString();
        let yy = VALUES.substring(2, 4);


        let mm = addZero((d.getMonth() + 1));
        let dd = addZero(d.getDate());

        let h = addZero(d.getHours());
        let m = addZero(d.getMinutes());
        let s = addZero(d.getSeconds());
        //var n = d.getMilliseconds();




        if (_format == "DDMMYYYY") { //DD/MM/YYYY hh:mm:ss
            return dd + '/' + mm + '/' + yyyy;

        } else if (_format == "DDMMYYHHMMSS") { //DD/MM/YYYY hh:mm:ss
            return dd + '/' + mm + '/' + yy + ' ' + h + ':' + m + ':' + s;

        } else if (_format == "DDMMYYHHMM") { //DD/MM/YYYY hh:mm:ss
            return dd + '/' + mm + '/' + yy + ' ' + h + ':' + m;


        } else if (_format == "MMDDYYYY") { //DD/MM/YYYY hh:mm:ss
            return mm + '/' + dd + '/' + yyyy;

        } else if (_format == "HHMM") { //DD/MM/YYYY hh:mm:ss
            return h + ':' + m;


        } else if (_format == "YYYY") { //DD/MM/YYYY hh:mm:ss
            return yyyy;
        } else if (_format == "MM") { //DD/MM/YYYY hh:mm:ss
            return mm;
        } else {
            //YYYY-MM-DD hh:mm:ss     

            return yyyy + '-' + mm + '-' + dd + ' ' + h + ':' + m + ':' + s;
        }
    }
    return "";
}

export function GetDateTime (d) {
    /*if (angular.isDate(d)) { return d.getTime(); }
    else return null;*/
};

export function GetCodeDes (value) {
    if (value) {
        if (value.code != null && value.description != null) {
            return value.code.trim() + " : " + value.description.trim();
        } else if (value.code != null) {
            return value.code.trim();
        } else if (value.description != null) {
            return value.description.trim();
        }
    }
    return "";
};

export function GetIdDes (value) {
    if (value) {
        if (value.id != null && value.description != null) {
            return value.id.trim() + " : " + value.description.trim();
        } else if (value.id != null) {
            return value.id.trim();
        } else if (value.description != null) {
            return value.description.trim();
        }
    }
    return "";
};

export function GetObjArr (obj, keys) {
    if (Array.isArray(obj)) {
        if (keys) return obj.map(x => GetObjVal(x, keys));
        else return obj;
    }
    if (keys) return GetObjVal(obj, keys) ? [GetObjVal(obj, keys)] : [];
    return [obj];
};

export function GetArrObj (arr, keys) {
    if (Array.isArray(arr)) {
        if (keys) return arr.map(x => GetObjVal(x, keys));
        else return arr[arr.length - 1];
    }
    if (keys) return GetObjVal(arr, keys);
    return arr;
};

export function GetLastUpdate (obj) {
    return GetDateView(obj.timestamp) + " - " + obj.updateBy;
};



export function formatDate (date) {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var monthNum = [
        "01", "02", "03",
        "04", "05", "06", "07",
        "08", "09", "10",
        "11", "11"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + '/' + monthNum[monthIndex] + '/' + year;
};



export function addTag (name, attributes, sync) {
    let headEl = document.getElementsByTagName('head')[0];
    let el = document.createElement(name),
        attrName;
    for (attrName in attributes) {
        el.setAttribute(attrName, attributes[attrName]);
    }
    sync ? document.write(outerHTML(el)) : headEl.appendChild(el);
};


export function IsNull (val) {
    return val === undefined || val === '' || ''.concat(val).trim() === '' || val === null;
}

export function Round (num, places = 0) {
    return +(Math.round(num + "e+" + places) + "e-" + places);
};