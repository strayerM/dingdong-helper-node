module.exports = async (session) => {
    let result = ((await axios({
        method: 'post',
        url: 'https://maicai.api.ddxq.mobi/cart/allCheck',
        data: {
            "ab_config": session.params["ab_config"],
            "api_version": session.params["api_version"],
            "app_client_id": session.params["app_client_id"],
            "app_type": session.params["app_type"],
            "buildVersion": session.params["buildVersion"],
            "channel": session.params["channel"],
            "city_number": session.params["city_number"],
            "countryCode": session.params["countryCode"],
            "device_id": session.params["device_id"],
            "device_model": session.params["device_model"],
            "device_name": session.params["device_name"],
            "device_token": session.params["device_token"],
            "idfa": session.params["idfa"],
            "ip": session.params["ip"],
            "is_check": 1,
            "is_filter": 0,
            "is_load": 1,
            "languageCode": session.params["languageCode"],
            "latitude": session.params["latitude"],
            "localeIdentifier": session.params["localeIdentifier"],
            "longitude": session.params["longitude"],
            "os_version": session.params["os_version"],
            "seqid": `1044641691`,
            "station_id": session.params["station_id"],
            "time": session.params["time"],
            "uid": session.params["uid"],
        },
        headers: {
            "accept": session.headers["accept"],
            "accept-encoding": session.headers["accept-encoding"],
            "accept-language": session.headers["accept-language"],
            "content-type": "application/x-www-form-urlencoded",
            "cookie": session.headers["cookie"],
            "ddmc-api-version": session.headers["ddmc-api-version"],
            "ddmc-app-client-id": session.headers["ddmc-app-client-id"],
            "ddmc-build-version": session.headers["ddmc-build-version"],
            "ddmc-channel": session.headers["ddmc-channel"],
            "ddmc-city-number": session.headers["ddmc-city-number"],
            "ddmc-country-code": session.headers["ddmc-country-code"],
            "ddmc-device-id": session.headers["ddmc-device-id"],
            "ddmc-device-model": session.headers["ddmc-device-model"],
            "ddmc-device-name": session.headers["ddmc-device-name"],
            "ddmc-device-token": session.headers["ddmc-device-token"],
            "ddmc-idfa": session.headers["ddmc-idfa"],
            "ddmc-ip": session.headers["ddmc-ip"],
            "ddmc-language-code": session.headers["ddmc-language-code"],
            "ddmc-latitude": session.headers["ddmc-latitude"],
            "ddmc-locale-identifier": session.headers["ddmc-locale-identifier"],
            "ddmc-longitude": session.headers["ddmc-longitude"],
            "ddmc-os-version": session.headers["ddmc-os-version"],
            "ddmc-station-id": session.headers["ddmc-station-id"],
            "ddmc-uid": session.headers["ddmc-uid"],
            "time": session.headers["time"],
            "user-agent": session.headers["user-agent"],
            "im_secret": session.user["im_secret"],
        },
        transformRequest: [function (data) {
            let ret = '';
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
            }
            return ret;
        }],
    })));

    if (result.data.success) {
        return result.data.data;
    } else {
        throw (result.data.msg || result.data.message);
    }
};