import axios from "axios";

export const getApiData = async (
    fetchUrl: string,
    videoId: string
): Promise<any> => {
    const response = await axios({
        method: "post",
        url: fetchUrl,
        headers: {
            "Content-type": "application/json",
        },
        data: {
            videoId: videoId,
        },
    });

    console.log("response", response);
    return response.data.link;
};
