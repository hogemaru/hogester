'use strict';

// アプリケーションをコントロールするモジュール
var app = require('app');
// ウィンドウを作成するモジュール
var BrowserWindow = require('browser-window');

// クラッシュレポート
require('crash-reporter').start();

// メインウィンドウはGCされないようにグローバル宣言
var mainWindow = null;

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});



// Electronの初期化完了後に実行
app.on('ready', function() {
var screen = require('screen');
var dispSize = screen.getPrimaryDisplay().size;
console.log(dispSize);

  // メイン画面の表示。ウィンドウの幅、高さを指定できる
//  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow = new BrowserWindow({width: dispSize.width, height: dispSize.height});
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

//	mainWindow.document.getElementById("hello").innerText="geb";


  // ウィンドウが閉じられたらアプリも終了
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
