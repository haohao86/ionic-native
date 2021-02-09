/**
 * This is wrapper for the custom cordova plugin to send command to seal devices via tablet USB.
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';

/**
 * @name Usb Serial Android
 * @description
 * This plugin expose APIs to send command to devices via tablet USB.
 *
 */
@Plugin({
  pluginName: 'cordova-plugin-usb-serial-android',
  plugin: 'cordova-plugin-usb-serial-android', // npm package name, example: cordova-plugin-camera
  pluginRef: 'cordova.plugins.USBSerialAndroid', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/weijyewang/cordova-plugin-usbserial.git',
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable({
  providedIn: 'root'
})
export class UsbSerialAndroid extends IonicNativePlugin {
/**
 * Show a native toast for the given duration at the specified position.
 *
 * @param {string} message  The message to display.
 * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
 */
  @Cordova({
    observable: true,
  })
  helloWorld(message: string): Observable<any> {
    return;
  }

  @Cordova({
    observable: true,
  })
  sendMasterCommand(masterID: string, password: string, commandNum: number, commandList: string): Observable<any> {
    return;
  }

  @Cordova({
    observable: true,
  })
  laser(): Observable<any> {
    return;
  }

  @Cordova({
    observable: true,
  })
  laserSendCommand(): Observable<any> {
    return;
  }

  @Cordova({
    observable: true,
  })
  laserClose(): Observable<any> {
    return;
  }

  @Cordova({
    observable: true,
  })
  laserScan(): Observable<any> {
    return;
  }

  @Cordova({
    observable: true,
  })
  status(): Observable<any> {
    return;
  }
  
  @Cordova({
    observable: true,
  })
  dongleOpen(): Observable<any> {
    return;
  }

  @Cordova({
    observable: true,
  })
  dongleClose(): Observable<any> {
    return;
  }
}
