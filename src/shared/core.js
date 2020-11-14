import Vue from 'vue'
import axios from './instance';
import { GetObjVal, AlertMessage } from "@/shared/utils";

//Vue.use(axios)

export const mode = 0; /* 0 dev 1 prod */
//export const dbmode = 0;/*SET DB MODE  : 0 จริง 1 สำรอง  2 local*/

const url = () => {
    if (mode) return "https://kkfsaledmapi.kkfnets.com/"; /*prod http://kkfmisdevapi.kkfnets.com/     */
    else return "https://localhost:44329/"; /*dev*/
}

const urlDashboard = "https://saledmdashboard.kkfnets.com/";

export const LineTokenDoc = "Tyaj9MUnlXTtjE24t11r0mG3I1phWOenO10v2JqKjVa"; //Document
export const LineTokenTest = "ZruuWZPPew5RO13VkaSpdigin462Vd5iY6m18eRmixM"; //SaleDMDashboard Test
export const LineTokenCo = "rNSkoSnw7VarhC2pGZgJyj1au9UBK6ixWMPm2xcb8uy"; //SaleDM ประสานงานคลัง
export const LineTokenAuto = "wVtE0wLtnm7VHFmqCXqyRMdblJCUAbKD4vP7UPNB0pj"; //SaleDM คลังสำเร็จรูป
export const LineTokenDMReturn = "3OMTPB1WTk8JlT3KGCjEkKy6a86Tqexl2MsbXcv236B"; //SaleDM กลุ่มรับคืนสินค้า
export const LineTokenEXReturn = "xipMSCM8E1c1fALj2AI3YPktN9gi9SBuWW0l5XnOf0W"; //SaleDM คลังสินค้า&ผช. เซลล์ขายต่าง

export const LineTokenSaleEx = "Wemnpv9ODh2dFvvRM3ZvWxiq0QXkMec5xFMd4hMYL5W"; //คลังสินค้า&ผช. เซลล์ขายต่าง
export const LineTokenSaleDM = "CACxFDUB8uqG39VmaMUhQZv9qU4cIdG9U0ttTPdwAuc"; //DM+IT+Waerhouse


export const stickerPackageId = "2";
export const stickerId = "144";

export const stickerPackageIdST = "1";
export const stickerIdST = "114";

export const stickerPackageIdEN = "2";
export const stickerIdEN = "173";

export const TimeDelay = 3600000;
export const uploadPath = 'https://saledmdashboard.kkfnets.com/uploads/';

export function Call (o) {
    let urlx = !o.url ? url() : o.url;
    urlx = urlx + (!o.path ? '' : o.path);
    //console.log(o.url);
    //console.log(urlx);

    if (o.method.toUpperCase() === 'GET') {
        if (o.data) {
            let key = Object.keys(o.data);
            urlx += "?";
            for (let i = 0; i < key.length; i++) {
                let tmp = o.data[key[i]];
                if (Array.isArray(tmp)) {
                    if (tmp.length > 0) {
                        for (let j = 0; j < tmp.length; j++) {
                            urlx += key[i] + "=" + (!tmp[j] ? '' : tmp[j]);
                            if (tmp.length > j + 1) urlx += "&";
                        }
                    } else { urlx += key[i] + "=" + (!o.data[key[i]] ? '' : o.data[key[i]]); }
                } else { urlx += key[i] + "=" + (!o.data[key[i]] ? '' : o.data[key[i]]); }
                if (key.length > i + 1) urlx += "&";
            }
        }
    }

    axios({
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            AccessToken: Vue.localStorage.get('AccessToken'),
            Token: Vue.localStorage.get('Token'),
            RecaptchaResponse: o.recaptcha
        },
        method: o.method.toUpperCase(),
        url: urlx,
        data: o.data ? o.data : {},
        withCredentials: true
    })
        .then(res => {
            if (o.callblack) {
                o.callblack(res.data);
            } else {
                o.callback(res.data);
            }
        })
        .catch((error) => {
            console.error(error);
            if (/^O0/.test(GetObjVal(error, 'response.data.code'))) {
                Vue.localStorage.remove("Token");
                Vue.localStorage.remove("User");
                window.location.href = '/member/signin';
                //this.$router.push('/member/signin');
            } else {
                if (error.response) {
                    // client received an error response (5xx, 4xx)
                    AlertMessage('error', GetObjVal(error, 'response.data.message'));
                } else if (error.request) {
                    // client never received a response, or request never left
                    if (!error.status) {
                        AlertMessage('error', " Network Error");
                    } else {
                        console.error(error);
                        AlertMessage('error', error.request);
                    }

                } else {
                    // anything else
                    if (error) {
                        AlertMessage('error', error);
                    }

                }
            }
        });
}

export const API = {

    //--------------------Config Setting-----------------------//
    ConfigSetting: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/ConfigSetting/GetData' });
        Call(o);
    },

    //--------------------Oauth-----------------------//
    OauthAccess: (o) => {
        Object.assign(o, { method: 'get', path: 'v1/Oauth/Access' });
        Call(o);
    },
    OauthLogin: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/Oauth/Login' });
        Call(o);
    },
    OauthLogout: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/Oauth/Logout' });
        Call(o);
    },
    SuperAdmin: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/Oauth/SuperAdmin' });
        Call(o);
    },

    //--------------------Home Setting-----------------------//


    //--------------------Setup Setting-----------------------//
    Administrator: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/sAdministrator/Administrator' });
        Call(o);
    },

    Workprocess: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/sWorkprocess/Workprocess' });
        Call(o);
    },

    WorkprocessAdmin: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/sWorkprocessAdmin/WorkprocessAdmin' });
        Call(o);
    },

    zUser: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/zUser/zUser' });
        Call(o);
    },





    //--------------------User-----------------------//
    UserRegister: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/User/Register' });
        Call(o);
    },


    //---------------File----------------
    GetImage: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/FilesAPI/GetImage', url: urlDashboard });
        Call(o);
    },

    GetFile: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/FilesAPI/GetFile', url: urlDashboard });
        Call(o);
    },

    DownloadFile: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/FilesAPI/DownloadFile', url: urlDashboard });
        Call(o);
    },

    uploadFile: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/FilesAPI/upload', url: urlDashboard });
        Call(o);
    },

    uploadCamera: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/FilesAPI/Camera', url: urlDashboard });
        Call(o);
    },

    FileUpload: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/FilesAPI/FileUpload', url: urlDashboard });
        Call(o);
    },

    UploadIMG: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/FilesAPI/UploadIMG', url: urlDashboard });
        Call(o);
    },

    //--------------Line Notify------------------
    NotifyPushMessage: (o) => {
        Object.assign(o, { method: 'Post', path: 'v1/Notify/PushMessage', url: urlDashboard });
        Call(o);
    },

};