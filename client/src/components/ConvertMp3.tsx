import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { getApiData } from "../services/getApiData";
import {
    IConvertMp3Props as Props,
    IConvertMp3State as State,
} from "../types/types";

export default class ConvertMp3 extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            inputValue: "",
            downloadLink: "",
            videoId: "",
            loading: false,
        } as State;

        this.handleConvert = this.handleConvert.bind(this);
        this.getVideoId = this.getVideoId.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
        this.getDownloadLink = this.getDownloadLink.bind(this);
    }

    async handleConvert() {
        this.setState({ loading: true });
        await this.getVideoId();
        try {
            const response: any = await getApiData(
                "/convert-mp3",
                this.state.videoId
            );
            console.log(response);
            this.setState({ downloadLink: response, loading: false });
        } catch (error) {
            this.setState({ downloadLink: "" });
            console.log(error);
        }
    }

    handleDownload() {
        this.setState({
            downloadLink: "",
            inputValue: "",
        });
    }

    getVideoId() {
        const videoId = this.state.inputValue.split("v=")[1];
        const ampersandPosition = videoId.indexOf("&");
        if (ampersandPosition !== -1) {
            this.setState({
                videoId: videoId.substring(0, ampersandPosition),
            });
        } else {
            this.setState({ videoId: videoId });
        }
    }

    getDownloadLink(): string {
        if (this.state.downloadLink) {
            console.log(this.state.downloadLink);
            return this.state.downloadLink.toString();
        } else {
            return "";
        }
    }

    render() {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="basis-auto text-white font-bold rounded-lg border shadow-lg w-8/12 h-1/2">
                    <div className="p-8 h-full w-full text-center">
                        <h1 className="text-4xl">Video to mp3 converter</h1>
                        <div className="pb-10 pt-10 flex-row">
                            {this.state.loading ? (
                                <div className="m-auto">
                                    <ThreeDots
                                        height="80"
                                        width="80"
                                        radius="9"
                                        color="#4fa94d"
                                        ariaLabel="three-dots-loading"
                                        wrapperClass="flex justify-center"
                                        visible={true}
                                    />
                                </div>
                            ) : (
                                <>
                                    <input
                                        className="text-black h-10 rounded w-4/6 text-lg pl-2"
                                        type="text"
                                        value={this.state.inputValue}
                                        onChange={(e) =>
                                            this.setState({
                                                inputValue: e.target.value,
                                            })
                                        }
                                        placeholder="video link or id"
                                    />
                                    <button
                                        onClick={this.handleConvert}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 py-2 px-4 rounded m-4"
                                    >
                                        Convert
                                    </button>
                                </>
                            )}
                        </div>
                        {this.state.downloadLink &&
                        this.state.loading === false ? (
                            <a href={this.state.downloadLink}>
                                <button
                                    id="idDownloadBtn"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={this.handleDownload}
                                >
                                    Download
                                </button>
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}
