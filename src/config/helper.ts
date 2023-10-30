import axios from "axios";
import config from "./config";

export default axios.create({
    baseURL: config.apiUrl,
    params: { key: config.apiKey }
})
// }


export function getCropImage(url: string) {
    if (!url) return '';
    console.log(url, 'url string');
    const d = "media/";
    console.log(url.indexOf(d), ' url.indexOf(d)');
    const index = url.indexOf(d) + d.length;
    console.log(index, ' index');
    return url.slice(0, index) + "crop/600/400/" + url.slice(index)
}

// module.exports = {
//     AxiosFunctionRequest,
//     getCropImage
// }