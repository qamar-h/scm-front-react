export default class UrlParamsParser
{
    static parse(params: object): string
    {
        let urlParams = '';

        Object.keys(params).map((key: string) => {

            //@ts-ignore
            let data = params[key];
            if (typeof data == "object") {
                Object.keys(data).map((subKey: string) => {
                    data[subKey] != "" && (urlParams += "&" + key + "." + subKey + "=" + data[subKey]);
                });
            } else {
                data != "" && (urlParams += "&" + key + "=" + data);
            } 
        });

        return urlParams;
    }
}
