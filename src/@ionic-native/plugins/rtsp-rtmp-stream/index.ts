import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

@Plugin({
  pluginName: 'RTSPPlayer',
  plugin: 'cordova-rtsp-rtmp-stream',
  pluginRef: 'RTSPPlayer',
  repo: 'https://github.com/disono/cordova-rtmp-rtsp-stream.git',
  platforms: ['Android']
})

@Injectable({
  providedIn: 'root'
})
export class RTSPPlayer extends IonicNativePlugin {

  @Cordova()
  play(url: string, options?: RTSPPlayerOptions): Promise<any> {
    return;
  }

  @Cordova()
  stop(): Promise<any> {
    return;
  }

  @Cordova()
  streamRTSP(uri: string, success?: Function, failed?: Function): Promise<any> {
    return;
  }

  @Cordova()
  streamRTMP(uri: string, success?: Function, failed?: Function): Promise<any> {
    return;
  }

  @Cordova()
  streamRTMPAuth(uri: string, username: string, password: string, success?: Function, failed?: Function): Promise<any> {
    return;
  }

  @Cordova()
  streamRTSPAuth(uri: string, username: string, password: string, success?: Function, failed?: Function): Promise<any> {
    return;
  }

}

export interface RTSPPlayerOptions {
    /**
     * Set the player aspect ratio.
     * @default "ASPECT_FILL"
     */
    aspectRatio?: 'ASPECT_FILL' | 'ASPECT_FIT' | 'ASPECT_STRETCH' | 'ASPECT_CROP';
    /**
     * Set the player background color.
     * @default "#000000"
     */
    backgroundColor?: string;
    /**
     * Set the player buffer time (in seconds).
     * @default 3
     */
    bufferTime?: number;
    /**
     * Set the player decode mode.
     * @default "SOFTWARE"
     */
    decodeMode?: 'SOFTWARE' | 'HARDWARE';
    useTCP?: boolean; // Uses TCP protocol for streaming if set to true, defaults to false
    timeout?: number; // Sets the timeout in seconds for the streaming request, defaults to 10 seconds
    enableLogs?: boolean; // Enables logs for debugging purposes, defaults to false
    codec?: 'h264' | 'h265' | 'mpeg4' | 'vp8' | 'vp9'; // Specifies the codec used for decoding the video stream
    transport?: 'udp' | 'tcp' | 'udp_multicast'; // Specifies the transport protocol used for streaming
    bufferSize?: number; // Sets the size of the buffer used for streaming, defaults to 524288 bytes (512 KB)
    live?: boolean; // If set to true, plays the video stream in live mode (no seeking allowed), defaults to false
    startWithSps?: boolean; // If set to true, starts streaming with SPS frame, defaults to false
    udpPortRange?: string; // Specifies the UDP port range used for streaming, e.g. "2000-3000"
    tcpBufferSize?: number; // Sets the size of the TCP buffer used for streaming, defaults to 128 KB
    dropLateFrames?: boolean; // If set to true, drops late frames, defaults to false

}
